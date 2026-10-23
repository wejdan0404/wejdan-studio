/* Wejdan Social Engine — core
   Values: Wejdan design system (Claude Design, tokens.json) + Figma page 13 masters.
   Formats: LinkedIn / Carousel 1200x1500, X 1600x900 (from the Figma masters). */
(function (G) {
  'use strict';
  const E = (G.WJ = G.WJ || {});
  const MARK_D = 'M0 84.9507L4.59193 86.3283L8.95426 89.0834L14.235 96.4305L56.7103 202.734L88.165 136.151L117.094 204.111L118.013 204.8L119.62 204.111L150.845 140.283L160.947 146.483L167.605 148.319H172.197L176.33 147.171L180.004 144.416L181.381 141.891L180.922 136.61L177.248 134.314L173.804 135.232L172.197 136.839L170.59 140.972L166.228 143.957L158.881 142.579L151.763 137.758L161.636 118.472L175.412 94.3641L180.233 88.8538L184.136 86.3283L188.269 85.4099V84.7211L153.83 84.9507L159.57 86.5579L163.243 89.5426L165.08 93.9049L165.309 98.2673L163.932 105.614L159.799 116.865L149.926 136.61L140.513 127.885L117.783 102.63L107.451 92.5274L102.17 88.6242L92.757 84.2619L90.0018 83.5731L84.2619 84.0323L81.5067 85.4099L78.522 88.6242L76.6852 93.2161L76.226 99.6448L78.7516 111.813L86.7874 133.396L65.8942 177.248L33.2915 99.8744L33.7507 94.1345L35.5874 90.9202L41.0978 86.7874L48.2152 84.9507H0ZM93.6753 88.3946H94.1345L94.3641 88.165H97.3489L97.5785 88.3946L99.4152 88.8538L103.548 91.3794L104.237 92.0682L105.385 92.757L107.222 94.5937H107.451L115.487 102.63V102.859L123.293 111.354V111.584L126.278 114.798V115.028L127.656 116.405V116.635L129.033 118.013V118.242L135.921 125.819V126.048L138.447 128.574V128.804L139.135 129.263L139.365 129.722L144.875 135.232H145.105L149.008 138.906L147.171 142.579V143.039L146.253 144.416V144.875L145.105 146.942V147.401L144.646 147.86V148.319L144.187 148.778L143.727 149.697V150.156L142.809 151.534V151.993L142.35 152.452L141.661 153.83V154.289L137.987 161.406V161.865L137.528 162.325L134.543 168.294V168.753L129.263 179.085V179.544L127.885 182.3L127.426 182.759L126.967 182.3L125.13 178.626V178.167L123.293 174.723V174.264L121.916 171.738V171.279L120.309 168.294V167.835L118.013 163.243V162.784L115.946 158.881V158.422L115.028 156.814V156.355L112.961 152.452V151.993L109.977 146.023V145.564L108.37 142.579V142.12L106.762 139.135V138.676L104.926 135.232V134.773L103.778 132.707V132.248L101.022 126.967V126.508L99.8744 124.441V123.982L97.5785 119.39V118.931L97.1193 118.242V117.783L96.6601 117.094V116.635L95.2825 113.65L94.8233 111.813L93.9049 109.977V109.517L93.4457 108.599V107.91L92.5274 105.614V104.926L92.2978 104.696V104.007L91.8386 103.089V102.4L91.609 102.17V101.252L91.3794 101.022V100.104L91.1498 99.8744V98.9561L90.9202 98.7265V96.4305L90.6906 96.2009V93.9049L90.9202 93.6753L91.1498 91.609L92.2978 89.5426L93.6753 88.3946ZM64.7462 35.1283V36.2762L64.5166 36.5058V37.4242L64.287 37.6538V38.5722L64.0574 38.8018V39.4906L63.8278 39.7202V40.1794L63.5982 40.409V40.8682L63.3686 41.0978V41.557L62.9094 42.2457V42.7049L62.4502 43.3937V43.8529L62.2206 44.0825V44.3121L61.991 44.5417L61.7614 45.2305L61.3022 45.6897V45.9193L61.0726 46.1489V46.3785L60.6135 46.8377V47.0673L59.6951 47.9857V48.2152L57.8583 50.052H57.6287L56.7103 50.9704H56.4807L56.0215 51.4296H55.7919L55.5623 51.6592H55.3327L55.1031 51.8888H54.8735L54.6439 52.1184H54.4143L53.2664 52.8072H52.8072L52.5776 53.0368H52.1184L51.8888 53.2664H51.4296L51.2 53.496H50.5112L50.2816 53.7256H49.5928L49.3632 53.9552H48.6744L48.4448 54.1848H47.0673H47.9856L48.2152 54.4144H49.1336L49.3632 54.6439H50.052L50.2816 54.8735H50.9704L51.2 55.1031H51.8888L52.5776 55.5623H53.0368L53.2664 55.7919H53.7256L53.9552 56.0215H54.1848L54.4143 56.2511H54.6439L54.8735 56.4807L55.5623 56.7103L56.0215 57.1695H56.2511L56.7103 57.6287H56.9399L57.8583 58.5471H58.0879L59.6951 60.1543V60.3839L60.3839 61.0726V61.3022L60.843 61.7614V61.991L61.7614 63.139V63.3686L61.991 63.5982V64.0574L62.2206 64.287V64.5166L62.6798 65.2054V65.6646L63.139 66.3534V66.8126L63.3686 67.0422V67.5014L63.5982 67.7309V68.4197L63.8278 68.6493V69.3381L64.0574 69.5677V70.2565L64.287 70.4861V71.4045L64.5166 71.6341V72.5525L64.7462 72.7821V73.93V73.0117L64.9758 72.7821V71.6341L65.2054 71.4045V70.4861L65.435 70.2565V69.5677L65.6646 69.3381V68.6493L65.8942 68.4197V67.9605L66.1238 67.7309V67.0422L66.583 66.3534V65.8942L67.0422 65.2054V64.7462L67.2717 64.5166V64.287L67.5013 64.0574V63.8278L67.7309 63.5982V63.3686L67.9605 63.139L68.1901 62.4502L68.6493 61.991V61.7614L69.1085 61.3022V61.0726L70.0269 60.1543V59.9247L71.6341 58.3175H71.8637L72.5525 57.6287H72.7821L73.93 56.7103H74.1596L74.3892 56.4807H74.6188L75.7668 55.7919H76.226L76.4556 55.5623H76.6852L76.9148 55.3327H77.374L77.6036 55.1031H78.2924L78.522 54.8735H79.2108L79.4404 54.6439H80.1291L80.3587 54.4144H81.2771L81.5067 54.1848H82.4251H81.2771L81.0475 53.9552H80.1291L79.8996 53.7256H79.2108L78.9812 53.496H78.2924L78.0628 53.2664H77.6036L77.374 53.0368H76.9148L76.226 52.5776H75.7668L75.5372 52.348H75.3076L75.078 52.1184H74.8484L74.6188 51.8888H74.3892L74.1596 51.6592L73.4708 51.4296L73.0117 50.9704H72.7821L72.0933 50.2816H71.8637L69.5677 47.9857V47.7561L68.8789 47.0673V46.8377L68.4197 46.3785V46.1489L68.1901 45.9193L67.9605 45.2305L67.5013 44.7713V44.5417L67.2717 44.3121V43.8529L66.583 42.7049V42.2457L66.3534 42.0161V41.557L66.1238 41.3274V40.8682L65.8942 40.6386V40.1794L65.6646 39.9498V39.261L65.435 39.0314V38.3426L65.2054 38.113V37.4242L64.9758 37.1946V36.0466L64.7462 35.817V35.1283ZM96.2009 16.3013V17.2197L95.9713 17.4493V18.1381L95.7417 18.3677V18.8269L95.5121 19.0565V19.5157L95.2825 19.7453V20.2045L95.0529 20.4341V20.6637L94.8233 20.8933V21.1229L94.5937 21.3525L94.3641 22.0413L93.9049 22.5005V22.73L93.4457 23.1892V23.4188L92.5274 24.3372H92.2978L91.609 25.026H91.3794L90.9202 25.4852H90.6906L90.461 25.7148H90.0018L89.7722 25.9444H89.5426L89.313 26.174H88.8538L88.6242 26.4036H87.7058L87.4762 26.6332H87.017H87.7058L87.9354 26.8628H88.6242L88.8538 27.0924H89.313L89.5426 27.322H89.7722L90.0018 27.5516H90.2314L90.461 27.7812L91.1498 28.0108L91.609 28.47H91.8386L94.1345 30.7659V30.9955L94.3641 31.2251V31.4547L94.5937 31.6843V31.9139L95.2825 33.0619V33.5211L95.5121 33.7507V34.2099L95.7417 34.4395V35.1283L95.9713 35.3578V36.0466L96.2009 36.2762V37.1946V36.965L96.4305 36.7354V35.817L96.6601 35.5874V34.8987L96.8897 34.6691V34.2099L97.1193 33.9803V33.5211L97.3489 33.2915V32.8323L97.5785 32.6027V32.3731L97.8081 32.1435L98.0377 31.4547L98.9561 30.3067V30.0771L100.334 28.6996H100.563L101.252 28.0108H101.482L102.63 27.322H103.089L103.318 27.0924H103.778L104.007 26.8628H104.466L104.696 26.6332H105.614H104.926L104.696 26.4036H104.007L103.778 26.174H103.318L103.089 25.9444H102.63L102.4 25.7148H102.17L101.941 25.4852L101.252 25.2556L100.334 24.3372H100.104L99.6448 23.878V23.6484L98.4969 22.5005V22.2709L98.0377 21.8117V21.5821L97.3489 20.4341V19.9749L97.1193 19.7453V19.2861L96.8897 19.0565V18.5973L96.6601 18.3677V17.9085L96.4305 17.6789V16.9901L96.2009 16.7605V16.3013ZM42.9345 1.60717V2.52556L42.7049 2.75516V3.44395L42.4753 3.67354V4.36233L42.2457 4.59193V5.05112L42.0161 5.28072V5.73991L41.7865 5.96951V6.4287L41.5569 6.6583L41.3274 7.34709L40.8682 7.80628L40.6386 8.49507L39.7202 9.41345V9.64305L38.3426 11.0206H38.113L36.965 11.939H36.7354L35.5874 12.6278H35.1283L34.8987 12.8574H34.4395L34.2099 13.087H33.5211L33.2915 13.3166L33.5211 13.5462H34.2099L34.8987 14.0054H35.3578L35.5874 14.235H36.0466L36.2762 14.4646L36.965 14.6942L37.4242 15.1534H37.6538L38.113 15.6126H38.3426L39.9498 17.2197V17.4493L40.6386 18.1381V18.3677L40.8682 18.5973V18.8269L41.0978 19.0565V19.2861L41.7865 20.4341V20.8933L42.0161 21.1229V21.5821L42.2457 21.8117V22.2709L42.4753 22.5005V23.1892L42.7049 23.4188V24.3372L42.9345 24.5668L43.1641 24.3372V23.4188L43.3937 23.1892V22.5005L43.6233 22.2709V21.8117L43.8529 21.5821V21.1229L44.0825 20.8933V20.4341L44.3121 20.2045V19.9749L44.5417 19.7453V19.5157L44.7713 19.2861L45.0009 18.5973L45.4601 18.1381V17.9085L45.9193 17.4493V17.2197L47.5265 15.6126H47.7561L48.2152 15.1534L48.904 14.9238L49.3632 14.4646H49.5928L49.8224 14.235H50.2816L50.5112 14.0054H50.9704L51.2 13.7758H51.6592L51.8888 13.5462H52.5776L52.8072 13.3166H53.2664H52.5776L52.348 13.087H51.8888L51.6592 12.8574H50.9704L50.7408 12.6278H50.2816L50.052 12.3982H49.8224L49.5928 12.1686L48.904 11.939L48.4448 11.4798H48.2152L47.7561 11.0206H47.5265L45.6897 9.18386V8.95426L45.2305 8.49507V8.26547L45.0009 8.03587V7.80628L44.7713 7.57668V7.34709L44.0825 6.1991V5.73991L43.6233 5.05112V4.36233L43.3937 4.13274V3.67354L43.1641 3.44395V2.52556L42.9345 2.29596V1.60717ZM106.303 2.29596L90.2314 6.88789L75.5372 13.3166L64.5166 19.7453L50.9704 30.0771L39.7202 41.3274L31.4547 52.348L23.6484 67.2718L20.4341 78.0628L21.5821 78.2924L25.4852 67.0422L31.9139 54.6439L39.261 44.3121L47.7561 35.1283L56.4807 27.5516L68.6493 19.0565L78.2924 13.7758L90.2314 8.72466L103.778 4.82152L113.88 3.21435L127.426 2.75516L137.069 3.67354L149.238 6.4287L157.503 9.41345L167.605 14.4646L177.937 21.5821L188.958 31.9139L196.075 40.6386L202.045 50.052L207.096 60.6135L210.54 70.7157L212.836 81.2771L213.754 89.5426L213.525 104.696L211.458 116.865L206.637 131.1L200.667 142.809L190.335 156.814L178.167 168.524L166.687 176.33L152.452 182.759L140.283 185.973L147.63 185.743L158.881 183.218L168.983 179.544L177.019 175.641L192.402 165.539L204.57 154.059L210.77 146.253L215.591 138.676L222.709 122.375L226.152 106.074V87.2466L224.775 78.0628L222.249 68.4197L218.805 59.2359L214.443 50.5112L204.57 36.0466L191.713 22.9596L176.56 12.3982L162.784 5.96951L154.978 3.44395L143.039 0.918386L134.314 0H123.982L106.303 2.29596Z';

  E.SIZES = {
    li: { w: 1200, h: 1500, m: 96, label: 'LinkedIn' },
    x: { w: 1600, h: 900, m: 96, label: 'X' },
  };

  /* ---------- palettes (semantic tokens) ---------- */
  const PAL = {
    light: {
      text: '#0E121C', sec: '#2B3358', muted: '#50545C', accent: '#4E5C96', brand: '#6172B5',
      line: '#BEDAF7', line2: '#96A1CD', strong: '#0E121C', card: '#F2F7FE', card2: '#FFFFFF',
      chip: '#DDEBFC', chipText: '#0E121C', mark: '#0E121C', star: '#6172B5', starSoft: '#9BC4EE',
      glow: 'rgba(155,196,238,.60)', arc: '#96A1CD', inv: '#0E121C', invText: '#FFFFFF',
      pat: '#6172B5', patStar: '#FFFFFF', shadow: '0 12px 32px rgba(14,18,28,.10)',
    },
    dark: {
      text: '#FFFFFF', sec: '#D1D2D5', muted: '#A2A4A9', accent: '#BEDAF7', brand: '#7587CF',
      line: '#40444D', line2: '#6E7179', strong: '#86898F', card: '#181C26', card2: '#222630',
      chip: '#222630', chipText: '#FFFFFF', mark: '#FFFFFF', star: '#BEDAF7', starSoft: '#7587CF',
      glow: 'rgba(97,114,181,.55)', arc: 'rgba(190,218,247,.45)', inv: '#FFFFFF', invText: '#0E121C',
      pat: '#6172B5', patStar: '#FFFFFF', shadow: '0 12px 32px rgba(0,0,0,.35)',
    },
    violet: {
      text: '#FFFFFF', sec: '#EEF0F8', muted: '#DCE0EF', accent: '#FFFFFF', brand: '#FFFFFF',
      line: 'rgba(255,255,255,.28)', line2: 'rgba(255,255,255,.55)', strong: '#FFFFFF',
      card: 'rgba(14,18,28,.22)', card2: 'rgba(255,255,255,.10)', chip: 'rgba(255,255,255,.18)', chipText: '#FFFFFF',
      mark: '#FFFFFF', star: '#FFFFFF', starSoft: '#BEDAF7', glow: 'rgba(190,218,247,.45)', arc: 'rgba(255,255,255,.45)',
      inv: '#FFFFFF', invText: '#2B3358', pat: '#2B3358', patStar: '#FFFFFF', shadow: '0 12px 32px rgba(14,18,28,.25)',
    },
  };
  E.PAL = PAL;

  /* ---------- surfaces (paint styles from the colour spec) ---------- */
  const SURF = {
    plain: { light: ['#FFFFFF', 'light'], dark: ['#0E121C', 'dark'] },
    subtle: { light: ['#F2F7FE', 'light'], dark: ['#181C26', 'dark'] },
    soft: {
      light: ['radial-gradient(70% 55% at 12% 8%, rgba(190,218,247,.95) 0%, rgba(190,218,247,0) 70%), radial-gradient(60% 50% at 92% 88%, rgba(220,224,239,.95) 0%, rgba(220,224,239,0) 72%), #F7FAFE', 'light'],
      dark: ['radial-gradient(65% 50% at 88% 6%, rgba(97,114,181,.42) 0%, rgba(97,114,181,0) 70%), radial-gradient(60% 50% at 6% 96%, rgba(43,51,88,.85) 0%, rgba(43,51,88,0) 72%), #0E121C', 'dark'],
    },
    brand: {
      light: ['linear-gradient(160deg,#FFFFFF 0%,#DDEBFC 55%,#BEDAF7 100%)', 'light'],
      dark: ['linear-gradient(160deg,#6172B5 0%,#4E5C96 45%,#2B3358 100%)', 'violet'],
    },
    aurora: {
      light: ['linear-gradient(170deg,#FFFFFF 0%,#EAF2FB 50%,#BEDAF7 100%)', 'light'],
      dark: ['linear-gradient(160deg,#0F1220 0%,#1E243F 50%,rgba(97,114,181,.85) 100%), #0F1220', 'dark'],
    },
    frost: {
      light: ['linear-gradient(180deg,#EAF2FB 0%,#F7FAFE 100%)', 'light'],
      dark: ['linear-gradient(180deg,#0F1220 0%,#1E243F 100%)', 'dark'],
    },
    ink: { light: ['#0E121C', 'dark'], dark: ['#FFFFFF', 'light'] },
    violet: { light: ['linear-gradient(160deg,#6172B5 0%,#4E5C96 50%,#3D4877 100%)', 'violet'], dark: ['linear-gradient(160deg,#4E5C96 0%,#2B3358 60%,#1A1F3A 100%)', 'violet'] },
  };
  E.SURF = SURF;

  /* ---------- type ---------- */
  const F = {
    dispEN: "'Thmanyah Serif Display','Thmanyah Serif Text','Thmanyah','Source Serif 4',Georgia,serif",
    dispAR: "'Thmanyah Serif Display','Thmanyah Serif Text','Thmanyah','Noto Naskh Arabic',serif",
    sansEN: "'IBM Plex Sans',system-ui,sans-serif",
    sansAR: "'IBM Plex Sans Arabic','IBM Plex Sans',sans-serif",
  };
  E.FONTS = F;
  E.setHeadingFont = function (name) {
    const base = { en: "'Thmanyah Serif Display','Thmanyah Serif Text','Thmanyah','Source Serif 4',Georgia,serif", ar: "'Thmanyah Serif Display','Thmanyah Serif Text','Thmanyah','Noto Naskh Arabic',serif" };
    const n = (name || '').replace(/['"\\<>;]/g, '').trim();
    F.dispEN = n ? "'" + n + "'," + base.en : base.en;
    F.dispAR = n ? "'" + n + "'," + base.ar : base.ar;
  };

  /* Ladders [size, lineHeight] — tokens.json type groups. Index-aligned EN/AR. */
  const LAD = {
    d: { en: [[190, 202], [150, 160], [104, 116], [88, 100], [72, 80], [56, 64], [40, 48]],
         ar: [[200, 236], [112, 150], [96, 130], [64, 90], [56, 78], [44, 62], [34, 48]] },
    q: { en: [[150, 160], [104, 116], [82, 108], [52, 68], [32, 46]], ar: [[112, 150], [96, 130], [88, 128], [56, 84], [34, 50]] },
    b: { en: [[44, 56], [32, 44], [26, 40], [20, 32]], ar: [[48, 72], [32, 50], [28, 50], [22, 40]] },
    n: { en: [[190, 202], [150, 160], [104, 116], [88, 100], [64, 72], [44, 56]],
         ar: [[200, 236], [150, 160], [104, 116], [88, 100], [64, 72], [44, 56]] },
  };
  E.LAD = LAD;
  const CLS = { poster: 0, xl: 1, l: 2, m: 3, s: 4, xs: 5 };

  /* ---------- helpers ---------- */
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const nl = (s) => esc(s).replace(/\n/g, '<br>');
  E.esc = esc;
  const st = (o) => Object.entries(o).filter(([, v]) => v !== undefined && v !== null && v !== false && v !== '')
    .map(([k, v]) => k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()) + ':' + v).join(';');
  E.st = st;
  let UID = 0;
  const uid = (p) => (p || 'w') + (++UID).toString(36) + Math.random().toString(36).slice(2, 6);

  const LBL = {
    sample: ['SAMPLE', 'عيّنة'], source: ['Source', 'المصدر'], swipe: ['Swipe →', 'اسحب ←'],
    before: ['Before', 'قبل'], after: ['After', 'بعد'], read: ['Read more →', 'اقرأ المزيد ←'],
  };
  const lbl = (ctx, k) => LBL[k][ctx.ar ? 1 : 0];

  E.ctx = function (o) {
    const fmt = E.SIZES[o.fmt || 'li'];
    const mode = o.mode === 'dark' ? 'dark' : 'light';
    const surfDef = SURF[o.surf || 'plain'] || SURF.plain;
    const [bg, palKey] = surfDef[mode];
    const ar = (o.lang || 'en') === 'ar';
    return {
      fmtKey: o.fmt || 'li', W: fmt.w, H: fmt.h, M: fmt.m, land: fmt.w > fmt.h,
      mode, surf: o.surf || 'plain', bg, pal: PAL[palKey], palKey, ar, lang: ar ? 'ar' : 'en', dir: ar ? 'rtl' : 'ltr',
      c: o.content || {}, sig: o.sig || {}, page: o.page, pages: o.pages,
    };
  };

  /* fonts */
  const fd = (ctx) => (ctx.ar ? F.dispAR : F.dispEN);
  const fs = (ctx) => (ctx.ar ? F.sansAR : F.sansEN);
  E.fd = fd; E.fs = fs;

  /* text styles that are not fitted */
  const T = {
    over: (ctx) => ctx.ar ? { f: fs(ctx), w: 500, s: 32, l: 50 } : { f: fs(ctx), w: 600, s: 30, l: 40 },
    label: (ctx) => ctx.ar ? { f: fs(ctx), w: 500, s: 28, l: 44 } : { f: fs(ctx), w: 600, s: 26, l: 36 },
    small: (ctx) => ctx.ar ? { f: fs(ctx), w: 400, s: 26, l: 42 } : { f: fs(ctx), w: 400, s: 24, l: 34 },
    sig: (ctx) => ctx.ar ? { f: fs(ctx), w: 500, s: 30, l: 46 } : { f: fs(ctx), w: 600, s: 28, l: 38 },
  };
  const tf = (t, color, extra) => st(Object.assign({ fontFamily: t.f, fontWeight: t.w, fontSize: t.s + 'px', lineHeight: t.l + 'px', color, margin: 0 }, extra || {}));
  E.T = T; E.tf = tf;

  /* fitted text element */
  function fitEl(ctx, lad, cls, html, o) {
    o = o || {};
    const L = LAD[lad][ctx.lang];
    let i = typeof cls === 'number' ? cls : (lad === 'q' ? ({ poster: 0, xl: 0, l: 1, m: 2, s: 3, xs: 4 }[cls] ?? 1) : lad === 'b' ? ({ xl: 0, l: 0, m: 1, s: 2 }[cls] ?? 0) : (CLS[cls] ?? 2));
    i = Math.min(i, L.length - 1);
    const min = Math.min(o.min ?? L.length - 1, L.length - 1);
    const [s, l] = L[i];
    const fam = lad === 'n' || lad === 'b' ? fs(ctx) : fd(ctx);
    const w = o.w || (lad === 'd' ? 900 : lad === 'q' ? 300 : lad === 'n' ? 600 : 400);
    const style = st({
      fontFamily: fam, fontWeight: w, fontSize: s + 'px', lineHeight: l + 'px', color: o.color || ctx.pal.text, margin: 0,
      textAlign: o.align || 'start', textWrap: 'balance', letterSpacing: lad === 'd' && !ctx.ar ? '-0.01em' : (lad === 'n' ? '-0.02em' : undefined),
      maxWidth: o.maxw, fontFeatureSettings: lad === 'n' ? "'tnum' 1, 'lnum' 1" : undefined, whiteSpace: o.nowrap ? 'nowrap' : undefined,
      fontSynthesis: 'none',
    });
    return `<div data-fit="${lad}" data-i="${i}" data-i0="${i}" data-min="${min}" data-ml="${o.ml || 0}" data-pr="${o.pr || (lad === 'b' ? 2 : 1)}"${o.drop ? ` data-drop="${o.drop}"` : ''}${o.role ? ` data-role="${o.role}"` : ''}${o.field ? ` data-field="${o.field}"` : ''} style="${style}">${html}</div>`;
  }
  E.fitEl = fitEl;

  /* ---------- the W mark ---------- */
  E.mark = function (size, color, extra) {
    const h = Math.round(size * 205 / 227);
    return `<svg aria-hidden="true" viewBox="0 0 227 205" width="${size}" height="${h}" style="${st(Object.assign({ display: 'block', flex: 'none', color }, extra || {}))}"><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="${MARK_D}"/></svg>`;
  };

  /* ---------- star (four-point sparkle) ---------- */
  const STAR_D = 'M12 0C12.55 7.1 16.9 11.45 24 12C16.9 12.55 12.55 16.9 12 24C11.45 16.9 7.1 12.55 0 12C7.1 11.45 11.45 7.1 12 0Z';
  E.star = function (size, fill, extra) {
    return `<svg aria-hidden="true" viewBox="0 0 24 24" width="${size}" height="${size}" style="${st(Object.assign({ display: 'block', flex: 'none' }, extra || {}))}"><path d="${STAR_D}" fill="${fill}"/></svg>`;
  };
  E.starGrad = function (ctx, size, extra) {
    const id = uid('sg');
    const a = ctx.palKey === 'light' ? '#FFFFFF' : '#FFFFFF';
    const b = ctx.palKey === 'light' ? '#7FAAE3' : '#BEDAF7';
    return `<svg aria-hidden="true" viewBox="0 0 24 24" width="${size}" height="${size}" style="${st(Object.assign({ display: 'block', flex: 'none' }, extra || {}))}"><defs><radialGradient id="${id}" cx="50%" cy="50%" r="55%"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient></defs><path d="${STAR_D}" fill="url(#${id})"/></svg>`;
  };

  /* content path of a text (carousel slides map title/body to slides.N.*) */
  const fieldOf = (ctx, name) => (ctx && ctx.fmap && ctx.fmap[name]) || name;
  E.fieldOf = fieldOf;

  /* ---------- small blocks ---------- */
  const B = (E.B = {});
  B.over = (ctx, text, o) => text ? `<div data-field="${(o && o.field) || fieldOf(ctx, 'overline')}" style="${tf(T.over(ctx), (o && o.color) || ctx.pal.accent, { textAlign: o && o.align })}">${esc(text)}</div>` : '';
  B.sig = (ctx, o) => {
    const s = ctx.sig || {};
    const name = ctx.fmtKey === 'x' ? (s.handle || s.name) : s.name;
    if (ctx.c && ctx.c.author && s.name && ctx.c.author.trim() === String(s.name).trim()) return '';
    const role = s.role;
    const nf = ctx.fmtKey === 'x' && s.handle ? 'sig.handle' : 'sig.name';
    const parts = [name ? `<span data-field="${nf}">${esc(name)}</span>` : '', role ? `<span data-field="sig.role">${esc(role)}</span>` : ''].filter(Boolean);
    return parts.length ? `<div style="${tf(T.sig(ctx), (o && o.color) || ctx.pal.sec, { textAlign: o && o.align })}">${parts.join(' · ')}</div>` : '';
  };
  B.pill = (ctx, text, o) => {
    o = o || {};
    if (!text) return '';
    const t = T.label(ctx);
    return `<span style="${st({ display: 'inline-flex', alignItems: 'center', alignSelf: o.self || 'flex-start', gap: '10px', padding: ctx.ar ? '6px 26px' : '8px 24px', borderRadius: '999px', background: o.bg || ctx.pal.chip, color: o.fg || ctx.pal.chipText, fontFamily: t.f, fontWeight: t.w, fontSize: t.s + 'px', lineHeight: t.l + 'px', whiteSpace: 'nowrap', border: o.border })}">${o.star ? E.star(22, o.fg || ctx.pal.chipText) : ''}${o.field ? `<span data-field="${o.field}">${esc(text)}</span>` : esc(text)}</span>`;
  };
  B.source = (ctx, o) => {
    o = o || {};
    const c = ctx.c;
    if (!c.source && !c.sample) return '';
    const chip = c.sample ? B.pill(ctx, lbl(ctx, 'sample'), { bg: ctx.palKey === 'light' ? '#DDEBFC' : ctx.pal.chip, fg: ctx.pal.chipText, self: 'center' }) : '';
    const src = c.source ? `<span style="${tf(T.small(ctx), ctx.pal.muted)}">${esc(lbl(ctx, 'source'))}: <span data-field="${fieldOf(ctx, 'source')}">${esc(c.source)}</span></span>` : '';
    return `<div style="${st({ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: o.align === 'center' ? 'center' : 'flex-start' })}">${chip}${src}</div>`;
  };
  B.cta = (ctx, o) => ctx.c.cta ? `<div data-field="${fieldOf(ctx, 'cta')}" style="${tf(T.label(ctx), (o && o.color) || ctx.pal.accent, { textAlign: o && o.align })}">${esc(ctx.c.cta)}</div>` : '';
  B.rule = (ctx, o) => `<div style="${st(Object.assign({ height: '2px', width: '96px', background: ctx.pal.line2, flex: 'none' }, o || {}))}"></div>`;
  B.hair = (ctx, o) => `<div style="${st(Object.assign({ height: '1px', alignSelf: 'stretch', background: ctx.pal.line, flex: 'none' }, o || {}))}"></div>`;
  B.glyph = (ctx, size, color) => `<div aria-hidden="true" style="${st({ position: 'relative', height: Math.round(size * 0.5) + 'px', width: Math.round(size * 0.7) + 'px', overflow: 'hidden', flex: 'none' })}"><div style="${st({ fontFamily: fd(ctx), fontWeight: 400, fontSize: size + 'px', lineHeight: size + 'px', color: color || ctx.pal.brand, transform: ctx.ar ? 'translateY(-0.3em)' : 'translateY(-0.02em)' })}">${ctx.ar ? '«' : '“'}</div></div>`;
  B.chev = (ctx, size, color) => `<div aria-hidden="true" style="${st({ fontFamily: fs(ctx), fontWeight: 500, fontSize: size + 'px', lineHeight: size + 'px', color: color || ctx.pal.brand, flex: 'none', direction: ctx.dir })}">${ctx.ar ? '«' : '«'}</div>`;

  /* ---------- motifs (absolutely positioned layers) ---------- */
  const M = (E.M = {});
  const pos = (ctx, o) => {
    const r = { position: 'absolute', pointerEvents: 'none' };
    ['top', 'bottom'].forEach((k) => { if (o[k] !== undefined) r[k] = typeof o[k] === 'number' ? o[k] + 'px' : o[k]; });
    if (o.start !== undefined) r.insetInlineStart = typeof o.start === 'number' ? o.start + 'px' : o.start;
    if (o.end !== undefined) r.insetInlineEnd = typeof o.end === 'number' ? o.end + 'px' : o.end;
    return r;
  };
  M.arc = (ctx, o) => {
    o = Object.assign({ r: 520, end: -260, bottom: -260, w: 2 }, o || {});
    return `<div aria-hidden="true" style="${st(Object.assign(pos(ctx, o), { width: o.r * 2 + 'px', height: o.r * 2 + 'px', borderRadius: '50%', border: o.w + 'px solid ' + (o.color || ctx.pal.arc), zIndex: 0 }))}"></div>`;
  };
  M.glow = (ctx, o) => {
    o = Object.assign({ size: 640 }, o || {});
    return `<div aria-hidden="true" style="${st(Object.assign(pos(ctx, o), { width: o.size + 'px', height: o.size + 'px', borderRadius: '50%', background: `radial-gradient(circle, ${o.color || ctx.pal.glow} 0%, rgba(0,0,0,0) 68%)`, zIndex: 0 }))}"></div>`;
  };
  /* glowing star as an in-flow element */
  B.glowStar = (ctx, size, o) => {
    o = o || {};
    const glow = ctx.palKey === 'light' ? 'rgba(190,218,247,.95)' : 'rgba(97,114,181,.75)';
    const glow2 = ctx.palKey === 'light' ? 'rgba(221,235,252,.6)' : 'rgba(43,51,88,.55)';
    return `<div aria-hidden="true" style="${st({ position: 'relative', width: size + 'px', height: size + 'px', flex: 'none', alignSelf: o.self || 'center', borderRadius: '50%', background: `radial-gradient(circle, ${glow} 0%, ${glow2} 42%, rgba(0,0,0,0) 70%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' })}">${E.starGrad(ctx, Math.round(size * 0.48))}</div>`;
  };
  M.sparkles = (ctx, o) => {
    o = Object.assign({ s: 1 }, o || {});
    const s = o.s, c = o.color || ctx.pal.star, c2 = o.color2 || ctx.pal.starSoft;
    return `<div aria-hidden="true" style="${st(Object.assign(pos(ctx, o), { width: 150 * s + 'px', height: 150 * s + 'px', zIndex: 0 }))}">` +
      `<div style="position:absolute;top:${38 * s}px;inset-inline-start:${10 * s}px">${E.star(84 * s, c)}</div>` +
      `<div style="position:absolute;top:0;inset-inline-start:${94 * s}px">${E.star(40 * s, c2)}</div>` +
      `<div style="position:absolute;top:${110 * s}px;inset-inline-start:${110 * s}px">${E.star(26 * s, c)}</div></div>`;
  };
  B.sparkles = (ctx, s, o) => `<div style="position:relative;width:${150 * s}px;height:${150 * s}px;flex:none;align-self:${(o && o.self) || 'flex-start'}">${M.sparkles(ctx, { s, top: 0, start: 0, color: o && o.color })}</div>`;

  /* Harlequin pattern — solid violet diamonds, a sparkle inside alternating diamonds */
  M.harlequin = (ctx, o) => {
    o = Object.assign({ dw: 96, dh: 128, op: 0.48 }, o || {});
    const id = uid('hq');
    const { dw, dh } = o;
    const u = dw / 2, v = dh / 2; // lattice units
    let shapes = '';
    for (let k = -1; k <= 5; k++) for (let l = -1; l <= 5; l++) {
      // argyle: diamonds sit on the lattice points with k and l both even; the odd points stay surface
      if (((k % 2) + 2) % 2 !== 0 || ((l % 2) + 2) % 2 !== 0) continue;
      const cx = k * u, cy = l * v;
      shapes += `<path d="M${cx} ${cy - v}L${cx + u} ${cy}L${cx} ${cy + v}L${cx - u} ${cy}Z" fill="${o.color || ctx.pal.pat}"/>`;
      if ((((k / 2 + l / 2) % 2) + 2) % 2 === 0) {
        const ss = Math.min(dw, dh) * 0.42;
        shapes += `<path transform="translate(${cx - ss / 2} ${cy - ss / 2}) scale(${ss / 24})" d="${STAR_D}" fill="${o.star || ctx.pal.patStar}"/>`;
      }
    }
    const svg = `<svg aria-hidden="true" width="100%" height="100%" style="display:block"><defs><pattern id="${id}" width="${dw * 2}" height="${dh * 2}" patternUnits="userSpaceOnUse">${shapes}</pattern></defs><rect width="100%" height="100%" fill="url(#${id})"/></svg>`;
    return `<div aria-hidden="true" style="${st(Object.assign(pos(ctx, o), { width: o.width || '100%', height: o.height || '100%', opacity: o.op, zIndex: 0, overflow: 'hidden', borderRadius: o.radius }))}">${svg}</div>`;
  };
  /* Star dotted line */
  B.dotline = (ctx, o) => {
    o = Object.assign({ n: 24, every: 8, gap: 26, color: ctx.pal.line2, star: ctx.pal.brand }, o || {});
    let h = '';
    for (let i = 0; i < o.n; i++) h += (i % o.every === o.every - 1) ? E.star(30, o.star) : `<span style="width:7px;height:7px;border-radius:50%;background:${o.color};flex:none"></span>`;
    return `<div aria-hidden="true" style="${st({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'stretch', height: '30px', flex: 'none', overflow: 'hidden', gap: '10px' })}">${h}</div>`;
  };
  /* Halftone field — sparkles fading toward one edge */
  M.halftone = (ctx, o) => {
    o = Object.assign({ cols: 9, rows: 6, cell: 64, fade: 'down', color: ctx.pal.brand }, o || {});
    let cells = '';
    for (let r = 0; r < o.rows; r++) for (let c = 0; c < o.cols; c++) {
      const t = o.fade === 'down' ? r / (o.rows - 1) : o.fade === 'up' ? 1 - r / (o.rows - 1) : c / (o.cols - 1);
      const sz = Math.max(4, Math.round(o.cell * 0.62 * (1 - t * 0.85)));
      cells += `<div style="display:flex;align-items:center;justify-content:center;width:${o.cell}px;height:${o.cell}px;opacity:${(1 - t * 0.7).toFixed(2)}">${E.star(sz, o.color)}</div>`;
    }
    return `<div aria-hidden="true" style="${st(Object.assign(pos(ctx, o), { display: 'grid', gridTemplateColumns: `repeat(${o.cols}, ${o.cell}px)`, zIndex: 0, opacity: o.op ?? 0.9 }))}">${cells}</div>`;
  };

  /* Image card (Figma: gradient panel, one star, caption) */
  B.imageCard = (ctx, o) => {
    o = o || {};
    const lightCard = ctx.palKey === 'light';
    const bg = o.bg || (lightCard ? 'linear-gradient(150deg,#7B88BF 0%,#A9B3D8 45%,#CFE2F8 100%)' : 'linear-gradient(160deg,#4E5C96 0%,#2B3358 45%,#151A2B 100%)');
    const capColor = lightCard ? '#0E121C' : '#FFFFFF';
    const capField = o.captionField || fieldOf(ctx, ctx.c && ctx.c.project ? 'project' : 'overline');
    const cap = o.caption ? `<div data-field="${capField}" style="${tf(T.label(ctx), capColor, { position: 'absolute', bottom: '32px', insetInlineStart: '36px', insetInlineEnd: '36px' })}">${esc(o.caption)}</div>` : '';
    const star = o.noStar ? '' : `<div style="position:absolute;top:44px;${o.starStart ? 'inset-inline-start' : 'inset-inline-end'}:48px">${E.star(o.starSize || 72, '#FFFFFF', { filter: 'drop-shadow(0 0 18px rgba(255,255,255,.65))' })}</div>`;
    return `<div aria-hidden="${o.caption ? 'false' : 'true'}" style="${st({ position: 'relative', flex: o.flex || 'none', width: o.w || '100%', height: o.h ? o.h + 'px' : '100%', minHeight: o.minh, borderRadius: (o.r ?? 32) + 'px', background: bg, overflow: 'hidden', alignSelf: 'stretch' })}">${o.inner || ''}${star}${cap}</div>`;
  };

  /* ---------- text fitting (browser) ---------- */
  E.applySize = function (el, lang, i) {
    const lad = el.getAttribute('data-fit');
    const L = LAD[lad][lang];
    const [s, l] = L[Math.max(0, Math.min(i, L.length - 1))];
    el.style.fontSize = s + 'px';
    el.style.lineHeight = l + 'px';
    el.setAttribute('data-i', i);
  };
  E.fit = function (root) {
    if (!root) return { ok: true };
    const lang = root.getAttribute('data-lang') || 'en';
    const items = [...root.querySelectorAll('[data-fit]')];
    const regions = [...root.querySelectorAll('[data-fitregion]')];
    regions.forEach((r) => { if (!r.hasAttribute('data-g0')) { r.setAttribute('data-g0', r.style.gap || ''); r.setAttribute('data-p0', r.style.padding || ''); } });
    const lines = (el) => { const lh = parseFloat(el.style.lineHeight) || 1; return Math.round(el.scrollHeight / lh); };
    const slack = (r) => { let m = 0; r.querySelectorAll('[data-fit]').forEach((el) => { if (el.style.display !== 'none') m = Math.max(m, parseFloat(el.style.fontSize) || 0); }); return Math.max(6, Math.round(m * 0.2)); };
    const outside = (r) => {
      const R = r.getBoundingClientRect(), k = R.height / (r.offsetHeight || 1), tol = slack(r) * k;
      for (const ch of r.children) { const C = ch.getBoundingClientRect(); if (C.height && (C.top < R.top - tol || C.bottom > R.bottom + tol)) return true; }
      return false;
    };
    // 6px of slack: a last line's glyph box can sit a few px past its line box (font ascent/descent), which is not overflow
    const over = () => regions.some((r) => r.scrollHeight > r.clientHeight + slack(r) || r.scrollWidth > r.clientWidth + 1 || outside(r))
      || items.some((el) => { const ml = +el.getAttribute('data-ml'); return (ml && lines(el) > ml) || el.scrollWidth > el.clientWidth + 1; });
    const can = (el) => +el.getAttribute('data-i') < +el.getAttribute('data-min');
    let guard = 0;
    while (over() && guard++ < 40) {
      // items breaking their own line limit / width first
      let pick = items.find((el) => can(el) && ((+el.getAttribute('data-ml') && lines(el) > +el.getAttribute('data-ml')) || el.scrollWidth > el.clientWidth + 1));
      if (!pick) {
        // shrink whatever takes the most height; display text is protected a little
        let best = -1;
        // hierarchy guard: display text never drops below 1.25x the largest body text while body can still shrink
        const vis = items.filter((el) => el.style.display !== 'none');
        const bodyMax = Math.max(0, ...vis.filter((el) => el.getAttribute('data-pr') !== '1').map((el) => parseFloat(el.style.fontSize) || 0));
        const bodyCan = vis.some((el) => el.getAttribute('data-pr') !== '1' && can(el));
        const nextSize = (el) => { const L = LAD[el.getAttribute('data-fit')][lang]; const j = Math.min(+el.getAttribute('data-i') + 1, L.length - 1); return L[j][0]; };
        vis.forEach((el) => {
          if (!can(el)) return;
          const pr1 = el.getAttribute('data-pr') === '1';
          if (pr1 && bodyCan && el.getAttribute('data-fit') !== 'n' && nextSize(el) < bodyMax * 1.25) return;
          // among body-level text, the larger type gives way first so sizes converge
          const fsMax = Math.max(1, ...vis.filter((e) => e.getAttribute('data-pr') !== '1' && can(e)).map((e) => parseFloat(e.style.fontSize) || 0));
          const w = el.offsetHeight * (pr1 ? 0.75 : Math.pow((parseFloat(el.style.fontSize) || fsMax) / fsMax, 2));
          if (w > best) { best = w; pick = el; }
        });
      }
      if (!pick) break;
      E.applySize(pick, lang, +pick.getAttribute('data-i') + 1);
    }
    const dropped = [];
    if (over()) {
      // stage 2: tighten the rhythm of every region
      regions.forEach((r) => {
        const g = parseFloat(r.style.gap) || 0; r.style.gap = Math.round(g * 0.55) + 'px';
        const cs = r.style.padding; if (cs) r.style.padding = cs.replace(/(\d+(\.\d+)?)px/g, (m, n) => Math.round(parseFloat(n) * 0.4) + 'px');
      });
    }
    if (over()) {
      // stage 3: hide optional text, lowest priority first
      const drops = items.filter((el) => el.hasAttribute('data-drop')).sort((a, b) => +a.getAttribute('data-drop') - +b.getAttribute('data-drop'));
      for (const el of drops) {
        if (!over()) break;
        el.style.display = 'none';
        dropped.push(el.getAttribute('data-role') || 'text');
      }
    }
    const ok = !over();
    root.setAttribute('data-overflow', ok ? '0' : '1');
    root.setAttribute('data-dropped', dropped.join(','));
    return { ok, dropped };
  };

  /* refit after the text changed: restore the designed sizes and rhythm, then fit again */
  E.refit = function (root) {
    if (!root) return { ok: true };
    const lang = root.getAttribute('data-lang') || 'en';
    root.querySelectorAll('[data-fit]').forEach((el) => { el.style.display = ''; E.applySize(el, lang, +el.getAttribute('data-i0')); });
    root.querySelectorAll('[data-fitregion]').forEach((r) => { if (r.hasAttribute('data-g0')) { r.style.gap = r.getAttribute('data-g0'); r.style.padding = r.getAttribute('data-p0'); } });
    const res = E.fit(root);
    // how far the text had to shrink, 0..1 (for a gentle warning)
    let worst = 0;
    root.querySelectorAll('[data-fit]').forEach((el) => { const i0 = +el.getAttribute('data-i0'), i = +el.getAttribute('data-i'), mn = +el.getAttribute('data-min'); if (mn > i0) worst = Math.max(worst, (i - i0) / (mn - i0)); });
    res.shrink = worst;
    return res;
  };

  /* ---------- frame ---------- */
  E.frame = function (ctx, inner, layers, o) {
    o = o || {};
    const style = st({
      position: 'relative', width: ctx.W + 'px', height: ctx.H + 'px', overflow: 'hidden', background: ctx.bg,
      direction: ctx.dir, color: ctx.pal.text, boxSizing: 'border-box', fontFamily: fs(ctx), WebkitFontSmoothing: 'antialiased',
    });
    const pad = o.pad ?? ctx.M;
    return `<div class="wj-frame" data-lang="${ctx.lang}" lang="${ctx.lang}" dir="${ctx.dir}" style="${style}">${layers || ''}` +
      `<div style="${st({ position: 'relative', zIndex: 1, boxSizing: 'border-box', height: '100%', padding: typeof pad === 'number' ? pad + 'px' : pad, display: 'flex', flexDirection: 'column', gap: o.gap || '0px' })}">${inner}</div></div>`;
  };
  /* header row: overline + mark */
  E.header = function (ctx, o) {
    o = o || {};
    const over = o.over === undefined ? B.over(ctx, ctx.c.overline) : o.over;
    const mark = o.noMark ? '' : E.mark(o.markSize || 64, o.markColor || ctx.pal.mark);
    if (o.center) return `<div style="display:flex;flex-direction:column;align-items:center;gap:28px;flex:none">${mark}${over}</div>`;
    const left = o.markFirst ? mark : over || '<span></span>';
    const right = o.markFirst ? (over || '<span></span>') : mark;
    return `<div style="${st({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flex: 'none', minHeight: '64px' })}">${left}${right}</div>`;
  };
  E.footer = function (ctx, o) {
    o = o || {};
    const left = o.left !== undefined ? o.left : B.sig(ctx);
    const right = o.right || '';
    if (o.center) return `<div style="display:flex;flex-direction:column;align-items:center;gap:16px;flex:none">${left}${right}</div>`;
    return `<div style="${st({ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flex: 'none' })}">${left || '<span></span>'}${right}</div>`;
  };
  /* a fitted region holding a vertical stack */
  E.region = function (inner, o) {
    o = o || {};
    const safe = (v) => (v === 'center' || v === 'flex-end' ? 'safe ' + v : v);
    return `<div data-fitregion="1" style="${st({ flex: o.flex || '1 1 0', minHeight: '0', minWidth: '0', overflow: 'hidden', display: 'flex', flexDirection: o.row ? 'row' : 'column', justifyContent: safe(o.justify || 'flex-start'), alignItems: safe(o.align || 'stretch'), gap: (o.gap ?? 32) + 'px', padding: o.pad, textAlign: o.talign, width: o.width, height: o.height })}">${inner}</div>`;
  };
  E.stack = function (inner, o) {
    o = o || {};
    return `<div style="${st({ display: 'flex', flexDirection: 'column', gap: (o.gap ?? 28) + 'px', alignItems: o.align || 'stretch', flex: o.flex || 'none', minHeight: o.flex ? '0' : undefined, justifyContent: o.justify, maxWidth: o.maxw, width: o.width })}">${inner}</div>`;
  };
  E.lbl = lbl;
  E.uid = uid;
})(typeof window !== 'undefined' ? window : globalThis);

/* Wejdan Social Engine — composition archetypes.
   Each archetype: (ctx, P, p) -> frame HTML. P = category parts, p = design params. */
(function (G) {
  'use strict';
  const E = G.WJ;
  const { B, M, st, mark, frame, header, footer, region, stack } = E;
  const A = (E.A = {});

  /* the standard text stack */
  function text(ctx, P, o) {
    o = o || {};
    const a = o.align || 'start';
    const parts = [];
    if (!o.noLead) parts.push(P.lead({ align: a, glyph: o.glyph }));
    if (!o.noOver && P.over) parts.push(B.over(ctx, P.over, { align: a, color: o.overColor }));
    if (!o.noTitle) parts.push(P.title(o.cls || 'l', { align: a, ml: o.ml, color: o.tc, maxw: o.tmaxw }));
    if (!o.noBody) parts.push(P.body({ align: a, maxw: o.bmaxw, cls: o.bcls, color: o.bc }));
    if (!o.noExtra) parts.push(P.extra({ align: a, style: o.xs || (ctx.p && ctx.p.xs), compact: o.compact }));
    if (o.meta) parts.push(P.meta({ align: a }));
    return parts.filter(Boolean).join('');
  }
  E.text = text;
  const alignItems = (a) => (a === 'center' ? 'center' : 'stretch');

  /* ======================= From the Figma masters ======================= */

  // LinkedIn 01 / X 01 — soft surface, arc bottom-end
  A.arc = (ctx, P, p) => {
    const layers = M.arc(ctx, ctx.land ? { r: 470, end: -150, bottom: -470 } : { r: 470, end: -470, bottom: -170 });
    const inner = header(ctx, { over: B.over(ctx, P.over) }) +
      region(text(ctx, P, { noOver: true, cls: p.cls || 'l', meta: true, bmaxw: ctx.land ? '62%' : '92%', tmaxw: ctx.land ? '64%' : undefined }), { pad: ctx.land ? '72px 0 24px' : '150px 0 32px', gap: 30 }) +
      footer(ctx);
    return frame(ctx, inner, layers);
  };

  // LinkedIn 02/08 — centred glow star
  A.centerStar = (ctx, P, p) => {
    if (ctx.land) {
      const inner = region(
        `<div style="display:flex;align-items:center;gap:72px;flex:1;min-height:0">${B.glowStar(ctx, 470)}` +
        stack(text(ctx, P, { cls: 'm', meta: true }), { gap: 26, flex: '1 1 0' }) + '</div>', { gap: 0 }) + footer(ctx, { right: mark(56, ctx.pal.mark) });
      return frame(ctx, inner, '');
    }
    const inner = `<div style="display:flex;justify-content:center;flex:none">${mark(64, ctx.pal.mark)}</div>` +
      region(B.glowStar(ctx, 400) + text(ctx, P, { align: 'center', cls: 'l', meta: true }), { align: 'center', justify: 'flex-start', gap: 28, pad: '24px 0', talign: 'center' }) +
      footer(ctx, { center: true });
    return frame(ctx, inner, '');
  };

  // LinkedIn 05 / X 05 — gradient image card + text
  A.imageCard = (ctx, P, p) => {
    const card = B.imageCard(ctx, { caption: P.caption, h: ctx.land ? undefined : 600, starStart: p.starStart });
    if (ctx.land) {
      const inner = `<div style="display:flex;gap:72px;flex:1;min-height:0">` +
        `<div style="display:flex;flex-direction:column;flex:1 1 0;min-width:0">${region(text(ctx, P, { cls: 'm', meta: true }), { justify: 'center', gap: 26 })}${footer(ctx)}</div>` +
        `<div style="display:flex;flex:0 0 40%">${card}</div></div>`;
      return frame(ctx, inner, '');
    }
    const inner = card + region(text(ctx, P, { cls: 'm', meta: true }), { pad: '48px 0 24px', gap: 24 }) + footer(ctx, { right: mark(56, ctx.pal.mark) });
    return frame(ctx, inner, '');
  };

  // LinkedIn 06 — case-study timeline
  A.timeline = (ctx, P, p) => {
    const inner = header(ctx) +
      region(text(ctx, P, { noOver: true, cls: 'm', xs: 'timeline', meta: true }), { pad: '40px 0 24px', gap: 32 }) + footer(ctx);
    return frame(ctx, inner, '');
  };

  // LinkedIn 04 / X 03 — quote glyph in a glow
  A.quoteGlow = (ctx, P, p) => {
    if (ctx.land) {
      const panel = `<div aria-hidden="true" style="${st({ position: 'absolute', top: 0, bottom: 0, insetInlineStart: 0, width: '30%', background: ctx.palKey === 'light' ? 'linear-gradient(160deg,#9BC4EE 0%,#DCE0EF 100%)' : 'linear-gradient(160deg,#6172B5 0%,#2B3358 100%)', zIndex: 0 })}"></div>`;
      const glyph = `<div style="${st({ position: 'absolute', top: '96px', insetInlineStart: '96px', zIndex: 1 })}">${B.chev(ctx, 120, ctx.palKey === 'light' ? '#2B3358' : '#FFFFFF')}</div>`;
      const inner = `<div style="display:flex;flex-direction:column;flex:1;min-height:0;margin-inline-start:calc(30% + 0px)">` +
        header(ctx) + region(text(ctx, P, { noOver: true, noLead: true, cls: 'm', meta: true }), { justify: 'center', gap: 26 }) + footer(ctx) + '</div>';
      return frame(ctx, inner, panel + glyph);
    }
    const glow = `<div aria-hidden="true" style="${st({ position: 'absolute', top: '40px', insetInlineEnd: '40px', width: '300px', height: '300px', borderRadius: '50%', background: `radial-gradient(circle, ${ctx.palKey === 'light' ? 'rgba(190,218,247,.95)' : 'rgba(97,114,181,.7)'} 0%, rgba(0,0,0,0) 70%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0 })}">${B.chev(ctx, 120, ctx.pal.brand)}</div>`;
    const inner = header(ctx, { noMark: true }) +
      region(text(ctx, P, { noOver: true, noLead: true, cls: 'l', meta: true }) , { pad: '170px 0 24px', gap: 30 }) +
      footer(ctx, { right: mark(56, ctx.pal.mark) });
    return frame(ctx, inner, glow);
  };

  // LinkedIn 07 / X 04 — announcement with the W
  A.announce = (ctx, P, p) => {
    const lightP = ctx.palKey === 'light';
    if (ctx.land) {
      const circle = `<div aria-hidden="true" style="${st({ width: '440px', height: '440px', borderRadius: '50%', flex: 'none', alignSelf: 'center', background: `radial-gradient(circle, ${lightP ? 'rgba(190,218,247,.9)' : 'rgba(97,114,181,.6)'} 0%, rgba(0,0,0,0) 70%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' })}">${mark(200, ctx.pal.mark)}</div>`;
      const inner = `<div style="display:flex;gap:56px;flex:1;min-height:0"><div style="display:flex;flex-direction:column;flex:1 1 0;min-width:0">` +
        region(text(ctx, P, { cls: 'm', meta: true }), { justify: 'center', gap: 26 }) + footer(ctx) + `</div>${circle}</div>`;
      return frame(ctx, inner, '');
    }
    const panelBg = lightP ? 'linear-gradient(150deg,#BEDAF7 0%,#EAF2FB 55%,#FFFFFF 100%)' : 'radial-gradient(70% 70% at 30% 30%, rgba(97,114,181,.55) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg,#1E243F 0%,#0E121C 100%)';
    const panel = `<div style="${st({ position: 'relative', margin: `-${ctx.M}px -${ctx.M}px 0`, height: '660px', flex: 'none', background: panelBg, padding: `${ctx.M}px`, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' })}">` +
      `${P.lead({ align: 'start' }) || '<span></span>'}${mark(200, ctx.pal.mark)}</div>`;
    const inner = panel + region(text(ctx, P, { noLead: true, cls: 'm', meta: true }), { pad: '56px 0 24px', gap: 24 }) + footer(ctx);
    return frame(ctx, inner, '');
  };

  // LinkedIn 03 / X 02 — chart card
  A.chart = (ctx, P, p) => {
    const chart = P.hero('chart', {});
    if (!chart) {
      // no before/after numbers to plot: a calm text composition, no empty card slot
      const inner = header(ctx) + region(text(ctx, P, { noOver: true, cls: 'l', meta: true, tmaxw: ctx.land ? '74%' : undefined, bmaxw: ctx.land ? '64%' : undefined }), { justify: 'center', gap: 32, pad: '24px 0' }) + footer(ctx);
      return frame(ctx, inner, '');
    }
    if (ctx.land) {
      const inner = header(ctx) + `<div style="display:flex;gap:64px;flex:1;min-height:0;padding-top:40px">` +
        region(text(ctx, P, { noOver: true, cls: 'm', noExtra: true }) + P.meta({}), { gap: 24, justify: 'flex-start' }) +
        `<div style="flex:0 0 46%;display:flex;flex-direction:column;justify-content:center">${chart}</div></div>` + footer(ctx);
      return frame(ctx, inner, '');
    }
    const inner = header(ctx) + region(text(ctx, P, { noOver: true, cls: 'm', noExtra: true }) + chart + P.meta({}), { pad: '64px 0 24px', gap: 32 }) + footer(ctx);
    return frame(ctx, inner, '');
  };

  // X 06 — gradient band, text below
  A.band = (ctx, P, p) => {
    const lightP = ctx.palKey === 'light';
    const band = `<div aria-hidden="true" style="${st({ position: 'absolute', top: 0, insetInlineStart: 0, insetInlineEnd: 0, height: ctx.land ? '48%' : '44%', background: lightP ? 'linear-gradient(120deg,#A9B3D8 0%,#DCE0EF 50%,#EAF2FB 100%)' : 'linear-gradient(120deg,#4E5C96 0%,#2B3358 50%,#1A1F3A 100%)', zIndex: 0 })}"></div>`;
    const inner = header(ctx, { over: '' }) + region(text(ctx, P, { cls: ctx.land ? 's' : 'm', meta: true }), { justify: 'flex-end', gap: 22, pad: ctx.land ? '0 0 24px' : '0 0 32px' }) + footer(ctx);
    return frame(ctx, inner, band);
  };

  // X 07 — centred with a pill, fade at the base
  A.centerPill = (ctx, P, p) => {
    const lightP = ctx.palKey === 'light';
    const fade = `<div aria-hidden="true" style="${st({ position: 'absolute', insetInlineStart: 0, insetInlineEnd: 0, bottom: 0, height: '46%', background: lightP ? 'linear-gradient(180deg,rgba(255,255,255,0) 0%,#BEDAF7 100%)' : 'linear-gradient(180deg,rgba(0,0,0,0) 0%,#4E5C96 100%)', zIndex: 0 })}"></div>`;
    const lead = P.lead({ align: 'center' }) || B.pill(ctx, P.over, { self: 'center', field: E.fieldOf(ctx, 'overline') });
    const inner = `<div style="display:flex;justify-content:center;flex:none">${mark(56, ctx.pal.mark)}</div>` +
      region(lead + P.title(ctx.land ? 'm' : 'l', { align: 'center' }) + P.body({ align: 'center', maxw: '78%' }) + P.extra({ align: 'center', compact: true }) + P.meta({ align: 'center' }), { align: 'center', justify: 'center', gap: 28, talign: 'center' }) +
      footer(ctx, { center: true });
    return frame(ctx, inner, fade);
  };

  /* ======================= Plain (density 0–1) ======================= */

  A.plainTop = (ctx, P, p) => {
    const inner = header(ctx) + B.hair(ctx, { margin: '40px 0 0' }) +
      region(text(ctx, P, { noOver: true, cls: p.cls || 'l', meta: true }), { pad: '64px 0 32px', gap: 32 }) +
      B.hair(ctx, { marginBottom: '32px' }) + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.plainBottom = (ctx, P, p) => {
    const inner = header(ctx) + region(text(ctx, P, { noOver: true, cls: p.cls || 'xl', meta: true }), { justify: 'flex-end', gap: 30, pad: '32px 0 56px' }) + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.plainCenter = (ctx, P, p) => {
    const inner = `<div style="display:flex;justify-content:center;flex:none">${mark(56, ctx.pal.mark)}</div>` +
      region(B.over(ctx, P.over, { align: 'center' }) + B.rule(ctx, { alignSelf: 'center', width: '64px' }) + text(ctx, P, { noOver: true, align: 'center', cls: p.cls || 'l', meta: true, bmaxw: '84%' }), { align: 'center', justify: 'center', gap: 32, talign: 'center' }) +
      footer(ctx, { center: true });
    return frame(ctx, inner, '');
  };

  A.plainGiant = (ctx, P, p) => {
    const inner = header(ctx) + region(text(ctx, P, { noOver: true, cls: 'poster', ml: ctx.land ? 3 : 5, meta: true, compact: true }), { justify: 'center', gap: 28, pad: '24px 0' }) + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.plainColumns = (ctx, P, p) => {
    if (ctx.land) {
      const inner = header(ctx) + `<div style="display:flex;gap:64px;flex:1;min-height:0;padding:56px 0 40px">` +
        (() => { const ex = P.extra({ compact: true }); return ex
          ? region(P.lead({}) + P.title('m', {}) + P.body({ cls: 'm' }), { flex: '1 1 0', justify: 'flex-end', gap: 22 }) + `<div style="width:1px;background:${ctx.pal.line};flex:none"></div>` + region(ex + P.meta({}), { flex: '1.1 1 0', justify: 'flex-end', gap: 22 })
          : region(P.lead({}) + P.title('m', {}), { flex: '1.15 1 0', justify: 'flex-end', gap: 24 }) + `<div style="width:1px;background:${ctx.pal.line};flex:none"></div>` + region(P.body({}) + P.meta({}), { flex: '1 1 0', justify: 'flex-end', gap: 26 }); })() + '</div>' + footer(ctx);
      return frame(ctx, inner, '');
    }
    const inner = header(ctx) +
      region(P.lead({}) + P.title('l', {}), { justify: 'flex-end', gap: 24, pad: '24px 0 40px' }) + B.hair(ctx) +
      region(P.body({}) + P.extra({ compact: true }) + P.meta({}), { gap: 26, pad: '40px 0 24px' }) + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.plainFramed = (ctx, P, p) => {
    const inset = ctx.land ? 40 : 44;
    const border = `<div aria-hidden="true" style="${st({ position: 'absolute', top: inset + 'px', bottom: inset + 'px', insetInlineStart: inset + 'px', insetInlineEnd: inset + 'px', border: `2px solid ${ctx.pal.line2}`, borderRadius: '8px', zIndex: 0 })}"></div>`;
    const inner = header(ctx) + region(text(ctx, P, { noOver: true, cls: p.cls || 'l', meta: true }), { justify: 'center', gap: 30, pad: '24px 24px' }) + footer(ctx);
    return frame(ctx, inner, border, { pad: (ctx.M + 24) + 'px' });
  };

  A.plainCard = (ctx, P, p) => {
    const card = `<div style="${st({ flex: '1 1 0', minHeight: 0, display: 'flex', flexDirection: 'column', background: ctx.pal.card, borderRadius: '32px', padding: ctx.land ? '36px 56px' : '72px 64px', boxSizing: 'border-box' })}">` +
      region(text(ctx, P, { cls: p.cls || 'm', meta: true }), { justify: 'center', gap: ctx.land ? 20 : 28 }) + '</div>';
    const inner = header(ctx, { over: '' }) + `<div style="display:flex;flex:1;min-height:0;padding:${ctx.land ? '20px 0 24px' : '40px 0'}">${card}</div>` + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.plainEditorial = (ctx, P, p) => {
    const num = ctx.ar && p.num === '→' ? '←' : (p.num || '01');
    const side = `<div style="${st({ flex: ctx.land ? '0 0 220px' : '0 0 170px', display: 'flex', flexDirection: 'column', gap: '20px', borderInlineEnd: `1px solid ${ctx.pal.line}`, paddingInlineEnd: '32px' })}">` +
      `<div style="${st({ fontFamily: E.fs(ctx), fontWeight: 300, fontSize: '96px', lineHeight: '96px', color: ctx.pal.brand, letterSpacing: '-0.03em', unicodeBidi: 'isolate' })}">${num}</div>${B.over(ctx, P.over)}</div>`;
    const inner = `<div style="display:flex;justify-content:flex-end;flex:none">${mark(56, ctx.pal.mark)}</div>` +
      `<div style="display:flex;gap:48px;flex:1;min-height:0;padding:40px 0">${side}` +
      region(text(ctx, P, { noOver: true, cls: p.cls || 'm', meta: true }), { gap: 28, justify: 'flex-start' }) + '</div>' + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.plainInvert = (ctx, P, p) => {
    const inv = ctx.pal.inv, invT = ctx.pal.invText;
    const sub = Object.assign({}, ctx, { pal: Object.assign({}, ctx.palKey === 'light' ? E.PAL.dark : E.PAL.light), palKey: ctx.palKey === 'light' ? 'dark' : 'light' });
    const Pi = P.withCtx(sub);
    const block = `<div style="${st({ margin: ctx.land ? `0 -${ctx.M}px 0` : `0 -${ctx.M}px`, padding: ctx.land ? `36px ${ctx.M}px` : `72px ${ctx.M}px`, background: inv, color: invT, flex: ctx.land ? '1 1 0' : '0 0 58%', minHeight: 0, display: 'flex', flexDirection: 'column', boxSizing: 'border-box' })}">` +
      region(text(sub, Pi, { noOver: true, cls: p.cls || 'l', meta: true }), { justify: 'flex-end', gap: 28 }) + '</div>';
    const inner = header(ctx) + `<div style="${ctx.land ? 'height:24px;flex:none' : 'flex:1 1 0;min-height:24px'}"></div>` + block + `<div style="height:${ctx.land ? 28 : 40}px;flex:none"></div>` + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.plainMinimal = (ctx, P, p) => {
    const inner = `<div style="flex:none">${mark(56, ctx.pal.mark)}</div>` +
      region(P.lead({}) + P.title(p.cls || 'xl', { ml: ctx.land ? 3 : 6 }) + P.extra({ compact: true }) + P.meta({}), { justify: 'center', gap: 32 }) + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.plainTwoTone = (ctx, P, p) => {
    const lightP = ctx.palKey === 'light';
    const tone = `<div aria-hidden="true" style="${st({ position: 'absolute', top: 0, insetInlineStart: 0, insetInlineEnd: 0, height: ctx.land ? '34%' : '30%', background: lightP ? '#F2F7FE' : '#181C26', borderBottom: `1px solid ${ctx.pal.line}`, zIndex: 0 })}"></div>`;
    const inner = header(ctx) + `<div style="height:${ctx.land ? 90 : 230}px;flex:none"></div>` +
      region(text(ctx, P, { noOver: true, cls: p.cls || 'l', meta: true }), { gap: 30, pad: '24px 0' }) + footer(ctx);
    return frame(ctx, inner, tone);
  };

  A.plainRuled = (ctx, P, p) => {
    // a top rule with index, title large, body under a second rule
    const inner = `<div style="display:flex;align-items:center;gap:24px;flex:none;border-top:2px solid ${ctx.pal.strong};padding-top:28px">${B.over(ctx, P.over)}<span style="flex:1"></span>${mark(56, ctx.pal.mark)}</div>` +
      region(P.lead({}) + P.title(p.cls || 'l', {}) + `<div style="border-top:1px solid ${ctx.pal.line};padding-top:32px;display:flex;flex-direction:column;gap:26px">${P.body({})}${P.extra({ compact: true })}${P.meta({})}</div>`, { justify: 'center', gap: 36, pad: '32px 0' }) +
      footer(ctx);
    return frame(ctx, inner, '');
  };

  /* ======================= Expressive (density 2–4) ======================= */

  A.harlequinBand = (ctx, P, p) => {
    const op = p.op || 0.48;
    if (ctx.land) {
      const pat = M.harlequin(ctx, { top: 0, end: 0, width: '34%', height: '100%', op });
      const inner = `<div style="display:flex;flex-direction:column;flex:1;min-height:0;margin-inline-end:calc(34% + 24px)">` + header(ctx, { noMark: false }) +
        region(text(ctx, P, { noOver: true, cls: 'm', meta: true }), { justify: 'center', gap: 26 }) + footer(ctx) + '</div>';
      return frame(ctx, inner, pat);
    }
    const pat = M.harlequin(ctx, { top: 0, start: 0, height: '36%', op });
    const inner = `<div style="height:${Math.round(ctx.H * 0.36 - ctx.M + 48)}px;flex:none"></div>` + header(ctx) +
      region(text(ctx, P, { noOver: true, cls: 'm', meta: true }), { gap: 28, pad: '40px 0 24px' }) + footer(ctx);
    return frame(ctx, inner, pat);
  };

  A.harlequinCard = (ctx, P, p) => {
    const pat = M.harlequin(ctx, { top: 0, start: 0, op: p.op || 0.16 });
    const card = `<div style="${st({ flex: '1 1 0', minHeight: 0, display: 'flex', flexDirection: 'column', background: ctx.palKey === 'violet' ? '#2B3358' : (ctx.palKey === 'light' ? '#FFFFFF' : '#0E121C'), borderRadius: '40px', padding: ctx.land ? '40px 56px' : '72px 64px', boxSizing: 'border-box', boxShadow: ctx.pal.shadow })}">` +
      header(ctx) + region(text(ctx, P, { noOver: true, cls: 'm', meta: true }), { justify: 'center', gap: 28, pad: '24px 0' }) + footer(ctx) + '</div>';
    return frame(ctx, card, pat, { pad: ctx.land ? '72px' : '80px' });
  };

  A.dotline = (ctx, P, p) => {
    const inner = header(ctx) + `<div style="height:${ctx.land ? 20 : 48}px;flex:none"></div>` + B.dotline(ctx, { n: ctx.land ? 40 : 30 }) +
      region(text(ctx, P, { noOver: true, cls: p.cls || 'l', meta: true }), { justify: 'center', gap: ctx.land ? 22 : 30, pad: ctx.land ? '24px 0' : '40px 0' }) +
      B.dotline(ctx, { n: ctx.land ? 40 : 30, every: 999 }) + `<div style="height:${ctx.land ? 20 : 32}px;flex:none"></div>` + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.halftone = (ctx, P, p) => {
    const op = ctx.palKey === 'light' ? 0.45 : 0.32;
    const ht = M.halftone(ctx, ctx.land ? { top: 0, end: 0, cols: 6, rows: 7, cell: 128, fade: 'side', op } : { top: 0, end: 0, cols: 9, rows: 4, cell: 133, fade: 'down', op });
    const inner = header(ctx, { noMark: true }) +
      region(text(ctx, P, { noOver: true, cls: p.cls || 'l', meta: true, tmaxw: ctx.land ? '58%' : undefined, bmaxw: ctx.land ? '56%' : undefined }), { justify: 'flex-end', gap: 30, pad: '24px 0 40px' }) +
      footer(ctx, { right: mark(56, ctx.pal.mark) });
    return frame(ctx, inner, ht);
  };

  A.auroraSpark = (ctx, P, p) => {
    const inner = header(ctx) +
      region(B.sparkles(ctx, ctx.land ? 0.8 : 1.1) + text(ctx, P, { noOver: true, cls: p.cls || 'xl', meta: true }), { justify: 'flex-end', gap: 30, pad: '24px 0 48px' }) +
      footer(ctx);
    return frame(ctx, inner, '');
  };

  A.cardEcho = (ctx, P, p) => {
    const lightP = ctx.palKey === 'light';
    const off = 16;
    const cardBg = lightP ? '#FFFFFF' : (ctx.palKey === 'violet' ? '#2B3358' : '#181C26');
    const card = `<div style="${st({ position: 'relative', flex: '1 1 0', minHeight: 0, display: 'flex' })}">` +
      `<div aria-hidden="true" style="${st({ position: 'absolute', inset: 0, transform: `translate(${ctx.ar ? -off : off}px, ${off}px)`, borderRadius: '36px', border: `2px solid ${ctx.pal.line2}`, opacity: 0.6 })}"></div>` +
      `<div style="${st({ position: 'relative', flex: '1 1 0', minHeight: 0, display: 'flex', flexDirection: 'column', background: cardBg, borderRadius: '36px', padding: ctx.land ? '36px 56px' : '64px 60px', boxSizing: 'border-box', border: `1px solid ${ctx.pal.line}` })}">` +
      region(text(ctx, P, { cls: 'm', meta: true }), { justify: 'center', gap: ctx.land ? 18 : 26 }) + '</div></div>';
    const inner = header(ctx, { over: '' }) + `<div style="display:flex;flex:1;min-height:0;padding:${ctx.land ? '16px 16px 36px 0' : '40px 16px 56px 0'}">${card}</div>` + footer(ctx);
    return frame(ctx, inner, '');
  };

  A.glowFocal = (ctx, P, p) => {
    const glow = M.glow(ctx, ctx.land ? { size: 1100, top: -250, start: 250 } : { size: 1200, top: 150, start: 0 });
    const inner = header(ctx) + region(text(ctx, P, { noOver: true, align: 'center', cls: p.cls || 'l', meta: true, bmaxw: '82%' }), { align: 'center', justify: 'center', gap: 30, talign: 'center' }) + footer(ctx, { center: true });
    return frame(ctx, inner, glow);
  };

  A.arcEcho = (ctx, P, p) => {
    const r = ctx.land ? 420 : 520;
    const layers = M.arc(ctx, { r, start: -r, top: -r }) + M.arc(ctx, { r: r + 64, start: -(r + 64), top: -(r + 64), color: ctx.pal.line, w: 1 });
    const inner = header(ctx, { markFirst: true, over: B.over(ctx, P.over) }) +
      region(text(ctx, P, { noOver: true, cls: p.cls || 'l', meta: true }), { justify: 'flex-end', gap: 30, pad: '24px 0 48px' }) + footer(ctx);
    return frame(ctx, inner, layers);
  };

  A.colorBlock = (ctx, P, p) => {
    const blockBg = 'linear-gradient(160deg,#6172B5 0%,#4E5C96 55%,#2B3358 100%)';
    const content = p.blockContent === 'number' && P.hero('blockNumber') ? P.hero('blockNumber') : `<div style="display:flex;align-items:center;justify-content:center;flex:1">${E.star(ctx.land ? 200 : 220, '#FFFFFF', { filter: 'drop-shadow(0 0 30px rgba(255,255,255,.55))' })}</div>`;
    if (ctx.land) {
      const block = `<div style="${st({ position: 'absolute', top: 0, bottom: 0, insetInlineStart: 0, width: '38%', background: blockBg, display: 'flex', padding: '96px', boxSizing: 'border-box', zIndex: 0 })}">${content}</div>`;
      const inner = `<div style="display:flex;flex-direction:column;flex:1;min-height:0;margin-inline-start:38%;padding-inline-start:16px">` + header(ctx) +
        region(text(ctx, P, { noOver: true, cls: 'm', meta: true, noTitle: p.blockContent === 'number' }), { justify: 'center', gap: 26 }) + footer(ctx) + '</div>';
      return frame(ctx, inner, block);
    }
    const block = `<div style="${st({ position: 'absolute', top: 0, insetInlineStart: 0, insetInlineEnd: 0, height: '40%', background: blockBg, display: 'flex', padding: '96px', boxSizing: 'border-box', zIndex: 0 })}">${content}</div>`;
    const inner = `<div style="height:${Math.round(ctx.H * 0.40 - ctx.M + 48)}px;flex:none"></div>` + header(ctx) +
      region(text(ctx, P, { noOver: true, cls: 'm', meta: true, noTitle: p.blockContent === 'number' }), { gap: 28, pad: '36px 0 24px' }) + footer(ctx);
    return frame(ctx, inner, block);
  };

  A.bigStar = (ctx, P, p) => {
    const size = ctx.land ? 760 : 900;
    const star = `<div aria-hidden="true" style="${st({ position: 'absolute', top: ctx.land ? '-240px' : '-260px', insetInlineEnd: ctx.land ? '-200px' : '-300px', width: size + 'px', height: size + 'px', zIndex: 0, opacity: ctx.palKey === 'light' ? 0.85 : 0.9 })}">${E.starGrad(ctx, size)}</div>`;
    const inner = header(ctx, { noMark: true }) +
      region(text(ctx, P, { noOver: true, cls: p.cls || 'l', meta: true, tmaxw: ctx.land ? '62%' : undefined, bmaxw: ctx.land ? '58%' : undefined }), { justify: 'flex-end', gap: 30, pad: '24px 0 48px' }) +
      footer(ctx, { right: mark(56, ctx.pal.mark) });
    return frame(ctx, inner, star);
  };

  A.glowCorner = (ctx, P, p) => {
    const glow = M.glow(ctx, { size: ctx.land ? 900 : 1000, top: ctx.land ? -400 : -420, end: ctx.land ? -300 : -380 });
    const st2 = `<div aria-hidden="true" style="${st({ position: 'absolute', top: ctx.land ? '90px' : '110px', insetInlineEnd: ctx.land ? '140px' : '120px', zIndex: 0 })}">${E.starGrad(ctx, ctx.land ? 120 : 150)}</div>`;
    const inner = header(ctx, { noMark: true }) +
      region(text(ctx, P, { noOver: true, cls: p.cls || 'l', meta: true }), { justify: 'flex-end', gap: 30, pad: '24px 0 48px' }) +
      footer(ctx, { right: mark(56, ctx.pal.mark) });
    return frame(ctx, inner, glow + st2);
  };

  A.splitCard = (ctx, P, p) => {
    // the image card fills one half, text the other — expressive version of imageCard
    const card = B.imageCard(ctx, { caption: P.caption, starSize: 110, r: 40 });
    if (ctx.land) {
      const inner = `<div style="display:flex;gap:64px;flex:1;min-height:0"><div style="display:flex;flex:0 0 46%">${card}</div>` +
        `<div style="display:flex;flex-direction:column;flex:1 1 0;min-width:0">${header(ctx, { over: '' })}${region(text(ctx, P, { cls: 'm', meta: true }), { justify: 'center', gap: 26 })}${footer(ctx)}</div></div>`;
      return frame(ctx, inner, '');
    }
    const inner = header(ctx, { over: '' }) + `<div style="display:flex;flex:0 0 46%;padding:32px 0">${card}</div>` +
      region(text(ctx, P, { cls: 'm', meta: true }), { gap: 26, pad: '24px 0' }) + footer(ctx);
    return frame(ctx, inner, '');
  };
})(typeof window !== 'undefined' ? window : globalThis);

/* Wejdan Social Engine — categories, their parts, special archetypes and the design registry. */
(function (G) {
  'use strict';
  const E = G.WJ;
  const { B, M, A, st, esc, mark, frame, header, footer, region, stack, fitEl, T, tf, text } = E;
  const nl = (s) => esc(s).replace(/\n/g, '<br>');
  /* data-field tags let the site edit each printed text in place (paths into the content object) */
  const df = (f) => (f ? ` data-field="${f}"` : '');
  const ix = (arr) => (arr || []).map((r, i) => (r && typeof r === 'object' ? Object.assign({ _i: i }, r) : r));
  const listItems = (arr) => (arr || []).map((x, i) => (typeof x === 'string' ? [x, 'items.' + i] : [x && (x.text || x.title), 'items.' + i + '.' + (x && x.text ? 'text' : 'title')])).filter((p) => p[0]);
  const num = (s) => { const m = String(s || '').replace(/,/g, '').match(/-?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : NaN; };

  /* ---------- extra blocks shared by categories ---------- */
  const X = (E.X = {});
  X.attrib = (ctx, o) => {
    const c = ctx.c; if (!c.author && !c.role) return '';
    const a = o.align === 'center' ? 'center' : 'flex-start';
    return `<div style="${st({ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: a })}">${B.rule(ctx, { width: '64px', marginBottom: '18px', alignSelf: a })}` +
      (c.author ? `<div data-field="author" style="${tf(T.sig(ctx), ctx.pal.text)}">${esc(c.author)}</div>` : '') +
      (c.role ? `<div data-field="role" style="${tf(T.small(ctx), ctx.pal.muted)}">${esc(c.role)}</div>` : '') + '</div>';
  };
  X.timeline = (ctx, o) => {
    const items = ix(ctx.c.items).filter((x) => x && (x.text || x.label));
    if (!items.length) return '';
    const dot = ctx.pal.brand;
    const rows = items.map((it) => `<div style="${st({ position: 'relative', paddingInlineStart: '1.6em', paddingBottom: '0.7em' })}">` +
      `<span style="${st({ position: 'absolute', insetInlineStart: '0.05em', top: '1.55em', width: '0.42em', height: '0.42em', borderRadius: '50%', background: dot })}"></span>` +
      `<div style="${st({ fontFamily: E.fs(ctx), fontWeight: ctx.ar ? 500 : 600, fontSize: '0.78em', lineHeight: '1.5em', color: ctx.pal.accent })}"${df(`items.${it._i}.label`)}>${esc(it.label || '')}</div>` +
      `<div style="${st({ color: ctx.pal.text })}"${df(`items.${it._i}.text`)}>${esc(it.text || '')}</div></div>`).join('');
    const line = `<span aria-hidden="true" style="${st({ position: 'absolute', insetInlineStart: '0.24em', top: '0.4em', bottom: '1.4em', width: '2px', background: ctx.pal.line2 })}"></span>`;
    return fitEl(ctx, 'b', o.compact ? 1 : 0, `<div style="position:relative">${line}${rows}</div>`, { pr: 2 });
  };
  X.list = (ctx, o) => {
    const items = listItems(ctx.c.items);
    if (!items.length) return '';
    const style = o.style || 'num';
    const center = o.align === 'center';
    const rows = items.map(([t, f], i) => {
      const n = String(i + 1).padStart(2, '0');
      let marker;
      if (style === 'dot') marker = `<span style="${st({ width: '0.36em', height: '0.36em', borderRadius: '50%', background: ctx.pal.brand, flex: 'none', marginTop: '0.55em' })}"></span>`;
      else if (style === 'star') marker = `<span style="flex:none;margin-top:0.3em">${E.star(Math.round(0.9 * 32), ctx.pal.brand)}</span>`;
      else marker = `<span style="${st({ fontFamily: E.fs(ctx), fontWeight: 600, color: ctx.pal.brand, flex: 'none', minWidth: '1.6em', fontFeatureSettings: "'tnum' 1" })}">${n}</span>`;
      const border = style === 'line' ? `border-top:1px solid ${ctx.pal.line};padding-top:0.55em;` : '';
      return `<div style="${border}display:flex;gap:0.7em;align-items:flex-start;${center ? 'justify-content:center;text-align:start' : ''}">${style === 'line' ? `<span style="${st({ fontFamily: E.fs(ctx), fontWeight: 600, color: ctx.pal.accent, flex: 'none', minWidth: '1.6em' })}">${n}</span>` : marker}<span${df(f)} style="color:${ctx.pal.text}">${esc(t)}</span></div>`;
    }).join('');
    return fitEl(ctx, 'b', 0, `<div style="display:flex;flex-direction:column;gap:0.55em;${center ? 'align-items:center' : ''}">${rows}</div>`, { pr: 2 });
  };
  X.table = (ctx, o) => {
    const rows = ix(ctx.c.rows).filter((r) => r && (r.before || r.after));
    if (!rows.length) return '';
    const bl = ctx.c.beforeLabel || E.lbl(ctx, 'before'), al = ctx.c.afterLabel || E.lbl(ctx, 'after');
    const head = `<div style="display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:0.6em;font-family:${E.fs(ctx)};font-weight:${ctx.ar ? 500 : 600};font-size:0.72em;color:${ctx.pal.muted};padding-bottom:0.4em;border-bottom:1px solid ${ctx.pal.line}"><span></span><span data-field="beforeLabel">${esc(bl)}</span><span data-field="afterLabel" style="color:${ctx.pal.accent}">${esc(al)}</span></div>`;
    const body = rows.map((r) => `<div style="display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:0.6em;align-items:baseline;padding:0.45em 0;border-bottom:1px solid ${ctx.pal.line}">` +
      `<span${df(`rows.${r._i}.label`)} style="color:${ctx.pal.sec};font-size:0.82em">${esc(r.label || '')}</span>` +
      `<span${df(`rows.${r._i}.before`)} style="font-family:${E.fs(ctx)};font-weight:500;color:${ctx.pal.muted}">${esc(r.before || '')}</span>` +
      `<span${df(`rows.${r._i}.after`)} style="font-family:${E.fs(ctx)};font-weight:600;color:${ctx.pal.text};font-size:1.25em">${esc(r.after || '')}</span></div>`).join('');
    return fitEl(ctx, 'b', 0, `<div style="align-self:stretch">${head}${body}</div>`, { pr: 2 });
  };

  /* Figma chart card — a line from the "before" value to the "after" value */
  X.chart = (ctx, o) => {
    o = o || {};
    const r = (ctx.c.rows || [])[0];
    if (!r) return '';
    const v1 = num(r.before), v2 = num(r.after);
    if (!isFinite(v1) || !isFinite(v2)) return '';
    const W = 1000, H = 330, pad = 70;
    const max = Math.max(v1, v2) * 1.15 || 1;
    const y = (v) => H - 40 - (v / max) * (H - 110);
    const x1 = pad, x2 = W - pad;
    const ar = ctx.ar;
    const xa = ar ? x2 : x1, xb = ar ? x1 : x2;
    const sky = '#BEDAF7';
    const svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;overflow:visible" aria-hidden="true">` +
      `<defs><linearGradient id="cg${E.uid('')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6172B5" stop-opacity=".55"/><stop offset="1" stop-color="#6172B5" stop-opacity=".05"/></linearGradient></defs>` +
      `<line x1="${pad - 20}" x2="${W - pad + 20}" y1="${H - 40}" y2="${H - 40}" stroke="rgba(255,255,255,.35)" stroke-width="2"/>` +
      `<path d="M${xa} ${y(v1)} L${xb} ${y(v2)} L${xb} ${H - 40} L${xa} ${H - 40} Z" fill="rgba(97,114,181,.35)"/>` +
      `<line x1="${xa}" x2="${xb}" y1="${y(v1)}" y2="${y(v2)}" stroke="${sky}" stroke-width="5"/>` +
      `<circle cx="${xa}" cy="${y(v1)}" r="12" fill="${sky}"/><circle cx="${xb}" cy="${y(v2)}" r="12" fill="${sky}"/></svg>`;
    const lab = (t, f) => `<span${df(f)} style="${tf(T.label(ctx), '#FFFFFF')}">${esc(t)}</span>`;
    const val = (t, f) => `<span${df(f)} style="font-family:${E.fs(ctx)};font-weight:600;font-size:64px;line-height:72px;color:#FFFFFF">${esc(t)}</span>`;
    return `<div style="${st({ position: 'relative', borderRadius: '32px', background: 'linear-gradient(180deg,#0E121C 0%,#1E243F 70%,#2B3358 100%)', padding: '40px 44px 36px', display: 'flex', flexDirection: 'column', gap: '18px', flex: 'none', boxSizing: 'border-box' })}">` +
      `<div style="${tf(T.label(ctx), '#FFFFFF')}"><span data-field="rows.0.label">${esc(r.label || '')}</span>${ctx.c.n ? ' · ' + esc(ctx.c.n) : ''}</div>` +
      `<div style="display:flex;justify-content:space-between;align-items:flex-end">${val(r.before, 'rows.0.before')}${val(r.after, 'rows.0.after')}</div>${svg}` +
      `<div style="display:flex;justify-content:space-between">${lab(ctx.c.beforeLabel || E.lbl(ctx, 'before'), 'beforeLabel')}${lab(ctx.c.afterLabel || E.lbl(ctx, 'after'), 'afterLabel')}</div></div>`;
  };

  /* ---------- categories ---------- */
  const CATS = (E.CATS = {});
  const def = (key, o) => (CATS[key] = Object.assign({ key }, o));

  def('insight', { n: ['Insight', 'إنسايت'] });
  def('quote', {
    n: ['Quote', 'اقتباس'],
    lead: (ctx, o) => B.glyph(ctx, ctx.land ? 200 : 260, ctx.pal.brand),
    title: (ctx, cls, o) => fitEl(ctx, 'q', cls, nl(ctx.c.title), { align: o.align, color: o.color || ctx.pal.text, ml: o.ml, maxw: o.maxw, pr: 1, field: 'title' }),
    body: () => '',
    extra: (ctx, o) => X.attrib(ctx, o),
  });
  def('research', { n: ['Research finding', 'نتيجة بحث'] });
  def('stat', {
    n: ['Statistic', 'رقم'],
    title: (ctx, cls, o) => {
      const map = { poster: 0, xl: 0, l: 1, m: 2, s: 3, xs: 4 };
      const n = fitEl(ctx, 'n', map[cls] ?? 1, esc(ctx.c.stat || ''), { align: o.align, color: o.color || ctx.pal.text, nowrap: true, pr: 1, field: 'stat' });
      const lab = ctx.c.statLabel ? `<div data-field="statLabel" style="${tf(T.over(ctx), o.color ? o.color : ctx.pal.accent, { textAlign: o.align, maxWidth: '90%' })}">${esc(ctx.c.statLabel)}</div>` : '';
      return `<div style="display:flex;flex-direction:column;gap:12px;${o.align === 'center' ? 'align-items:center' : ''}">${n}${lab}</div>`;
    },
    body: (ctx, o) => {
      const t = ctx.c.title ? fitEl(ctx, 'd', 5, nl(ctx.c.title), { align: o.align, color: o.color || ctx.pal.text, w: 700, pr: 1, min: 6, field: 'title' }) : '';
      const b = ctx.c.body ? fitEl(ctx, 'b', 1, nl(ctx.c.body), { align: o.align, color: ctx.pal.sec, drop: 1, role: 'body', field: 'body' }) : '';
      return t + b;
    },
    hero: (ctx, k, o) => {
      if (k === 'chart') return X.chart(ctx, o);
      if (k === 'blockNumber') return `<div style="display:flex;flex-direction:column;justify-content:flex-end;flex:1;gap:12px">${fitEl(ctx, 'n', 1, esc(ctx.c.stat || ''), { color: '#FFFFFF', nowrap: true, pr: 1, field: 'stat' })}</div>`;
      return '';
    },
  });
  def('announcement', {
    n: ['Announcement', 'إعلان'],
    lead: (ctx, o) => B.pill(ctx, ctx.c.badge, { field: 'badge', self: o.align === 'center' ? 'center' : 'flex-start' }),
    meta: (ctx, o) => B.cta(ctx, o),
  });
  def('achievement', {
    n: ['Achievement', 'إنجاز'],
    lead: (ctx, o) => B.pill(ctx, ctx.c.badge, { field: 'badge', star: true, self: o.align === 'center' ? 'center' : 'flex-start' }),
    meta: (ctx, o) => {
      const d = ctx.c.date ? `<div data-field="date" style="${tf(T.label(ctx), ctx.pal.accent, { textAlign: o.align })}">${esc(ctx.c.date)}</div>` : '';
      return d + B.source(ctx, o);
    },
  });
  def('project', {
    n: ['Project / case study', 'مشروع / دراسة حالة'],
    extra: (ctx, o) => (o.style === 'none' ? '' : X.timeline(ctx, o)),
    meta: (ctx, o) => ctx.c.source ? `<div data-field="source" style="${tf(T.small(ctx), ctx.pal.muted, { textAlign: o.align })}">${esc(ctx.c.source)}</div>` : '',
  });
  def('compare', {
    n: ['Before / after', 'قبل وبعد'],
    extra: (ctx, o) => X.table(ctx, o),
    hero: (ctx, k, o) => (k === 'chart' ? X.chart(ctx, o) : ''),
  });
  def('list', {
    n: ['List / thread', 'قائمة / سلسلة'],
    extra: (ctx, o) => X.list(ctx, o),
    meta: (ctx, o) => B.cta(ctx, o),
  });
  def('carousel', { n: ['Carousel', 'كاروسيل'] });

  /* parts: the interface archetypes use */
  function parts(ctx, cat) {
    const c = ctx.c;
    const P = {
      over: c.overline,
      caption: c.project || c.overline,
      lead: (o) => (cat.lead ? cat.lead(ctx, o || {}) : ''),
      title: (cls, o) => {
        o = o || {};
        if (cat.title) return cat.title(ctx, cls, o);
        // a short title earns one step more size (the fitter still steps back if needed)
        const up = { xl: 'poster', l: 'xl', m: 'l', s: 'm', xs: 's' };
        const k = c.title && String(c.title).trim().length <= 14 && up[cls] ? up[cls] : cls;
        return c.title ? fitEl(ctx, 'd', k, nl(c.title), { align: o.align, color: o.color || ctx.pal.text, ml: o.ml, maxw: o.maxw, pr: 1, field: E.fieldOf(ctx, 'title') }) : '';
      },
      body: (o) => {
        o = o || {};
        if (cat.body) return cat.body(ctx, o);
        return c.body ? fitEl(ctx, 'b', o.cls || 'l', nl(c.body), { align: o.align, maxw: o.maxw, color: o.color || ctx.pal.sec, drop: cat.extra || cat.key === 'stat' ? 1 : 2, role: 'body', field: E.fieldOf(ctx, 'body') }) : '';
      },
      extra: (o) => (cat.extra ? cat.extra(ctx, o || {}) : ''),
      meta: (o) => (cat.meta ? cat.meta(ctx, o || {}) : B.source(ctx, o || {})),
      hero: (k, o) => (cat.hero ? cat.hero(ctx, k, o || {}) : ''),
      withCtx: (c2) => parts(Object.assign(c2, { c: ctx.c, sig: ctx.sig, p: ctx.p }), cat),
    };
    return P;
  }
  E.parts = parts;

  /* ======================= category-specific archetypes ======================= */

  // stat: giant number anchored at the bottom, context on top
  A.statCorner = (ctx, P, p) => {
    const inner = header(ctx) + region(P.body({}) + P.meta({}), { gap: 24, pad: '48px 0 0', flex: '0 1 auto' }) +
      region(P.title('poster', {}), { justify: 'flex-end', gap: 0, pad: '24px 0 40px' }) + footer(ctx);
    return frame(ctx, inner, '');
  };
  // stat with an echo (offset copy at 22%)
  A.statEcho = (ctx, P, p) => {
    const echo = ctx.palKey === 'light' ? 'rgba(97,114,181,.22)' : 'rgba(190,218,247,.24)';
    const n = P.title('xl', {}).replace('data-fit="n"', `data-fit="n" data-echo="1"`).replace(/(<div data-fit="n"[^>]*style=")/, `$1text-shadow:${ctx.ar ? '-' : ''}14px 14px 0 ${echo};`);
    const inner = header(ctx) + region(n + P.body({}) + P.meta({}), { justify: 'center', gap: 30, pad: '24px 0' }) + footer(ctx);
    return frame(ctx, inner, '');
  };
  // paired bars (before/after) for every numeric row
  function bars(ctx, o) {
    const rows = ix(ctx.c.rows).filter((r) => r && isFinite(num(r.before)) && isFinite(num(r.after)));
    if (!rows.length) return X.table(ctx, o || {});
    const bl = ctx.c.beforeLabel || E.lbl(ctx, 'before'), al = ctx.c.afterLabel || E.lbl(ctx, 'after');
    const lightP = ctx.palKey === 'light';
    const html = rows.map((r) => {
      const a = num(r.before), b = num(r.after), mx = Math.max(a, b) || 1;
      const bar = (v, t, strong, f) => `<div style="display:flex;align-items:center;gap:0.5em"><div style="${st({ height: '0.9em', width: Math.max(4, (v / mx) * 72) + '%', borderRadius: '999px', background: strong ? (lightP ? '#6172B5' : '#BEDAF7') : (lightP ? '#BEDAF7' : '#40444D') })}"></div><span style="font-family:${E.fs(ctx)};font-weight:${strong ? 600 : 500};color:${strong ? ctx.pal.text : ctx.pal.muted};white-space:nowrap"${df(f)}>${esc(t)}</span></div>`;
      return `<div style="display:flex;flex-direction:column;gap:0.3em"><div style="font-size:0.78em;color:${ctx.pal.sec}"${df(`rows.${r._i}.label`)}>${esc(r.label || '')}</div>${bar(a, r.before, false, `rows.${r._i}.before`)}${bar(b, r.after, true, `rows.${r._i}.after`)}</div>`;
    }).join('');
    const legend = `<div style="display:flex;gap:1.2em;font-size:0.7em;color:${ctx.pal.muted};font-family:${E.fs(ctx)}"><span>● <span data-field="beforeLabel">${esc(bl)}</span></span><span style="color:${ctx.pal.accent}">● <span data-field="afterLabel">${esc(al)}</span></span></div>`;
    return fitEl(ctx, 'b', 1, `<div style="display:flex;flex-direction:column;gap:${ctx.land ? '0.5em' : '0.9em'};align-self:stretch">${legend}${html}</div>`, { pr: 2 });
  }
  E.X.bars = bars;
  A.statBars = (ctx, P, p) => {
    const inner = header(ctx) + region(P.title('m', {}) + P.body({}) + bars(ctx, {}) + P.meta({}), { gap: 30, pad: '40px 0 24px' }) + footer(ctx);
    return frame(ctx, inner, '');
  };
  A.compareBars = (ctx, P, p) => {
    const lightP = ctx.palKey === 'light';
    const layers = lightP ? '' : M.glow(ctx, { size: 900, top: -300, end: -300 });
    const inner = ctx.land
      ? header(ctx) + `<div style="display:flex;gap:64px;flex:1;min-height:0;padding:32px 0 24px">` + region(P.title('m', {}) + P.body({ cls: 'm' }) + P.meta({}), { flex: '0.9 1 0', justify: 'center', gap: 24 }) + region(bars(ctx, {}), { flex: '1.1 1 0', justify: 'center', gap: 0 }) + '</div>' + footer(ctx)
      : header(ctx) + region(P.title('m', {}) + P.body({ cls: 'm' }) + bars(ctx, {}) + P.meta({}), { gap: 30, pad: '40px 0 24px' }) + footer(ctx);
    return frame(ctx, inner, layers);
  };

  // before / after as two panes
  A.compareSplit = (ctx, P, p) => {
    const rows = ix(ctx.c.rows).filter((r) => r && (r.before || r.after));
    const bl = ctx.c.beforeLabel || E.lbl(ctx, 'before'), al = ctx.c.afterLabel || E.lbl(ctx, 'after');
    const lightP = ctx.palKey === 'light';
    const emph = p.emph;
    const paneA = { bg: ctx.pal.card, fg: ctx.pal.text, mu: ctx.pal.muted };
    const paneB = emph ? { bg: 'linear-gradient(160deg,#6172B5 0%,#2B3358 100%)', fg: '#FFFFFF', mu: '#DCE0EF', line: 'rgba(255,255,255,.25)' } : { bg: lightP ? '#FFFFFF' : '#222630', fg: ctx.pal.text, mu: ctx.pal.accent, border: `2px solid ${ctx.pal.brand}` };
    const vs = ctx.land ? (rows.length > 2 ? 44 : 64) : (rows.length > 2 ? 64 : 88);
    const row = (r, key, s) => ctx.land
      ? `<div style="display:flex;justify-content:space-between;align-items:baseline;gap:16px;border-top:1px solid ${s.line || ctx.pal.line};padding-top:10px"><div${df(`rows.${r._i}.label`)} style="${tf(T.small(ctx), s.mu)}">${esc(r.label || '')}</div><div${df(`rows.${r._i}.${key}`)} style="font-family:${E.fs(ctx)};font-weight:600;font-size:${vs}px;line-height:1.1;color:${s.fg};white-space:nowrap">${esc(r[key] || '—')}</div></div>`
      : `<div style="display:flex;flex-direction:column;gap:4px"><div${df(`rows.${r._i}.label`)} style="${tf(T.small(ctx), s.mu)}">${esc(r.label || '')}</div><div${df(`rows.${r._i}.${key}`)} style="font-family:${E.fs(ctx)};font-weight:600;font-size:${vs}px;line-height:1.1;color:${s.fg};white-space:nowrap">${esc(r[key] || '—')}</div></div>`;
    const pane = (lab, key, s) => `<div style="${st({ flex: '1 1 0', minWidth: 0, minHeight: 0, borderRadius: '28px', background: s.bg, border: s.border, padding: ctx.land ? '28px 36px' : '40px 44px', display: 'flex', flexDirection: 'column', gap: ctx.land ? '14px' : '24px', boxSizing: 'border-box' })}">` +
      `<div${df(key + 'Label')} style="${tf(T.over(ctx), s.mu)}">${esc(lab)}</div>` +
      `<div style="display:flex;flex-direction:column;justify-content:${ctx.land ? 'center' : 'space-evenly'};gap:${ctx.land ? 14 : 24}px;flex:1 1 0;min-height:0">${rows.map((r) => row(r, key, s)).join('')}</div></div>`;
    const panes = `<div data-fitregion="1" style="display:flex;flex-direction:${ctx.land ? 'row' : 'row'};gap:28px;flex:1 1 0;min-height:0;overflow:hidden">${pane(bl, 'before', paneA)}${pane(al, 'after', paneB)}</div>`;
    const inner = header(ctx) + `<div style="padding:${ctx.land ? '20px 0 24px' : '36px 0 32px'};display:flex;flex-direction:column;gap:${ctx.land ? 12 : 20}px;flex:none">${P.title(ctx.land ? 'xs' : 's', { ml: ctx.land ? 2 : 3 })}${ctx.land ? '' : P.body({ cls: 's' })}</div>` + panes + `<div style="height:28px;flex:none"></div>` + `<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex:none">${P.meta({}) || '<span></span>'}${B.sig(ctx)}</div>`;
    return frame(ctx, inner, '');
  };

  // the big move: before → after
  A.compareArrow = (ctx, P, p) => {
    const r = (ctx.c.rows || [])[0] || {};
    const bl = ctx.c.beforeLabel || E.lbl(ctx, 'before'), al = ctx.c.afterLabel || E.lbl(ctx, 'after');
    const arrow = ctx.ar ? '←' : '→';
    const big = (v, l, strong) => `<div style="display:flex;flex-direction:column;gap:6px;min-width:0"><div${df(strong ? 'afterLabel' : 'beforeLabel')} style="${tf(T.label(ctx), strong ? ctx.pal.accent : ctx.pal.muted)}">${esc(l)}</div>` +
      fitEl(ctx, 'n', ctx.land ? 2 : 2, esc(v || ''), { color: strong ? ctx.pal.text : ctx.pal.muted, nowrap: true, w: strong ? 600 : 400, pr: 1, field: strong ? 'rows.0.after' : 'rows.0.before' }) + '</div>';
    const row = `<div style="display:flex;align-items:flex-end;gap:40px;flex-wrap:nowrap">${big(r.before, bl, false)}<div style="font-family:${E.fs(ctx)};font-size:96px;line-height:116px;color:${ctx.pal.brand};flex:none">${arrow}</div>${big(r.after, al, true)}</div>`;
    const rest = Object.assign({}, ctx.c, { rows: ix(ctx.c.rows).slice(1) });
    const ctx2 = Object.assign({}, ctx, { c: rest });
    const inner = header(ctx) + region(P.title(ctx.land ? 's' : 'm', {}) + `<div data-field="rows.0.label" style="${tf(T.over(ctx), ctx.pal.sec)}">${esc(r.label || '')}</div>` + row + X.table(ctx2, {}) + P.meta({}), { justify: 'center', gap: 32, pad: '24px 0' }) + footer(ctx);
    return frame(ctx, inner, p.glow ? M.glow(ctx, { size: 1000, top: ctx.land ? -200 : 100, start: -200 }) : '');
  };

  // list as a grid of cards
  A.listGrid = (ctx, P, p) => {
    const items = listItems(ctx.c.items).slice(0, 6);
    const emph = p.emph;
    const lightP = ctx.palKey === 'light';
    const card = ([t, f], i) => `<div style="${st({ borderRadius: '24px', padding: '28px 30px', background: emph && i === 0 ? 'linear-gradient(160deg,#6172B5 0%,#2B3358 100%)' : ctx.pal.card, display: 'flex', flexDirection: 'column', gap: '0.4em', minHeight: 0 })}">` +
      `<span style="font-family:${E.fs(ctx)};font-weight:600;color:${emph && i === 0 ? '#BEDAF7' : ctx.pal.brand};font-size:0.8em">${String(i + 1).padStart(2, '0')}</span><span${df(f)} style="color:${emph && i === 0 ? '#FFFFFF' : ctx.pal.text}">${esc(t)}</span></div>`;
    const cols = ctx.land ? (items.length > 4 ? 3 : Math.min(items.length, 4)) : 2;
    const grid = fitEl(ctx, 'b', 1, `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:20px">${items.map(card).join('')}</div>`, { pr: 2 });
    const inner = header(ctx) + region(P.title(ctx.land ? 's' : 'm', {}) + grid + P.meta({}), { gap: 36, pad: '40px 0 24px', justify: 'flex-start' }) + footer(ctx);
    return frame(ctx, inner, emph && !lightP ? M.glow(ctx, { size: 900, top: -300, end: -300 }) : '');
  };

  /* ======================= carousel ======================= */
  const S = (E.S = {});
  const pageNo = (ctx) => (ctx.page ? `<div dir="ltr" style="${tf(T.label(ctx), ctx.pal.muted, { unicodeBidi: 'isolate', direction: 'ltr' })}">${String(ctx.page).padStart(2, '0')} / ${String(ctx.pages).padStart(2, '0')}</div>` : '');
  // covers
  S.coverFig = (ctx, P) => {
    const inner = `<div style="flex:none">${mark(96, ctx.pal.mark)}</div>` +
      region(B.over(ctx, P.over) + P.title('xl', { ml: 4 }) + P.body({ cls: 'm' }), { justify: 'center', gap: 30 }) +
      footer(ctx, { left: '<span></span>', right: `<div style="${tf(T.label(ctx), ctx.pal.text)}">${E.lbl(ctx, 'swipe')}</div>` });
    return frame(ctx, inner, '');
  };
  S.coverBottom = (ctx, P) => frame(ctx, header(ctx) + region(P.title('xl', {}) + P.body({ cls: 'm' }), { justify: 'flex-end', gap: 30, pad: '0 0 56px' }) + footer(ctx, { right: `<div style="${tf(T.label(ctx), ctx.pal.accent)}">${E.lbl(ctx, 'swipe')}</div>` }), '');
  S.coverCenter = (ctx, P) => frame(ctx, `<div style="display:flex;justify-content:center;flex:none">${mark(72, ctx.pal.mark)}</div>` + region(B.over(ctx, P.over, { align: 'center' }) + P.title('l', { align: 'center' }) + P.body({ align: 'center', cls: 'm' }), { align: 'center', justify: 'center', gap: 30, talign: 'center' }) + footer(ctx, { center: true, right: `<div style="${tf(T.label(ctx), ctx.pal.accent)}">${E.lbl(ctx, 'swipe')}</div>` }), '');
  S.coverPattern = (ctx, P) => {
    const pat = M.harlequin(ctx, { top: 0, start: 0, height: '42%', op: 0.48 });
    return frame(ctx, `<div style="height:${Math.round(ctx.H * 0.42 - ctx.M + 48)}px;flex:none"></div>` + header(ctx) + region(P.title('l', {}) + P.body({ cls: 'm' }), { gap: 28, pad: '36px 0' }) + footer(ctx, { right: `<div style="${tf(T.label(ctx), ctx.pal.accent)}">${E.lbl(ctx, 'swipe')}</div>` }), pat);
  };
  S.coverStar = (ctx, P) => {
    const sz = 860;
    const star = `<div aria-hidden="true" style="position:absolute;top:-220px;inset-inline-end:-260px;width:${sz}px;height:${sz}px">${E.starGrad(ctx, sz)}</div>`;
    return frame(ctx, header(ctx, { noMark: true }) + region(P.title('xl', {}) + P.body({ cls: 'm' }), { justify: 'flex-end', gap: 30, pad: '0 0 56px' }) + footer(ctx, { right: `<div style="${tf(T.label(ctx), ctx.pal.accent)}">${E.lbl(ctx, 'swipe')}</div>` }), star);
  };
  S.coverGiant = (ctx, P) => frame(ctx, header(ctx) + region(P.title('poster', { ml: 5 }), { justify: 'center', gap: 0 }) + footer(ctx, { right: `<div style="${tf(T.label(ctx), ctx.pal.accent)}">${E.lbl(ctx, 'swipe')}</div>` }), '');
  // content slides
  S.slideArc = (ctx, P) => frame(ctx, header(ctx, { over: B.over(ctx, P.over) }) + region(P.title('l', {}) + P.body({}), { gap: 34, pad: ctx.land ? '56px 0 24px' : '240px 0 24px' }) + footer(ctx, { left: pageNo(ctx), right: mark(48, ctx.pal.mark) }), M.arc(ctx, ctx.land ? { r: 420, end: -160, bottom: -470 } : { r: 470, end: -470, bottom: -170 }));
  S.slidePlain = (ctx, P) => frame(ctx, header(ctx) + B.hair(ctx, { margin: '40px 0 0' }) + region(P.title('l', {}) + P.body({}), { gap: 34, justify: 'center', pad: '40px 0 24px' }) + footer(ctx, { left: pageNo(ctx) }), '');
  S.slideCard = (ctx, P) => {
    const card = `<div style="${st({ position: 'relative', flex: '1 1 0', minHeight: 0, display: 'flex', flexDirection: 'column', background: ctx.pal.card, borderRadius: '32px', padding: '72px 60px', boxSizing: 'border-box' })}"><div style="position:absolute;top:44px;inset-inline-end:44px">${M.sparkles(ctx, { s: 0.7, top: 0, end: 0 })}</div>` +
      region(P.title('l', {}) + P.body({}), { gap: 30, justify: 'center' }) + '</div>';
    return frame(ctx, header(ctx) + `<div style="display:flex;flex:1;min-height:0;padding:40px 0">${card}</div>` + footer(ctx, { left: pageNo(ctx), right: mark(48, ctx.pal.mark) }), '');
  };
  S.slideNum = (ctx, P) => {
    const n = `<div style="${st({ fontFamily: E.fs(ctx), fontWeight: 300, fontSize: ctx.land ? '200px' : '260px', lineHeight: ctx.land ? '200px' : '260px', color: ctx.pal.brand, letterSpacing: '-0.04em' })}">${String((ctx.page || 2) - 1).padStart(2, '0')}</div>`;
    return frame(ctx, header(ctx) + region(n + P.title('l', {}) + P.body({}), { gap: 30, justify: 'center' }) + footer(ctx, { left: pageNo(ctx) }), '');
  };
  S.slideRule = (ctx, P) => frame(ctx, `<div style="display:flex;align-items:center;gap:24px;flex:none;border-top:2px solid ${ctx.pal.strong};padding-top:28px">${B.over(ctx, P.over)}<span style="flex:1"></span>${pageNo(ctx)}</div>` + region(P.title('l', {}) + `<div style="border-top:1px solid ${ctx.pal.line};padding-top:32px">${P.body({})}</div>`, { gap: 36, justify: 'center' }) + footer(ctx, { right: mark(48, ctx.pal.mark) }), '');
  S.slideBand = (ctx, P) => {
    const pat = M.harlequin(ctx, { top: 0, start: 0, height: ctx.land ? '24%' : '18%', op: 0.16 });
    return frame(ctx, `<div style="height:${Math.round(ctx.H * (ctx.land ? 0.24 : 0.18) - ctx.M + 40)}px;flex:none"></div>` + header(ctx) + region(P.title('l', {}) + P.body({}), { gap: 32, justify: 'center', pad: '24px 0 24px' }) + footer(ctx, { left: pageNo(ctx) }), pat);
  };
  S.slideDots = (ctx, P) => frame(ctx, header(ctx) + `<div style="height:40px;flex:none"></div>` + B.dotline(ctx, { n: ctx.land ? 40 : 30 }) + region(P.title('l', {}) + P.body({}), { gap: 32, justify: 'center' }) + footer(ctx, { left: pageNo(ctx), right: mark(48, ctx.pal.mark) }), '');
  // closing slides
  S.closeGlow = (ctx, P) => frame(ctx, region(`<div style="${st({ width: '360px', height: '360px', borderRadius: '50%', flex: 'none', background: `radial-gradient(circle, ${ctx.palKey === 'light' ? 'rgba(190,218,247,.95)' : 'rgba(97,114,181,.65)'} 0%, rgba(0,0,0,0) 70%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' })}">${mark(150, ctx.pal.mark)}</div>` + P.title('m', { align: 'center' }) + B.cta(ctx, { align: 'center' }), { align: 'center', justify: 'center', gap: 32, talign: 'center' }) + footer(ctx, { center: true, right: pageNo(ctx) }), '');
  S.closePlain = (ctx, P) => frame(ctx, header(ctx) + region(P.title('l', {}) + B.cta(ctx, {}), { justify: 'flex-end', gap: 32, pad: '0 0 56px' }) + footer(ctx, { right: pageNo(ctx) }), '');
  S.closeMark = (ctx, P) => frame(ctx, region(mark(220, ctx.pal.mark, { alignSelf: 'center' }) + P.title('m', { align: 'center' }) + B.cta(ctx, { align: 'center' }), { align: 'center', justify: 'center', gap: 44, talign: 'center' }) + footer(ctx, { center: true, right: pageNo(ctx) }), '');

  /* ---------- the Figma "Carousel / Slide Masters" (Social / Carousel / Slide) ----------
     Six exact masters, 1200x1500, light + dark, EN + AR (mirrored). Geometry and gradients are
     taken from the Figma export; the X format (1600x900) re-flows the same parts. */
  const FG = (E.FG = {});
  FG.col = (ctx) => (ctx.mode === 'dark'
    ? { title: '#FFFFFF', body: '#FFFFFF', over: '#BEDAF7', page: '#FFFFFF', mark: '#FFFFFF', muted: '#A2A4A9', dot: '#BEDAF7', ring: '#6E7179', ringFill: '#0E121C', arc: '#BEDAF7', star: '#7587CF', line: '#BEDAF7', base: '#0E121C' }
    : { title: '#0E121C', body: '#2B3358', over: '#4E5C96', page: '#2B3358', mark: '#0E121C', muted: '#50545C', dot: '#6172B5', ring: '#9BC4EE', ringFill: '#FFFFFF', arc: '#6172B5', star: '#6172B5', line: '#6172B5', base: '#FFFFFF' });
  /* gradient defs in master coordinates (1200x1500), scaled to the format and mirrored for Arabic */
  FG.g = (ctx, mirror) => {
    const sx = ctx.W / 1200, sy = ctx.H / 1500, mx = (x) => (mirror && ctx.ar ? ctx.W - x * sx : x * sx);
    const stops = (s) => s.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== undefined ? ` stop-opacity="${a}"` : ''}/>`).join('');
    return {
      x: mx, y: (y) => y * sy, sx, sy,
      lin: (id, x1, y1, x2, y2, s) => `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${mx(x1)}" y1="${y1 * sy}" x2="${mx(x2)}" y2="${y2 * sy}">${stops(s)}</linearGradient>`,
      rad: (id, cx, cy, rx, ry, s) => `<radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(${mx(cx)} ${cy * sy}) scale(${rx * sx} ${ry * sy})">${stops(s)}</radialGradient>`,
    };
  };
  FG.svg = (ctx, defs, body) => `<svg aria-hidden="true" width="${ctx.W}" height="${ctx.H}" viewBox="0 0 ${ctx.W} ${ctx.H}" style="position:absolute;left:0;top:0;display:block;z-index:0;pointer-events:none"><defs>${defs}</defs>${body}</svg>`;
  /* an absolutely placed fitted region (master coordinates are frame pixels) */
  FG.box = (ctx, top, bottom, inner, o) => {
    o = o || {};
    return `<div style="${st({ position: 'absolute', top: top + 'px', height: Math.max(40, bottom - top) + 'px', insetInlineStart: (o.s ?? ctx.M) + 'px', insetInlineEnd: (o.e ?? ctx.M) + 'px', display: 'flex', flexDirection: 'column' })}">` +
      region(inner, { gap: o.gap ?? 0, justify: o.justify, align: o.align, talign: o.talign }) + '</div>';
  };
  FG.lab = (ctx, text, color, o) => `<div${o && o.field ? ` data-field="${o.field}"` : ''} style="${tf(T.over(ctx), color, Object.assign({ whiteSpace: 'nowrap' }, (o && o.css) || {}))}">${esc(text)}</div>`;
  FG.page = (ctx, col) => (ctx.page ? `<div dir="ltr" style="${tf(T.over(ctx), col.page, { unicodeBidi: 'isolate', direction: 'ltr', whiteSpace: 'nowrap' })}">${ctx.page} / ${ctx.pages}</div>` : '<span></span>');
  /* footer row: W (64 box, mark 56.5) at the start, page number at the end — Figma y 1350..1414 */
  FG.foot = (ctx, col, mid) => `<div style="${st({ position: 'absolute', top: ctx.H - 150 + 'px', height: '64px', insetInlineStart: ctx.M + 'px', insetInlineEnd: ctx.M + 'px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' })}">` +
    `<div style="width:64px;height:64px;display:flex;align-items:center;justify-content:center;flex:none">${mark(56.5, col.mark)}</div>${mid || ''}${FG.page(ctx, col)}</div>`;
  /* titles wrap like Figma (greedy, not balanced); Arabic masters sit one step up the ladder (Figma: EN 88 ~ AR 96) */
  FG.title = (ctx, i, col, o) => (ctx.c.title ? fitEl(ctx, 'd', ctx.ar ? Math.max(0, i - 1) : i, nl(ctx.c.title), Object.assign({ color: col.title, pr: 1, field: E.fieldOf(ctx, 'title') }, o || {})).replace('text-wrap:balance', 'text-wrap:wrap') : '');
  FG.body = (ctx, i, col, o) => (ctx.c.body ? fitEl(ctx, 'b', i, nl(ctx.c.body), Object.assign({ color: col.body, drop: 2, role: 'body', field: E.fieldOf(ctx, 'body') }, o || {})) : '');
  FG.over = (ctx, col) => (ctx.c.overline ? FG.lab(ctx, ctx.c.overline, col.over, { field: E.fieldOf(ctx, 'overline'), css: { whiteSpace: 'normal' } }) : '');
  FG.pill = (ctx, text, o) => {
    o = o || {};
    const id = E.uid('fp');
    const t = T.over(ctx);
    return `<span style="${st({ position: 'relative', display: 'inline-flex', alignItems: 'center', alignSelf: 'flex-start', flex: 'none', height: (ctx.ar ? 76 : 62) + 'px', padding: '0 25px', borderRadius: '31px', overflow: 'hidden', whiteSpace: 'nowrap', fontFamily: t.f, fontWeight: t.w, fontSize: t.s + 'px', lineHeight: t.l + 'px', color: '#0E121C', boxSizing: 'border-box' })}">` +
      `<svg aria-hidden="true" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 10" style="position:absolute;left:0;top:0"><defs><linearGradient id="${id}" x1="${ctx.ar ? 1 : 0}" y1="0" x2="${ctx.ar ? 0 : 1}" y2="0"><stop offset="0" stop-color="#BEDAF7"/><stop offset="1" stop-color="#FFFFFF"/></linearGradient></defs><rect width="100" height="10" fill="url(#${id})"/></svg>` +
      `<span style="position:relative"${o.field ? ` data-field="${o.field}"` : ''}>${esc(text)}</span></span>`;
  };
  FG.swipe = (ctx) => (ctx.ar ? 'السحب للمتابعة ←' : 'Swipe →');
  FG.who = (ctx, n, of) => {
    if (!ctx.ar) return `${n} of ${of} participant${of === 1 ? '' : 's'}`;
    if (n === 1) return `مشارك واحد من ${of}`;
    if (n === 2) return `مشاركان من ${of}`;
    return `${n} من ${of} مشاركين`;
  };
  FG.nums = (c) => {
    const n = parseInt(c.n, 10), of = parseInt(c.of, 10);
    return isFinite(n) && isFinite(of) && of >= 1 && of <= 40 && n >= 0 && n <= of ? { n, of } : null;
  };

  /* 1 · cover — gradient field, W, overline + title, "Swipe →" */
  S.figCover = (ctx) => {
    const col = FG.col(ctx), dk = ctx.mode === 'dark', g = FG.g(ctx, true), a = E.uid('fc'), b = E.uid('fc');
    const bg = dk
      ? FG.svg(ctx, g.lin(a, 805.212, 1454.77, 203.516, 132.252, [[0, '#0F1220'], [0.55, '#1E243F'], [1, '#6172B5', 0.85]]) + g.rad(b, 240, 310.667, 422.222, 506.667, [[0, '#8E9CCB', 0.55], [0.55, '#6172B5', 0.25], [1, '#0F1220', 0]]),
        `<rect width="100%" height="100%" fill="#0E121C"/><rect width="100%" height="100%" fill="url(#${a})"/><ellipse cx="${g.x(240)}" cy="${g.y(260)}" rx="${380 * g.sx}" ry="${380 * g.sy}" fill="url(#${b})"/>`)
      : FG.svg(ctx, g.lin(a, 1285.71, 1392.86, 240.42, 556.62, [[0, '#3D4877'], [0.45, '#6172B5'], [1, '#9BC4EE']]), `<rect width="100%" height="100%" fill="#FFFFFF"/><rect width="100%" height="100%" fill="url(#${a})"/>`);
    const w = `<div style="position:absolute;top:108.8px;inset-inline-start:103.5px">${mark(113, col.mark)}</div>`;
    const top = ctx.land ? 300 : 467;
    const text = FG.box(ctx, top, ctx.H - 170, FG.over(ctx, { over: dk ? '#FFFFFF' : '#2B3358' }) + FG.title(ctx, 2, col, { ml: 4 }) + FG.body(ctx, 1, col, { color: dk ? '#FFFFFF' : '#2B3358' }), { gap: 32 });
    const sw = `<div style="position:absolute;top:${ctx.H - 136}px;inset-inline-end:${ctx.M}px">${FG.lab(ctx, FG.swipe(ctx), '#FFFFFF')}</div>`;
    return frame(ctx, w + text + sw, bg);
  };

  /* 2 · text + arc — overline, title, body; a ring around the top-end corner */
  S.figText = (ctx) => {
    const col = FG.col(ctx), dk = ctx.mode === 'dark', g = FG.g(ctx, false), a = E.uid('ft');
    const fill = dk ? g.lin(a, 600, 0, 600, 1500, [[0, '#1A1D24'], [1, '#090C14']]) : g.lin(a, -216, 360, 886.941, 1021.76, [[0, '#FFFFFF'], [1, '#F2F7FE']]);
    const cx = ctx.ar ? 0 : ctx.W;
    const bg = FG.svg(ctx, fill, `<rect width="100%" height="100%" fill="${col.base}"/><rect width="100%" height="100%" fill="url(#${a})"/><circle cx="${cx}" cy="0" r="418.5" fill="none" stroke="${col.arc}" stroke-width="3" opacity="0.55"/>`);
    const over = `<div style="position:absolute;top:117px;inset-inline-start:${ctx.M}px;inset-inline-end:${ctx.M + 340}px">${FG.over(ctx, col)}</div>`;
    const tTop = ctx.land ? 215 : 259;
    const text = FG.box(ctx, tTop, ctx.H - 180, FG.title(ctx, 3, col, { ml: 4 }) + FG.body(ctx, 0, col), { gap: 51, e: ctx.land ? 420 : ctx.M });
    return frame(ctx, over + text + FG.foot(ctx, col), bg);
  };

  /* 3 · card + sparkles — gradient card with the overline, title and body inside */
  S.figCard = (ctx) => {
    const col = FG.col(ctx), dk = ctx.mode === 'dark', a = E.uid('fk');
    const L = ctx.M, R = ctx.W - ctx.M, T0 = ctx.land ? 170 : 200, B0 = ctx.land ? ctx.H - 170 : 1260, cw = R - L;
    // card fill: light diagonal (mirrored for Arabic), dark horizontal from the end edge
    const lx = (x) => (ctx.ar ? ctx.W - x : x);
    const fill = dk
      ? `<linearGradient id="${a}" gradientUnits="userSpaceOnUse" x1="${ctx.ar ? L : R}" y1="0" x2="${ctx.ar ? R : L}" y2="0"><stop offset="0" stop-color="#0F1220"/><stop offset="1" stop-color="#1E243F"/></linearGradient>`
      : `<linearGradient id="${a}" gradientUnits="userSpaceOnUse" x1="${lx(L + (956.382 - 96) * cw / 1008)}" y1="${T0 + (1104.77 - 200) * (B0 - T0) / 1060}" x2="${lx(L + (207.796 - 96) * cw / 1008)}" y2="${T0 + (392.9 - 200) * (B0 - T0) / 1060}"><stop offset="0" stop-color="#EAF2FB"/><stop offset="1" stop-color="#BEDAF7" stop-opacity="0.6"/></linearGradient>`;
    // sparkles: the Figma cluster, at the card's top-end corner (Arabic: the same cluster shifted to the start side)
    const dx = ctx.ar ? -688 : cw - 1008, dy = T0 - 200;
    const stars = `<g transform="translate(${dx} ${dy})" fill="${col.star}"><path d="M935 310C937.563 330.88 948.457 343.12 967.04 346C948.457 348.88 937.563 361.12 935 382C932.437 361.12 921.543 348.88 902.96 346C921.543 343.12 932.437 330.88 935 310Z"/><path d="M1005 354C1006.35 384.02 1012.1 390.48 1038.82 392C1012.1 393.52 1006.35 399.98 1005 430C1003.65 399.98 997.898 393.52 971.18 392C997.898 390.48 1003.65 384.02 1005 354Z"/><circle cx="985" cy="438" r="14"/></g>`;
    const bg = FG.svg(ctx, fill, `<rect width="100%" height="100%" fill="${dk ? '#0E121C' : '#FFFFFF'}"/><rect x="${L}" y="${T0}" width="${cw}" height="${B0 - T0}" rx="32" fill="url(#${a})"/>${stars}`);
    const tTop = ctx.land ? T0 + 120 : 477;
    const text = FG.box(ctx, tTop, B0 - 64, FG.over(ctx, col) + FG.title(ctx, 3, col, { ml: 4 }) + FG.body(ctx, 1, col), { gap: 40, s: L + 80, e: ctx.land ? L + 300 : L + 80 });
    return frame(ctx, text + FG.foot(ctx, col), bg);
  };

  /* 4 · data — participant dots (N of M), a label, the finding, SAMPLE + source */
  S.figData = (ctx) => {
    const col = FG.col(ctx), dk = ctx.mode === 'dark', c = ctx.c, a = E.uid('fd'), b = E.uid('fd');
    const nm = FG.nums(c) || { n: 0, of: 0 };
    const land = ctx.land, W = ctx.W;
    const bandTop = land ? 430 : 740, bandH = land ? 340 : 520, cy = land ? 520 : 852;
    const flip = ctx.ar;
    const defs = (dk ? '' : `<linearGradient id="${a}" gradientUnits="userSpaceOnUse" x1="${flip ? W : 0}" y1="0" x2="${flip ? 0 : W}" y2="0"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.6" stop-color="#DDEBFC"/><stop offset="1" stop-color="#BEDAF7"/></linearGradient>`) +
      `<linearGradient id="${b}" gradientUnits="userSpaceOnUse" x1="0" y1="${bandTop}" x2="0" y2="${bandTop + bandH}"><stop offset="0" stop-color="#6172B5" stop-opacity="0.55"/><stop offset="1" stop-color="#BEDAF7" stop-opacity="0.04"/></linearGradient>`;
    // dots: Figma pitch 140, radius 52, row centred; more participants shrink the pitch
    let dots = '';
    if (nm.of) {
      const pitch = Math.min(land ? 120 : 140, (W - 2 * ctx.M) / nm.of), r = pitch * 52 / 140, x0 = W / 2 - (pitch * (nm.of - 1)) / 2;
      for (let i = 0; i < nm.of; i++) {
        const x = x0 + i * pitch; // participants read left to right in both languages, as in the master
        dots += i < nm.n ? `<circle cx="${x}" cy="${cy}" r="${r}" fill="${col.dot}"/>` : `<circle cx="${x}" cy="${cy}" r="${r - 1.5 * r / 52}" fill="${col.ringFill}" stroke="${col.ring}" stroke-width="${3 * r / 52}"/>`;
      }
    }
    const bg = FG.svg(ctx, defs, `<rect width="100%" height="100%" fill="${col.base}"/>${dk ? '' : `<rect width="100%" height="100%" fill="url(#${a})"/>`}<rect x="0" y="${bandTop}" width="${W}" height="${bandH}" fill="url(#${b})"/><rect x="0" y="${bandTop}" width="${W}" height="3" fill="${col.line}"/>${dots}`);
    const over = `<div style="position:absolute;top:117px;inset-inline-start:${ctx.M}px;inset-inline-end:${ctx.M}px">${FG.over(ctx, col)}</div>`;
    const head = FG.box(ctx, land ? 180 : 200, bandTop - 24, FG.title(ctx, 5, col, { ml: 2 }) + FG.body(ctx, 1, col), { gap: 23 });
    const label = c.label || (nm.of ? FG.who(ctx, nm.n, nm.of) : '');
    const lab = label ? fitEl(ctx, 'n', ctx.ar ? 5 : 4, esc(label), { w: ctx.ar ? 500 : 600, color: col.title, pr: 1, field: E.fieldOf(ctx, 'label') }) : '';
    const note = c.note ? fitEl(ctx, 'b', 1, nl(c.note), { color: col.body, drop: 1, role: 'note', field: E.fieldOf(ctx, 'note') }) : '';
    const lTop = land ? 590 : 958;
    const find = FG.box(ctx, lTop, land ? ctx.H - 170 : 1240, lab + note, { gap: 17 });
    const src = c.source ? `<span style="${tf(Object.assign({}, T.over(ctx), { w: 400 }), col.muted, { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 })}">${esc(E.lbl(ctx, 'source'))}: <span data-field="${E.fieldOf(ctx, 'source')}">${esc(c.source)}</span></span>` : '';
    const chip = c.sample ? FG.pill(ctx, E.lbl(ctx, 'sample')) : '';
    const srow = chip || src ? `<div style="${st({ display: 'flex', alignItems: 'center', gap: '17px', minWidth: 0, overflow: 'hidden' })}">${chip}${src}</div>` : '';
    const meta = land ? FG.foot(ctx, col, `<div style="flex:1;min-width:0;display:flex;justify-content:center">${srow}</div>`)
      : `<div style="position:absolute;top:1250px;inset-inline-start:${ctx.M}px;inset-inline-end:${ctx.M}px">${srow}</div>` + FG.foot(ctx, col);
    return frame(ctx, over + head + find + meta, bg);
  };

  /* 5 · takeaway — dark card, "Takeaway" pill, title + body in white */
  S.figTake = (ctx) => {
    const col = FG.col(ctx), dk = ctx.mode === 'dark', a = E.uid('fw'), b = E.uid('fw');
    const L = ctx.M, R = ctx.W - ctx.M, T0 = ctx.land ? 180 : 220, B0 = ctx.land ? ctx.H - 170 : 1220, cw = R - L, ch = B0 - T0;
    const fill = dk
      ? `<linearGradient id="${a}" gradientUnits="userSpaceOnUse" x1="${ctx.ar ? L : R}" y1="0" x2="${ctx.ar ? R : L}" y2="0"><stop offset="0" stop-color="#0F1220"/><stop offset="1" stop-color="#1E243F"/></linearGradient>`
      : `<linearGradient id="${a}" gradientUnits="userSpaceOnUse" x1="0" y1="${T0}" x2="0" y2="${B0}"><stop offset="0" stop-color="#1A1D24"/><stop offset="1" stop-color="#090C14"/></linearGradient>`;
    const glowTop = B0 - ch * 0.4;
    const defs = fill + `<linearGradient id="${b}" gradientUnits="userSpaceOnUse" x1="0" y1="${glowTop}" x2="0" y2="${B0}"><stop offset="0" stop-color="#6172B5" stop-opacity="0"/><stop offset="1" stop-color="#6172B5" stop-opacity="0.55"/></linearGradient>`;
    const clip = E.uid('fwc');
    const bg = FG.svg(ctx, defs + `<clipPath id="${clip}"><rect x="${L}" y="${T0}" width="${cw}" height="${ch}" rx="32"/></clipPath>`,
      `<rect width="100%" height="100%" fill="${col.base}"/><rect x="${L}" y="${T0}" width="${cw}" height="${ch}" rx="32" fill="url(#${a})"/>` +
      `<rect clip-path="url(#${clip})" x="${L}" y="${glowTop}" width="${cw}" height="${B0 - glowTop}" fill="url(#${b})"/>` +
      (dk ? `<rect x="${L + 1}" y="${T0 + 1}" width="${cw - 2}" height="${ch - 2}" rx="31" fill="none" stroke="#40444D" stroke-width="2"/>` : ''));
    const over = `<div style="position:absolute;top:117px;inset-inline-start:${ctx.M}px;inset-inline-end:${ctx.M}px">${FG.over(ctx, col)}</div>`;
    const pill = ctx.c.pill ? FG.pill(ctx, ctx.c.pill, { field: E.fieldOf(ctx, 'pill') }) : '';
    const white = { title: '#FFFFFF', body: '#FFFFFF' };
    const text = FG.box(ctx, T0 + 80, B0 - 64, pill + `<div style="height:${pill ? 17 : 0}px;flex:none"></div>` + FG.title(ctx, 3, white, { ml: 4 }) + FG.body(ctx, 1, white), { gap: 40, s: L + 80, e: L + 80 });
    return frame(ctx, over + text + FG.foot(ctx, col), bg);
  };

  /* 6 · closing — W in a soft glow, title, link, page number (centred) */
  S.figClose = (ctx) => {
    const col = FG.col(ctx), dk = ctx.mode === 'dark', g = FG.g(ctx, true), a = E.uid('fz'), b = E.uid('fz');
    const land = ctx.land, W = ctx.W;
    const gy = land ? 230 : 396, gr = land ? 160 : 220, ms = land ? 128 : 192;
    let bg;
    if (dk) {
      bg = FG.svg(ctx, g.lin(a, -1152, 18, -471.731, 1443.33, [[0, '#BEDAF7', 0], [0.35, '#9BC4EE', 0.9], [0.7, '#6172B5', 0.6], [1, '#2B3358', 0]]),
        `<rect width="100%" height="100%" fill="#0E121C"/><rect x="${Math.min(g.x(-800), g.x(1400))}" y="${g.y(-150)}" width="${2200 * g.sx}" height="${1400 * g.sy}" fill="url(#${a})"/>`);
    } else {
      bg = FG.svg(ctx, g.lin(a, 1024.26, 1280.33, -10.5263, 452.498, [[0, '#EAF2FB'], [1, '#BEDAF7', 0.6]]) +
        `<radialGradient id="${b}" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(${W / 2} ${gy}) scale(${gr * 244.444 / 220})"><stop offset="0" stop-color="#9BC4EE" stop-opacity="0.85"/><stop offset="0.5" stop-color="#9BC4EE" stop-opacity="0.25"/><stop offset="1" stop-color="#9BC4EE" stop-opacity="0"/></radialGradient>`,
        `<rect width="100%" height="100%" fill="#FFFFFF"/><rect width="100%" height="100%" fill="url(#${a})"/><circle cx="${W / 2}" cy="${gy}" r="${gr}" fill="url(#${b})"/>`);
    }
    const mw = ms * 0.8836, mh = mw * 205 / 227;
    const w = `<div style="position:absolute;top:${gy - mh / 2}px;left:${W / 2 - mw / 2}px">${mark(mw, col.mark)}</div>`;
    const cta = ctx.c.cta ? FG.lab(ctx, ctx.c.cta, col.over, { field: E.fieldOf(ctx, 'cta'), css: { whiteSpace: 'normal', textAlign: 'center' } }) : '';
    const text = FG.box(ctx, land ? 430 : 619, ctx.H - 170, FG.title(ctx, 3, col, { ml: 3, align: 'center' }) + cta, { gap: 30, align: 'center', talign: 'center' });
    const pg = `<div style="position:absolute;top:${ctx.H - 137}px;left:0;right:0;display:flex;justify-content:center">${FG.page(ctx, col)}</div>`;
    return frame(ctx, w + text + pg, bg);
  };

  /* which master a slide uses in the Figma carousels: explicit kind, else inferred */
  const KINDS = ['text', 'card', 'data', 'takeaway'];
  const kindOf = (s, i) => {
    const k = KINDS.includes(s.kind) ? s.kind : (FG.nums(s) ? 'data' : s.pill ? 'takeaway' : (i % 2 ? 'card' : 'text'));
    return k === 'data' && !FG.nums(s) && !s.label ? 'text' : k;
  };
  E.kindOf = kindOf;
  const FIGS = { text: 'figText', card: 'figCard', data: 'figData', takeaway: 'figTake' };
  function renderCarousel(d, o, mode) {
    const c = o.content || {};
    const slides = (c.slides || []).filter((s) => s && (s.title || s.body || s.note || FG.nums(s)));
    if (d.p.fig) {
      const total = slides.length + 2, out = [];
      const mk = (content, page, fmap) => { const ctx = E.ctx({ fmt: o.fmt, lang: o.lang, mode, surf: 'plain', content, sig: o.sig, page, pages: total }); ctx.p = d.p; ctx.fmap = fmap; return ctx; };
      out.push(S.figCover(mk({ overline: c.overline, title: c.title, body: c.body })));
      slides.forEach((s, i) => {
        const f = {}; ['title', 'body', 'note', 'source', 'pill', 'label'].forEach((k) => { f[k] = `slides.${i}.${k}`; });
        const sc = { overline: c.overline, title: s.title, body: s.body, n: s.n, of: s.of, label: s.label, note: s.note, source: s.source, sample: s.sample, pill: s.pill };
        out.push(S[FIGS[kindOf(s, i)]](mk(sc, i + 2, f)));
      });
      out.push(S.figClose(mk({ title: c.closing || c.title, cta: c.cta }, total, { title: 'closing' })));
      return out;
    }
    const total = slides.length + 2;
    const out = [];
    const mk = (surf, content, page) => {
      const ctx = E.ctx({ fmt: o.fmt, lang: o.lang, mode, surf, content, sig: o.sig, page, pages: total });
      ctx.p = d.p || {};
      return ctx;
    };
    // cover
    const cctx = mk(d.p.coverSurf || d.surf, { overline: c.overline, title: c.title, body: c.body });
    out.push(S[d.p.cover](cctx, parts(cctx, CATS.insight)));
    slides.forEach((s, i) => {
      const nm = FG.nums(s);
      const extra = [s.label || (nm ? FG.who({ ar: o.lang === 'ar' }, nm.n, nm.of) : ''), s.note].filter(Boolean).join(' ');
      const sctx = mk(d.p.slideSurf || 'plain', { overline: c.overline, title: s.title, body: [s.body, extra].filter(Boolean).join('\n') }, i + 2);
      out.push(S[d.p.slide](sctx, parts(sctx, CATS.insight)));
    });
    const ectx = mk(d.p.closeSurf || d.p.coverSurf || d.surf, { title: c.closing || c.title, cta: c.cta }, total);
    out.push(S[d.p.close](ectx, parts(ectx, CATS.insight)));
    return out;
  }

  /* ======================= the registry: 10 categories × 20 ======================= */
  const NAMES = {
    arc: ['Arc', 'القوس'], centerStar: ['Centred star', 'نجمة في المنتصف'], imageCard: ['Image card', 'بطاقة صورة'], timeline: ['Timeline', 'خط زمني'],
    quoteGlow: ['Quote glow', 'اقتباس متوهّج'], announce: ['W announcement', 'إعلان بالشعار'], chart: ['Chart card', 'بطاقة رسم بياني'], band: ['Gradient band', 'شريط متدرّج'],
    centerPill: ['Centred pill', 'وسط مع شارة'], plainTop: ['Top stack', 'نص في الأعلى'], plainBottom: ['Bottom stack', 'نص في الأسفل'], plainCenter: ['Centred', 'في المنتصف'],
    plainGiant: ['Poster type', 'خط ضخم'], plainColumns: ['Two columns', 'عمودان'], plainFramed: ['Framed', 'إطار'], plainCard: ['Soft card', 'بطاقة هادئة'],
    plainEditorial: ['Editorial index', 'فهرس تحريري'], plainInvert: ['Inverse block', 'كتلة معكوسة'], plainMinimal: ['Minimal', 'بسيط جدًا'], plainTwoTone: ['Two-tone', 'لونان'],
    plainRuled: ['Ruled', 'مسطّر'], harlequinBand: ['Harlequin band', 'شريط هارلكوين'], harlequinCard: ['Harlequin field', 'حقل هارلكوين'], dotline: ['Star dotted line', 'خط النجوم المنقّط'],
    halftone: ['Halftone field', 'حقل متدرّج'], auroraSpark: ['Aurora sparkles', 'أورورا ونجوم'], cardEcho: ['Card echo', 'بطاقة بصدى'], glowFocal: ['Focal glow', 'توهّج مركزي'],
    arcEcho: ['Arc echo', 'قوس بصدى'], colorBlock: ['Colour block', 'كتلة لونية'], bigStar: ['Big star', 'نجمة كبيرة'], glowCorner: ['Corner glow', 'توهّج الزاوية'],
    splitCard: ['Split card', 'بطاقة مقسومة'], statCorner: ['Number in the corner', 'رقم في الزاوية'], statEcho: ['Number echo', 'رقم بصدى'], statBars: ['Bars', 'أعمدة'],
    compareBars: ['Paired bars', 'أعمدة متقابلة'], compareSplit: ['Two panes', 'لوحان'], compareArrow: ['The big move', 'النقلة الكبيرة'], listGrid: ['Card grid', 'شبكة بطاقات'],
  };
  const FIGMA = new Set(['arc', 'centerStar', 'imageCard', 'timeline', 'quoteGlow', 'announce', 'chart', 'band', 'centerPill']);
  const D = (E.DESIGNS = []);
  const add = (cat, list) => list.forEach((x, i) => {
    const [arch, surf, mode, kind, p] = x;
    D.push({ id: `${cat}-${String(i + 1).padStart(2, '0')}`, cat, arch, surf, mode, kind, p: p || {}, figma: FIGMA.has(arch) || !!(p && p.fig), n: (p && p.n) || NAMES[arch] || [arch, arch] });
  });
  const P_ = 'plain', X_ = 'expr';

  add('insight', [
    ['arc', 'soft', 'light', X_], ['centerStar', 'soft', 'dark', X_], ['band', 'plain', 'light', X_],
    ['plainTop', 'plain', 'light', P_], ['plainBottom', 'subtle', 'light', P_], ['plainCenter', 'plain', 'dark', P_], ['plainGiant', 'plain', 'light', P_],
    ['plainColumns', 'plain', 'light', P_], ['plainFramed', 'subtle', 'light', P_], ['plainCard', 'plain', 'dark', P_], ['plainEditorial', 'plain', 'light', P_, { num: '01' }],
    ['plainInvert', 'plain', 'light', P_], ['plainRuled', 'plain', 'dark', P_],
    ['harlequinBand', 'plain', 'light', X_], ['harlequinCard', 'subtle', 'light', X_], ['dotline', 'plain', 'dark', X_], ['auroraSpark', 'aurora', 'dark', X_],
    ['glowFocal', 'aurora', 'dark', X_], ['arcEcho', 'brand', 'dark', X_], ['bigStar', 'soft', 'light', X_],
  ]);
  add('quote', [
    ['quoteGlow', 'soft', 'light', X_], ['centerPill', 'plain', 'dark', X_, { n: ['Centred quote', 'اقتباس في المنتصف'] }],
    ['plainCenter', 'plain', 'light', P_], ['plainMinimal', 'plain', 'dark', P_, { cls: 'xl' }], ['plainBottom', 'subtle', 'light', P_], ['plainFramed', 'plain', 'light', P_],
    ['plainEditorial', 'plain', 'light', P_, { num: '“' }], ['plainTwoTone', 'plain', 'dark', P_], ['plainRuled', 'plain', 'light', P_], ['plainCard', 'subtle', 'light', P_],
    ['plainInvert', 'plain', 'light', P_], ['plainColumns', 'plain', 'dark', P_],
    ['glowFocal', 'aurora', 'dark', X_], ['harlequinCard', 'plain', 'light', X_, { op: 0.48 }], ['auroraSpark', 'aurora', 'dark', X_], ['cardEcho', 'soft', 'light', X_],
    ['colorBlock', 'plain', 'light', X_], ['halftone', 'plain', 'dark', X_], ['dotline', 'subtle', 'light', X_], ['arc', 'brand', 'dark', X_],
  ]);
  add('research', [
    ['chart', 'plain', 'light', X_, { n: ['Finding + chart', 'نتيجة ورسم'] }], ['imageCard', 'plain', 'light', X_], ['arc', 'soft', 'light', X_],
    ['plainTop', 'plain', 'light', P_], ['plainColumns', 'plain', 'dark', P_], ['plainEditorial', 'plain', 'light', P_, { num: '15' }], ['plainRuled', 'plain', 'light', P_],
    ['plainCard', 'plain', 'light', P_], ['plainFramed', 'plain', 'dark', P_], ['plainTwoTone', 'plain', 'light', P_], ['plainBottom', 'subtle', 'light', P_],
    ['plainInvert', 'plain', 'light', P_], ['plainMinimal', 'plain', 'dark', P_, { cls: 'l' }],
    ['halftone', 'plain', 'light', X_], ['dotline', 'plain', 'dark', X_], ['harlequinBand', 'plain', 'light', X_], ['glowCorner', 'plain', 'dark', X_],
    ['cardEcho', 'subtle', 'light', X_], ['splitCard', 'plain', 'dark', X_], ['band', 'plain', 'light', X_],
  ]);
  add('stat', [
    ['chart', 'plain', 'light', X_, { n: ['Number + chart', 'رقم ورسم'] }], ['centerStar', 'soft', 'dark', X_],
    ['plainGiant', 'plain', 'light', P_], ['statCorner', 'plain', 'light', P_], ['plainTop', 'plain', 'dark', P_], ['plainColumns', 'plain', 'light', P_],
    ['plainEditorial', 'plain', 'light', P_, { num: '%' }], ['plainRuled', 'plain', 'light', P_], ['plainCard', 'subtle', 'light', P_], ['plainFramed', 'plain', 'dark', P_],
    ['plainMinimal', 'plain', 'light', P_, { cls: 'poster' }], ['plainTwoTone', 'plain', 'dark', P_],
    ['colorBlock', 'plain', 'light', X_, { blockContent: 'number' }], ['statEcho', 'plain', 'dark', X_], ['glowFocal', 'aurora', 'dark', X_, { cls: 'xl' }],
    ['harlequinBand', 'plain', 'light', X_], ['halftone', 'plain', 'light', X_], ['auroraSpark', 'aurora', 'dark', X_], ['dotline', 'subtle', 'light', X_], ['statBars', 'plain', 'dark', X_],
  ]);
  add('announcement', [
    ['announce', 'plain', 'light', X_], ['centerPill', 'plain', 'dark', X_], ['arc', 'soft', 'light', X_],
    ['plainTop', 'plain', 'light', P_], ['plainCenter', 'plain', 'dark', P_], ['plainBottom', 'subtle', 'light', P_], ['plainCard', 'plain', 'light', P_],
    ['plainFramed', 'plain', 'light', P_], ['plainColumns', 'plain', 'dark', P_], ['plainInvert', 'plain', 'light', P_], ['plainMinimal', 'plain', 'light', P_, { cls: 'l' }],
    ['plainRuled', 'plain', 'dark', P_], ['plainTwoTone', 'plain', 'light', P_],
    ['harlequinCard', 'subtle', 'light', X_], ['harlequinBand', 'plain', 'dark', X_], ['glowCorner', 'plain', 'dark', X_], ['auroraSpark', 'aurora', 'dark', X_],
    ['colorBlock', 'plain', 'light', X_], ['bigStar', 'soft', 'light', X_], ['cardEcho', 'plain', 'dark', X_],
  ]);
  add('achievement', [
    ['centerStar', 'soft', 'light', X_], ['band', 'plain', 'dark', X_],
    ['plainCenter', 'plain', 'light', P_], ['plainGiant', 'plain', 'light', P_], ['plainEditorial', 'plain', 'dark', P_, { num: '6/6' }], ['plainFramed', 'subtle', 'light', P_],
    ['plainCard', 'plain', 'light', P_], ['plainBottom', 'plain', 'dark', P_], ['plainRuled', 'plain', 'light', P_], ['plainInvert', 'plain', 'light', P_],
    ['plainTwoTone', 'plain', 'dark', P_], ['plainTop', 'subtle', 'light', P_],
    ['glowFocal', 'aurora', 'dark', X_], ['auroraSpark', 'aurora', 'dark', X_], ['harlequinBand', 'plain', 'light', X_], ['harlequinCard', 'plain', 'dark', X_, { op: 0.48 }],
    ['dotline', 'plain', 'light', X_], ['arcEcho', 'soft', 'light', X_], ['bigStar', 'plain', 'dark', X_], ['colorBlock', 'plain', 'light', X_],
  ]);
  add('project', [
    ['timeline', 'plain', 'light', P_, { n: ['Case timeline', 'خط الحالة'] }], ['imageCard', 'plain', 'light', X_, { xs: 'none' }], ['band', 'plain', 'dark', X_, { xs: 'none' }],
    ['plainTop', 'plain', 'dark', P_], ['plainColumns', 'plain', 'light', P_], ['plainEditorial', 'plain', 'light', P_, { num: '01' }], ['plainCard', 'subtle', 'light', P_],
    ['plainRuled', 'plain', 'light', P_], ['plainFramed', 'plain', 'dark', P_], ['plainTwoTone', 'plain', 'light', P_], ['plainInvert', 'plain', 'light', P_, { xs: 'none' }],
    ['plainBottom', 'plain', 'dark', P_, { xs: 'none', cls: 'xl' }],
    ['splitCard', 'plain', 'light', X_, { xs: 'none' }], ['arc', 'soft', 'light', X_], ['harlequinBand', 'plain', 'dark', X_, { xs: 'none' }], ['cardEcho', 'subtle', 'light', X_],
    ['colorBlock', 'plain', 'dark', X_, { xs: 'none' }], ['dotline', 'plain', 'light', X_], ['glowCorner', 'plain', 'dark', X_, { xs: 'none' }], ['halftone', 'plain', 'light', X_, { xs: 'none' }],
  ]);
  add('compare', [
    ['chart', 'plain', 'light', X_, { n: ['Line chart', 'رسم خطي'] }], ['compareBars', 'plain', 'dark', X_],
    ['compareSplit', 'plain', 'light', P_], ['compareArrow', 'plain', 'light', P_], ['plainTop', 'plain', 'dark', P_], ['plainColumns', 'plain', 'light', P_],
    ['plainCard', 'subtle', 'light', P_], ['plainRuled', 'plain', 'light', P_], ['plainEditorial', 'plain', 'dark', P_, { num: '→' }], ['compareSplit', 'subtle', 'dark', P_, { n: ['Two panes · dark', 'لوحان · داكن'] }],
    ['plainFramed', 'plain', 'light', P_], ['plainTwoTone', 'plain', 'light', P_],
    ['compareSplit', 'plain', 'light', X_, { emph: true, n: ['Two panes · emphasis', 'لوحان · إبراز'] }], ['compareArrow', 'aurora', 'dark', X_, { glow: true, n: ['The big move · glow', 'النقلة · توهّج'] }],
    ['harlequinBand', 'plain', 'light', X_], ['dotline', 'plain', 'dark', X_], ['cardEcho', 'subtle', 'light', X_], ['colorBlock', 'plain', 'dark', X_],
    ['arc', 'soft', 'light', X_], ['glowCorner', 'plain', 'dark', X_],
  ]);
  add('list', [
    ['centerPill', 'plain', 'light', X_, { xs: 'num', n: ['Centred list', 'قائمة في المنتصف'] }], ['band', 'plain', 'dark', X_, { xs: 'num' }], ['arc', 'soft', 'light', X_, { xs: 'num' }],
    ['plainTop', 'plain', 'light', P_, { xs: 'num' }], ['plainColumns', 'plain', 'dark', P_, { xs: 'num' }], ['plainCard', 'subtle', 'light', P_, { xs: 'line' }], ['plainEditorial', 'plain', 'light', P_, { xs: 'line', num: '04' }],
    ['plainRuled', 'plain', 'light', P_, { xs: 'num' }], ['plainFramed', 'plain', 'dark', P_, { xs: 'dot' }], ['plainTwoTone', 'plain', 'light', P_, { xs: 'num' }], ['plainInvert', 'plain', 'light', P_, { xs: 'line' }],
    ['listGrid', 'plain', 'light', P_], ['plainMinimal', 'plain', 'dark', P_, { xs: 'line', cls: 'm' }],
    ['dotline', 'plain', 'light', X_, { xs: 'star' }], ['harlequinBand', 'plain', 'dark', X_, { xs: 'num' }], ['cardEcho', 'soft', 'light', X_, { xs: 'num' }], ['auroraSpark', 'aurora', 'dark', X_, { xs: 'star' }],
    ['halftone', 'plain', 'light', X_, { xs: 'dot' }], ['listGrid', 'aurora', 'dark', X_, { emph: true, n: ['Card grid · emphasis', 'شبكة · إبراز'] }], ['glowCorner', 'plain', 'dark', X_, { xs: 'num' }],
  ]);
  const car = (n, kind, mode, p) => ['carousel', p.coverSurf || 'plain', mode, kind, Object.assign({ n }, p)];
  add('carousel', [
    car(['From Figma', 'من فيقما'], X_, 'light', { fig: true, cover: 'figCover', slide: 'figText', close: 'figClose' }),
    car(['Figma · dark', 'فيقما · داكن'], X_, 'dark', { fig: true, cover: 'figCover', slide: 'figText', close: 'figClose' }),
    car(['Plain bottom', 'نص في الأسفل'], P_, 'light', { cover: 'coverBottom', coverSurf: 'plain', slide: 'slidePlain', close: 'closePlain' }),
    car(['Plain dark', 'داكن بسيط'], P_, 'dark', { cover: 'coverBottom', coverSurf: 'plain', slide: 'slidePlain', close: 'closePlain' }),
    car(['Centred', 'في المنتصف'], P_, 'light', { cover: 'coverCenter', coverSurf: 'subtle', slide: 'slideRule', close: 'closeMark', closeSurf: 'subtle' }),
    car(['Numbered', 'مرقّم'], P_, 'light', { cover: 'coverGiant', coverSurf: 'plain', slide: 'slideNum', close: 'closePlain' }),
    car(['Numbered · dark', 'مرقّم · داكن'], P_, 'dark', { cover: 'coverGiant', coverSurf: 'plain', slide: 'slideNum', close: 'closeMark' }),
    car(['Ruled', 'مسطّر'], P_, 'light', { cover: 'coverBottom', coverSurf: 'plain', slide: 'slideRule', close: 'closePlain' }),
    car(['Soft cards', 'بطاقات هادئة'], P_, 'light', { cover: 'coverCenter', coverSurf: 'plain', slide: 'slideCard', close: 'closeMark' }),
    car(['Two-tone', 'لونان'], P_, 'dark', { cover: 'coverCenter', coverSurf: 'subtle', slide: 'slideRule', slideSurf: 'subtle', close: 'closePlain', closeSurf: 'subtle' }),
    car(['Minimal ink', 'حبر بسيط'], P_, 'light', { cover: 'coverGiant', coverSurf: 'ink', slide: 'slidePlain', close: 'closeMark', closeSurf: 'ink' }),
    car(['Paper', 'ورق'], P_, 'light', { cover: 'coverBottom', coverSurf: 'subtle', slide: 'slidePlain', slideSurf: 'subtle', close: 'closePlain', closeSurf: 'subtle' }),
    car(['Harlequin', 'هارلكوين'], X_, 'light', { cover: 'coverPattern', coverSurf: 'plain', slide: 'slideBand', close: 'closeGlow' }),
    car(['Harlequin · dark', 'هارلكوين · داكن'], X_, 'dark', { cover: 'coverPattern', coverSurf: 'plain', slide: 'slideBand', close: 'closeGlow' }),
    car(['Big star', 'نجمة كبيرة'], X_, 'light', { cover: 'coverStar', coverSurf: 'soft', slide: 'slideArc', close: 'closeGlow', closeSurf: 'soft' }),
    car(['Aurora', 'أورورا'], X_, 'dark', { cover: 'coverStar', coverSurf: 'aurora', slide: 'slideDots', close: 'closeGlow', closeSurf: 'aurora' }),
    car(['Violet', 'بنفسجي'], X_, 'dark', { cover: 'coverFig', coverSurf: 'brand', slide: 'slideCard', slideSurf: 'plain', close: 'closeMark', closeSurf: 'brand' }),
    car(['Dotted line', 'خط منقّط'], X_, 'light', { cover: 'coverCenter', coverSurf: 'soft', slide: 'slideDots', close: 'closeGlow', closeSurf: 'soft' }),
    car(['Ice', 'جليدي'], X_, 'light', { cover: 'coverFig', coverSurf: 'frost', slide: 'slideCard', slideSurf: 'frost', close: 'closeGlow', closeSurf: 'frost' }),
    car(['Arc', 'القوس'], X_, 'dark', { cover: 'coverBottom', coverSurf: 'soft', slide: 'slideArc', close: 'closeGlow', closeSurf: 'soft' }),
  ]);
  E.BY_ID = Object.fromEntries(D.map((d) => [d.id, d]));

  /* ---------- render ---------- */
  E.render = function (id, o) {
    const d = E.BY_ID[id];
    if (!d) return [];
    const mode = o.mode && o.mode !== 'auto' ? o.mode : d.mode;
    if (d.cat === 'carousel') return renderCarousel(d, o, mode);
    const ctx = E.ctx({ fmt: o.fmt, lang: o.lang, mode, surf: d.surf, content: o.content, sig: o.sig });
    ctx.p = d.p || {};
    const P = parts(ctx, CATS[d.cat]);
    return [A[d.arch](ctx, P, ctx.p)];
  };
})(typeof window !== 'undefined' ? window : globalThis);

/* Sample content — every line traces to Wejdan's Figma file (page 13 masters, brand book)
   or to the Mishkat case study (GP2 report). Numbers carry their sample size and source. */
(function (G) {
  'use strict';
  const E = G.WJ;
  E.SIG = {
    en: { name: 'Wejdan Almalki', handle: '@wejdan404ui', role: 'UX & HCI' },
    ar: { name: 'وجدان المالكي', handle: '@wejdan404ui', role: 'تجربة المستخدم' },
  };
  E.SAMPLES = {
    insight: {
      en: { overline: 'UX research', title: 'Research finds the person. Decisions follow evidence.', body: 'Findings carry their source; a claim without evidence stays out.' },
      ar: { overline: 'بحث تجربة المستخدم', title: 'البحث يجد الإنسان، والقرار يتبع الدليل.', body: 'لكل نتيجة مصدرها، وما لا دليل عليه لا يُنشر.' },
    },
    quote: {
      en: { overline: 'Design principle', title: 'Evidence, not opinion.', author: 'Wejdan Almalki', role: 'UX & HCI' },
      ar: { overline: 'مبدأ في التصميم', title: 'الدليل، لا الرأي.', author: 'وجدان المالكي', role: 'تجربة المستخدم' },
    },
    research: {
      en: { overline: 'UX research · Mishkat', title: 'Gifted students avoid wellness apps that feel clinical, effortful or exposed.', body: '15 interviews and 287 survey responses. 225 of 287 said protecting their personal information was important.', source: 'Mishkat, GP2 report', sample: true, project: 'Mishkat · HCI graduation project', rows: [] },
      ar: { overline: 'بحث تجربة المستخدم · مِشكاة', title: 'الطلبة الموهوبون يتجنبون تطبيقات العافية التي تبدو علاجية أو مُتعِبة أو تكشف خصوصيتهم.', body: '15 مقابلة و287 استجابة لاستبانة. رأى 225 من أصل 287 أن حماية معلوماتهم الشخصية أمر مهم.', source: 'مِشكاة، تقرير GP2', sample: true, project: 'مِشكاة · مشروع تخرج', rows: [] },
    },
    stat: {
      en: { overline: 'Usability testing · Mishkat', stat: '92%', statLabel: 'task completion after the redesign', title: 'A card-based redesign lifted task completion from 68% (6 participants).', body: '', rows: [{ label: 'Task completion · 6 participants', before: '68%', after: '92%' }], source: 'Mishkat, GP2 report §1.4.3', sample: true },
      ar: { overline: 'اختبار قابلية الاستخدام · مِشكاة', stat: '92%', statLabel: 'نسبة إنجاز المهام بعد إعادة التصميم', title: 'رفعت الواجهة المعتمدة على البطاقات نسبة إنجاز المهام من 68% (6 مشاركين).', body: '', rows: [{ label: 'نسبة إنجاز المهام · 6 مشاركين', before: '68%', after: '92%' }], source: 'مِشكاة، تقرير GP2 §1.4.3', sample: true },
    },
    announcement: {
      en: { badge: 'New', overline: 'Case study', title: 'A new case study: Mishkat', body: 'An Arabic-first app that helps gifted students notice how they feel and take one small next step.', cta: 'Read the case study →' },
      ar: { badge: 'جديد', overline: 'دراسة حالة', title: 'دراسة حالة جديدة: مِشكاة', body: 'تطبيق صُمّم للعربية منذ البداية، يساعد الطلبة الموهوبين على ملاحظة شعورهم واختيار خطوة صغيرة تالية.', cta: 'اقرأ دراسة الحالة ←' },
    },
    achievement: {
      en: { badge: 'Milestone', overline: 'HCI graduation project', title: '6 of 6 testers finished every scenario without help.', body: 'Mishkat · GP2 usability validation · Umm Al-Qura University · team of 6', date: '2026', source: 'Mishkat, GP2 report §7.2.5', sample: true },
      ar: { badge: 'إنجاز', overline: 'مشروع تخرج', title: 'أنهت 6 من 6 مشاركات جميع السيناريوهات دون مساعدة.', body: 'مِشكاة · اختبار قابلية الاستخدام في المرحلة الثانية · جامعة أم القرى · فريق من 6', date: '2026', source: 'مِشكاة، تقرير GP2 §7.2.5', sample: true },
    },
    project: {
      en: {
        overline: 'Case study', project: 'Mishkat · HCI graduation project', title: 'Mishkat', body: 'An Arabic-first mobile app that helps gifted students notice how they feel and take one small next step.',
        items: [
          { label: 'Challenge', text: 'Students avoided apps that felt clinical or asked for feelings without privacy.' },
          { label: 'Method', text: '15 interviews, 287 survey responses and a benchmark of existing apps.' },
          { label: 'Outcome', text: 'All six test participants finished every scenario without help.' },
        ],
        source: 'Mishkat · HCI graduation project, team of six',
      },
      ar: {
        overline: 'دراسة حالة', project: 'مِشكاة · مشروع تخرج', title: 'مِشكاة', body: 'تطبيق جوال صُمّم للعربية منذ البداية، يساعد الطلبة الموهوبين على ملاحظة شعورهم واختيار خطوة صغيرة تالية.',
        items: [
          { label: 'التحدي', text: 'تجنّب الطلبة التطبيقات التي تبدو علاجية أو تطلب مشاعرهم دون خصوصية كافية.' },
          { label: 'المنهج', text: '15 مقابلة و287 استجابة لاستبانة، ومقارنة مرجعية بين التطبيقات.' },
          { label: 'النتيجة', text: 'أنهت المشاركات الست جميع السيناريوهات دون مساعدة.' },
        ],
        source: 'مِشكاة · مشروع تخرج، فريق من 6',
      },
    },
    compare: {
      en: {
        overline: 'Usability testing · Mishkat', title: 'Original interface vs card-based redesign', body: 'First round of moderated testing, 6 participants.', beforeLabel: 'Before', afterLabel: 'After',
        rows: [{ label: 'Task completion', before: '68%', after: '92%' }, { label: 'Average task time', before: '2.4 min', after: '1.3 min' }, { label: 'Confusion reports', before: '4 of 6', after: '1 of 6' }],
        source: 'Mishkat, GP2 report §1.4.3', sample: true,
      },
      ar: {
        overline: 'اختبار قابلية الاستخدام · مِشكاة', title: 'الواجهة الأصلية مقابل الواجهة المعتمدة على البطاقات', body: 'الجولة الأولى من الاختبار الموجَّه، 6 مشاركين.', beforeLabel: 'قبل', afterLabel: 'بعد',
        rows: [{ label: 'نسبة إنجاز المهام', before: '68%', after: '92%' }, { label: 'متوسط زمن المهمة', before: '2.4 دقيقة', after: '1.3 دقيقة' }, { label: 'بلاغات الارتباك', before: '4 من 6', after: '1 من 6' }],
        source: 'مِشكاة، تقرير GP2 §1.4.3', sample: true,
      },
    },
    list: {
      en: { overline: 'Design principles', title: 'Four principles behind my work', items: ['The person at the centre', 'Evidence, not opinion', 'A system that stays open', 'Continuity after handover'], cta: 'Follow for more →' },
      ar: { overline: 'مبادئ التصميم', title: 'أربعة مبادئ خلف عملي', items: ['الإنسان في المركز', 'الدليل، لا الرأي', 'نظام يبقى مفتوحًا', 'استمرارية بعد التسليم'], cta: 'تابعني للمزيد ←' },
    },
    carousel: {
      en: {
        overline: 'UX research', title: 'The person at the centre', body: '',
        slides: [
          { kind: 'text', title: 'The person at the centre', body: 'Research starts with the people who use the product, not with the screen.' },
          { kind: 'card', title: 'The person at the centre', body: 'Research starts with the people who use the product, not with the screen.' },
          { kind: 'data', title: 'The person at the centre', body: 'Research starts with the people who use the product, not with the screen.', n: 2, of: 7, note: 'raised a footer navigation that was not fixed to the screen', source: 'WRAF usability test report, pp. 4–5, 10', sample: true },
          { kind: 'takeaway', pill: 'Takeaway', title: 'The person at the centre', body: 'Research starts with the people who use the product, not with the screen.' },
        ],
        closing: 'The person at the centre', cta: 'More research-led design notes →',
      },
      ar: {
        overline: 'بحث تجربة المستخدم', title: 'الإنسان في المركز', body: '',
        slides: [
          { kind: 'text', title: 'الإنسان في المركز', body: 'يبدأ البحث بالناس الذين يستخدمون المنتج، لا بالشاشة.' },
          { kind: 'card', title: 'الإنسان في المركز', body: 'يبدأ البحث بالناس الذين يستخدمون المنتج، لا بالشاشة.' },
          { kind: 'data', title: 'الإنسان في المركز', body: 'يبدأ البحث بالناس الذين يستخدمون المنتج، لا بالشاشة.', n: 2, of: 7, note: 'أشارا إلى شريط تنقل سفلي غير مثبت على الشاشة.', source: 'تقرير اختبار وراف، ص 4–5 و10', sample: true },
          { kind: 'takeaway', pill: 'الخلاصة', title: 'الإنسان في المركز', body: 'يبدأ البحث بالناس الذين يستخدمون المنتج، لا بالشاشة.' },
        ],
        closing: 'الإنسان في المركز', cta: 'المزيد من ملاحظات التصميم المبني على البحث ←',
      },
    },
  };
  /* which fields the form shows per category */
  E.FIELDS = {
    insight: ['overline', 'title', 'body'],
    quote: ['overline', 'title', 'author', 'role'],
    research: ['overline', 'title', 'body', 'source', 'sample', 'project'],
    stat: ['overline', 'stat', 'statLabel', 'title', 'body', 'rows', 'source', 'sample'],
    announcement: ['badge', 'overline', 'title', 'body', 'cta'],
    achievement: ['badge', 'overline', 'title', 'body', 'date', 'source', 'sample'],
    project: ['overline', 'project', 'title', 'body', 'items', 'source'],
    compare: ['overline', 'title', 'body', 'beforeLabel', 'afterLabel', 'rows', 'source', 'sample'],
    list: ['overline', 'title', 'items', 'cta'],
    carousel: ['overline', 'title', 'body', 'slides', 'closing', 'cta'],
  };
})(typeof window !== 'undefined' ? window : globalThis);

/* Wejdan Social Engine — thread category (src/thread.js)
   Bundles qrcode-generator 1.4.4 by Kazuhiko Arase (MIT), licence header kept below. */
(function (G) {
//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 40
   * @param errorCorrectionLevel 'L','M','Q','H'
   */
  var qrcode = function(typeNumber, errorCorrectionLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];

    var _this = {};

    var makeImpl = function(test, maskPattern) {

      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        var modules = new Array(moduleCount);
        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

      for (var r = -1; r <= 7; r += 1) {

        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {

          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function() {

      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {

        makeImpl(true, i);

        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function() {

      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = (r % 2 == 0);
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = (c % 2 == 0);
      }
    };

    var setupPositionAdjustPattern = function() {

      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {

        for (var j = 0; j < pos.length; j += 1) {

          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {

            for (var c = -2; c <= 2; c += 1) {

              if (r == -2 || r == 2 || c == -2 || c == 2
                  || (r == 0 && c == 0) ) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function(test) {

      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function(test, maskPattern) {

      var data = (_errorCorrectionLevel << 3) | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      _modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {

        if (col == 6) col -= 1;

        while (true) {

          for (var c = 0; c < 2; c += 1) {

            if (_modules[row][col - c] == null) {

              var dark = false;

              if (byteIndex < data.length) {
                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function(buffer, rsBlocks) {

      var offset = 0;

      var maxDcCount = 0;
      var maxEcCount = 0;

      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {

        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;

        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function(typeNumber, errorCorrectionLevel, dataList) {

      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
        data.write(buffer);
      }

      // calc num max data.
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw 'code length overflow. ('
          + buffer.getLengthInBits()
          + '>'
          + totalDataCount * 8
          + ')';
      }

      // end code
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      // padding
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      // padding
      while (true) {

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data, mode) {

      mode = mode || 'Byte';

      var newData = null;

      switch(mode) {
      case 'Numeric' :
        newData = qrNumber(data);
        break;
      case 'Alphanumeric' :
        newData = qrAlphaNum(data);
        break;
      case 'Byte' :
        newData = qr8BitByte(data);
        break;
      case 'Kanji' :
        newData = qrKanji(data);
        break;
      default :
        throw 'mode:' + mode;
      }

      _dataList.push(newData);
      _dataCache = null;
    };

    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + ',' + col;
      }
      return _modules[row][col];
    };

    _this.getModuleCount = function() {
      return _moduleCount;
    };

    _this.make = function() {
      if (_typeNumber < 1) {
        var typeNumber = 1;

        for (; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
          var buffer = qrBitBuffer();

          for (var i = 0; i < _dataList.length; i++) {
            var data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
            data.write(buffer);
          }

          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }

        _typeNumber = typeNumber;
      }

      makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var qrHtml = '';

      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {

        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';

      return qrHtml;
    };

    _this.createSvgTag = function(cellSize, margin, alt, title) {

      var opts = {};
      if (typeof arguments[0] == 'object') {
        // Called by options.
        opts = arguments[0];
        // overwrite cellSize and margin.
        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      // Compose alt property surrogate
      alt = (typeof alt === 'string') ? {text: alt} : alt || {};
      alt.text = alt.text || null;
      alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

      // Compose title property surrogate
      title = (typeof title === 'string') ? {text: title} : title || {};
      title.text = title.text || null;
      title.id = (title.text) ? title.id || 'qrcode-title' : null;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var c, mc, r, mr, qrSvg='', rect;

      rect = 'l' + cellSize + ',0 0,' + cellSize +
        ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
          escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
      qrSvg += '>';
      qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
          escapeXml(title.text) + '</title>' : '';
      qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
          escapeXml(alt.text) + '</description>' : '';
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';

      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;
        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c) ) {
            mc = c*cellSize+margin;
            qrSvg += 'M' + mc + ',' + mr + rect;
          }
        }
      }

      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += '</svg>';

      return qrSvg;
    };

    _this.createDataURL = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      return createDataURL(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor( (x - min) / cellSize);
          var r = Math.floor( (y - min) / cellSize);
          return _this.isDark(r, c)? 0 : 1;
        } else {
          return 1;
        }
      } );
    };

    _this.createImgTag = function(cellSize, margin, alt) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;

      var img = '';
      img += '<img';
      img += '\u0020src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += '\u0020width="';
      img += size;
      img += '"';
      img += '\u0020height="';
      img += size;
      img += '"';
      if (alt) {
        img += '\u0020alt="';
        img += escapeXml(alt);
        img += '"';
      }
      img += '/>';

      return img;
    };

    var escapeXml = function(s) {
      var escaped = '';
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charAt(i);
        switch(c) {
        case '<': escaped += '&lt;'; break;
        case '>': escaped += '&gt;'; break;
        case '&': escaped += '&amp;'; break;
        case '"': escaped += '&quot;'; break;
        default : escaped += c; break;
        }
      }
      return escaped;
    };

    var _createHalfASCII = function(margin) {
      var cellSize = 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r1, r2, p;

      var blocks = {
        '██': '█',
        '█ ': '▀',
        ' █': '▄',
        '  ': ' '
      };

      var blocksLastLineNoMargin = {
        '██': '▀',
        '█ ': '▀',
        ' █': ' ',
        '  ': ' '
      };

      var ascii = '';
      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);
        for (x = 0; x < size; x += 1) {
          p = '█';

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = ' ';
          }

          if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += ' ';
          }
          else {
            p += '█';
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
        }

        ascii += '\n';
      }

      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.createASCII = function(cellSize, margin) {
      cellSize = cellSize || 1;

      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }

      cellSize -= 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r, p;

      var white = Array(cellSize+1).join('██');
      var black = Array(cellSize+1).join('  ');

      var ascii = '';
      var line = '';
      for (y = 0; y < size; y += 1) {
        r = Math.floor( (y - min) / cellSize);
        line = '';
        for (x = 0; x < size; x += 1) {
          p = 1;

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          line += p ? white : black;
        }

        for (r = 0; r < cellSize; r += 1) {
          ascii += line + '\n';
        }
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.renderTo2dContext = function(context, cellSize) {
      cellSize = cellSize || 2;
      var length = _this.getModuleCount();
      for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
          context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
        }
      }
    }

    return _this;
  };

  //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytesFuncs = {
    'default' : function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
      }
      return bytes;
    }
  };

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

  //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */
  qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

      var bin = base64DecodeInputStream(unicodeData);
      var read = function() {
        var b = bin.read();
        if (b == -1) throw 'eof';
        return b;
      };

      var count = 0;
      var unicodeMap = {};
      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode( (b0 << 8) | b1);
        var v = (b2 << 8) | b3;
        unicodeMap[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw count + ' != ' + numChars;
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];
          if (typeof b == 'number') {
            if ( (b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER :    1 << 0,
    MODE_ALPHA_NUM : 1 << 1,
    MODE_8BIT_BYTE : 1 << 2,
    MODE_KANJI :     1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectionLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectionLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
      var digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };

    _this.getBCHTypeInfo = function(data) {
      var d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
      }
      return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
      var d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
      }
      return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

      switch (maskPattern) {

      case QRMaskPattern.PATTERN000 :
        return function(i, j) { return (i + j) % 2 == 0; };
      case QRMaskPattern.PATTERN001 :
        return function(i, j) { return i % 2 == 0; };
      case QRMaskPattern.PATTERN010 :
        return function(i, j) { return j % 3 == 0; };
      case QRMaskPattern.PATTERN011 :
        return function(i, j) { return (i + j) % 3 == 0; };
      case QRMaskPattern.PATTERN100 :
        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
      case QRMaskPattern.PATTERN101 :
        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
      case QRMaskPattern.PATTERN110 :
        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
      case QRMaskPattern.PATTERN111 :
        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

      default :
        throw 'bad maskPattern:' + maskPattern;
      }
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      var a = qrPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
      }
      return a;
    };

    _this.getLengthInBits = function(mode, type) {

      if (1 <= type && type < 10) {

        // 1 - 9

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 10;
        case QRMode.MODE_ALPHA_NUM : return 9;
        case QRMode.MODE_8BIT_BYTE : return 8;
        case QRMode.MODE_KANJI     : return 8;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 27) {

        // 10 - 26

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 12;
        case QRMode.MODE_ALPHA_NUM : return 11;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 10;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 41) {

        // 27 - 40

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 14;
        case QRMode.MODE_ALPHA_NUM : return 13;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 12;
        default :
          throw 'mode:' + mode;
        }

      } else {
        throw 'type:' + type;
      }
    };

    _this.getLostPoint = function(qrcode) {

      var moduleCount = qrcode.getModuleCount();

      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {

          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {

            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {

              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c) ) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += (3 + sameCount - 5);
          }
        }
      };

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col) ) count += 1;
          if (qrcode.isDark(row + 1, col) ) count += 1;
          if (qrcode.isDark(row, col + 1) ) count += 1;
          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row, col + 1)
              &&  qrcode.isDark(row, col + 2)
              &&  qrcode.isDark(row, col + 3)
              &&  qrcode.isDark(row, col + 4)
              && !qrcode.isDark(row, col + 5)
              &&  qrcode.isDark(row, col + 6) ) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row + 1, col)
              &&  qrcode.isDark(row + 2, col)
              &&  qrcode.isDark(row + 3, col)
              &&  qrcode.isDark(row + 4, col)
              && !qrcode.isDark(row + 5, col)
              &&  qrcode.isDark(row + 6, col) ) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col) ) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;

      return lostPoint;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4]
        ^ EXP_TABLE[i - 5]
        ^ EXP_TABLE[i - 6]
        ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

      if (n < 1) {
        throw 'glog(' + n + ')';
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------

  function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
      throw num.length + '/' + shift;
    }

    var _num = function() {
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }
      var _num = new Array(num.length - offset + shift);
      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }
      return _num;
    }();

    var _this = {};

    _this.getAt = function(index) {
      return _num[index];
    };

    _this.getLength = function() {
      return _num.length;
    };

    _this.multiply = function(e) {

      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

      var num = new Array(_this.getLength() );
      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.getAt(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
      }

      // recursive call
      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function() {

    var RS_BLOCK_TABLE = [

      // L
      // M
      // Q
      // H

      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],

      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],

      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],

      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],

      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],

      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],

      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],

      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],

      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],

      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],

      // 11
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],

      // 12
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],

      // 13
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],

      // 14
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],

      // 15
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],

      // 16
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],

      // 17
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],

      // 18
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],

      // 19
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],

      // 20
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],

      // 21
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],

      // 22
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],

      // 23
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],

      // 24
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],

      // 25
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],

      // 26
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],

      // 27
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],

      // 28
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],

      // 29
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],

      // 30
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],

      // 31
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],

      // 32
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],

      // 33
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],

      // 34
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],

      // 35
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],

      // 36
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],

      // 37
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],

      // 38
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],

      // 39
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],

      // 40
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];

    var qrRSBlock = function(totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

      switch(errorCorrectionLevel) {
      case QRErrorCorrectionLevel.L :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectionLevel.M :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectionLevel.Q :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectionLevel.H :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default :
        return undefined;
      }
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

      if (typeof rsBlock == 'undefined') {
        throw 'bad rs block @ typeNumber:' + typeNumber +
            '/errorCorrectionLevel:' + errorCorrectionLevel;
      }

      var length = rsBlock.length / 3;

      var list = [];

      for (var i = 0; i < length; i += 1) {

        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount) );
        }
      }

      return list;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------

  var qrBitBuffer = function() {

    var _buffer = [];
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
      return _buffer;
    };

    _this.getAt = function(index) {
      var bufIndex = Math.floor(index / 8);
      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
      }
    };

    _this.getLengthInBits = function() {
      return _length;
    };

    _this.putBit = function(bit) {

      var bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
      }

      _length += 1;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrNumber
  //---------------------------------------------------------------------

  var qrNumber = function(data) {

    var _mode = QRMode.MODE_NUMBER;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var data = _data;

      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(strToNum(data.substring(i, i + 3) ), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i == 1) {
          buffer.put(strToNum(data.substring(i, i + 1) ), 4);
        } else if (data.length - i == 2) {
          buffer.put(strToNum(data.substring(i, i + 2) ), 7);
        }
      }
    };

    var strToNum = function(s) {
      var num = 0;
      for (var i = 0; i < s.length; i += 1) {
        num = num * 10 + chatToNum(s.charAt(i) );
      }
      return num;
    };

    var chatToNum = function(c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      }
      throw 'illegal char :' + c;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrAlphaNum
  //---------------------------------------------------------------------

  var qrAlphaNum = function(data) {

    var _mode = QRMode.MODE_ALPHA_NUM;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var s = _data;

      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(
          getCode(s.charAt(i) ) * 45 +
          getCode(s.charAt(i + 1) ), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(getCode(s.charAt(i) ), 6);
      }
    };

    var getCode = function(c) {

      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        switch (c) {
        case ' ' : return 36;
        case '$' : return 37;
        case '%' : return 38;
        case '*' : return 39;
        case '+' : return 40;
        case '-' : return 41;
        case '.' : return 42;
        case '/' : return 43;
        case ':' : return 44;
        default :
          throw 'illegal char :' + c;
        }
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------

  var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _bytes.length;
    };

    _this.write = function(buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrKanji
  //---------------------------------------------------------------------

  var qrKanji = function(data) {

    var _mode = QRMode.MODE_KANJI;
    var _data = data;

    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
    if (!stringToBytes) {
      throw 'sjis not supported.';
    }
    !function(c, code) {
      // self test for sjis support.
      var test = stringToBytes(c);
      if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
        throw 'sjis not supported.';
      }
    }('\u53cb', 0x9746);

    var _bytes = stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return ~~(_bytes.length / 2);
    };

    _this.write = function(buffer) {

      var data = _bytes;

      var i = 0;

      while (i + 1 < data.length) {

        var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

        if (0x8140 <= c && c <= 0x9FFC) {
          c -= 0x8140;
        } else if (0xE040 <= c && c <= 0xEBBF) {
          c -= 0xC140;
        } else {
          throw 'illegal char at ' + (i + 1) + '/' + c;
        }

        c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

        buffer.put(c, 13);

        i += 2;
      }

      if (i < data.length) {
        throw 'illegal char at ' + (i + 1);
      }
    };

    return _this;
  };

  //=====================================================================
  // GIF Support etc.
  //

  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------

  var byteArrayOutputStream = function() {

    var _bytes = [];

    var _this = {};

    _this.writeByte = function(b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function(s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i) );
      }
    };

    _this.toByteArray = function() {
      return _bytes;
    };

    _this.toString = function() {
      var s = '';
      s += '[';
      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }
        s += _bytes[i];
      }
      s += ']';
      return s;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------

  var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
      if (n < 0) {
        // error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw 'n:' + n;
    };

    _this.writeByte = function(n) {

      _buffer = (_buffer << 8) | (n & 0xff);
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> (_buflen - 6) );
        _buflen -= 6;
      }
    };

    _this.flush = function() {

      if (_buflen > 0) {
        writeEncoded(_buffer << (6 - _buflen) );
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;
        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function() {
      return _base64;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------

  var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

      while (_buflen < 8) {

        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw 'unexpected end of file./' + _buflen;
        }

        var c = _str.charAt(_pos);
        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/) ) {
          // ignore if whitespace.
          continue;
        }

        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
        _buflen += 6;
      }

      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function(c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw 'c:' + c;
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------

  var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

      //---------------------------------
      // GIF Signature

      out.writeString('GIF87a');

      //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);

      out.writeByte(0x80); // 2bit
      out.writeByte(0);
      out.writeByte(0);

      //---------------------------------
      // Global Color Map

      // black
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);

      // white
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);

      //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);

      //---------------------------------
      // Local Color Map

      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);

      out.writeByte(lzwMinCodeSize);

      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);

      //---------------------------------
      // GIF Terminator
      out.writeString(';');
    };

    var bitOutputStream = function(out) {

      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;

      var _this = {};

      _this.write = function(data, length) {

        if ( (data >>> length) != 0) {
          throw 'length over';
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
          length -= (8 - _bitLength);
          data >>>= (8 - _bitLength);
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = (data << _bitLength) | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1;

      // Setup LZWTable
      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i) );
      }
      table.add(String.fromCharCode(clearCode) );
      table.add(String.fromCharCode(endCode) );

      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut);

      // clear code
      bitOut.write(clearCode, bitLength);

      var dataIndex = 0;

      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {

        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c) ) {

          s = s + c;

        } else {

          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {

            if (table.size() == (1 << bitLength) ) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength);

      // end code
      bitOut.write(endCode, bitLength);

      bitOut.flush();

      return byteOut.toByteArray();
    };

    var lzwTable = function() {

      var _map = {};
      var _size = 0;

      var _this = {};

      _this.add = function(key) {
        if (_this.contains(key) ) {
          throw 'dup key:' + key;
        }
        _map[key] = _size;
        _size += 1;
      };

      _this.size = function() {
        return _size;
      };

      _this.indexOf = function(key) {
        return _map[key];
      };

      _this.contains = function(key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createDataURL = function(width, height, getPixel) {
    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y) );
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();

    return 'data:image/gif;base64,' + base64;
  };

  //---------------------------------------------------------------------
  // returns qrcode function.

  return qrcode;
}();

