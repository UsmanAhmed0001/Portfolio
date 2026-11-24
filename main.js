/**
 * main.js — Usman Ahmed · Portfolio 2026
 *
 *  1. Data (projects, skills)
 *  2. Helpers
 *  3. Hero: letters, network canvas, parallax, clock
 *  4. Nav: scroll state, active link, menu, theme, progress
 *  5. Reveal + counters
 *  6. Manifesto word-by-word
 *  7. Work: stacking cards + cursor
 *  8. Skills with receipts
 *  9. 30-sec read
 * 10. Contact
 * 11. Footer name
 * 12. Ask (scripted assistant)
 */

/* 1. DATA -------------------------------------------------------- */
const PROJECTS = [
  {
    id: 'munik', name: 'MUNIK XVII', img: 'images/munik.jpg', url: 'https://munik.iba.edu.pk', live: true, heavyVideo: true,
    badge: 'Lead developer', when: 'Live · Jan 2027 event',
    pitch: 'The official site for Model United Nations at IBA Karachi — built for a real organising team and served on the university’s own domain.',
    built: [
      'Delivered for a live conference: committees, team, letters, registration',
      'Custom domain munik.iba.edu.pk set up with IBA IT, pointing at Vercel',
      'Live countdown, editorial typography and motion',
    ],
    stack: ['Front end', 'Vercel', 'DNS', 'Custom domain'],
  },
  {
    id: 'southshore', name: 'SouthShore', img: 'images/southshore.jpg', url: 'https://southshoreprojects.com', live: true,
    badge: 'Lead developer', when: 'Client · live',
    pitch: 'A full rebuild for a design & construction company — a portfolio-led site that sells craftsmanship through photography and clean type.',
    built: [
      'Rebuilt from scratch; I still maintain it for the business',
      'Image-heavy galleries tuned to load fast on mobile',
      'Content structure the client can keep extending',
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 'kreston', name: 'Kreston Estates', img: 'images/krestonEstate.jpg', url: 'https://kreston-estate.vercel.app', live: true,
    badge: 'Lead developer', when: 'Client · live',
    pitch: 'The website for Kreston Estates, an independent lettings, sales and property management agency on Tooting High Street. I build and maintain it.',
    built: [
      'Lettings, sales, services, about and contact pages, all leading to one action: book a free valuation',
      'Clearly priced service packages and a step-by-step process for landlords',
      'Trust signals up front: The Property Ombudsman, Client Money Protect and mydeposits',
    ],
    stack: ['React', 'Vite', 'Vercel'],
  },
  {
    id: 'dermiq', name: 'dermIQ', img: 'images/dermIQ.jpg', url: 'https://derm-iq-three.vercel.app', live: true,
    badge: 'Founder', when: '2025 — now', dev: true,
    pitch: 'AI skin-lesion triage. Upload a photo; a fine-tuned vision model returns one of 7 lesion classes with a risk band, so people know how urgently to seek care.',
    built: [
      'Fine-tuned a Vision Transformer on HAM10000, with risk banding on top of raw predictions',
      'Dockerised Flask + PyTorch inference API on Hugging Face Spaces — moved off Railway to run at zero cost',
      'Next.js + TypeScript product with a preview on Vercel, developed with NHS-connected clinicians',
    ],
    stack: ['Next.js', 'TypeScript', 'PyTorch', 'ViT', 'Flask', 'Docker'],
  },
  {
    id: 'ideaforge', name: 'IdeaForge', img: 'images/ideaForge.jpg', url: 'https://idea-forge-liart.vercel.app', live: true,
    badge: 'Founder', when: 'My startup', dev: true,
    pitch: 'Give it a YouTube channel and it drafts what to post this week: five posts each for YouTube, Instagram, TikTok, LinkedIn and Facebook.',
    built: [
      'Reads the channel’s recent uploads, this week’s news and what people are discussing on Reddit',
      'Drafts five posts per platform, written in the channel’s own title style',
      'Previews every draft in the native look of its platform: Reels, TikTok, LinkedIn',
    ],
    stack: ['Next.js', 'TypeScript', 'LLM API', 'YouTube + News + Reddit', 'Vercel'],
  },
  {
    id: 'casebridge', name: 'CaseBridge', img: 'images/casebridge.jpg', url: 'https://casebridge-beta.vercel.app', live: true,
    badge: 'Prototype', when: 'Solo project', dev: true, devLabel: 'Prototype',
    pitch: 'A clickable prototype of a legal case-management tool: intake, a dashboard and case views, built to test the workflow before building the real backend.',
    built: [
      'Clickable React prototype of the intake, dashboard and case views',
      'Used to test the case workflow with no backend yet, so nothing is saved',
      'Next step: a real backend so new cases persist',
    ],
    stack: ['React', 'Create React App', 'Vercel'],
  },

];

// Skill → where it has actually been used
const P = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));
const use = (id, note) => ({ where: P[id].name, note, url: P[id].url });
const job = (where, note) => ({ where, note });
const SKILLS = [
  { group: 'AI & data', items: {
    'PyTorch': [use('dermiq', 'Fine-tuned ViT classifier, 7 lesion classes'), job('MSc AI · Hull', 'Deep learning coursework & dissertation work')],
    'Vision Transformers': [use('dermiq', 'Fine-tuned on HAM10000 with risk banding')],
    'LLM APIs': [use('ideaforge', 'Post ideas grounded in news & Reddit')],
    'Hugging Face': [use('dermiq', 'Model hosting + Dockerised Space for inference')],
    'scikit-learn': [job('MSc AI · Hull', 'Classical ML, evaluation & pipelines')],
    'TensorFlow': [job('MSc AI · Hull', 'Deep learning models')],
    'CNNs · ResNet / U-Net': [job('MSc AI · Hull', 'Image classification & segmentation')],
    'YOLO': [job('MSc AI · Hull', 'Object detection')],
  }},
  { group: 'Languages', items: {
    'TypeScript': [use('dermiq', 'Product front end'), use('ideaforge', 'Next.js app')],
    'Python': [use('dermiq', 'Flask + PyTorch inference API'), job('Wavetec', 'Backend services for enterprise clients')],
    'Java': [job('Wavetec', 'Distributed services for HSBC & Samsung Europe')],
    'C# / .NET': [job('Wavetec', 'Enterprise backend services'), job('Bits and Code', 'Migrated a SaaS product to .NET Core')],
    'C++': [job('Earlier work', 'Worked extensively in C++')],
    'SQL': [job('Wavetec', 'Relational data for enterprise services')],
  }},
  { group: 'Frameworks', items: {
    'Next.js': [use('dermiq', 'Next.js 14 product'), use('ideaforge', 'App router')],
    'React': [use('southshore', 'Site rebuild'), use('casebridge', 'Clickable prototype'), use('kreston', 'React + Vite site'), job('Bits and Code', 'Blazor → React migration')],
    'Flask': [use('dermiq', 'Inference API')],
    'Spring Boot': [job('Wavetec', 'Java services for enterprise clients')],
    'ASP.NET Core': [job('Wavetec', '.NET services'), job('Bits and Code', 'SaaS backend on .NET Core')],
    'Tailwind': [use('dermiq', 'Product UI'), use('southshore', 'Site styling')],
    'Framer Motion': [use('southshore', 'Page & gallery motion')],
    'Blazor': [job('Bits and Code', 'Legacy front end, migrated to React')],
  }},
  { group: 'Data & messaging', items: {
    'PostgreSQL': [job('Personal projects', 'Hosted on Neon')],
    'Kafka': [job('Wavetec', 'Event-driven pipelines for enterprise clients')],
    'RabbitMQ': [job('Wavetec', 'Queue-based service messaging')],
  }},
  { group: 'Cloud & ops', items: {
    'Docker': [use('dermiq', 'Containerised inference API'), job('Wavetec', 'Service containers')],
    'Kubernetes': [job('Wavetec', 'Deployments on AWS & Azure')],
    'Terraform': [job('Wavetec', 'Infrastructure as code modules')],
    'AWS / Azure': [job('Wavetec', 'Production environments for enterprise clients')],
    'Vercel': PROJECTS.map((p) => use(p.id, p.dev ? 'Preview deployment' : 'Deployed & live')),
  }},
  { group: 'CMS', items: {
    'Sitecore': [job('Ovrlod', 'Enterprise builds for City Walk, The Beach JBR')],
    'Optimizely': [job('Ovrlod', 'Enterprise CMS builds')],
  }},
];

