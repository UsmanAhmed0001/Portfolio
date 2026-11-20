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
    id: 'dermiq', name: 'dermIQ', img: 'images/dermIQ.png', url: 'https://derm-iq-three.vercel.app',
    badge: 'Founder', when: '2025 — now',
    pitch: 'AI skin-lesion triage. Upload a photo; a fine-tuned vision model returns one of 7 lesion classes with a risk band, so people know how urgently to seek care.',
    built: [
      'Fine-tuned a Vision Transformer on HAM10000, with risk banding on top of raw predictions',
      'Dockerised Flask + PyTorch inference API on Hugging Face Spaces — moved off Railway to run at zero cost',
      'Next.js + TypeScript product on Vercel, now with NHS-connected clinicians',
    ],
    stack: ['Next.js', 'TypeScript', 'PyTorch', 'ViT', 'Flask', 'Docker'],
  },
  {
    id: 'southshore', name: 'SouthShore', img: 'images/southshore.png', url: 'https://southshore-projects.vercel.app',
    badge: 'Lead developer', when: 'Client · live',
    pitch: 'A full rebuild for a design & construction company — a portfolio-led site that sells craftsmanship through photography and clean type.',
    built: [
      'Rebuilt from scratch; I still maintain it for the business',
      'Image-heavy galleries tuned to load fast on mobile',
      'Content structure the client can keep extending',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    id: 'ideaforge', name: 'IdeaForge', img: 'images/ideaForge.png', url: 'https://idea-forge-liart.vercel.app',
    badge: 'Solo build', when: 'Product',
    pitch: 'Pressure-tests startup ideas — turns a one-line pitch into a structured analysis so founders see the weak spots before they build.',
    built: [
      'LLM-backed analysis pipeline with structured outputs',
      'Guided flow from raw idea to an actionable breakdown',
      'Lightweight Next.js stack, deployed on Vercel',
    ],
    stack: ['Next.js', 'TypeScript', 'LLM API', 'Vercel'],
  },
  {
    id: 'kreston', name: 'Kreston Estates', img: 'images/krestonEstate.png', url: 'https://kreston-estate.vercel.app',
    badge: 'Full-stack', when: 'Client · live',
    pitch: 'A property-management platform for a lettings business — listings, tenants and admin workflows behind role-aware access.',
    built: [
      'React + Vite front end over an Express REST API',
      'JWT authentication with role-based access control',
      'SQLite persistence for listings and records',
    ],
    stack: ['React', 'Vite', 'Express', 'SQLite', 'JWT'],
  },
  {
    id: 'hq', name: 'HQ', img: 'images/HQ.png', url: 'https://hq-sigma-ten.vercel.app/design.html',
    badge: 'Co-Founder & CTO', when: '2026 — now',
    pitch: 'B2B corporate-wellness SaaS bringing AI-native support to enterprise teams. I own every technical decision.',
    built: [
      'Architecture on Next.js 16, Prisma 7 and PostgreSQL on Neon',
      'GDPR-first data model and security design for enterprise buyers',
      'Built with a co-founder across London and Kyiv',
    ],
    stack: ['Next.js 16', 'Prisma 7', 'PostgreSQL', 'Neon'],
  },
  {
    id: 'casebridge', name: 'CaseBridge', img: 'images/casebridge.png', url: 'https://casebridge-beta.vercel.app',
    badge: 'Solo build', when: 'Beta',
    pitch: 'Legal case management that keeps cases, documents and deadlines in one place — so small firms stop running matters from inboxes.',
    built: [
      'Typed data model for cases, parties and documents with Prisma',
      'Dense, fast dashboard UI in Next.js',
      'Live in beta on Vercel',
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
  },
  {
    id: 'munik', name: 'MUNIK XVII', img: 'images/munik.png', url: 'https://munik-xvii.vercel.app',
    badge: 'Lead developer', when: 'Live · Jan 2027 event',
    pitch: 'The official site for Model United Nations at IBA Karachi — built for a real organising team and served on the university’s own domain.',
    built: [
      'Delivered for a live conference: committees, team, letters, registration',
      'Custom domain munik.iba.edu.pk set up with IBA IT, pointing at Vercel',
      'Live countdown, editorial typography and motion',
    ],
    stack: ['Front end', 'Vercel', 'DNS', 'Custom domain'],
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
    'LLM APIs': [use('ideaforge', 'Structured idea analysis pipeline'), use('hq', 'AI-native support product')],
    'Hugging Face': [use('dermiq', 'Model hosting + Dockerised Space for inference')],
    'scikit-learn': [job('MSc AI · Hull', 'Classical ML, evaluation & pipelines')],
  }},
  { group: 'Languages', items: {
    'TypeScript': [use('dermiq', 'Product front end'), use('hq', 'Full-stack app'), use('ideaforge', 'App + API routes'), use('casebridge', 'Typed domain model'), use('southshore', 'Site rebuild')],
    'Python': [use('dermiq', 'Flask + PyTorch inference API'), job('Wavetec', 'Backend services for enterprise clients')],
    'Java': [job('Wavetec', 'Distributed services for HSBC & Samsung Europe')],
    'C# / .NET': [job('Wavetec', 'Enterprise backend services'), job('Bits and Code', 'Migrated a SaaS product to .NET Core')],
    'SQL': [use('hq', 'PostgreSQL schema design'), use('kreston', 'SQLite records')],
  }},
  { group: 'Frameworks', items: {
    'Next.js': [use('dermiq', 'Next.js 14 product'), use('hq', 'Next.js 16 app'), use('ideaforge', 'App router'), use('casebridge', 'Dashboard app')],
    'React': [use('southshore', 'Site rebuild'), use('kreston', 'React + Vite front end'), job('Bits and Code', 'Blazor → React migration')],
    'Node / Express': [use('kreston', 'REST API with JWT auth')],
    'Flask': [use('dermiq', 'Inference API')],
  }},
  { group: 'Data & messaging', items: {
    'PostgreSQL': [use('hq', 'Primary store on Neon')],
    'Prisma': [use('hq', 'Prisma 7 data layer'), use('casebridge', 'Cases, parties, documents')],
    'Kafka': [job('Wavetec', 'Event-driven pipelines for enterprise clients')],
    'RabbitMQ': [job('Wavetec', 'Queue-based service messaging')],
  }},
  { group: 'Cloud & ops', items: {
    'Docker': [use('dermiq', 'Containerised inference API'), job('Wavetec', 'Service containers')],
    'Kubernetes': [job('Wavetec', 'Deployments on AWS & Azure')],
    'Terraform': [job('Wavetec', 'Infrastructure as code modules')],
    'AWS / Azure': [job('Wavetec', 'Production environments for enterprise clients')],
    'Vercel': PROJECTS.map((p) => use(p.id, 'Deployed & live')),
  }},
];