// multibyte support
!function() {

  qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    function toUTF8Array(str) {
      var utf8 = [];
      for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
          i++;
          // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
            | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18),
              0x80 | ((charcode>>12) & 0x3f),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
      }
      return utf8;
    }
    return toUTF8Array(s);
  };

}();
  qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];
  if (G.WJ) G.WJ.qrcode = qrcode;
})(typeof window !== 'undefined' ? window : globalThis);

/* Wejdan Social Engine — category "thread": 20 designs for X threads (and LinkedIn),
   with image slots, phone/browser mockups and a QR code on the closing frame.
   Loads after cats.js; registers through E.CATS, E.DESIGNS, E.BY_ID, E.SAMPLES, E.FIELDS and wraps E.render. */
(function (G) {
  'use strict';
  const E = G.WJ;
  if (!E || !E.CATS) return;
  const QR = E.qrcode;
  const { B, M, st, esc, mark, frame, header, footer, region, fitEl, T, tf } = E;
  const nl = (s) => esc(s).replace(/\n/g, '<br>');
  const fld = (ctx, k) => (ctx.fmap && ctx.fmap[k]) || k;
  /* add data-field to the first tag when the engine build did not */
  const tag = (html, field) => (!html || /^<\w+[^>]*\sdata-field=/.test(html) ? html : html.replace(/^<(\w+)/, `<$1 data-field="${field}"`));

  /* ---------------- text blocks ---------------- */
  const H = (ctx, cls, o) => {
    o = o || {};
    const t = ctx.c.title;
    if (!t) return '';
    const f = fld(ctx, 'title');
    return tag(fitEl(ctx, o.lad || 'd', cls, nl(t), { align: o.align, color: o.color || ctx.pal.text, ml: o.ml, maxw: o.maxw, pr: 1, field: f, w: o.w }), f);
  };
  const Bd = (ctx, o) => {
    o = o || {};
    const t = ctx.c.body;
    if (!t) return '';
    const f = fld(ctx, 'body');
    return tag(fitEl(ctx, 'b', o.cls || 'l', nl(t), { align: o.align, color: o.color || ctx.pal.sec, maxw: o.maxw, drop: o.drop || 2, role: 'body', field: f }), f);
  };
  const Ov = (ctx, o) => (ctx.c.overline ? B.over(ctx, ctx.c.overline, Object.assign({ field: 'overline' }, o || {})) : '');
  const Cta = (ctx, o) => (ctx.c.cta ? `<div data-field="cta" style="${tf(T.label(ctx), (o && o.color) || ctx.pal.accent, { textAlign: o && o.align })}">${esc(ctx.c.cta)}</div>` : '');
  const ltr = (s) => `<bdi dir="ltr" style="unicode-bidi:isolate">${s}</bdi>`;

  /* thread position: "2/6", isolated LTR so Arabic keeps the order */
  const No = (ctx, o) => {
    o = o || {};
    if (!ctx.page) return '';
    if (o.big) {
      return `<div aria-label="${ctx.page}/${ctx.pages}" style="${st({ fontFamily: E.fs(ctx), fontWeight: 300, fontSize: (o.size || 112) + 'px', lineHeight: (o.size || 112) + 'px', color: o.color || ctx.pal.brand, letterSpacing: '-0.03em', flex: 'none' })}">${ltr(String(ctx.page).padStart(2, '0') + `<span style="font-size:0.36em;letter-spacing:0;color:${o.muted || ctx.pal.muted}">/${String(ctx.pages).padStart(2, '0')}</span>`)}</div>`;
    }
    return `<div style="${tf(T.label(ctx), o.color || ctx.pal.accent, { display: 'flex', gap: '12px', alignItems: 'center', flex: 'none' })}">${ltr(ctx.page + '/' + ctx.pages)}${o.arrow ? `<span aria-hidden="true">${ctx.ar ? '←' : '→'}</span>` : ''}</div>`;
  };
  const cueText = (ctx, n) => {
    if (!ctx.ar) return `Thread · ${n} post${n === 1 ? '' : 's'}`;
    const w = n === 1 ? 'منشور واحد' : n === 2 ? 'منشوران' : n <= 10 ? `${n} منشورات` : `${n} منشورًا`;
    return `سلسلة · ${w}`;
  };
  const Cue = (ctx, n, o) => B.pill(ctx, cueText(ctx, n), Object.assign({ star: true }, o || {}));

  /* ---------------- image slot ---------------- */
  const LBL_IMG = ['Add image', 'أضيفي صورة'];
  const Img = (ctx, key, o) => {
    o = o || {};
    const src = ctx.c[key];
    const f = fld(ctx, key);
    const light = o.tone ? o.tone === 'light' : ctx.palKey === 'light';
    const ph = light ? 'linear-gradient(150deg,#7B88BF 0%,#A9B3D8 45%,#CFE2F8 100%)' : 'linear-gradient(160deg,#4E5C96 0%,#2B3358 45%,#151A2B 100%)';
    const lab = light ? '#0E121C' : '#FFFFFF';
    const inner = src
      ? `<img src="${esc(src)}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${o.pos || 'center'};display:block">`
      : `<div aria-hidden="true" style="${st({ position: 'absolute', inset: 0, background: ph, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '18px' })}">` +
        `${E.star(o.small ? 48 : 76, '#FFFFFF', { filter: 'drop-shadow(0 0 18px rgba(255,255,255,.6))' })}` +
        `<span style="${tf(T.label(ctx), lab, { opacity: 0.8 })}">${LBL_IMG[ctx.ar ? 1 : 0]}</span></div>`;
    const box = {
      position: o.abs ? 'absolute' : 'relative', overflow: 'hidden', borderRadius: (o.r ?? 28) + 'px', flex: o.flex || 'none',
      width: o.w || '100%', height: o.h ? (typeof o.h === 'number' ? o.h + 'px' : o.h) : '100%', minHeight: o.minh ? o.minh + 'px' : undefined,
      alignSelf: o.self || 'stretch', boxSizing: 'border-box', border: o.border, background: light ? '#DCE0EF' : '#1E243F',
      top: o.top, bottom: o.bottom, insetInlineStart: o.start, insetInlineEnd: o.end, zIndex: o.z,
    };
    return `<div data-field="${f}" data-img="1" style="${st(box)}">${inner}${o.overlay || ''}</div>`;
  };
  /* phone mockup around an image slot */
  const Phone = (ctx, key, o) => {
    o = o || {};
    const w = o.w || 520, h = Math.round(w * 2.05), bw = Math.round(w * 0.028);
    const frameC = ctx.palKey === 'light' ? '#0E121C' : '#40444D';
    const pos = o.abs ? st({ position: 'absolute', top: o.top, bottom: o.bottom, insetInlineStart: o.start, insetInlineEnd: o.end, zIndex: 0 }) : 'position:relative;flex:none;align-self:center';
    return `<div aria-hidden="false" style="${pos};width:${w}px;height:${h}px;border-radius:${Math.round(w * 0.13)}px;background:${frameC};padding:${bw}px;box-sizing:border-box;box-shadow:${ctx.pal.shadow}">` +
      `<div style="position:relative;width:100%;height:100%;border-radius:${Math.round(w * 0.11)}px;overflow:hidden">` +
      Img(ctx, key, { r: Math.round(w * 0.11), small: true, pos: 'top' }) +
      `<div aria-hidden="true" style="position:absolute;top:${Math.round(w * 0.035)}px;left:50%;transform:translateX(-50%);width:${Math.round(w * 0.3)}px;height:${Math.round(w * 0.07)}px;border-radius:999px;background:#0E121C"></div></div></div>`;
  };
  /* browser mockup around an image slot */
  const Browser = (ctx, key, o) => {
    o = o || {};
    const light = ctx.palKey === 'light';
    const bar = light ? '#F2F7FE' : '#222630', dot = light ? '#B9C1DE' : '#6E7179', url = light ? '#FFFFFF' : '#181C26';
    return `<div style="${st({ position: 'relative', flex: o.flex || '1 1 0', minHeight: o.minh ? o.minh + 'px' : '0', minWidth: 0, display: 'flex', flexDirection: 'column', borderRadius: '24px', overflow: 'hidden', border: `1px solid ${ctx.pal.line}`, boxShadow: ctx.pal.shadow, background: url })}">` +
      `<div aria-hidden="true" style="display:flex;align-items:center;gap:12px;height:56px;padding:0 22px;background:${bar};flex:none;direction:ltr">` +
      `<span style="width:14px;height:14px;border-radius:50%;background:${dot}"></span><span style="width:14px;height:14px;border-radius:50%;background:${dot}"></span><span style="width:14px;height:14px;border-radius:50%;background:${dot}"></span>` +
      `<span style="flex:1;height:26px;border-radius:999px;background:${url};margin-left:16px;max-width:60%"></span></div>` +
      `<div style="position:relative;flex:1 1 0;min-height:0;display:flex">${Img(ctx, key, { r: 0, small: true, pos: 'top' })}</div></div>`;
  };

  /* ---------------- QR (qrcode-generator, MIT) ---------------- */
  const qrSvg = (text, size, dark) => {
    if (!QR || !text) return '';
    let q;
    try { q = QR(0, 'M'); q.addData(String(text), 'Byte'); q.make(); } catch (e) { return ''; }
    const n = q.getModuleCount(), qz = 4, tot = n + qz * 2;
    let d = '';
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c + qz} ${r + qz}h1v1h-1z`;
    return `<svg role="img" aria-label="QR" viewBox="0 0 ${tot} ${tot}" width="${size}" height="${size}" shape-rendering="crispEdges" style="display:block"><rect width="${tot}" height="${tot}" fill="#FFFFFF"/><path d="${d}" fill="${dark || '#0E121C'}"/></svg>`;
  };
  E.qrSvg = qrSvg;
  const QRCard = (ctx, size, o) => {
    o = o || {};
    const url = ctx.c.qr;
    if (!url) return '';
    const svg = qrSvg(url, size);
    if (!svg) return '';
    const shown = String(url).replace(/^https?:\/\//, '').replace(/\/$/, '');
    return `<div style="${st({ display: 'flex', flexDirection: 'column', alignItems: o.align === 'center' ? 'center' : 'flex-start', gap: '18px', flex: 'none' })}">` +
      `<div data-qr-for="qr" style="${st({ background: '#FFFFFF', borderRadius: '24px', padding: '18px', boxShadow: ctx.palKey === 'light' ? `0 0 0 1px ${ctx.pal.line}` : 'none', lineHeight: 0 })}">${svg}</div>` +
      `<div data-field="qr" data-value="${esc(url)}" style="${tf(T.label(ctx), ctx.pal.text, { direction: 'ltr', unicodeBidi: 'isolate' })}">${esc(shown)}</div></div>`;
  };

  /* ---------------- motifs ---------------- */
  const motif = (ctx, m) => {
    if (m === 'arc') return M.arc(ctx, ctx.land ? { r: 470, end: -150, bottom: -470 } : { r: 470, end: -470, bottom: -170 });
    if (m === 'glow') return M.glow(ctx, ctx.land ? { size: 1000, top: -300, end: -250 } : { size: 1100, top: -380, end: -380 });
    if (m === 'bigStar') { const s = ctx.land ? 760 : 820; return `<div aria-hidden="true" style="position:absolute;bottom:${ctx.land ? -250 : -300}px;inset-inline-end:${ctx.land ? -240 : -330}px;width:${s}px;height:${s}px;opacity:.9">${E.starGrad(ctx, s)}</div>`; }
    return '';
  };
  const sigFoot = (ctx, right) => footer(ctx, { right: right || '' });
  const darkCtx = (ctx) => Object.assign({}, ctx, { pal: E.PAL.dark, palKey: 'dark' });
  const scrim = 'linear-gradient(0deg, rgba(14,18,28,.92) 0%, rgba(14,18,28,.72) 38%, rgba(14,18,28,.18) 66%, rgba(14,18,28,0) 76%, rgba(14,18,28,.45) 92%, rgba(14,18,28,.6) 100%)';
  const scrimLand = (ar) => `linear-gradient(${ar ? 270 : 90}deg, rgba(14,18,28,.92) 0%, rgba(14,18,28,.78) 42%, rgba(14,18,28,.1) 75%, rgba(14,18,28,0) 88%), linear-gradient(180deg, rgba(14,18,28,.5) 0%, rgba(14,18,28,0) 22%)`;

  /* ======================= covers ======================= */
  const C = {};
  C.hook = (ctx, d, n) => {
    const inner = header(ctx, { over: Ov(ctx) }) +
      region(Cue(ctx, n) + H(ctx, d.p.ccls || 'xl', { maxw: d.p.motif === 'bigStar' ? '74%' : undefined }) + Bd(ctx, { cls: 'm', maxw: d.p.motif === 'bigStar' ? '64%' : undefined }) + B.source(ctx), { justify: d.p.motif === 'bigStar' ? 'center' : ctx.land ? 'center' : 'flex-end', gap: 30, pad: ctx.land ? '24px 0' : '32px 0 56px' }) +
      sigFoot(ctx, No(ctx, { arrow: true }));
    return frame(ctx, inner, motif(ctx, d.p.motif));
  };
  C.giant = (ctx, d, n) => {
    const inner = header(ctx, { over: Ov(ctx) }) + region(H(ctx, 'poster', { ml: ctx.land ? 3 : 5 }) + Cue(ctx, n) + B.source(ctx), { justify: 'center', gap: 36 }) + sigFoot(ctx, No(ctx));
    return frame(ctx, inner, motif(ctx, d.p.motif));
  };
  C.index = (ctx, d, n, posts) => {
    const items = posts.map((p, i) => `<div style="display:flex;gap:0.7em;align-items:baseline;${d.p.motif === 'dots' ? '' : `border-top:1px solid ${ctx.pal.line};padding-top:0.45em`}"><span style="font-family:${E.fs(ctx)};font-weight:600;color:${ctx.pal.brand};flex:none;min-width:1.5em">${ltr(String(i + 2).padStart(2, '0'))}</span><span data-field="posts.${i}.title" style="color:${ctx.pal.text}">${esc(p.title || '')}</span></div>`).join('');
    const list = fitEl(ctx, 'b', 1, `<div style="display:flex;flex-direction:column;gap:0.5em">${items}</div>`, { pr: 2 });
    const dots = d.p.motif === 'dots' ? B.dotline(ctx, { n: ctx.land ? 40 : 30 }) : '';
    const body = ctx.land
      ? `<div style="display:flex;gap:80px;flex:1;min-height:0;padding:24px 0">` + region(Cue(ctx, n) + H(ctx, 'l') + B.source(ctx), { flex: '1.1 1 0', gap: 28, justify: 'center' }) + region(list, { flex: '0.9 1 0', justify: 'center', gap: 0 }) + '</div>'
      : region(Cue(ctx, n) + H(ctx, 'l') + list + B.source(ctx), { gap: 30, justify: 'center', pad: '24px 0' });
    const inner = header(ctx, { over: Ov(ctx) }) + (dots ? `<div style="height:28px;flex:none"></div>${dots}` : '') + body + sigFoot(ctx, No(ctx));
    return frame(ctx, inner, '');
  };
  C.image = (ctx, d, n) => {
    const dc = darkCtx(ctx);
    const img = Img(ctx, 'image', { abs: true, top: 0, start: 0, w: '100%', h: '100%', r: 0, tone: 'dark', z: 0 });
    const sc = `<div aria-hidden="true" style="position:absolute;inset:0;background:${ctx.land ? scrimLand(ctx.ar) : scrim};z-index:0"></div>`;
    const inner = header(dc, { over: Ov(dc, { color: '#BEDAF7' }), markColor: '#FFFFFF' }) +
      region(Cue(dc, n, { bg: 'rgba(255,255,255,.16)', fg: '#FFFFFF' }) + H(dc, 'l', { color: '#FFFFFF', maxw: ctx.land ? '62%' : undefined }) + Bd(dc, { cls: 'm', color: '#D1D2D5', maxw: ctx.land ? '58%' : undefined }) + B.source(dc), { justify: 'flex-end', gap: 28, pad: '24px 0 40px' }) +
      footer(dc, { left: B.sig(dc, { color: '#D1D2D5' }), right: No(dc, { color: '#BEDAF7' }) });
    return frame(Object.assign({}, ctx, { pal: E.PAL.dark }), inner, img + sc);
  };
  C.split = (ctx, d, n) => {
    if (ctx.land) {
      const img = Img(ctx, 'image', { abs: true, top: 0, start: 0, w: '44%', h: '100%', r: 0, z: 0 });
      const inner = `<div style="display:flex;flex-direction:column;flex:1;min-height:0;margin-inline-start:${Math.round(ctx.W * 0.44 - ctx.M + 72)}px">` + header(ctx, { over: Ov(ctx) }) +
        region(Cue(ctx, n) + H(ctx, 'm') + Bd(ctx, { cls: 'm' }) + B.source(ctx), { justify: 'center', gap: 26 }) + sigFoot(ctx, No(ctx)) + '</div>';
      return frame(ctx, inner, img);
    }
    const img = Img(ctx, 'image', { abs: true, top: 0, start: 0, w: '100%', h: '44%', r: 0, z: 0 });
    const inner = `<div style="height:${Math.round(ctx.H * 0.44 - ctx.M + 48)}px;flex:none"></div>` + header(ctx, { over: Ov(ctx) }) +
      region(Cue(ctx, n) + H(ctx, 'l') + Bd(ctx, { cls: 'm' }) + B.source(ctx), { gap: 26, pad: '28px 0 24px' }) + sigFoot(ctx, No(ctx));
    return frame(ctx, inner, img);
  };
  C.pattern = (ctx, d, n) => {
    const op = d.p.op || 0.48;
    if (ctx.land) {
      const pat = M.harlequin(ctx, { top: 0, end: 0, width: '34%', height: '100%', op });
      const inner = `<div style="display:flex;flex-direction:column;flex:1;min-height:0;margin-inline-end:${Math.round(ctx.W * 0.34 - ctx.M + 72)}px">` + header(ctx, { over: Ov(ctx) }) +
        region(Cue(ctx, n) + H(ctx, 'l') + Bd(ctx, { cls: 'm' }) + B.source(ctx), { justify: 'center', gap: 26 }) + sigFoot(ctx, No(ctx)) + '</div>';
      return frame(ctx, inner, pat);
    }
    const pat = M.harlequin(ctx, { top: 0, start: 0, height: '36%', op });
    const inner = `<div style="height:${Math.round(ctx.H * 0.36 - ctx.M + 48)}px;flex:none"></div>` + header(ctx, { over: Ov(ctx) }) +
      region(Cue(ctx, n) + H(ctx, 'l') + Bd(ctx, { cls: 'm' }) + B.source(ctx), { gap: 28, pad: '32px 0 24px' }) + sigFoot(ctx, No(ctx));
    return frame(ctx, inner, pat);
  };
  C.glow = (ctx, d, n) => {
    const layers = M.glow(ctx, ctx.land ? { size: 1100, top: -250, start: 250 } : { size: 1200, top: 150, start: 0 });
    const inner = header(ctx, { over: Ov(ctx) }) + region(B.glowStar(ctx, ctx.land ? 120 : 300) + Cue(ctx, n, { self: 'center' }) + H(ctx, 'xl', { align: 'center', maxw: ctx.land ? '86%' : undefined }) + Bd(ctx, { align: 'center', cls: 'm', maxw: '82%' }) + B.source(ctx, { align: 'center' }), { align: 'center', justify: 'center', gap: ctx.land ? 20 : 28, talign: 'center' }) +
      footer(ctx, { right: No(ctx) });
    return frame(ctx, inner, layers);
  };

  /* ======================= posts ======================= */
  const P = {};
  // number + title + body, no image
  P.text = (ctx, d) => {
    const pre = d.p.motif === 'dots' ? `<div style="height:28px;flex:none"></div>${B.dotline(ctx, { n: ctx.land ? 40 : 30 })}` : d.p.ruled ? B.hair(ctx, { margin: '36px 0 0' }) : '';
    const inner = `<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex:none">${No(ctx, { big: true, size: ctx.land ? 96 : 120 })}${mark(56, ctx.pal.mark)}</div>` + pre +
      region(H(ctx, 'xl') + Bd(ctx, {}), { justify: 'center', gap: 36, pad: '24px 0' }) + sigFoot(ctx);
    return frame(ctx, inner, d.p.postMotif ? motif(ctx, d.p.postMotif) : '');
  };
  // quote-style post (light display weight)
  P.quote = (ctx, d) => {
    const inner = `<div style="display:flex;align-items:center;justify-content:space-between;gap:24px;flex:none">${No(ctx)}${mark(56, ctx.pal.mark)}</div>` +
      region(B.glyph(ctx, ctx.land ? 180 : 230, ctx.pal.brand) + H(ctx, 'xl', { lad: 'q' }) + B.rule(ctx, { width: '64px' }) + Bd(ctx, { cls: 'm' }), { justify: 'center', gap: 30, pad: '24px 0' }) + sigFoot(ctx);
    return frame(ctx, inner, '');
  };
  // full-bleed image, scrim, text over it
  P.bleed = (ctx, d) => {
    const dc = darkCtx(ctx);
    const img = Img(ctx, 'image', { abs: true, top: 0, start: 0, w: '100%', h: '100%', r: 0, tone: 'dark', z: 0 });
    const sc = `<div aria-hidden="true" style="position:absolute;inset:0;background:${ctx.land ? scrimLand(ctx.ar) : scrim};z-index:0"></div>`;
    const inner = `<div style="display:flex;align-items:center;justify-content:space-between;gap:24px;flex:none">${No(dc, { color: '#FFFFFF' })}${mark(56, '#FFFFFF')}</div>` +
      region(H(dc, 'l', { color: '#FFFFFF', maxw: ctx.land ? '60%' : undefined }) + Bd(dc, { cls: 'm', color: '#D1D2D5', maxw: ctx.land ? '56%' : undefined }), { justify: 'flex-end', gap: 24, pad: '24px 0 40px' }) +
      footer(dc, { left: B.sig(dc, { color: '#D1D2D5' }) });
    return frame(Object.assign({}, ctx, { pal: E.PAL.dark }), inner, img + sc);
  };
  // half image, half text
  P.split = (ctx, d) => {
    if (ctx.land) {
      const img = Img(ctx, 'image', { abs: true, top: 0, start: 0, w: '46%', h: '100%', r: 0, z: 0 });
      const inner = `<div style="display:flex;flex-direction:column;flex:1;min-height:0;margin-inline-start:${Math.round(ctx.W * 0.46 - ctx.M + 72)}px">` +
        `<div style="display:flex;align-items:center;justify-content:space-between;flex:none">${No(ctx)}${mark(56, ctx.pal.mark)}</div>` +
        region(H(ctx, 'l') + Bd(ctx, { cls: 'm' }), { justify: 'center', gap: 26 }) + sigFoot(ctx) + '</div>';
      return frame(ctx, inner, img, { pad: `${ctx.M}px ${ctx.M}px ${ctx.M}px ${ctx.M}px` });
    }
    const img = Img(ctx, 'image', { abs: true, top: 0, start: 0, w: '100%', h: '48%', r: 0, z: 0 });
    const inner = `<div style="height:${Math.round(ctx.H * 0.48 - ctx.M + 40)}px;flex:none"></div>` +
      `<div style="display:flex;align-items:center;justify-content:space-between;flex:none">${No(ctx)}${mark(56, ctx.pal.mark)}</div>` +
      region(H(ctx, 'l') + Bd(ctx, { cls: 'm' }), { gap: 26, pad: '28px 0 24px' }) + sigFoot(ctx);
    return frame(ctx, inner, img);
  };
  // text first, image as an inset card (optional echo)
  P.inset = (ctx, d) => {
    const echo = d.p.echo;
    const card = (o) => {
      const im = Img(ctx, 'image', Object.assign({ r: 32 }, o));
      if (!echo) return im;
      const off = 16;
      return `<div style="position:relative;display:flex;${o.flex ? `flex:${o.flex};` : ''}${o.h ? `height:${o.h}px;` : ''}min-height:0;min-width:0;margin-inline-end:${off}px;margin-bottom:${off}px">` +
        `<div aria-hidden="true" style="position:absolute;inset:0;transform:translate(${ctx.ar ? -off : off}px, ${off}px);border-radius:32px;border:2px solid ${ctx.pal.line2};opacity:.6"></div>${im}</div>`;
    };
    const top = `<div style="display:flex;align-items:center;justify-content:space-between;flex:none">${No(ctx)}${mark(56, ctx.pal.mark)}</div>`;
    if (ctx.land) {
      const inner = top + `<div style="display:flex;gap:56px;flex:1;min-height:0;padding:28px 0 28px">` +
        region(H(ctx, 'l') + Bd(ctx, { cls: 'm' }), { flex: '0.9 1 0', justify: 'center', gap: 24 }) +
        `<div style="display:flex;flex:1.1 1 0;min-width:0">${card({ flex: '1 1 0', h: undefined })}</div></div>` + sigFoot(ctx);
      return frame(ctx, inner, '');
    }
    const inner = top + region(H(ctx, 'l') + Bd(ctx, { cls: 'm' }), { gap: 24, pad: '40px 0 32px', flex: '0 1 auto' }) +
      `<div style="display:flex;flex:1 1 0;min-height:420px;padding-bottom:32px">${card({ flex: '1 1 0' })}</div>` + sigFoot(ctx);
    return frame(ctx, inner, '');
  };
  // framed photograph with the body as its caption
  P.framed = (ctx, d) => {
    const light = ctx.palKey === 'light';
    const mat = `<div style="${st({ flex: '1 1 0', minHeight: 0, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '18px', background: light ? '#FFFFFF' : '#181C26', border: `1px solid ${ctx.pal.line}`, borderRadius: '12px', padding: '20px', boxSizing: 'border-box', boxShadow: ctx.pal.shadow })}">` +
      `<div style="display:flex;flex:1 1 0;min-height:0">${Img(ctx, 'image', { r: 6, flex: '1 1 0' })}</div>` + region(Bd(ctx, { cls: 's', color: ctx.pal.muted }), { flex: '0 1 auto', gap: 0 }) + '</div>';
    if (ctx.land) {
      const inner = `<div style="display:flex;gap:64px;flex:1;min-height:0">` +
        `<div style="display:flex;flex-direction:column;flex:1 1 0;min-width:0">` + `<div style="flex:none">${No(ctx, { big: true, size: 96 })}</div>` + region(H(ctx, 'l'), { justify: 'center', gap: 0 }) + sigFoot(ctx) + '</div>' +
        `<div style="display:flex;flex:1.2 1 0;min-width:0">${mat}</div></div>`;
      return frame(ctx, inner, '');
    }
    const inner = `<div style="display:flex;align-items:center;justify-content:space-between;flex:none">${No(ctx)}${mark(56, ctx.pal.mark)}</div>` +
      region(H(ctx, 'l'), { flex: '0 1 auto', gap: 0, pad: '36px 0 32px' }) + `<div style="display:flex;flex:1 1 0;min-height:0;padding-bottom:36px">${mat}</div>` + sigFoot(ctx);
    return frame(ctx, inner, '');
  };
  // two images side by side
  P.twoup = (ctx, d) => {
    const pair = `<div style="display:flex;gap:24px;flex:1 1 0;min-height:0">${Img(ctx, 'image', { flex: '1 1 0', r: 24 })}${Img(ctx, 'image2', { flex: '1 1 0', r: 24 })}</div>`;
    const inner = `<div style="display:flex;align-items:center;justify-content:space-between;flex:none">${No(ctx)}${mark(56, ctx.pal.mark)}</div>` +
      region(H(ctx, 'l') + Bd(ctx, { cls: 's' }), { flex: '0 1 auto', gap: 20, pad: ctx.land ? '20px 0 24px' : '36px 0 32px' }) + pair + `<div style="height:${ctx.land ? 24 : 36}px;flex:none"></div>` + sigFoot(ctx);
    return frame(ctx, inner, '');
  };
  // app screen in a phone
  P.phone = (ctx, d) => {
    if (ctx.land) {
      const ph = Phone(ctx, 'image', { abs: true, top: '96px', end: '150px', w: 400 });
      const inner = `<div style="display:flex;flex-direction:column;flex:1;min-height:0;margin-inline-end:600px">` +
        `<div style="flex:none">${No(ctx, { big: true, size: 96 })}</div>` + region(H(ctx, 'l') + Bd(ctx, { cls: 'm' }), { justify: 'center', gap: 26 }) + sigFoot(ctx) + '</div>';
      return frame(ctx, inner, motif(ctx, d.p.postMotif) + ph);
    }
    const ph = Phone(ctx, 'image', { abs: true, bottom: '-300px', start: 'calc(50% - 280px)', w: 560 });
    const inner = `<div style="display:flex;align-items:flex-start;justify-content:space-between;flex:none">${No(ctx, { big: true, size: 96 })}${mark(56, ctx.pal.mark)}</div>` +
      region(H(ctx, 'l') + Bd(ctx, { cls: 'm' }), { flex: '0 0 auto', height: '400px', gap: 22, pad: '20px 0 0' });
    return frame(ctx, inner, motif(ctx, d.p.postMotif) + ph);
  };
  // web screen in a browser
  P.browser = (ctx, d) => {
    if (ctx.land) {
      const inner = `<div style="display:flex;gap:56px;flex:1;min-height:0">` +
        `<div style="display:flex;flex-direction:column;flex:0.75 1 0;min-width:0">` + `<div style="flex:none">${No(ctx, { big: true, size: 96 })}</div>` + region(H(ctx, 'l') + Bd(ctx, { cls: 'm' }), { justify: 'center', gap: 24 }) + sigFoot(ctx) + '</div>' +
        `<div style="display:flex;flex:1.25 1 0;min-width:0;padding:24px 0">${Browser(ctx, 'image', {})}</div></div>`;
      return frame(ctx, inner, '');
    }
    const inner = `<div style="display:flex;align-items:center;justify-content:space-between;flex:none">${No(ctx)}${mark(56, ctx.pal.mark)}</div>` +
      region(H(ctx, 'l') + Bd(ctx, { cls: 'm' }), { flex: '0 1 auto', gap: 22, pad: '36px 0 36px' }) + `<div style="display:flex;flex:1 1 0;min-height:0;padding-bottom:36px">${Browser(ctx, 'image', {})}</div>` + sigFoot(ctx);
    return frame(ctx, inner, '');
  };

  /* ======================= closings ======================= */
  const X = {};
  X.qr = (ctx, d) => {
    const qr = QRCard(ctx, ctx.land ? 260 : 340, { align: 'flex-start' });
    if (ctx.land) {
      const inner = `<div style="display:flex;align-items:center;justify-content:space-between;flex:none">${No(ctx)}${mark(56, ctx.pal.mark)}</div>` +
        `<div style="display:flex;gap:72px;flex:1;min-height:0;align-items:center">` + region(H(ctx, 'l') + Cta(ctx), { justify: 'center', gap: 30 }) + (qr ? `<div style="flex:none">${qr}</div>` : '') + '</div>' + sigFoot(ctx);
      return frame(ctx, inner, motif(ctx, d.p.closeMotif));
    }
    const inner = `<div style="display:flex;align-items:center;justify-content:space-between;flex:none">${No(ctx)}${mark(56, ctx.pal.mark)}</div>` +
      region(H(ctx, 'l') + Cta(ctx) + (qr ? `<div style="height:16px"></div>${qr}` : ''), { justify: 'center', gap: 30 }) + sigFoot(ctx);
    return frame(ctx, inner, motif(ctx, d.p.closeMotif));
  };
  X.split = (ctx, d) => {
    const qr = QRCard(ctx, ctx.land ? 300 : 300, { align: 'flex-start' });
    const card = qr ? `<div style="${st({ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '32px', background: ctx.pal.card, padding: '44px', boxSizing: 'border-box', flex: ctx.land ? '0 0 auto' : 'none', alignSelf: ctx.land ? 'center' : 'stretch' })}">${qr}</div>` : '';
    const inner = header(ctx, { over: Ov(ctx) }) +
      `<div style="display:flex;flex-direction:${ctx.land ? 'row' : 'column'};gap:${ctx.land ? 72 : 40}px;flex:1;min-height:0;padding:${ctx.land ? '24px 0' : '48px 0 40px'}">` +
      region(H(ctx, ctx.land ? 'l' : 'xl') + Cta(ctx), { justify: ctx.land ? 'center' : 'flex-end', gap: 28 }) + card + '</div>' + sigFoot(ctx, No(ctx));
    return frame(ctx, inner, '');
  };
  X.mark = (ctx, d) => {
    const qr = ctx.c.qr ? `<div data-qr-for="qr" style="background:#FFFFFF;border-radius:16px;padding:10px;line-height:0;flex:none">${qrSvg(ctx.c.qr, ctx.land ? 120 : 150)}</div>` : '';
    const glow = `<div style="${st({ width: ctx.land ? '300px' : '360px', height: ctx.land ? '300px' : '360px', borderRadius: '50%', flex: 'none', background: `radial-gradient(circle, ${ctx.palKey === 'light' ? 'rgba(190,218,247,.95)' : 'rgba(97,114,181,.65)'} 0%, rgba(0,0,0,0) 70%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' })}">${mark(ctx.land ? 120 : 150, ctx.pal.mark)}</div>`;
    const url = ctx.c.qr ? `<div data-field="qr" data-value="${esc(ctx.c.qr)}" style="${tf(T.label(ctx), ctx.pal.text, { direction: 'ltr', unicodeBidi: 'isolate' })}">${esc(String(ctx.c.qr).replace(/^https?:\/\//, '').replace(/\/$/, ''))}</div>` : '';
    const inner = region(glow + H(ctx, 'm', { align: 'center' }) + Cta(ctx, { align: 'center' }), { align: 'center', justify: 'center', gap: 30, talign: 'center' }) +
      `<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex:none"><div style="display:flex;flex-direction:column;gap:8px">${B.sig(ctx)}${No(ctx)}</div><div style="display:flex;align-items:center;gap:20px">${url}${qr}</div></div>`;
    return frame(ctx, inner, '');
  };

  /* ======================= category + registry ======================= */
  E.CATS.thread = { key: 'thread', n: ['Thread', 'سلسلة / ثريد'] };
  /* idempotent: a second load (built bundle + this file) replaces the first registration */
  for (let i = E.DESIGNS.length - 1; i >= 0; i--) if (E.DESIGNS[i].cat === 'thread') { delete E.BY_ID[E.DESIGNS[i].id]; E.DESIGNS.splice(i, 1); }
  const NAMES = [];
  const add = (n, kind, mode, p) => {
    const i = E.DESIGNS.filter((d) => d.cat === 'thread').length + 1;
    const d = { id: 'thread-' + String(i).padStart(2, '0'), cat: 'thread', arch: 'thread', surf: p.coverSurf || 'plain', mode, kind, p, figma: false, n };
    E.DESIGNS.push(d);
    E.BY_ID[d.id] = d;
  };
  // plain (density 0–1)
  add(['Numbered text', 'نص مرقّم'], 'plain', 'light', { cover: 'hook', post: 'text', close: 'qr' });
  add(['Numbered text · dark', 'نص مرقّم · داكن'], 'plain', 'dark', { cover: 'hook', post: 'text', close: 'qr', ruled: true });
  add(['Index cover', 'غلاف بالفهرس'], 'plain', 'light', { cover: 'index', post: 'text', close: 'split', ruled: true });
  add(['Framed photos', 'صور في إطار'], 'plain', 'light', { cover: 'hook', post: 'framed', close: 'qr' });
  add(['Inset images', 'صور داخل بطاقة'], 'plain', 'light', { cover: 'giant', post: 'inset', close: 'split' });
  add(['Half image', 'نصف صورة'], 'plain', 'light', { cover: 'split', post: 'split', close: 'split' });
  add(['Browser · web work', 'متصفح · أعمال الويب'], 'plain', 'light', { cover: 'hook', post: 'browser', close: 'qr', coverSurf: 'subtle', postSurf: 'subtle', closeSurf: 'subtle' });
  add(['Phone · app work', 'جوال · أعمال التطبيقات'], 'plain', 'light', { cover: 'hook', post: 'phone', close: 'qr', postSurf: 'subtle' });
  add(['Two-up images', 'صورتان'], 'plain', 'dark', { cover: 'giant', post: 'twoup', close: 'qr' });
  add(['Quote thread', 'سلسلة اقتباسات'], 'plain', 'light', { cover: 'hook', post: 'quote', close: 'mark' });
  // expressive (density 2–4)
  add(['Full-bleed photos', 'صور كاملة'], 'expr', 'dark', { cover: 'image', post: 'bleed', close: 'qr', closeSurf: 'aurora', closeMotif: 'glow' });
  add(['Aurora', 'أورورا'], 'expr', 'dark', { cover: 'glow', coverSurf: 'aurora', post: 'text', postSurf: 'aurora', close: 'mark', closeSurf: 'aurora' });
  add(['Harlequin', 'هارلكوين'], 'expr', 'light', { cover: 'pattern', post: 'text', close: 'qr' });
  add(['Harlequin · images', 'هارلكوين · صور'], 'expr', 'dark', { cover: 'pattern', post: 'inset', close: 'split' });
  add(['Arc · half image', 'قوس · نصف صورة'], 'expr', 'light', { cover: 'hook', coverSurf: 'soft', motif: 'arc', post: 'split', close: 'qr', closeSurf: 'soft', closeMotif: 'arc' });
  add(['Glow · phone', 'توهّج · جوال'], 'expr', 'dark', { cover: 'glow', coverSurf: 'aurora', post: 'phone', postSurf: 'plain', postMotif: 'glow', close: 'mark', closeSurf: 'aurora' });
  add(['Violet · browser', 'بنفسجي · متصفح'], 'expr', 'dark', { cover: 'hook', coverSurf: 'brand', post: 'browser', postSurf: 'plain', close: 'split', closeSurf: 'brand' });
  add(['Star dotted line', 'خط النجوم المنقّط'], 'expr', 'dark', { cover: 'index', motif: 'dots', post: 'text', close: 'qr' });
  add(['Big star · framed', 'نجمة كبيرة · إطار'], 'expr', 'light', { cover: 'hook', coverSurf: 'soft', motif: 'bigStar', post: 'framed', postSurf: 'subtle', close: 'mark', closeSurf: 'soft' });
  add(['Echo cards', 'بطاقات بصدى'], 'expr', 'light', { cover: 'hook', coverSurf: 'subtle', post: 'inset', postSurf: 'subtle', echo: true, close: 'qr', closeSurf: 'subtle' });

  /* sample: Mishkat GP1 testing — four problems and their fixes (case study F73–F74) */
  E.SAMPLES.thread = {
    en: {
      overline: 'UX research · Mishkat',
      title: 'Four problems usability testing found in Mishkat, and the fix for each',
      body: 'HCI graduation project, team of 6. Every problem became a specific change.',
      source: 'Mishkat, GP2 report §1.4.2', sample: true, image: '',
      posts: [
        { title: 'Breathing phases were hard to tell apart', body: 'Fix: an animated breathing circle with phase labels and a counter.', image: '', image2: '' },
        { title: 'The mood bar did not look tappable', body: 'Fix: single-step mood logging with a clear confirm button.', image: '', image2: '' },
        { title: 'Mood charts on Home felt emotionally heavy', body: 'Fix: the charts moved to My Journey.', image: '', image2: '' },
        { title: '“Focus” read as a to-do list', body: 'Fix: tasks with durations inside Focus, and a completion screen.', image: '', image2: '' },
      ],
      closing: 'Read the full case study', cta: 'Mishkat · the whole story →', qr: 'https://wejdan.info',
    },
    ar: {
      overline: 'بحث تجربة المستخدم · مِشكاة',
      title: 'أربع مشكلات كشفها اختبار قابلية الاستخدام في مِشكاة، وحلّ كل واحدة',
      body: 'مشروع تخرج، فريق من 6. تحوّلت كل مشكلة إلى تعديل محدد.',
      source: 'مِشكاة، تقرير GP2 §1.4.2', sample: true, image: '',
      posts: [
        { title: 'صعوبة التمييز بين مراحل التنفس', body: 'الحل: دائرة تنفّس متحركة تعرض اسم المرحلة وعدّادًا.', image: '', image2: '' },
        { title: 'شريط الشعور لا يبدو قابلًا للنقر', body: 'الحل: تسجيل الشعور بخطوة واحدة مع زر تأكيد واضح.', image: '', image2: '' },
        { title: 'رسوم المشاعر في الشاشة الرئيسية بدت ثقيلة عاطفيًا', body: 'الحل: نقل الرسوم البيانية إلى «رحلتي».', image: '', image2: '' },
        { title: 'قسم «التركيز» فُهم على أنه قائمة مهام', body: 'الحل: مهام بمدد زمنية داخل «التركيز»، وشاشة إتمام.', image: '', image2: '' },
      ],
      closing: 'اقرأ دراسة الحالة كاملة', cta: 'مِشكاة · القصة كاملة ←', qr: 'https://wejdan.info',
    },
  };
  E.FIELDS.thread = ['overline', 'title', 'body', 'image', 'source', 'sample', 'posts', 'closing', 'cta', 'qr'];

  /* ---------------- render ---------------- */
  function renderThread(d, o, mode) {
    const c = o.content || {};
    const posts = (c.posts || []).filter((p) => p && (p.title || p.body || p.image));
    const total = posts.length + 2;
    const mk = (surf, content, page, fmap) => {
      const ctx = E.ctx({ fmt: o.fmt, lang: o.lang, mode, surf, content, sig: o.sig, page, pages: total });
      ctx.p = d.p; ctx.fmap = fmap || {};
      return ctx;
    };
    const out = [];
    const cctx = mk(d.p.coverSurf || d.surf, { overline: c.overline, title: c.title, body: c.body, image: c.image, source: c.source, sample: c.sample }, 1, {});
    out.push(C[d.p.cover](cctx, d, total, posts));
    posts.forEach((p, i) => {
      const pf = { title: `posts.${i}.title`, body: `posts.${i}.body`, image: `posts.${i}.image`, image2: `posts.${i}.image2` };
      const pctx = mk(d.p.postSurf || 'plain', { overline: c.overline, title: p.title, body: p.body, image: p.image, image2: p.image2 }, i + 2, pf);
      out.push(P[d.p.post](pctx, d));
    });
    const ectx = mk(d.p.closeSurf || d.p.coverSurf || d.surf, { overline: c.overline, title: c.closing || c.title, cta: c.cta, qr: c.qr }, total, { title: 'closing' });
    out.push(X[d.p.close](ectx, d));
    return out;
  }
  if (!E.__renderBase) E.__renderBase = E.render;
  const prev = E.__renderBase;
  E.render = function (id, o) {
    const d = E.BY_ID[id];
    if (!d || d.cat !== 'thread') return prev(id, o);
    const mode = o.mode && o.mode !== 'auto' ? o.mode : d.mode;
    return renderThread(d, o, mode);
  };
})(typeof window !== 'undefined' ? window : globalThis);