/* 2. HELPERS ----------------------------------------------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
// Reduce Motion (macOS/iOS setting): keep fades, reveals and hovers,
// switch off only large movement — smooth scroll, parallax, tilt.
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const reduced = false;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const desktop = () => innerWidth > 860;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

function toast(text) {
  const t = $('#toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 1900);
}
async function copy(text, msg) {
  try { await navigator.clipboard.writeText(text); toast(msg); }
  catch (e) { toast('Couldn’t copy — select it manually'); }
}
function londonTime() {
  return new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London' });
}

/* 3. HERO -------------------------------------------------------- */
$$('[data-split]').forEach((el, w) => {
  const txt = el.textContent;
  el.textContent = '';
  [...txt].forEach((c, i) => {
    const s = document.createElement('span');
    s.className = 'ch';
    s.style.setProperty('--i', i + w * 3);
    s.textContent = c;
    el.appendChild(s);
  });
});

function tickClocks() {
  const t = londonTime();
  $('#heroClock').textContent = `${t} GMT`;
  $('#footClock').textContent = `London ${t}`;
}
tickClocks();
setInterval(tickClocks, 20000);

// Network canvas — a quiet "distributed system": nodes, links, packets
(function network() {
  const cv = $('#net');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let W, H, dpr, nodes = [], packets = [], rgb = '242,239,232', running = true;
  const mouse = { x: -9999, y: -9999 };
  const ACC = getComputedStyle(document.documentElement).getPropertyValue('--acc-rgb').trim() || '255,90,31';

  function readColor() { rgb = getComputedStyle(document.documentElement).getPropertyValue('--net').trim() || rgb; }
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(clamp((W * H) / 16000, 28, 90));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.8,
    }));
    packets = [];
  }
  const LINK = () => clamp(W / 9, 110, 170);

  function step() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    const L = LINK();
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy);
      if (d < 180) { n.x += dx * 0.004; n.y += dy * 0.004; }
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < L) {
          const near = Math.hypot(mouse.x - (a.x + b.x) / 2, mouse.y - (a.y + b.y) / 2) < 160;
          ctx.strokeStyle = near ? `rgba(${ACC},${0.5 * (1 - d / L)})` : `rgba(${rgb},${0.13 * (1 - d / L)})`;
          ctx.lineWidth = near ? 1.1 : 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          if (!reduced && Math.random() < 0.0009 && packets.length < 14) packets.push({ a, b, t: 0 });
        }
      }
    }
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${rgb},0.45)`;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 7); ctx.fill();
    }
    packets = packets.filter((p) => (p.t += 0.018) < 1);
    for (const p of packets) {
      const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.fillStyle = `rgba(${ACC},0.95)`;
      ctx.shadowColor = `rgba(${ACC},0.9)`; ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 7); ctx.fill();
      ctx.shadowBlur = 0;
    }
    if (!reduced) requestAnimationFrame(step);
  }

  readColor(); size(); step();
  addEventListener('resize', () => { size(); if (reduced) step(); });
  const hero = $('#top');
  hero.addEventListener('pointermove', (e) => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  new IntersectionObserver(([e]) => {
    const was = running; running = e.isIntersecting;
    if (running && !was && !reduced) requestAnimationFrame(step);
  }).observe(hero);
  document.addEventListener('themechange', () => { readColor(); if (reduced) step(); });
})();

// Depth parallax: name drifts against the portrait (pointer + scroll)
(function parallax() {
  if (calm) return;
  const name = $('#heroName'), me = $('#heroMe') || document.createElement('div');
  let px = 0, py = 0, tx = 0, ty = 0;
  if (fine) addEventListener('pointermove', (e) => { tx = (e.clientX / innerWidth - 0.5); ty = (e.clientY / innerHeight - 0.5); });
  (function loop() {
    px += (tx - px) * 0.06; py += (ty - py) * 0.06;
    const s = Math.min(scrollY, innerHeight);
    if (desktop()) {
      name.style.transform = `translate3d(${px * -24}px, ${py * -14 + s * 0.35}px, 0)`;
      me.style.transform = `translate3d(${px * 16}px, ${py * 8 + s * 0.12}px, 0)`;
    } else {
      // phones: vertical scroll depth only — the name drifts up slower than the page
      name.style.transform = `translate3d(0, ${s * 0.22}px, 0)`;
      name.style.opacity = String(Math.max(0, 1 - s / (innerHeight * 0.9)));
      me.style.transform = `translate3d(0, ${s * 0.06}px, 0)`;
    }
    requestAnimationFrame(loop);
  })();
})();

/* 4. NAV --------------------------------------------------------- */
const nav = $('#nav');
let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  nav.classList.toggle('scrolled', y > 20);
  nav.classList.toggle('hide', y > lastY && y > 600 && menu.hidden);
  lastY = y;
  const max = document.documentElement.scrollHeight - innerHeight;
  $('#progress').style.transform = `scaleX(${max > 0 ? y / max : 0})`;
}, { passive: true });

const navObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) $$('.nav__links a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
['work', 'skills', 'exp', 'contact'].forEach((id) => navObs.observe(document.getElementById(id)));

const menu = $('#menu'), menuBtn = $('#menuBtn');
function setMenu(open) {
  menu.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
  nav.classList.remove('hide');
}
menuBtn.addEventListener('click', () => setMenu(menu.hidden));
$$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));

$('#themeToggle').addEventListener('click', (e) => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  const apply = () => {
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (err) {}
    document.dispatchEvent(new Event('themechange'));
  };
  if (!document.startViewTransition) return apply();
  const r = e.currentTarget.getBoundingClientRect();
  document.documentElement.style.setProperty('--tx', r.left + r.width / 2 + 'px');
  document.documentElement.style.setProperty('--ty', r.top + r.height / 2 + 'px');
  document.startViewTransition(apply);
});

/* 5. REVEAL + COUNTERS ------------------------------------------- */
function countUp(el) {
  if (reduced) return;
  const end = +el.dataset.count, t0 = performance.now();
  (function f(t) {
    const p = Math.min((t - t0) / 1300, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(f);
  })(t0);
}
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    $$('[data-count]', en.target).forEach(countUp);
    io.unobserve(en.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

/* 6. MANIFESTO --------------------------------------------------- */
(function manifesto() {
  const el = $('#manifesto');
  const HL = ['London.', 'dermIQ'];
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map((w) => `<span class="w${HL.includes(w) ? ' hl' : ''}">${w}</span>`).join(' ');
  const spans = $$('.w', el);
  if (reduced) { spans.forEach((s) => s.classList.add('on')); return; }
  function update() {
    const r = el.getBoundingClientRect();
    const p = clamp((innerHeight * 0.95 - r.top) / (r.height * 0.9 + innerHeight * 0.1), 0, 1);
    const n = Math.round(p * spans.length);
    spans.forEach((s, i) => s.classList.toggle('on', i < n));
  }
  addEventListener('scroll', update, { passive: true });
  update();
})();

/* 7. WORK -------------------------------------------------------- */
const stack = $('#stack');
const total = String(PROJECTS.length).padStart(2, '0');
PROJECTS.forEach((p, i) => {
  const host = p.url.replace(/^https:\/\//, '').replace(/\/$/, '');
  const card = document.createElement('article');
  card.className = 'card';
  card.style.setProperty('--i', i);
  card.innerHTML = `
    <div class="card__info">
      <div class="card__top"><span class="card__badge">${p.badge}</span><span>${p.dev ? `<i class="card__dev">${p.devLabel || 'In development'}</i>` : ''}${String(i + 1).padStart(2, '0')} / ${total} · ${p.when}</span></div>
      <h3 class="card__name">${p.name}</h3>
      <p class="card__pitch">${p.pitch}</p>
      <ul class="card__built">${p.built.map((b) => `<li>${b}</li>`).join('')}</ul>
      <div class="card__foot">
        <div class="chips">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
        <div class="card__actions">
          <a class="btn btn--acc" href="${p.url}" target="_blank" rel="noopener">${p.devLabel ? 'Open the prototype ↗' : p.dev ? 'See the preview ↗' : 'Visit live site ↗'}</a>
        </div>
      </div>
    </div>
    <a class="card__shot" href="${p.url}" target="_blank" rel="noopener" aria-label="Open ${p.name} live site">
      <div class="card__chrome"><i></i><i></i><i></i><span>${host}</span>${p.live ? '<b class="card__live">live</b>' : ''}</div>
      <div class="card__img">
        <div class="fallback">${p.name}</div>
        <img src="${p.img}" alt="Screenshot of ${p.name}" loading="lazy" />${p.live ? `<div class="card__frame" data-src="${p.url}" data-title="${p.name} running live"${p.heavyVideo ? ' data-heavy' : ''}></div>` : ''}
      </div>
    </a>`;
  stack.appendChild(card);
  const im = card.querySelector('.card__img img'); if (im) im.addEventListener('error', () => im.remove());
});
const cta = document.createElement('article');
cta.className = 'card card--cta';
cta.style.setProperty('--i', PROJECTS.length);
cta.innerHTML = `
  <div class="card__top"><span>07 / ??</span><span>Your team</span></div>
  <div>
    <h3 class="card__name">Project 07<br />could be yours.</h3>
    <p class="card__pitch">I’m looking for a full-time team that ships real systems. If that’s yours, drop me a line.</p>
  </div>
  <a class="btn" href="#contact">Start the conversation →</a>`;
stack.appendChild(cta);

// Scale cards back as the next one slides over them (desktop sticky only)
const cards = $$('.card', stack);
function stackFx() {
  if (!desktop()) {
    const vh = innerHeight;
    cards.forEach((c) => {
      const t = c.getBoundingClientRect().top;
      const p = clamp((vh - t) / (vh * 0.45), 0, 1);           // 0 when just below the fold, 1 once well in
      c.style.transform = `translateY(${(1 - p) * 48}px) scale(${0.93 + p * 0.07})`;
      c.style.opacity = String(0.35 + p * 0.65);
      c.style.filter = '';
    });
    return;
  }
  cards.forEach((c) => (c.style.opacity = ''));
  cards.forEach((c, i) => {
    const next = cards[i + 1];
    if (!next) return;
    const cr = c.getBoundingClientRect(), nr = next.getBoundingClientRect();
    const p = clamp(1 - (nr.top - cr.top) / cr.height, 0, 1);
    c.style.transform = `scale(${1 - p * 0.06})`;
    c.style.filter = `brightness(${1 - p * 0.35})`;
  });
}
addEventListener('scroll', stackFx, { passive: true });
addEventListener('resize', stackFx);

// "View" cursor over screenshots
const cursor = $('#cursor');
if (fine && !reduced) {
  let cx = 0, cy = 0, x = 0, y = 0;
  addEventListener('pointermove', (e) => { cx = e.clientX; cy = e.clientY; });
  (function follow() { x += (cx - x) * 0.2; y += (cy - y) * 0.2; cursor.style.left = x + 'px'; cursor.style.top = y + 'px'; requestAnimationFrame(follow); })();
  stack.addEventListener('pointerover', (e) => cursor.classList.toggle('on', !!e.target.closest('.card__shot')));
  stack.addEventListener('pointerleave', () => cursor.classList.remove('on'));
}

/* 8. SKILLS WITH RECEIPTS ---------------------------------------- */
const picker = $('#skillPicker');
let receiptNo = 1;
picker.innerHTML = SKILLS.map((g) => `
  <div class="skills__group">
    <h3>${g.group}</h3>
    <div class="skills__chips">
      ${Object.entries(g.items).map(([k, v]) => `<button class="skill" type="button" aria-pressed="false" data-skill="${k}">${k}<small>${v.length}</small></button>`).join('')}
    </div>
  </div>`).join('');
const ALL = Object.assign({}, ...SKILLS.map((g) => g.items));
function showSkill(name, animate = true) {
  $$('.skill', picker).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.skill === name)));
  const rows = ALL[name];
  $('#rcSkill').textContent = name;
  $('#rcNo').textContent = '#' + String(receiptNo++).padStart(4, '0');
  $('#rcLines').innerHTML = rows.map((r, k) => `
    <li style="--k:${k}"><span>${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${r.where}</a>` : r.where}</span><span>✓</span><small>${r.note}</small></li>`).join('');
  $('#rcTotal').textContent = `${rows.length} ${rows.length === 1 ? 'item' : 'items'}`;
  if (animate && !reduced) { const rc = $('#receipt'); rc.classList.remove('print'); void rc.offsetWidth; rc.classList.add('print'); }
}
picker.addEventListener('click', (e) => { const b = e.target.closest('.skill'); if (b) showSkill(b.dataset.skill); });
showSkill('TypeScript', false);

