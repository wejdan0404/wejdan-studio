/* Wejdan Studio — static design site. Gallery + content form + click-to-edit editor + PNG/PDF export.
   Runs on plain static hosting (GitHub Pages). Engine: assets/engine.js (window.WJ). */
(function () {
  'use strict';
  const E = window.WJ;
  const $ = (id) => document.getElementById(id);
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const CATS = Object.keys(E.CATS);
  const SIZES = E.SIZES;
  const NAME = (d) => d.n[1];
  const CATN = (c) => E.CATS[c].n[1];
  const LANGS = ['ar', 'en'];

  /* ---------------- storage (never throws) ---------------- */
  const KEY = 'wjs-state-v1';
  const DKEY = (id, lang) => 'wjs-d:' + id + ':' + lang;
  const IMGP = 'wjs-img:';
  const LS = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } },
    keys() { try { const out = []; for (let i = 0; i < localStorage.length; i++) out.push(localStorage.key(i)); return out; } catch (e) { return []; } },
    json(k) { try { return JSON.parse(LS.get(k) || 'null'); } catch (e) { return null; } },
  };
  const isImgVal = (v) => typeof v === 'string' && v.startsWith('data:image/');
  /* images live under their own keys so a full quota never costs the text edits */
  function pack(obj, prefix) {
    const used = new Set(); let lost = false;
    const walk = (v, path) => {
      if (isImgVal(v)) {
        const k = IMGP + prefix + ':' + path;
        if (LS.get(k) !== v && !LS.set(k, v)) { lost = true; return ''; }
        used.add(k); return { $img: k };
      }
      if (Array.isArray(v)) return v.map((x, i) => walk(x, path + '.' + i));
      if (v && typeof v === 'object') { const o = {}; Object.keys(v).forEach((key) => { o[key] = walk(v[key], path ? path + '.' + key : key); }); return o; }
      return v;
    };
    const out = walk(obj, '');
    LS.keys().forEach((k) => { if (k && k.startsWith(IMGP + prefix + ':') && !used.has(k)) LS.del(k); });
    return { out, lost };
  }
  function unpack(v) {
    if (v && typeof v === 'object' && !Array.isArray(v) && typeof v.$img === 'string') return LS.get(v.$img) || '';
    if (Array.isArray(v)) return v.map(unpack);
    if (v && typeof v === 'object') { const o = {}; Object.keys(v).forEach((k) => { o[k] = unpack(v[k]); }); return o; }
    return v;
  }
  function dropImages(prefix) { LS.keys().forEach((k) => { if (k && k.startsWith(IMGP + prefix + ':')) LS.del(k); }); }
  let quotaWarned = 0;
  function quotaWarn() { if (Date.now() - quotaWarned > 8000) { quotaWarned = Date.now(); toast('مساحة الحفظ في المتصفح ممتلئة: حُفظت النصوص، لكن الصورة لن تبقى بعد إغلاق الصفحة. جرّبي صورة أصغر.', 7000); } }

  /* ---------------- state ---------------- */
  const saved = LS.json(KEY) || {};
  const S = {
    cat: saved.cat === 'all' || CATS.includes(saved.cat) ? saved.cat : 'all',
    fmt: ['li', 'x', 'both'].includes(saved.fmt) ? saved.fmt : 'li',
    lang: saved.lang === 'en' ? 'en' : 'ar',
    mode: ['auto', 'light', 'dark'].includes(saved.mode) ? saved.mode : 'auto',
    style: ['all', 'plain', 'expr'].includes(saved.style) ? saved.style : 'all',
    content: {}, edited: {},
    sig: saved.sig && saved.sig.ar && saved.sig.en ? saved.sig : { ar: clone(E.SIG.ar), en: clone(E.SIG.en) },
    font: typeof saved.font === 'string' ? saved.font : '',
  };
  CATS.forEach((c) => {
    S.content[c] = {};
    LANGS.forEach((l) => {
      const k = c + '/' + l;
      const sv = saved.content && saved.content[k];
      S.content[c][l] = sv ? unpack(sv) : clone((E.SAMPLES[c] || {})[l] || {});
      S.edited[k] = !!(saved.edited && saved.edited[k]);
    });
  });
  function save() {
    const content = {}; let lost = false;
    CATS.forEach((c) => LANGS.forEach((l) => {
      const k = c + '/' + l;
      if (S.edited[k]) { const p = pack(S.content[c][l], 'cat:' + c + ':' + l); content[k] = p.out; lost = lost || p.lost; }
      else dropImages('cat:' + c + ':' + l);
    }));
    const ok = LS.set(KEY, JSON.stringify({ cat: S.cat, fmt: S.fmt, lang: S.lang, mode: S.mode, style: S.style, content, edited: S.edited, sig: S.sig, font: S.font }));
    if (lost || !ok) quotaWarn();
  }
  /* per-design overrides, made by editing a design directly */
  const OV = {};
  function getOv(id, lang) {
    const k = id + ':' + lang;
    if (!(k in OV)) { const v = LS.json(DKEY(id, lang)); OV[k] = v && v.content ? { content: unpack(v.content), sig: v.sig || null } : null; }
    return OV[k];
  }
  function setOv(id, lang, doc) {
    OV[id + ':' + lang] = doc;
    const p = pack(doc.content, 'd:' + id + ':' + lang);
    const ok = LS.set(DKEY(id, lang), JSON.stringify({ content: p.out, sig: doc.sig }));
    if (p.lost || !ok) quotaWarn();
    return ok;
  }
  function delOv(id, lang) { OV[id + ':' + lang] = null; LS.del(DKEY(id, lang)); dropImages('d:' + id + ':' + lang); }
  function docFor(d, lang) {
    const ov = getOv(d.id, lang);
    if (ov) return { content: ov.content, sig: ov.sig || S.sig[lang] || E.SIG[lang], edited: true };
    return { content: S.content[d.cat][lang], sig: S.sig[lang] || E.SIG[lang], edited: false };
  }

  /* ---------------- small UI helpers ---------------- */
  let tt;
  function toast(msg, ms) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(tt); tt = setTimeout(() => { t.hidden = true; }, ms || 3800); }
  function seg(el, opts, get, set) {
    el.textContent = '';
    opts.forEach(([v, label]) => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = label; b.setAttribute('aria-pressed', String(get() === v));
      b.addEventListener('click', () => { set(v); [...el.children].forEach((x, i) => x.setAttribute('aria-pressed', String(opts[i][0] === get()))); });
      el.appendChild(b);
    });
  }
  const syncSeg = (el, opts, v) => [...el.children].forEach((x, i) => x.setAttribute('aria-pressed', String(opts[i][0] === v)));
  function tag(text, cls) { const s = document.createElement('span'); s.className = 'tag' + (cls ? ' ' + cls : ''); s.textContent = text; return s; }
  function frameEl(html) { const t = document.createElement('div'); t.innerHTML = html; return t.firstElementChild; }
  /* a frame shown scaled inside a stage: pinned to the top-left corner (frames are position:relative and RTL would push them off) */
  function stageFrame(html) { const fr = frameEl(html); Object.assign(fr.style, { position: 'absolute', top: '0', left: '0', transformOrigin: '0 0' }); return fr; }
  const kindOf = (path) => (/(^|\.)image$/.test(path) ? 'image' : /(^|\.)qr$/.test(path) ? 'qr' : 'text');
  const lastKey = (path) => path.split('.').filter((x) => !/^\d+$/.test(x)).pop();
  const MULTI = new Set(['title', 'body', 'text', 'closing', 'statLabel', 'quote']);
  const multiLine = (path) => MULTI.has(lastKey(path));

  /* brand mark + theme */
  $('brandMark').innerHTML = E.mark(34, 'currentColor', {});
  const isDark = () => { const t = document.documentElement.getAttribute('data-theme'); return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; };
  function themeBtn() { $('btnTheme').textContent = isDark() ? '☀︎ فاتح' : '☾ داكن'; }
  $('btnTheme').addEventListener('click', () => { const n = isDark() ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', n); LS.set('wjs-theme', n); themeBtn(); });
  themeBtn();

  /* ---------------- fonts ---------------- */
  E.setHeadingFont(S.font);
  const FACE_LOADS = ['300', '400', '500', '600', '700'].flatMap((w) => [w + " 32px 'IBM Plex Sans'", w + " 32px 'IBM Plex Sans Arabic'"])
    .concat(["900 64px 'Source Serif 4'", "700 64px 'Source Serif 4'", "300 64px 'Source Serif 4'", "400 64px 'Source Serif 4'", "700 64px 'Noto Naskh Arabic'", "400 64px 'Noto Naskh Arabic'"]);
  let facesReady = null;
  const loadFaces = () => (facesReady = facesReady || Promise.race([
    Promise.all(FACE_LOADS.map((f) => document.fonts.load(f, 'Wejdan وجدان 0123').catch(() => null))).then(() => document.fonts.ready),
    new Promise((r) => setTimeout(r, 6000)),
  ]).catch(() => null));
  function fontInstalled(name) {
    try {
      const cv = document.createElement('canvas').getContext('2d');
      const t = 'Wejdan وجدان 0123 الدليل';
      return ['monospace', 'serif', 'sans-serif'].some((base) => {
        cv.font = '900 72px ' + base; const a = cv.measureText(t).width;
        cv.font = "900 72px '" + name.replace(/['"\\]/g, '') + "'," + base; const b = cv.measureText(t).width;
        return Math.abs(a - b) > 0.5;
      });
    } catch (e) { return false; }
  }
  function detectFont() {
    const names = [S.font, 'Thmanyah Serif Display', 'Thmanyah Serif Text', 'Thmanyah'].filter(Boolean);
    const ok = names.some(fontInstalled);
    $('fontNote').hidden = ok; $('fontOk').hidden = !ok;
    if (!ok) $('sigDetails').open = true;
    return ok;
  }

  /* ---------------- gallery ---------------- */
  const fmts = () => (S.fmt === 'both' ? ['li', 'x'] : [S.fmt]);
  const scaleOf = (stage) => stage.clientWidth / +stage.dataset.w;
  function scaleStage(stage) {
    const fr = stage.querySelector('.wj-frame'); if (!fr) return;
    const s = scaleOf(stage);
    if (!s) return;
    fr.style.transform = 'scale(' + s + ')';
    fr.style.setProperty('--inv', String(1 / s));
  }
  const ro = new ResizeObserver((ents) => ents.forEach((e) => scaleStage(e.target)));
  const ROLE_AR = { body: 'النص', text: 'النص', source: 'المصدر', overline: 'السطر العلوي', cta: 'الدعوة', sig: 'التوقيع' };
  function fitTags(results) {
    const out = [];
    if (results.some((r) => !r.ok)) out.push('النص أطول من المساحة');
    const dropped = [...new Set(results.flatMap((r) => r.dropped || []))];
    if (dropped.length) out.push('أُخفي: ' + dropped.map((d) => ROLE_AR[d] || d).join('، '));
    return out;
  }
  function filtered() {
    return E.DESIGNS.filter((d) => (S.cat === 'all' || d.cat === S.cat) && (S.style === 'all' || d.kind === S.style));
  }
  const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); paintCard(e.target); } }), { rootMargin: '700px 0px' });
  let galleryToken = 0;
  async function renderGallery() {
    const token = ++galleryToken;
    await loadFaces();
    if (token !== galleryToken) return;
    const grid = $('grid'); grid.textContent = '';
    const list = filtered();
    $('count').textContent = list.length + ' تصميم · ' + (S.cat === 'all' ? 'كل الفئات' : CATN(S.cat)) + ' · ' + (S.fmt === 'both' ? 'LinkedIn و X' : S.fmt === 'x' ? 'X' : 'LinkedIn') + ' · ' + (S.lang === 'ar' ? 'عربي' : 'English');
    if (!list.length) { const p = document.createElement('p'); p.className = 'empty'; p.textContent = 'لا توجد تصاميم بهذا النمط.'; grid.appendChild(p); return; }
    const frag = document.createDocumentFragment();
    const eager = [];
    list.forEach((d) => {
      const card = document.createElement('article'); card.className = 'card'; card.dataset.id = d.id;
      const thumbs = document.createElement('div'); thumbs.className = 'thumbs' + (fmts().length > 1 ? ' multi' : '');
      fmts().forEach((fmt) => {
        const sz = SIZES[fmt];
        const st = document.createElement('button'); st.type = 'button'; st.className = 'stage';
        st.dataset.w = sz.w; st.dataset.fmt = fmt; st.style.aspectRatio = sz.w + ' / ' + sz.h;
        st.setAttribute('aria-label', 'تعديل ' + NAME(d) + ' · ' + (fmt === 'x' ? 'X' : 'LinkedIn'));
        st.addEventListener('click', () => openEditor(d.id, fmt));
        thumbs.appendChild(st);
      });
      card.appendChild(thumbs);
      const meta = document.createElement('div'); meta.className = 'meta';
      const nm = document.createElement('span'); nm.className = 'name'; nm.textContent = NAME(d);
      meta.append(nm);
      if (S.cat === 'all') meta.appendChild(tag(CATN(d.cat)));
      meta.appendChild(tag(d.kind === 'plain' ? 'سادة' : 'معبّر'));
      if (d.figma) meta.appendChild(tag('من فيقما', 'figma'));
      card.appendChild(meta);
      const actions = document.createElement('div'); actions.className = 'actions';
      const ed = document.createElement('button'); ed.type = 'button'; ed.className = 'btn'; ed.textContent = 'تعديل النص';
      ed.addEventListener('click', () => openEditor(d.id, fmts()[0]));
      const dl = document.createElement('button'); dl.type = 'button'; dl.className = 'btn primary';
      dl.textContent = d.cat === 'carousel' ? 'تحميل PDF' : 'تحميل PNG';
      dl.addEventListener('click', () => (d.cat === 'carousel' ? exportPdf(d, fmts(), S.lang, S.mode, dl) : exportPngs(d, fmts(), S.lang, S.mode, dl)));
      actions.append(ed, dl);
      card.appendChild(actions);
      frag.appendChild(card);
      eager.push(card);
    });
    grid.appendChild(frag);
    // the first cards paint at once (they may sit below a long settings column on phones); the rest when scrolled near
    eager.forEach((c, i) => { if (i < 4) paintCard(c); else io.observe(c); });
  }
  function paintCard(card) {
    const d = E.BY_ID[card.dataset.id]; if (!d) return;
    const doc = docFor(d, S.lang);
    const meta = card.querySelector('.meta');
    meta.querySelectorAll('.tag.warn,.tag.edited,.tag.count').forEach((t) => t.remove());
    const results = [];
    let n = 1;
    card.querySelectorAll('.stage').forEach((st) => {
      st.textContent = '';
      const frames = E.render(d.id, { fmt: st.dataset.fmt, lang: S.lang, mode: S.mode, content: doc.content, sig: doc.sig });
      n = frames.length;
      const fr = stageFrame(frames[0]);
      st.appendChild(fr);
      results.push(E.fit(fr));
      scaleStage(st); ro.observe(st);
    });
    if (n > 1) meta.appendChild(tag(n + ' شرائح', 'count'));
    if (doc.edited) meta.appendChild(tag('معدّل', 'edited'));
    fitTags(results).forEach((t) => meta.appendChild(tag(t, 'warn')));
    card.dataset.painted = '1';
  }
  let galTimer;
  const galleryLater = (ms) => { clearTimeout(galTimer); galTimer = setTimeout(renderGallery, ms == null ? 350 : ms); };

  /* ---------------- controls ---------------- */
  const OPT_FMT = [['li', 'LinkedIn'], ['x', 'X'], ['both', 'الاثنين']];
  const OPT_LANG = [['ar', 'عربي'], ['en', 'English']];
  const OPT_MODE = [['auto', 'كما صُمّم'], ['light', 'فاتح'], ['dark', 'داكن']];
  const OPT_STYLE = [['all', 'الكل'], ['plain', 'سادة'], ['expr', 'معبّر']];
  seg($('segFmt'), OPT_FMT, () => S.fmt, (v) => { S.fmt = v; save(); renderGallery(); });
  seg($('segLang'), OPT_LANG, () => S.lang, (v) => { S.lang = v; save(); bindSig(); buildForm(); renderGallery(); });
  seg($('segMode'), OPT_MODE, () => S.mode, (v) => { S.mode = v; save(); renderGallery(); });
  seg($('segStyle'), OPT_STYLE, () => S.style, (v) => { S.style = v; save(); renderGallery(); });
  const catOpts = [['all', 'الكل']].concat(CATS.map((c) => [c, CATN(c)]));
  seg($('chipsCat'), catOpts, () => S.cat, (v) => { S.cat = v; save(); buildForm(); renderGallery(); });
  [...$('chipsCat').children].forEach((b, i) => {
    const c = catOpts[i][0];
    const n = c === 'all' ? E.DESIGNS.length : E.DESIGNS.filter((d) => d.cat === c).length;
    const s = document.createElement('span'); s.className = 'n'; s.textContent = n; b.appendChild(s);
  });
  $('heroStats').innerHTML = '';
  [[E.DESIGNS.length, 'تصميم'], [CATS.length, 'فئات'], [2, 'منصتان'], [2, 'لغتان']].forEach(([n, l]) => {
    const d = document.createElement('div'); d.className = 'stat';
    const b = document.createElement('b'); b.textContent = n; const s = document.createElement('span'); s.textContent = l;
    d.append(b, s); $('heroStats').appendChild(d);
  });

  /* ---------------- content form ---------------- */
  const LABELS = {
    overline: 'السطر الصغير فوق العنوان', title: 'العنوان', body: 'النص', author: 'القائل', role: 'صفة القائل', source: 'المصدر',
    sample: 'أرقام توضيحية (تظهر شارة «عيّنة»)', project: 'اسم المشروع على البطاقة', stat: 'الرقم', statLabel: 'وصف الرقم',
    rows: 'الصفوف', badge: 'الشارة', cta: 'دعوة لإجراء', date: 'التاريخ', items: 'العناصر', beforeLabel: 'تسمية «قبل»',
    afterLabel: 'تسمية «بعد»', slides: 'الشرائح', closing: 'عبارة الختام', posts: 'التغريدات', image: 'الصورة', qr: 'رابط رمز QR',
    label: 'التسمية', text: 'النص', before: 'قبل', after: 'بعد',
  };
  const LONG = new Set(['title', 'body', 'text', 'closing']);
  const cur = () => S.content[S.cat][S.lang];
  function changed() {
    S.edited[S.cat + '/' + S.lang] = true;
    $('sampleNote').hidden = true;
    save(); galleryLater();
  }
  function readImage(file) {
    return new Promise((res, rej) => {
      if (!file || !/^image\//.test(file.type)) { rej(new Error('type')); return; }
      const fr = new FileReader();
      fr.onerror = () => rej(fr.error);
      fr.onload = () => {
        const img = new Image();
        img.onerror = () => rej(new Error('decode'));
        img.onload = () => {
          const k = Math.min(1, 2000 / Math.max(img.naturalWidth, img.naturalHeight));
          const w = Math.max(1, Math.round(img.naturalWidth * k)), h = Math.max(1, Math.round(img.naturalHeight * k));
          const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
          const g = cv.getContext('2d'); g.fillStyle = '#FFFFFF'; g.fillRect(0, 0, w, h); g.drawImage(img, 0, 0, w, h);
          res(cv.toDataURL('image/jpeg', 0.86));
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }
  let pickCb = null;
  $('filePick').addEventListener('change', async () => {
    const f = $('filePick').files && $('filePick').files[0];
    $('filePick').value = '';
    const cb = pickCb; pickCb = null;
    if (!f || !cb) return;
    try { cb(await readImage(f)); } catch (e) { toast('تعذّر قراءة الصورة. جرّبي ملف JPG أو PNG.'); }
  });
  function pickImage(cb) { pickCb = cb; $('filePick').click(); }
  function imageInput(get, set, label) {
    const w = document.createElement('div'); w.className = 'imgpick';
    const draw = () => {
      w.textContent = '';
      const v = get();
      if (v) { const im = document.createElement('img'); im.src = v; im.alt = ''; w.appendChild(im); } else { const ph = document.createElement('div'); ph.className = 'ph'; ph.textContent = 'لا صورة'; w.appendChild(ph); }
      const b = document.createElement('button'); b.type = 'button'; b.className = 'btn'; b.textContent = v ? 'تغيير الصورة' : 'اختيار صورة';
      b.setAttribute('aria-label', (v ? 'تغيير ' : 'اختيار ') + label);
      b.addEventListener('click', () => pickImage((url) => { set(url); draw(); }));
      w.appendChild(b);
      if (v) { const r = document.createElement('button'); r.type = 'button'; r.className = 'btn ghost'; r.textContent = 'إزالة'; r.addEventListener('click', () => { set(''); draw(); }); w.appendChild(r); }
    };
    draw();
    return w;
  }
  function textInput(val, ph, long, on, opts) {
    const inp = document.createElement(long ? 'textarea' : 'input');
    if (!long) inp.type = (opts && opts.type) || 'text';
    if (long) inp.rows = 2;
    inp.value = val || ''; if (ph) { inp.placeholder = ph; inp.setAttribute('aria-label', ph); }
    if (opts && opts.dir) inp.dir = opts.dir;
    inp.addEventListener('input', () => on(inp.value));
    return inp;
  }
  /* shape of an array field, read from the sample content */
  function arraySchema(field) {
    const smp = (E.SAMPLES[S.cat] || {})[S.lang] || {};
    const first = (smp[field] || [])[0];
    if (first == null || typeof first !== 'object') {
      const known = { rows: ['label', 'before', 'after'], slides: ['title', 'body'], posts: ['title', 'body', 'image'] }[field];
      return known || null;
    }
    return Object.keys(first);
  }
  function rep(field) {
    const schema = arraySchema(field);
    const wrap = document.createElement('div'); wrap.className = 'rep';
    const c = cur();
    if (!Array.isArray(c[field])) c[field] = [];
    const draw = () => {
      wrap.textContent = '';
      c[field].forEach((item, i) => {
        const box = document.createElement('div'); box.className = 'rep-item';
        const cells = document.createElement('div'); cells.className = 'cells';
        const short = schema ? schema.filter((k) => !LONG.has(k) && kindOf(k) === 'text') : [];
        cells.style.setProperty('--n', schema ? Math.max(1, Math.min(short.length, 3)) : 1);
        if (schema) {
          if (!item || typeof item !== 'object') { item = {}; c[field][i] = item; }
          schema.forEach((k) => {
            const ph = (LABELS[k] || k) + ' ' + (i + 1);
            let el;
            if (kindOf(k) === 'image') el = imageInput(() => item[k], (v) => { item[k] = v; changed(); }, ph);
            else if (kindOf(k) === 'qr') el = textInput(item[k], ph, false, (v) => { item[k] = v; changed(); }, { type: 'url', dir: 'ltr' });
            else el = textInput(item[k], ph, LONG.has(k), (v) => { item[k] = v; changed(); });
            if (LONG.has(k) || kindOf(k) !== 'text') el.classList.add('wide');
            cells.appendChild(el);
          });
        } else {
          cells.appendChild(textInput(item, (LABELS[field] === 'العناصر' ? 'عنصر ' : '') + (i + 1), false, (v) => { c[field][i] = v; changed(); }));
        }
        const del = document.createElement('button'); del.type = 'button'; del.className = 'icon-btn'; del.textContent = '×';
        del.setAttribute('aria-label', 'حذف ' + (i + 1));
        del.addEventListener('click', () => { c[field].splice(i, 1); draw(); changed(); });
        box.append(cells, del); wrap.appendChild(box);
      });
      const add = document.createElement('button'); add.type = 'button'; add.className = 'btn'; add.textContent = '+ إضافة';
      add.addEventListener('click', () => { c[field].push(schema ? Object.fromEntries(schema.map((k) => [k, ''])) : ''); draw(); changed(); });
      wrap.appendChild(add);
    };
    draw();
    return wrap;
  }
  function buildForm() {
    const f = $('form'); f.textContent = '';
    if (S.cat === 'all') {
      $('sampleNote').hidden = false;
      $('sampleNote').textContent = 'اختاري فئة لكتابة محتواها، أو افتحي أي تصميم وعدّلي نصه مباشرة بالضغط عليه.';
      $('btnReset').hidden = true; $('l-content').textContent = 'المحتوى';
      return;
    }
    $('btnReset').hidden = false; $('l-content').textContent = 'محتوى «' + CATN(S.cat) + '»';
    $('sampleNote').textContent = 'هذا محتوى عيّنة. اكتبي محتواك هنا ليظهر على كل تصاميم الفئة، أو افتحي تصميمًا وعدّلي نصه مباشرة.';
    $('sampleNote').hidden = S.edited[S.cat + '/' + S.lang];
    const c = cur();
    (E.FIELDS[S.cat] || []).forEach((key) => {
      const field = document.createElement('div'); field.className = 'field';
      const id = 'f-' + key;
      if (key === 'sample') {
        const l = document.createElement('label'); l.className = 'check';
        const cb = document.createElement('input'); cb.type = 'checkbox'; cb.id = id; cb.checked = !!c.sample;
        cb.addEventListener('change', () => { c.sample = cb.checked; changed(); });
        l.append(cb, document.createTextNode(LABELS.sample)); field.appendChild(l); f.appendChild(field); return;
      }
      const lab = document.createElement('label'); lab.htmlFor = id; lab.textContent = LABELS[key] || key;
      field.appendChild(lab);
      const smp = ((E.SAMPLES[S.cat] || {})[S.lang] || {})[key];
      if (Array.isArray(smp) || ['rows', 'slides', 'items', 'posts'].includes(key)) { lab.removeAttribute('for'); lab.className = 'flabel'; field.appendChild(rep(key)); }
      else if (kindOf(key) === 'image') { lab.removeAttribute('for'); field.appendChild(imageInput(() => c[key], (v) => { c[key] = v; changed(); }, LABELS.image)); }
      else {
        const inp = textInput(c[key], '', LONG.has(key), (v) => { c[key] = v; changed(); }, kindOf(key) === 'qr' ? { type: 'url', dir: 'ltr' } : (key === 'stat' || key === 'date' ? { dir: 'auto' } : null));
        inp.id = id; if (kindOf(key) === 'qr') inp.placeholder = 'https://';
        field.appendChild(inp);
      }
      f.appendChild(field);
    });
  }
  $('btnReset').addEventListener('click', () => {
    if (S.cat === 'all') return;
    S.content[S.cat][S.lang] = clone(E.SAMPLES[S.cat][S.lang]);
    S.edited[S.cat + '/' + S.lang] = false; save(); buildForm(); renderGallery();
  });

  /* signature + heading font */
  function bindSig() { const s = S.sig[S.lang] || {}; $('sigName').value = s.name || ''; $('sigHandle').value = s.handle || ''; $('sigRole').value = s.role || ''; }
  ['sigName', 'sigHandle', 'sigRole'].forEach((id) => $(id).addEventListener('input', () => {
    const k = { sigName: 'name', sigHandle: 'handle', sigRole: 'role' }[id];
    S.sig[S.lang] = Object.assign({}, S.sig[S.lang], { [k]: $(id).value });
    save(); galleryLater();
  }));
  $('fontName').value = S.font;
  $('fontName').addEventListener('input', () => { S.font = $('fontName').value; E.setHeadingFont(S.font); save(); detectFont(); galleryLater(450); });

  /* ---------------- editor ---------------- */
  const ED = { d: null, fmt: 'li', lang: 'ar', mode: 'auto', k: 0, n: 1, doc: null, fr: null, ovMade: false };
  const OPT_EFMT = [['li', 'LinkedIn'], ['x', 'X']];
  seg($('edFmt'), OPT_EFMT, () => ED.fmt, (v) => { ED.fmt = v; ED.k = 0; edRender(); syncHash(); });
  seg($('edLang'), OPT_LANG, () => ED.lang, (v) => { ED.lang = v; ED.k = 0; ED.doc = edDoc(); edRender(); });
  seg($('edMode'), OPT_MODE, () => ED.mode, (v) => { ED.mode = v; edRender(); });
  function edDoc() {
    const base = docFor(ED.d, ED.lang);
    return { content: clone(base.content), sig: clone(base.sig), edited: base.edited };
  }
  function syncHash() { const h = '#/d/' + ED.d.id + '/' + ED.fmt; if (location.hash !== h) history.replaceState(null, '', h); }
  let scrollY0 = 0;
  function openEditor(id, fmt) {
    scrollY0 = window.scrollY;
    location.hash = '#/d/' + id + '/' + (fmt === 'x' ? 'x' : 'li');
  }
  function showEditor(id, fmt) {
    const d = E.BY_ID[id]; if (!d) { location.hash = ''; return; }
    const same = ED.d && ED.d.id === id;
    ED.d = d; ED.fmt = fmt === 'x' ? 'x' : 'li';
    if (!same) { ED.lang = S.lang; ED.mode = S.mode; ED.k = 0; ED.doc = edDoc(); }
    syncSeg($('edFmt'), OPT_EFMT, ED.fmt); syncSeg($('edLang'), OPT_LANG, ED.lang); syncSeg($('edMode'), OPT_MODE, ED.mode);
    $('edTitle').textContent = NAME(d) + ' · ' + CATN(d.cat);
    const tags = $('edTags'); tags.textContent = '';
    tags.append(tag(d.kind === 'plain' ? 'سادة' : 'معبّر')); if (d.figma) tags.append(tag('من فيقما', 'figma'));
    $('edPdf').hidden = d.cat !== 'carousel';
    $('viewGallery').hidden = true; $('viewEditor').hidden = false;
    document.title = NAME(d) + ' · استوديو وجدان';
    window.scrollTo(0, 0);
    loadFaces().then(edRender);
  }
  function edStageSize() {
    const sz = SIZES[ED.fmt]; const st = $('edStage');
    st.dataset.w = sz.w; st.style.aspectRatio = sz.w + ' / ' + sz.h;
    st.style.maxWidth = 'max(280px, calc((100vh - 230px) * ' + (sz.w / sz.h).toFixed(4) + '))';
  }
  function edRender() {
    if (!ED.d) return;
    hidePop();
    const frames = E.render(ED.d.id, { fmt: ED.fmt, lang: ED.lang, mode: ED.mode, content: ED.doc.content, sig: ED.doc.sig });
    ED.n = frames.length; ED.k = Math.max(0, Math.min(ED.k, ED.n - 1));
    edStageSize();
    const st = $('edStage'); st.textContent = '';
    const fr = stageFrame(frames[ED.k]); ED.fr = fr;
    st.appendChild(fr);
    prepEditable(fr);
    scaleStage(st); ro.observe(st);
    edWarn(E.fit(fr));
    edPager();
    $('edSaved').textContent = ED.doc.edited ? 'تعديلاتك محفوظة في هذا المتصفح.' : 'النص الحالي من محتوى الفئة. أي تعديل هنا يخص هذا التصميم فقط.';
    $('edReset').disabled = !ED.doc.edited;
    $('edPng').textContent = ED.n > 1 ? 'تحميل هذه الشريحة PNG' : 'تحميل PNG';
  }
  function edPager() {
    const p = $('edPager'); p.hidden = ED.n < 2;
    const dots = $('edDots'); dots.textContent = '';
    for (let i = 0; i < ED.n; i++) {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = String(i + 1);
      b.setAttribute('aria-label', 'الشريحة ' + (i + 1)); if (i === ED.k) b.setAttribute('aria-current', 'true');
      b.addEventListener('click', () => { ED.k = i; edRender(); });
      dots.appendChild(b);
    }
    $('edPrev').disabled = ED.k === 0; $('edNext').disabled = ED.k >= ED.n - 1;
  }
  $('edPrev').addEventListener('click', () => { if (ED.k > 0) { ED.k--; edRender(); } });
  $('edNext').addEventListener('click', () => { if (ED.k < ED.n - 1) { ED.k++; edRender(); } });
  function edWarn(res) {
    const w = $('edWarn'); const msgs = [];
    if (res && !res.ok) msgs.push('النص أطول من المساحة المتاحة في هذا التصميم — اختصريه قليلًا.');
    if (res && res.dropped && res.dropped.length) msgs.push('لضيق المساحة أُخفي: ' + [...new Set(res.dropped)].map((d) => ROLE_AR[d] || d).join('، ') + '.');
    else if (res && (res.shrink > 0.66 || shrinkRatio() < 0.6)) msgs.push('صغُر الخط كثيرًا ليتسع النص — النص القصير يبدو أجمل في هذا التصميم.');
    w.hidden = !msgs.length; w.textContent = msgs.join(' ');
  }
  /* smallest (current size / designed size) among the visible fitted texts */
  function shrinkRatio() {
    if (!ED.fr) return 1;
    const lang = ED.fr.getAttribute('data-lang') || 'en'; let r = 1;
    ED.fr.querySelectorAll('[data-fit]').forEach((el) => {
      if (el.style.display === 'none') return;
      const L = E.LAD[el.getAttribute('data-fit')][lang]; const a = L[Math.min(+el.getAttribute('data-i0'), L.length - 1)][0];
      r = Math.min(r, (parseFloat(el.style.fontSize) || a) / a);
    });
    return r;
  }
  const PLAIN_OK = (() => { try { const d = document.createElement('div'); d.contentEditable = 'plaintext-only'; return d.contentEditable === 'plaintext-only'; } catch (e) { return false; } })();
  function prepEditable(fr) {
    fr.querySelectorAll('[data-field]').forEach((el) => {
      const path = el.getAttribute('data-field');
      const kind = kindOf(path);
      el.setAttribute('data-kind', kind);
      const label = LABELS[lastKey(path)] || lastKey(path);
      if (kind !== 'text') {
        el.setAttribute('role', 'button'); el.tabIndex = 0;
        el.setAttribute('aria-label', kind === 'image' ? 'تغيير الصورة' : 'تغيير رابط QR');
        return;
      }
      if (el.querySelector('[data-field]') || [...el.children].some((c) => c.nodeName !== 'BR')) return; // composite: not editable as text
      el.contentEditable = PLAIN_OK ? 'plaintext-only' : 'true';
      el.spellcheck = false;
      el.setAttribute('role', 'textbox');
      el.setAttribute('aria-label', label);
      if (multiLine(path)) el.setAttribute('aria-multiline', 'true');
      el.setAttribute('data-ph', label);
    });
  }
  function readText(el, multi) {
    let s = '';
    const walk = (n) => {
      n.childNodes.forEach((c) => {
        if (c.nodeType === 3) s += c.nodeValue;
        else if (c.nodeName === 'BR') s += '\n';
        else if (c.nodeType === 1) { if (/^(DIV|P)$/.test(c.nodeName) && s && !s.endsWith('\n')) s += '\n'; walk(c); }
      });
    };
    walk(el);
    s = s.replace(/\u00a0/g, ' ');
    if (s.endsWith('\n') && el.lastChild && el.lastChild.nodeName === 'BR') s = s.slice(0, -1);
    return multi ? s : s.replace(/\s*\n\s*/g, ' ');
  }
  /* content path → [object, key] in the editor doc (sig.* lives beside the content) */
  function slot(doc, path, create) {
    const ks = path.split('.');
    let o = ks[0] === 'sig' ? doc.sig : doc.content;
    if (ks[0] === 'sig') ks.shift();
    for (let i = 0; i < ks.length - 1; i++) {
      const k = ks[i];
      if (o[k] == null) { if (!create) return [null, null]; o[k] = /^\d+$/.test(ks[i + 1]) ? [] : {}; }
      o = o[k];
    }
    return [o, ks[ks.length - 1]];
  }
  const getVal = (doc, path) => { const [o, k] = slot(doc, path, false); return o ? o[k] : undefined; };
  function setVal(doc, path, v) {
    const [o, k] = slot(doc, path, true);
    // the carousel's closing slide shows the signature when "author" is the name
    o[k] = v;
  }
  let saveT;
  function edChanged() {
    ED.doc.edited = true;
    $('edReset').disabled = false;
    clearTimeout(saveT);
    saveT = setTimeout(edSave, 300);
  }
  function edSave() {
    clearTimeout(saveT);
    if (!ED.d || !ED.doc || !ED.doc.edited) return;
    const ok = setOv(ED.d.id, ED.lang, { content: ED.doc.content, sig: ED.doc.sig });
    $('edSaved').textContent = ok ? 'تعديلاتك محفوظة في هذا المتصفح.' : 'تعذّر الحفظ في هذا المتصفح — التعديلات تبقى حتى إغلاق الصفحة.';
  }
  let fitRaf = 0;
  function refitSoon() {
    cancelAnimationFrame(fitRaf);
    fitRaf = requestAnimationFrame(() => { if (ED.fr) edWarn(E.refit(ED.fr)); });
  }
  const stage = $('edStage');
  const fieldEl = (t) => (t && t.closest ? t.closest('[data-field]') : null);
  stage.addEventListener('beforeinput', (e) => {
    const el = fieldEl(e.target); if (!el || !el.isContentEditable) return;
    if ((e.inputType === 'insertParagraph' || e.inputType === 'insertLineBreak') && !multiLine(el.getAttribute('data-field'))) e.preventDefault();
    if (e.inputType === 'insertFromDrop' || e.inputType === 'formatBold' || e.inputType === 'formatItalic' || e.inputType === 'formatUnderline') e.preventDefault();
  });
  stage.addEventListener('keydown', (e) => {
    const el = fieldEl(e.target); if (!el) return;
    const kind = el.getAttribute('data-kind');
    if (kind !== 'text') { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); mediaClick(el); } return; }
    if (e.key === 'Enter' && !multiLine(el.getAttribute('data-field'))) e.preventDefault();
    if (e.key === 'Enter' && !PLAIN_OK && multiLine(el.getAttribute('data-field'))) { e.preventDefault(); document.execCommand('insertLineBreak'); }
    if (e.key === 'Escape') el.blur();
  });
  stage.addEventListener('paste', (e) => {
    const el = fieldEl(e.target); if (!el || !el.isContentEditable) return;
    e.preventDefault();
    let t = (e.clipboardData || window.clipboardData).getData('text/plain') || '';
    t = t.replace(/\r\n?/g, '\n');
    if (!multiLine(el.getAttribute('data-field'))) t = t.replace(/\s*\n\s*/g, ' ');
    document.execCommand('insertText', false, t);
  });
  stage.addEventListener('drop', (e) => { if (fieldEl(e.target)) e.preventDefault(); });
  stage.addEventListener('input', (e) => {
    const el = fieldEl(e.target); if (!el || !ED.doc) return;
    const path = el.getAttribute('data-field');
    const v = readText(el, multiLine(path));
    setVal(ED.doc, path, v);
    // mirror into other places that print the same field
    ED.fr.querySelectorAll('[data-field="' + path + '"]').forEach((o) => { if (o !== el && !o.querySelector('*:not(br)')) o.textContent = v; });
    edChanged();
    refitSoon();
  });
  // some texts drive graphics (bars, numbers): redraw once the edit is done
  const DERIVED = /^(rows\.|stat$|items\.)/;
  stage.addEventListener('focusout', (e) => {
    const el = fieldEl(e.target); if (!el || !el.isContentEditable) return;
    edSave();
    if (!DERIVED.test(el.getAttribute('data-field'))) return;
    const next = fieldEl(e.relatedTarget);
    const nextPath = next && stage.contains(next) ? next.getAttribute('data-field') : null;
    setTimeout(() => {
      edRender();
      if (nextPath) { const n = ED.fr.querySelector('[data-field="' + nextPath + '"]'); if (n) { n.focus(); placeCaretEnd(n); } }
    }, 0);
  });
  function placeCaretEnd(el) { try { const r = document.createRange(); r.selectNodeContents(el); r.collapse(false); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } catch (e) { /* ignore */ } }
  /* image slots often sit under scrims and text layers: find them by the pointer position */
  function mediaAt(x, y) {
    if (!ED.fr) return null;
    const hits = [...ED.fr.querySelectorAll('[data-kind="image"],[data-kind="qr"]')].filter((m) => { const r = m.getBoundingClientRect(); return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom; });
    return hits.length ? hits[hits.length - 1] : null;
  }
  stage.addEventListener('click', (e) => {
    const el = fieldEl(e.target);
    if (el && el.getAttribute('data-kind') !== 'text') { e.preventDefault(); mediaClick(el); return; }
    if (el && el.isContentEditable) return;
    const m = mediaAt(e.clientX, e.clientY); if (m) { e.preventDefault(); mediaClick(m); }
  });
  stage.addEventListener('mousemove', (e) => {
    const el = fieldEl(e.target);
    stage.style.cursor = !(el && el.isContentEditable) && mediaAt(e.clientX, e.clientY) ? 'pointer' : '';
  });

  /* image + QR fields */
  const pop = $('pop');
  function hidePop() { pop.hidden = true; pop.textContent = ''; }
  function showPop(anchor, build) {
    pop.textContent = ''; build(pop); pop.hidden = false;
    const r = anchor.getBoundingClientRect(); const pw = pop.offsetWidth, ph = pop.offsetHeight;
    let top = r.bottom + 8; if (top + ph > innerHeight - 8) top = Math.max(8, r.top - ph - 8);
    let left = r.left + r.width / 2 - pw / 2; left = Math.max(8, Math.min(left, innerWidth - pw - 8));
    pop.style.top = top + 'px'; pop.style.left = left + 'px';
    const f = pop.querySelector('input,button'); if (f) f.focus();
  }
  function mkBtn(text, cls, on) { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn' + (cls ? ' ' + cls : ''); b.textContent = text; b.addEventListener('click', on); return b; }
  function mediaClick(el) {
    const path = el.getAttribute('data-field'); const kind = el.getAttribute('data-kind');
    const val = getVal(ED.doc, path);
    if (kind === 'image') {
      const choose = () => { hidePop(); pickImage((url) => { setVal(ED.doc, path, url); edChanged(); edSave(); edRender(); }); };
      if (!val) { choose(); return; }
      showPop(el, (p) => {
        p.setAttribute('aria-label', 'الصورة');
        p.append(mkBtn('تغيير الصورة', 'primary', choose), mkBtn('إزالة الصورة', '', () => { setVal(ED.doc, path, ''); edChanged(); edSave(); edRender(); }), mkBtn('إلغاء', 'ghost', hidePop));
      });
    } else if (kind === 'qr') {
      showPop(el, (p) => {
        p.setAttribute('aria-label', 'رابط رمز QR');
        const lab = document.createElement('label'); lab.className = 'label'; lab.textContent = 'رابط رمز QR'; lab.htmlFor = 'popUrl';
        const inp = document.createElement('input'); inp.type = 'url'; inp.id = 'popUrl'; inp.dir = 'ltr'; inp.placeholder = 'https://'; inp.value = val || '';
        const ok = () => { setVal(ED.doc, path, inp.value.trim()); edChanged(); edSave(); edRender(); };
        inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); ok(); } if (e.key === 'Escape') hidePop(); });
        p.append(lab, inp, mkBtn('تم', 'primary', ok));
        if (val) p.append(mkBtn('إزالة', '', () => { setVal(ED.doc, path, ''); edChanged(); edSave(); edRender(); }));
        p.append(mkBtn('إلغاء', 'ghost', hidePop));
      });
    }
  }
  document.addEventListener('pointerdown', (e) => { if (!pop.hidden && !pop.contains(e.target) && !fieldEl(e.target)) hidePop(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !pop.hidden) hidePop(); });

  $('edReset').addEventListener('click', () => {
    if (!ED.d) return;
    delOv(ED.d.id, ED.lang); ED.doc = edDoc(); edRender(); toast('رجع النص إلى محتوى الفئة.');
  });
  $('edBack').addEventListener('click', () => { if (history.length > 1 && backable) history.back(); else location.hash = ''; });
  $('edPng').addEventListener('click', () => exportCurrent($('edPng')));
  $('edPdf').addEventListener('click', () => { edSave(); exportPdf(ED.d, [ED.fmt], ED.lang, ED.mode, $('edPdf'), ED.doc); });

  /* ---------------- export (no server, no Claude) ---------------- */
  function download(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = name; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }
  async function rasterize(d, fmt, k, lang, mode, doc) {
    if (typeof window.snapdom !== 'function') throw { code: 'no_snapdom' };
    const dc = doc || docFor(d, lang);
    const html = E.render(d.id, { fmt, lang, mode, content: dc.content, sig: dc.sig })[k];
    const off = $('off'); off.textContent = '';
    const fr = frameEl(html); off.appendChild(fr);
    try { await document.fonts.ready; } catch (e) { /* ignore */ }
    E.fit(fr);
    const imgs = [...fr.querySelectorAll('img')];
    await Promise.all(imgs.map((im) => (im.complete ? null : new Promise((r) => { im.onload = im.onerror = r; }))));
    const sz = SIZES[fmt];
    const cap = await window.snapdom(fr, { embedFonts: true, width: sz.w, height: sz.h });
    const blob = await cap.toBlob({ format: 'png', dpr: 1, scale: 1 });
    off.textContent = '';
    return blob;
  }
  const fname = (d, fmt, lang, k, ext) => `wejdan-${d.id}-${fmt === 'x' ? 'x' : 'linkedin'}-${lang}${k != null ? '-' + String(k + 1).padStart(2, '0') : ''}.${ext}`;
  async function busy(btn, fn) {
    const t = btn.textContent; btn.disabled = true; btn.textContent = 'جاري التجهيز…';
    try { await fn(); } catch (e) { console.warn('export failed', e); toast(e && e.code === 'no_snapdom' ? 'تعذّر تحميل أداة التصدير. حدّثي الصفحة.' : 'تعذّر تجهيز الملف. حاولي مرة أخرى.'); }
    finally { btn.disabled = false; btn.textContent = t; }
  }
  function exportPngs(d, fl, lang, mode, btn) {
    return busy(btn, async () => {
      for (const fmt of fl) { const blob = await rasterize(d, fmt, 0, lang, mode); download(blob, fname(d, fmt, lang, null, 'png')); await new Promise((r) => setTimeout(r, 400)); }
      toast('تم التحميل.');
    });
  }
  function exportCurrent(btn) {
    edSave();
    return busy(btn, async () => {
      const blob = await rasterize(ED.d, ED.fmt, ED.k, ED.lang, ED.mode, ED.doc);
      download(blob, fname(ED.d, ED.fmt, ED.lang, ED.n > 1 ? ED.k : null, 'png'));
      toast('تم التحميل.');
    });
  }
  function exportPdf(d, fl, lang, mode, btn, doc) {
    return busy(btn, async () => {
      if (!window.jspdf || !window.jspdf.jsPDF) { toast('تعذّر تحميل أداة PDF. حدّثي الصفحة.'); return; }
      const dc = doc || docFor(d, lang);
      for (const fmt of fl) {
        const sz = SIZES[fmt];
        const n = E.render(d.id, { fmt, lang, mode, content: dc.content, sig: dc.sig }).length;
        const orient = sz.w > sz.h ? 'landscape' : 'portrait';
        const pdf = new window.jspdf.jsPDF({ orientation: orient, unit: 'px', format: [sz.w, sz.h], hotfixes: ['px_scaling'], compress: true });
        for (let k = 0; k < n; k++) {
          const blob = await rasterize(d, fmt, k, lang, mode, dc);
          const url = await new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(blob); });
          if (k) pdf.addPage([sz.w, sz.h], orient);
          pdf.addImage(url, 'PNG', 0, 0, sz.w, sz.h);
        }
        download(pdf.output('blob'), fname(d, fmt, lang, null, 'pdf'));
        await new Promise((r) => setTimeout(r, 400));
      }
      toast('تم التحميل.');
    });
  }

  /* ---------------- routing ---------------- */
  let backable = false;
  function route() {
    const m = /^#\/d\/([\w-]+)(?:\/(li|x))?$/.exec(location.hash);
    if (m) { showEditor(m[1], m[2] || 'li'); return; }
    if (ED.d) { edSave(); ED.d = null; ED.fr = null; $('edStage').textContent = ''; }
    hidePop();
    $('viewEditor').hidden = true; $('viewGallery').hidden = false;
    document.title = 'استوديو وجدان';
    renderGallery().then(() => { window.scrollTo(0, scrollY0); });
  }
  window.addEventListener('hashchange', () => { backable = true; route(); });
  window.addEventListener('pagehide', edSave);
  document.addEventListener('visibilitychange', () => { if (document.hidden) edSave(); });
  $('home').addEventListener('click', (e) => { e.preventDefault(); if (location.hash) location.hash = ''; });

  /* re-fit once late fonts arrive (an installed heading font, a slow network) */
  let fontT;
  try {
    document.fonts.addEventListener('loadingdone', () => {
      clearTimeout(fontT);
      fontT = setTimeout(() => {
        detectFont();
        document.querySelectorAll('#grid .stage .wj-frame').forEach((fr) => E.refit(fr));
        if (ED.fr) edWarn(E.refit(ED.fr));
      }, 200);
    });
  } catch (e) { /* ignore */ }

  /* ---------------- start ---------------- */
  if (matchMedia('(max-width: 1000px)').matches) $('contentDetails').open = false;
  bindSig(); buildForm(); detectFont(); route();
  window.__site = { S, ED, E, rasterize, docFor, renderGallery, LS };
})();