/* 2. HELPERS ----------------------------------------------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
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
  const ACC = '212,255,58';

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
  if (reduced) return;
  const name = $('#heroName'), me = $('#heroMe');
  let px = 0, py = 0, tx = 0, ty = 0;
  if (fine) addEventListener('pointermove', (e) => { tx = (e.clientX / innerWidth - 0.5); ty = (e.clientY / innerHeight - 0.5); });
  (function loop() {
    px += (tx - px) * 0.06; py += (ty - py) * 0.06;
    const s = Math.min(scrollY, innerHeight);
    if (desktop()) {
      name.style.transform = `translate3d(${px * -24}px, ${py * -14 + s * 0.35}px, 0)`;
      me.style.transform = `translate3d(calc(-50% + ${px * 16}px), ${py * 8 + s * 0.12}px, 0)`;
    } else {
      name.style.transform = ''; me.style.transform = '';
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

$('#themeToggle').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
  document.dispatchEvent(new Event('themechange'));
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
  const HL = ['unglamorous', 'dermIQ,', 'HQ.', 'joints:'];
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
      <div class="card__top"><span class="card__badge">${p.badge}</span><span>${String(i + 1).padStart(2, '0')} / ${total} · ${p.when}</span></div>
      <h3 class="card__name">${p.name}</h3>
      <p class="card__pitch">${p.pitch}</p>
      <ul class="card__built">${p.built.map((b) => `<li>${b}</li>`).join('')}</ul>
      <div class="card__foot">
        <div class="chips">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
        <div class="card__actions">
          <a class="btn btn--acc" href="${p.url}" target="_blank" rel="noopener">Visit live site ↗</a>
        </div>
      </div>
    </div>
    <a class="card__shot" href="${p.url}" target="_blank" rel="noopener" aria-label="Open ${p.name} live site">
      <div class="card__chrome"><i></i><i></i><i></i><span>${host}</span></div>
      <div class="card__img">
        <div class="fallback">${p.name}</div>
        <img src="${p.img}" alt="Screenshot of ${p.name}" loading="lazy" onerror="this.remove()" />
      </div>
    </a>`;
  stack.appendChild(card);
});
const cta = document.createElement('article');
cta.className = 'card card--cta';
cta.style.setProperty('--i', PROJECTS.length);
cta.innerHTML = `
  <div class="card__top"><span>08 / ??</span><span>Your team</span></div>
  <div>
    <h3 class="card__name">Project 08<br />could be yours.</h3>
    <p class="card__pitch">I’m looking for a full-time team that ships real systems. If that’s you, let’s talk this week.</p>
  </div>
  <a class="btn" href="#contact">Start the conversation →</a>`;
stack.appendChild(cta);

// Scale cards back as the next one slides over them (desktop sticky only)
const cards = $$('.card', stack);
function stackFx() {
  if (!desktop() || reduced) { cards.forEach((c) => (c.style.transform = c.style.filter = '')); return; }
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
      ${Object.entries(g.items).map(([k, v]) => `<button class="skill" type="button" role="tab" aria-selected="false" data-skill="${k}">${k}<small>${v.length}</small></button>`).join('')}
    </div>
  </div>`).join('');
const ALL = Object.assign({}, ...SKILLS.map((g) => g.items));
function showSkill(name, animate = true) {
  $$('.skill', picker).forEach((b) => b.setAttribute('aria-selected', String(b.dataset.skill === name)));
  const rows = ALL[name];
  $('#rcSkill').textContent = name;
  $('#rcNo').textContent = '#' + String(receiptNo++).padStart(4, '0');
  $('#rcLines').innerHTML = rows.map((r) => `
    <li><span>${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${r.where}</a>` : r.where}</span><span>✓</span><small>${r.note}</small></li>`).join('');
  $('#rcTotal').textContent = `${rows.length} ${rows.length === 1 ? 'item' : 'items'}`;
  if (animate && !reduced) { const rc = $('#receipt'); rc.classList.remove('print'); void rc.offsetWidth; rc.classList.add('print'); }
}
picker.addEventListener('click', (e) => { const b = e.target.closest('.skill'); if (b) showSkill(b.dataset.skill); });
showSkill('TypeScript', false);

/* 9. 30-SECOND READ ---------------------------------------------- */
const tldr = $('#tldr');
let lastFocus = null;
function openLayer(layer) { lastFocus = document.activeElement; layer.hidden = false; document.body.style.overflow = 'hidden'; $('.x', layer).focus(); }
function closeLayer(layer) { layer.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
$('#tldrOpen').addEventListener('click', () => openLayer(tldr));
$$('[data-close]', tldr).forEach((b) => b.addEventListener('click', () => closeLayer(tldr)));
$('#copySummary').addEventListener('click', () => {
  const lines = $$('.tldr div').map((d) => `${$('dt', d).textContent}: ${$('dd', d).textContent}`);
  copy(`Usman Ahmed — Software Engineer\n${lines.join('\n')}\nusmanahmedwork@outlook.com · linkedin.com/in/usman--ahmed`, 'Summary copied');
});

/* 10. CONTACT ---------------------------------------------------- */
$('#copyEmail').addEventListener('click', () => copy('usmanahmedwork@outlook.com', 'Email copied'));
$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim(), company = f.company.value.trim(), msg = f.msg.value.trim();
  if (!msg) { f.msg.focus(); toast('Add a line about the role first'); return; }
  const subject = `Role${company ? ' at ' + company : ''} — ${name || 'hello'}`;
  const body = `Hi Usman,\n\n${msg}\n\n— ${name}${company ? ', ' + company : ''}`;
  location.href = `mailto:usmanahmedwork@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
  { k: ['built', 'projects', 'project', 'portfolio', 'made', 'work'], a: 'Seven live products:\n• dermIQ — AI skin-lesion triage (founder)\n• HQ — B2B wellness SaaS (co-founder & CTO)\n• SouthShore — design & construction site\n• IdeaForge — startup idea validation\n• Kreston Estates — property management\n• CaseBridge — legal case management\n• MUNIK XVII — Model UN site for IBA Karachi\nEach has a case-study card in Work.' },
  { k: ['open', 'available', 'hire', 'roles', 'role', 'job', 'remote', 'hybrid', 'on-site', 'onsite', 'notice', 'start'], a: 'Yes — Usman is open to full-time software engineering roles, based in London and happy with hybrid, remote or on-site. Fastest route: usmanahmedwork@outlook.com.' },
  { k: ['dermiq', 'derm', 'skin', 'lesion', 'medical', 'health', 'nhs'], a: 'dermIQ is Usman’s own startup. He fine-tuned a Vision Transformer to classify skin photos across 7 lesion classes with a risk band, serves it from a Dockerised Flask + PyTorch API, and shipped the Next.js product himself.' },
  { k: ['hq', 'cto', 'co-founder', 'cofounder', 'saas', 'wellness'], a: 'HQ is a B2B corporate-wellness SaaS where Usman is Co-Founder & CTO — Next.js 16, Prisma 7 and PostgreSQL on Neon, designed GDPR-first for enterprise customers.' },
  { k: ['stack', 'tech', 'language', 'framework', 'skills', 'tools', 'know'], a: 'Core: TypeScript, Next.js, React, Node, Python, Java and C#/.NET. Data: PostgreSQL, Prisma, Kafka, RabbitMQ. Cloud: Docker, Kubernetes, Terraform, AWS, Azure, Vercel. ML: PyTorch, Hugging Face, LLM APIs. The Skills section shows where each one was used.' },
  { k: ['hsbc', 'samsung', 'wavetec', 'enterprise', 'experience', 'years', 'backend', 'distributed', 'kafka', 'bank'], a: 'At Wavetec, Usman builds distributed backend services for HSBC, Samsung Europe, Delta Air Lines and Banorte — event-driven pipelines on Kafka and RabbitMQ, Kubernetes on AWS and Azure, in Java, .NET Core and Python.' },
  { k: ['munik', 'model un', 'iba', 'karachi', 'conference'], a: 'MUNIK XVII is the official site for Model United Nations at IBA Karachi — built for a real organising team and served on the university’s domain, munik.iba.edu.pk.' },
  { k: ['education', 'degree', 'msc', 'master', 'university', 'hull', 'study', 'bsc'], a: 'MSc Artificial Intelligence & Data Science with Distinction from the University of Hull, and a BSc in Computer Science from FAST-NUCES (Dean’s Honours List).' },
  { k: ['ai', 'ml', 'machine learning', 'model', 'llm', 'pytorch'], a: 'Applied AI runs through his work: training and serving a vision model (dermIQ), and LLM features in IdeaForge and HQ — backed by an MSc in AI with Distinction.' },
  { k: ['contact', 'email', 'reach', 'linkedin', 'cv', 'resume', 'call', 'phone'], a: 'Email usmanahmedwork@outlook.com or LinkedIn (linkedin.com/in/usman--ahmed). The CV is one click away — “CV ↓” in the top bar.' },
  { k: ['why', 'hire him', 'why hire', 'strength', 'different', 'stand out', 'best', 'good'], a: 'Three things in one hire: he’s built production backends for global brands, he’s founded and shipped his own AI product end to end, and he has the MSc depth to back the ML.' },
  { k: ['hi', 'hello', 'hey', 'salam'], a: 'Hi! Ask about Usman’s projects, stack, enterprise experience — or whether he’s open to roles.' },
];
function answer(q) {
  const s = q.toLowerCase();
  let best = null, score = 0;
  KB.forEach((e) => {
    const n = e.k.reduce((acc, k) => acc + (new RegExp(`\\b${k.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}`).test(s) ? k.length : 0), 0);
    if (n > score) { score = n; best = e; }
  });
  return best ? best.a : 'I only know what’s in this portfolio — try his projects, stack or experience, or email usmanahmedwork@outlook.com.';
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