/* 9. 30-SECOND READ ---------------------------------------------- */
const tldr = $('#tldr');
let lastFocus = null;
function openLayer(layer) { lastFocus = document.activeElement; layer.hidden = false; document.body.style.overflow = 'hidden'; $('.x', layer).focus(); }
function closeLayer(layer) { $('#tldrOpen').setAttribute('aria-expanded', 'false'); layer.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
$('#tldrOpen').addEventListener('click', () => { openLayer(tldr); $('#tldrOpen').setAttribute('aria-expanded', 'true'); });
$$('[data-close]', tldr).forEach((b) => b.addEventListener('click', () => closeLayer(tldr)));
$('#copySummary').addEventListener('click', () => {
  const lines = $$('.tldr div').map((d) => `${$('dt', d).textContent}: ${$('dd', d).textContent}`);
  copy(`Usman Ahmed — Software Engineer\n${lines.join('\n')}\nahmedusman0001@outlook.com · linkedin.com/in/usman--ahmed`, 'Summary copied');
});

/* 10. CONTACT ---------------------------------------------------- */
$('#copyEmail').addEventListener('click', () => copy('ahmedusman0001@outlook.com', 'Email copied'));
$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim(), company = f.company.value.trim(), msg = f.msg.value.trim();
  if (!msg) { f.msg.focus(); toast('Add a line about the role first'); return; }
  const subject = `Role${company ? ' at ' + company : ''} — ${name || 'hello'}`;
  const body = `Hi Usman,\n\n${msg}\n\n— ${name}${company ? ', ' + company : ''}`;
  location.href = `mailto:ahmedusman0001@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* 11. FOOTER NAME ------------------------------------------------ */
(function bigname() {
  const big = $('#bigname'), word = $('[data-letters]', big);
  const letters = [...word.textContent].map((c) => { const s = document.createElement('span'); s.className = 'l'; s.textContent = c; return s; });
  word.textContent = ''; letters.forEach((l) => word.appendChild(l));
  if (!fine || reduced) return;
  big.addEventListener('pointermove', (e) => {
    letters.forEach((l) => {
      const r = l.getBoundingClientRect();
      const k = Math.max(0, 1 - Math.abs(e.clientX - (r.left + r.width / 2)) / (r.width * 1.3));
      l.style.setProperty('--lift', (k * 50).toFixed(1));
      l.classList.toggle('hot', k > 0.6);
    });
  });
  big.addEventListener('pointerleave', () => letters.forEach((l) => { l.style.setProperty('--lift', 0); l.classList.remove('hot'); }));
})();

/* 12. ASK -------------------------------------------------------- */
const askBtn = $('#askBtn'), askPanel = $('#askPanel'), askLog = $('#askLog'), askInput = $('#askInput');
function toggleAsk(open) {
  askPanel.hidden = !open;
  askBtn.setAttribute('aria-expanded', String(open));
  if (open) askInput.focus();
}
askBtn.addEventListener('click', () => toggleAsk(askPanel.hidden));
$('#askClose').addEventListener('click', () => toggleAsk(false));
new IntersectionObserver(([e]) => askBtn.classList.toggle('away', e.isIntersecting && askPanel.hidden)).observe($('#contact'));

const KB = [
  { k: ['built', 'projects', 'project', 'portfolio', 'made', 'work'], a: 'Six products — three live client sites, two of his own in development and one prototype:\n• MUNIK XVII — Model UN site for IBA Karachi\n• SouthShore — design & construction company site\n• Kreston Estates — Tooting lettings, sales & property management agency site\n• dermIQ — AI skin-lesion triage (founder, in development)\n• IdeaForge — give it a YouTube channel, get this week’s posts for 5 platforms (founder, in development)\n• CaseBridge — clickable prototype of a legal case-management tool\nEach has a card in the Work section.' },
  { k: ['salary', 'salary expectation', 'compensation', 'pay', 'paid', 'rate', 'expectations'], a: 'Usman prefers to talk about salary once he knows more about the role and team. Email ahmedusman0001@outlook.com and he’ll reply directly.' },
  { k: ['sponsorship', 'sponsor', 'visa', 'right to work', 'work permit', 'eligible'], a: 'No sponsorship needed — Usman has the right to work in the UK, now and long-term.' },
  { k: ['notice', 'notice period', 'start date', 'when can he start', 'availability'], a: 'Two weeks’ notice. He’s based in London and open to hybrid, remote or on-site roles.' },
  { k: ['open', 'available', 'hire', 'roles', 'role', 'job', 'remote', 'hybrid', 'on-site', 'onsite', 'start'], a: 'Yes — Usman is open to full-time software engineering roles, based in London and happy with hybrid, remote or on-site. No sponsorship needed, and two weeks’ notice. Fastest route: ahmedusman0001@outlook.com.' },
  { k: ['dermiq', 'derm', 'skin', 'lesion', 'medical', 'health', 'nhs'], a: 'dermIQ is Usman’s own startup, currently in development. He fine-tuned a Vision Transformer to classify skin photos across 7 lesion classes with a risk band, serves it from a Dockerised Flask + PyTorch API, and is building the Next.js product himself.' },
  { k: ['stack', 'tech', 'language', 'framework', 'skills', 'tools', 'know'], a: 'Languages: Java, C#/.NET Core, Python, TypeScript, C++, SQL. Backend: Spring Boot, ASP.NET Core, Node/Express, Flask. Frontend: React, Next.js, Tailwind, Blazor. Data: PostgreSQL, Kafka, RabbitMQ. Cloud: AWS, Azure, Docker, Kubernetes, Terraform. AI/ML: PyTorch, TensorFlow, ViT, ResNet, U-Net, YOLO. CMS: Sitecore, Optimizely. The Skills section shows where each one was used.' },
  { k: ['hsbc', 'samsung', 'wavetec', 'enterprise', 'experience', 'years', 'backend', 'distributed', 'kafka', 'bank'], a: 'At Wavetec, Usman builds distributed backend services for HSBC, Samsung Europe, Delta Air Lines and Banorte — event-driven pipelines on Kafka and RabbitMQ, Kubernetes on AWS and Azure, in Java, .NET Core and Python.' },
  { k: ['munik', 'model un', 'iba', 'karachi', 'conference'], a: 'MUNIK XVII is the official site for Model United Nations at IBA Karachi — built for a real organising team and served on the university’s domain, munik.iba.edu.pk.' },
  { k: ['education', 'degree', 'msc', 'master', 'university', 'hull', 'study', 'bsc'], a: 'MSc Artificial Intelligence & Data Science from the University of Hull, awarded with Distinction in 2026, and a BSc in Computer Science from FAST-NUCES on the Dean’s Honours List.' },
  { k: ['ai', 'ml', 'machine learning', 'model', 'llm', 'pytorch'], a: 'Applied AI runs through his work: training and serving a vision model (dermIQ), and LLM-generated post ideas grounded in news and Reddit in IdeaForge — backed by an MSc in AI with Distinction.' },
  { k: ['contact', 'email', 'reach', 'linkedin', 'cv', 'resume', 'call', 'phone'], a: 'Email ahmedusman0001@outlook.com or LinkedIn (linkedin.com/in/usman--ahmed). The CV is one click away — “CV ↓” in the top bar.' },
  { k: ['why', 'hire him', 'why hire', 'strength', 'different', 'stand out', 'best', 'good'], a: 'Three things in one hire: he’s built production backends for global brands, he’s founded his own AI product and is building it end to end, and he has the MSc depth to back the ML.' },
  { k: ['hi', 'hello', 'hey', 'salam'], a: 'Hi! Ask about Usman’s projects, stack, enterprise experience — or whether he’s open to roles.' },
];
const NOT_IN_STACK = ['go', 'golang', 'rust', 'kotlin', 'swift', 'ruby', 'rails', 'php', 'laravel', 'scala', 'elixir', 'haskell', 'angular', 'vue', 'svelte', 'django', 'flutter', 'dart', 'perl'];
function answer(q) {
  const s = q.toLowerCase();
  const miss = NOT_IN_STACK.find((t) => new RegExp(`\\b${t}\\b`).test(s));
  if (miss) return `${miss[0].toUpperCase() + miss.slice(1)} isn’t one he lists. His languages are Java, C#/.NET, Python, TypeScript, C++ and SQL — the Skills section shows where he’s used each.`;
  let best = null, score = 0;
  KB.forEach((e) => {
    const n = e.k.reduce((acc, k) => acc + (new RegExp(`\\b${k.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`).test(s) ? k.length : 0), 0);
    if (n > score) { score = n; best = e; }
  });
  return best ? best.a : 'I only know what’s in this portfolio — try his projects, stack or experience, or email ahmedusman0001@outlook.com.';
}
function bubble(text, who) {
  const empty = $('.askp__empty', askLog);
  if (empty) empty.remove();
  const b = document.createElement('div');
  b.className = `msg msg--${who}`;
  askLog.appendChild(b);
  if (who === 'me' || reduced) { b.textContent = text; askLog.scrollTop = askLog.scrollHeight; return; }
  let i = 0;
  b.textContent = '…';
  setTimeout(function type() {
    b.textContent = text.slice(0, (i += 3));
    askLog.scrollTop = askLog.scrollHeight;
    if (i < text.length) setTimeout(type, 12);
  }, 380);
}
function ask(q) { if (!q.trim()) return; bubble(q, 'me'); bubble(answer(q), 'bot'); }
$('#askForm').addEventListener('submit', (e) => { e.preventDefault(); ask(askInput.value); askInput.value = ''; });
askLog.addEventListener('click', (e) => { if (e.target.matches('.askp__sugg button')) ask(e.target.textContent); });

/* GLOBAL: reveal hook-up + Esc ----------------------------------- */
$$('[data-reveal]').forEach((el) => io.observe(el));
addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!tldr.hidden) closeLayer(tldr);
  if (!askPanel.hidden) toggleAsk(false);
  if (!menu.hidden) setMenu(false);
});

/* 13. MOTION LAYER ----------------------------------------------- */
(function motion() {
  // 13a. Smooth scroll (desktop pointer only — phones keep native momentum)
  let lenis = null;
  if (window.Lenis && fine && !calm) {
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
    document.documentElement.classList.add('lenis');
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      const el = id === '#top' ? 0 : document.querySelector(id);
      if (el === null) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: id === '#top' ? 0 : -70, duration: 1.4 });
      history.replaceState(null, '', id);
    });
    // freeze page scroll while an overlay is open
    new MutationObserver(() => {
      const open = !$('#tldr').hidden || !$('#menu').hidden;
      open ? lenis.stop() : lenis.start();
    }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['hidden'] });
  }

  // 13b. Headings: split into words that rise in
  $$('[data-words]').forEach((h) => {
    let d = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span'); w.className = 'wd';
            const s = document.createElement('span'); s.textContent = part; s.style.setProperty('--d', d++);
            w.appendChild(s); frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
      });
    };
    walk(h);
    io.observe(h);
  });

  // 13c. Rolling text on links & buttons
  const rollTargets = $$('.nav__links a, .contact__links a, .footer__row a, .nav__cv, .btn, .menu__foot a');
  rollTargets.forEach((el) => {
    const t = [...el.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim());
    if (!t) return;
    const label = t.textContent.trim();
    const wrap = document.createElement('span'); wrap.className = 'roll';
    const inner = document.createElement('span'); inner.textContent = label;
    wrap.appendChild(inner);
    t.replaceWith(wrap, document.createTextNode(t.textContent.endsWith(' ') ? ' ' : ''));
  });

  if (reduced) { $$('.card').forEach((c) => c.classList.add('shown')); return; }

  // 13d. Magnetic buttons
  if (fine) {
    $$('.btn, .nav__cv, .icon-btn, .ask, .nav__mark, .nav__tldr').forEach((el) => {
      el.classList.add('mag');
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.3, y = (e.clientY - r.top - r.height / 2) * 0.35;
        el.classList.add('pull');
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('pointerleave', () => { el.classList.remove('pull'); el.style.transform = ''; });
    });
  }

  // 13e. Cards: reveal, inner parallax, tilt + glare
  const cardIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('shown'); cardIO.unobserve(en.target); } });
  }, { threshold: 0.18 });
  $$('.card').forEach((c) => {
    $$('.card__built li, .chips span', c).forEach((el, k) => el.style.setProperty('--k', k));
    cardIO.observe(c);
  });
  const imgs = calm ? [] : $$('.card__img img');
  (function parallaxLoop() {
    const vh = innerHeight;
    imgs.forEach((img) => {
      if (!img.isConnected) return;   // screenshot failed to load and was removed
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh;  // -0.5 … 0.5
      img.style.setProperty('--py', (p * -40).toFixed(1) + 'px');
    });
    requestAnimationFrame(parallaxLoop);
  })();
  if (fine && !calm) {
    $$('.card__shot').forEach((s) => {
      s.addEventListener('pointermove', (e) => {
        const r = s.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        s.style.setProperty('--ry', ((x - 0.5) * 7).toFixed(2) + 'deg');
        s.style.setProperty('--rx', ((0.5 - y) * 6).toFixed(2) + 'deg');
        s.style.setProperty('--gx', x * 100 + '%');
        s.style.setProperty('--gy', y * 100 + '%');
      });
      s.addEventListener('pointerleave', () => { s.style.setProperty('--rx', '0deg'); s.style.setProperty('--ry', '0deg'); });
    });
  }

  // 13f. Eyebrows decode like a terminal when they enter
  const glyphs = '01<>/{}[]#$%&*+=?';
  const scramble = (el) => {
    const node = [...el.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim());
    if (!node) return;
    const final = node.textContent; let f = 0; const total = 22;
    (function step() {
      node.textContent = [...final].map((ch, i) => (ch === ' ' || f / total > i / final.length) ? ch : glyphs[(Math.random() * glyphs.length) | 0]).join('');
      if (++f <= total) requestAnimationFrame(step); else node.textContent = final;
    })();
  };
  const eyeIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { scramble(en.target); eyeIO.unobserve(en.target); } });
  }, { threshold: 1 });
  $$('section .eyebrow').forEach((e) => eyeIO.observe(e));

  // 13g. Cursor dot with blend mode
  const dot = $('#dotc');
  if (fine) {
    let dx = -100, dy = -100, x = -100, y = -100;
    addEventListener('pointermove', (e) => { dx = e.clientX; dy = e.clientY; dot.classList.add('on'); });
    document.addEventListener('pointerleave', () => dot.classList.remove('on'));
    (function f() { x += (dx - x) * 0.25; y += (dy - y) * 0.25; dot.style.transform = `translate(${x}px, ${y}px)`; requestAnimationFrame(f); })();
    document.addEventListener('pointerover', (e) => {
      const t = e.target;
      dot.classList.toggle('big', !!t.closest('a, button, .skill, input, textarea'));
      dot.classList.toggle('hide', !!t.closest('.card__shot'));
    });
  }

  // 13h. Hero content eases out as you scroll away
  const fadeEls = [$('.hero__intro'), $('.hero__status')];
  addEventListener('scroll', () => {
    if (!desktop()) { fadeEls.forEach((el) => (el.style.opacity = '')); return; }
    const o = clamp(1 - scrollY / (innerHeight * 0.45), 0, 1);
    fadeEls.forEach((el) => (el.style.opacity = o));
  }, { passive: true });
})();

/* 14. PERSONAL TOUCHES ------------------------------------------- */
// "Now" list is dated so visitors know it's current
(function () {
  const d = $('#nowDate');
  if (d) d.textContent = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
})();

// Latest public repos, straight from GitHub (hidden if the API is unavailable)
(async function github() {
  const box = $('#gh'), list = $('#ghList');
  if (!box) return;
  try {
    const res = await fetch('https://api.github.com/users/UsmanAhmed0001/repos?sort=pushed&per_page=4');
    if (!res.ok) return;
    const repos = (await res.json()).filter((r) => !r.fork).slice(0, 4);
    if (!repos.length) return;
    const ago = (iso) => {
      const d = Math.round((Date.now() - new Date(iso)) / 864e5);
      return d < 1 ? 'today' : d === 1 ? 'yesterday' : d < 30 ? `${d} days ago` : new Date(iso).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
    };
    list.innerHTML = repos.map((r) => `
      <li><a href="${r.html_url}" target="_blank" rel="noopener">${r.name}</a>
      <span class="mono">${r.language ? r.language + ' · ' : ''}${ago(r.pushed_at)}</span></li>`).join('');
    box.hidden = false;
  } catch (e) { /* offline or rate-limited: stay hidden */ }
})();

/* 15. INK MARKS — draw like the monogram, redraw on hover -------- */
(function ink() {
  const draw = (svg) => { svg.classList.remove('draw'); void svg.getBoundingClientRect(); svg.classList.add('draw', 'drawn'); };
  const marks = $$('.ink');
  marks.forEach((svg, i) => {
    setTimeout(() => draw(svg), 1300 + i * 250);
    const host = svg.closest('.ink-host');
    if (host) host.addEventListener('mouseenter', () => draw(svg));
  });
})();

/* 16. Glass card: the highlight follows the pointer like light on glass */
(function glass() {
  const card = $('.hero__status');
  if (!card || !fine) return;
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--gx', ((e.clientX - r.left) / r.width) * 100 + '%');
    card.style.setProperty('--gy', ((e.clientY - r.top) / r.height) * 100 + '%');
  });
})();

/* 17. LIVE PREVIEWS — the real site runs inside the card's browser frame,
   rendered at 1440px wide and scaled to fit. A site runs only while its tile
   is actually visible (on screen and not buried under the next stacked card)
   and stops as soon as it isn't. Phones run at most one site at a time, the
   most visible one, because iOS Safari kills tabs that use too much memory. */
(function livePreviews() {
  const phone = !fine || innerWidth < 900;
  // phones render the site at a narrower desktop width: far less to paint and hold in memory
  const VW = phone ? 1024 : 1440;
  const MAX = phone ? 1 : 2;
  const boxes = $$('.card__frame');
  if (!boxes.length) return;
  const cardsAll = $$('.card');
  const fit = (box, f) => {
    const s = box.clientWidth / VW;
    f.style.transform = `scale(${s})`;
    f.style.height = box.clientHeight / s + 'px';
  };
  const ro = new ResizeObserver((entries) => entries.forEach((e) => {
    const f = e.target.querySelector('iframe'); if (f) fit(e.target, f);
  }));
  const tagOf = (box) => box.closest('.card__shot')?.querySelector('.card__live');
  function load(box) {
    if (box.querySelector('iframe')) return;
    const f = document.createElement('iframe');
    f.src = box.dataset.src;
    f.title = box.dataset.title;
    f.tabIndex = -1;
    f.setAttribute('aria-hidden', 'true');
    f.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    f.setAttribute('referrerpolicy', 'no-referrer');
    f.style.width = VW + 'px';
    f.addEventListener('load', () => setTimeout(() => {
      if (!f.isConnected) return;
      box.classList.add('ready');
      const t = tagOf(box); if (t) t.classList.add('on');
    }, 600));
    box.appendChild(f);
    fit(box, f);
    ro.observe(box);
  }
  let lastUnload = 0;
  function unload(box) {
    const f = box.querySelector('iframe');
    if (!f) return;
    lastUnload = performance.now();
    box.classList.remove('ready');
    const t = tagOf(box); if (t) t.classList.remove('on');
    f.src = 'about:blank';               // release the page's memory straight away
    f.remove();
  }
  // How much of a tile can actually be seen (0–1): clipped by the viewport
  // and by any later stacked card sliding over it.
  function visible(box) {
    const r = box.getBoundingClientRect();
    if (!r.height) return 0;
    let top = Math.max(r.top, 0), bottom = Math.min(r.bottom, innerHeight);
    const card = box.closest('.card');
    const idx = cardsAll.indexOf(card);
    for (let i = idx + 1; i < cardsAll.length; i++) {
      const t = cardsAll[i].getBoundingClientRect().top;
      if (t < bottom) bottom = Math.max(top, t);
    }
    return Math.max(0, bottom - top) / r.height;
  }
  let timer = 0;
  function update() {
    const scored = boxes.map((b) => [b, visible(b)]).filter(([, v]) => v >= 0.35)
      .sort((a, b) => b[1] - a[1]).slice(0, MAX).map(([b]) => b);
    boxes.forEach((b) => { if (!scored.includes(b)) unload(b); });
    // phones: give Safari a moment to free the previous site's memory before starting the next
    const gap = phone ? (boxes.some((b) => b.hasAttribute('data-heavy') && scored.includes(b)) ? 1600 : 1000) : 0;
    const wait = gap - (performance.now() - lastUnload);
    if (wait > 0) { clearTimeout(timer); timer = setTimeout(update, wait); return; }
    scored.forEach(load);
  }
  // settle briefly after scrolling stops, so fast flicks don't start sites
  let last = 0;
  const schedule = () => {
    clearTimeout(timer);
    const now = performance.now();
    if (now - last > 500) { last = now; update(); }          // keep up during slow, steady scrolling
    timer = setTimeout(() => { last = performance.now(); update(); }, phone ? 250 : 150);  // and settle when it stops
  };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  document.addEventListener('visibilitychange', () => (document.hidden ? boxes.forEach(unload) : schedule()));
  schedule();
})();