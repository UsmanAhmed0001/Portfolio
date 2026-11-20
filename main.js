/**
 * main.js — Usman Ahmed · Portfolio 2026
 *
 *  1. Project data
 *  2. Helpers
 *  3. Hero: letter split, code backdrop + torch, scramble
 *  4. Nav: menu, theme, scroll progress
 *  5. Scroll reveal + counters
 *  6. Project folders + case-study modal
 *  7. 30-second read drawer
 *  8. Contact: email draft + copy
 *  9. Footer: giant name + clock
 * 10. Ask AI (scripted assistant)
 */
document.documentElement.classList.remove('no-js');

/* 1. PROJECT DATA ------------------------------------------------ */
const PROJECTS = [
  {
    id: 'dermiq', name: 'dermIQ', img: 'images/dermIQ.png',
    url: 'https://derm-iq-three.vercel.app',
    tag: 'Founder · AI skin triage',
    role: 'Founder · Sole technical lead · 2025 — now',
    summary: 'An AI-assisted skin-lesion triage app. Upload a photo and a fine-tuned vision model classifies it across 7 lesion categories with a risk band — positioned as a screening aid that helps people decide how urgently to seek care.',
    points: [
      'Fine-tuned a Vision Transformer on HAM10000 across 7 classes, with risk banding on top of raw predictions',
      'Inference served from a Dockerised Flask + PyTorch API on Hugging Face Spaces',
      'Migrated the backend off Railway to keep the MVP running at zero cost',
      'Next.js + TypeScript + Tailwind front end on Vercel, now in discussion with NHS-connected clinicians',
    ],
    stack: ['Next.js', 'TypeScript', 'PyTorch', 'ViT', 'Flask', 'Docker', 'Hugging Face'],
  },
  {
    id: 'southshore', name: 'SouthShore', img: 'images/southshore.png',
    url: 'https://southshore-projects.vercel.app',
    tag: 'Design & construction',
    role: 'Lead developer · Rebuild & ongoing maintenance',
    summary: 'A full rebuild of the website for a design & construction company — a portfolio-led site that sells craftsmanship through photography, clean typography and a fast, accessible build.',
    points: [
      'Rebuilt the site from scratch and maintain it for the business',
      'Project galleries designed to load fast on mobile',
      'Content structure the client can keep extending',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    id: 'ideaforge', name: 'IdeaForge', img: 'images/ideaForge.png',
    url: 'https://idea-forge-liart.vercel.app',
    tag: 'Startup idea validation',
    role: 'Solo build · Product & engineering',
    summary: 'A tool that pressure-tests startup ideas — turning a one-line pitch into structured analysis so founders can see weak spots before they spend months building.',
    points: [
      'LLM-backed analysis pipeline with structured outputs',
      'Guided flow from raw idea to an actionable breakdown',
      'Deployed on Vercel with a lightweight Next.js stack',
    ],
    stack: ['Next.js', 'TypeScript', 'LLM API', 'Vercel'],
  },
  {
    id: 'kreston', name: 'Kreston Estates', img: 'images/krestonEstate.png',
    url: 'https://kreston-estate.vercel.app',
    tag: 'Property management',
    role: 'Full-stack · Client project',
    summary: 'A full-stack property-management platform for a lettings business — listings, tenants and admin workflows behind authenticated, role-aware access.',
    points: [
      'React + Vite front end with an Express REST API',
      'JWT authentication with role-based access',
      'SQLite persistence for listings and records',
    ],
    stack: ['React', 'Vite', 'Express', 'SQLite', 'JWT'],
  },
  {
    id: 'hq', name: 'HQ', img: 'images/HQ.png',
    url: 'https://hq-sigma-ten.vercel.app/design.html',
    tag: 'Co-Founder · B2B SaaS',
    role: 'Co-Founder & CTO · 2026 — now',
    summary: 'A B2B corporate-wellness SaaS bringing AI-native support to enterprise teams. I own every technical decision — stack, data model, security and delivery.',
    points: [
      'Architecture on Next.js 16, Prisma 7 and PostgreSQL on Neon',
      'GDPR-first data design for enterprise buyers',
      'Building with a co-founder across London and Kyiv',
    ],
    stack: ['Next.js 16', 'Prisma 7', 'PostgreSQL', 'Neon', 'TypeScript'],
  },
  {
    id: 'casebridge', name: 'CaseBridge', img: 'images/casebridge.png',
    url: 'https://casebridge-beta.vercel.app',
    tag: 'Legal case management',
    role: 'Solo build · Beta',
    summary: 'A legal case-management platform that keeps cases, documents and deadlines in one place, so small firms stop running matters out of inboxes and spreadsheets.',
    points: [
      'Typed data model for cases, parties and documents with Prisma',
      'Next.js app with a clean, dense dashboard UI',
      'Live in beta on Vercel',
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
  },
  {
    id: 'munik', name: 'MUNIK XVII', img: 'images/munik.png',
    url: 'https://munik-xvii.vercel.app',
    tag: 'Model UN · IBA Karachi',
    role: 'Lead developer · Conference website',
    summary: 'The official website for MUNIK XVII — Model United Nations at IBA Karachi. Built for a real organising team and served on the university’s own domain, munik.iba.edu.pk.',
    points: [
      'Delivered for a live conference with a real organising team',
      'Custom domain set up with IBA IT, pointing at the Vercel deployment',
      'Content-driven pages for committees, team and registration',
    ],
    stack: ['Front end', 'Vercel', 'Custom domain', 'DNS'],
  },
];

/* 2. HELPERS ----------------------------------------------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = matchMedia('(hover: hover)').matches;

function toast(text) {
  const t = $('#toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 1800);
}
async function copy(text, msg) {
  try { await navigator.clipboard.writeText(text); toast(msg); }
  catch (e) { toast('Copy failed — select and copy manually'); }
}

/* 3. HERO -------------------------------------------------------- */
// Split hero words into letters for the staggered rise
$$('[data-split]').forEach((el, w) => {
  const txt = el.textContent;
  el.textContent = '';
  [...txt].forEach((c, i) => {
    const s = document.createElement('span');
    s.className = 'ch';
    s.style.setProperty('--i', i + w * 4);
    s.textContent = c;
    el.appendChild(s);
  });
});

// Faint code backdrop built from my actual stack
const CODE = [
  'const engineer = { name: "Usman Ahmed", base: "London", open: true };',
  'export async function triage(img: File) {',
  '  const logits = await model.predict(preprocess(img));',
  '  return riskBand(softmax(logits), CLASSES);',
  '}',
  'kafka.consumer({ groupId: "queue-events" }).subscribe("tickets");',
  'model = ViTForImageClassification.from_pretrained(ckpt, num_labels=7)',
  'await prisma.organisation.findMany({ where: { gdprConsent: true } });',
  'kubectl rollout status deployment/flow-api -n prod',
  'resource "aws_ecs_service" "api" { desired_count = 3 }',
  'public sealed class QueueService : IQueueService { }',
  '@app.post("/predict")  # Flask · PyTorch · Docker',
  'SELECT tenant_id, COUNT(*) FROM leases GROUP BY tenant_id;',
  'git commit -m "ship it, then make it better"',
];
const codeEl = $('#heroCode');
if (codeEl) {
  let out = '';
  for (let i = 0; i < 60; i++) {
    const pad = ' '.repeat((i * 7) % 24);
    out += pad + CODE[i % CODE.length] + '      ' + CODE[(i * 5 + 3) % CODE.length] + '\n';
  }
  codeEl.textContent = out;

  if (canHover && !reduced) {
    const torch = codeEl.cloneNode(true);
    torch.removeAttribute('id');
    torch.classList.add('torch');
    codeEl.after(torch);
    const hero = $('#top');
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      torch.style.setProperty('--mx', e.clientX - r.left + 'px');
      torch.style.setProperty('--my', e.clientY - r.top + 'px');
    });
    hero.addEventListener('pointerleave', () => torch.style.setProperty('--mx', '-999px'));
  }
}

// Text scramble on the {{ }} line
function scramble(el) {
  const final = el.textContent;
  const glyphs = '!<>-_\\/[]{}=+*^?#01';
  let frame = 0;
  const total = 28;
  (function step() {
    el.textContent = [...final].map((c, i) => {
      if (c === ' ' || frame / total > i / final.length) return c;
      return glyphs[(Math.random() * glyphs.length) | 0];
    }).join('');
    if (++frame <= total) requestAnimationFrame(step);
    else el.textContent = final;
  })();
}
const scr = $('#scramble');
if (scr && !reduced) {
  setTimeout(() => scramble(scr), 1100);
  scr.addEventListener('mouseenter', () => scramble(scr));
}

/* 4. NAV --------------------------------------------------------- */
const menuBtn = $('#menuBtn');
const menu = $('#menu');
function setMenu(open) {
  menu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', (e) => { e.stopPropagation(); setMenu(!menu.classList.contains('open')); });
document.addEventListener('click', (e) => { if (!menu.contains(e.target)) setMenu(false); });
$$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));

$('#themeToggle').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

const progress = $('#progress');
addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}, { passive: true });

/* 5. REVEAL + COUNTERS ------------------------------------------- */
function countUp(el) {
  const end = +el.dataset.count;
  if (reduced) return;
  const t0 = performance.now();
  (function f(t) {
    const p = Math.min((t - t0) / 1200, 1);
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
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

/* 6. FOLDERS + CASE MODAL ---------------------------------------- */
const folders = $('#folders');
PROJECTS.forEach((p, i) => {
  const idx = String(i + 1).padStart(2, '0');
  const el = document.createElement('article');
  el.className = 'folder';
  el.tabIndex = 0;
  el.setAttribute('role', 'button');
  el.setAttribute('aria-label', `Open ${p.name} case study`);
  el.setAttribute('data-reveal', '');
  el.innerHTML = `
    <div class="folder__body">
      <div class="folder__back"></div>
      <div class="folder__paper folder__paper--2"></div>
      <div class="folder__paper folder__paper--1" style="background-image:url('${p.img}')"></div>
      <div class="folder__front">
        <span class="folder__idx">${idx}</span>
        <h3>${p.name}</h3>
        <span class="folder__open">↗</span>
      </div>
    </div>
    <div class="folder__meta">
      <span>${p.tag}</span>
      <a href="${p.url}" target="_blank" rel="noopener">View live ↗</a>
    </div>`;
  el.addEventListener('click', (e) => { if (!e.target.closest('a')) openCase(i); });
  el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCase(i); } });
  folders.appendChild(el);
});

// 8th slot: an open invitation
const cta = document.createElement('a');
cta.className = 'folder folder--cta';
cta.href = '#contact';
cta.setAttribute('data-reveal', '');
cta.innerHTML = `
  <div class="folder__body">
    <div class="folder__back"></div>
    <div class="folder__paper folder__paper--2"></div>
    <div class="folder__paper folder__paper--1"></div>
    <div class="folder__front">
      <span class="folder__idx">08</span>
      <h3>Your team, next?</h3>
      <span class="folder__open">↗</span>
    </div>
  </div>
  <div class="folder__meta"><span>This folder is empty — for now.</span><span>Let’s talk ↗</span></div>`;
folders.appendChild(cta);

$$('[data-reveal]').forEach((el) => io.observe(el));

const modal = $('#caseModal');
let current = 0;
let lastFocus = null;

function openCase(i) {
  current = i;
  const p = PROJECTS[i];
  $('#caseIdx').textContent = `Project ${String(i + 1).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')}`;
  $('#caseTitle').textContent = p.name;
  $('#caseRole').textContent = p.role;
  $('#caseSummary').textContent = p.summary;
  $('#casePoints').innerHTML = p.points.map((x) => `<li>${x}</li>`).join('');
  $('#caseStack').innerHTML = p.stack.map((x) => `<span>${x}</span>`).join('');
  $('#caseShot').style.backgroundImage = `url('${p.img}')`;
  $('#caseLink').href = p.url;
  if (modal.hidden) { lastFocus = document.activeElement; showLayer(modal); }
  $('.modal__panel', modal).scrollTop = 0;
}
$('#caseNext').addEventListener('click', () => openCase((current + 1) % PROJECTS.length));

function showLayer(layer) {
  layer.hidden = false;
  document.body.style.overflow = 'hidden';
  $('.x', layer).focus();
}
function hideLayer(layer) {
  layer.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
[modal, $('#tldr')].forEach((layer) => {
  $$('[data-close]', layer).forEach((b) => b.addEventListener('click', () => hideLayer(layer)));
});
addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!modal.hidden) hideLayer(modal);
  if (!$('#tldr').hidden) hideLayer($('#tldr'));
  if (!askPanel.hidden) toggleAsk(false);
  setMenu(false);
});

/* 7. 30-SECOND READ ---------------------------------------------- */
$('#tldrOpen').addEventListener('click', () => { lastFocus = document.activeElement; showLayer($('#tldr')); });
$('#copySummary').addEventListener('click', () => {
  const lines = $$('.tldr div').map((d) => `${$('dt', d).textContent}: ${$('dd', d).textContent}`);
  copy(`Usman Ahmed — Software Engineer\n${lines.join('\n')}\nusmanahmedwork@outlook.com · github.com/UsmanAhmed0001`, 'Summary copied');
});

/* 8. CONTACT ----------------------------------------------------- */
$('#copyEmail').addEventListener('click', () => copy('usmanahmedwork@outlook.com', 'Email copied'));
$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const msg = f.msg.value.trim();
  if (!msg) { f.msg.focus(); toast('Add a short message first'); return; }
  const subject = `Hello from ${name || 'a visitor'}`;
  const body = `${msg}\n\n— ${name || ''}${email ? ' (' + email + ')' : ''}`;
  location.href = `mailto:usmanahmedwork@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* 9. FOOTER ------------------------------------------------------ */
const big = $('#bigname');
const word = $('[data-letters]', big);
const letters = [...word.textContent].map((c, i) => {
  const s = document.createElement('span');
  s.className = 'l';
  s.style.setProperty('--i', i);
  s.textContent = c;
  return s;
});
word.textContent = '';
letters.forEach((s) => word.appendChild(s));

new IntersectionObserver((en, obs) => {
  if (en[0].isIntersecting) { big.classList.add('in'); obs.disconnect(); }
}, { threshold: 0.3 }).observe(big);

if (canHover && !reduced) {
  big.addEventListener('pointermove', (e) => {
    letters.forEach((l) => {
      const r = l.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      const lift = Math.max(0, 1 - d / (r.width * 1.4));
      l.style.setProperty('--lift', (lift * 40).toFixed(1));
      l.classList.toggle('hot', lift > 0.55);
    });
  });
  big.addEventListener('pointerleave', () => letters.forEach((l) => { l.style.setProperty('--lift', 0); l.classList.remove('hot'); }));
  // once the rise-in has played, drop the animation so --lift drives transform
  big.addEventListener('animationend', (e) => { e.target.style.animation = 'none'; });
}

function tickClock() {
  const t = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London' });
  $('#clock').textContent = `London ${t}`;
}
tickClock();
setInterval(tickClock, 30000);

/* 10. ASK AI (scripted) ------------------------------------------ */
const askBtn = $('#askBtn');
const askPanel = $('#askPanel');
const askLog = $('#askLog');
const askInput = $('#askInput');

function toggleAsk(open) {
  askPanel.hidden = !open;
  askBtn.setAttribute('aria-expanded', String(open));
  if (open) askInput.focus();
}
askBtn.addEventListener('click', () => toggleAsk(askPanel.hidden));
$('#askClose').addEventListener('click', () => toggleAsk(false));

const KB = [
  { k: ['built', 'projects', 'project', 'portfolio', 'work on', 'made'], a: 'Seven live products:\n• dermIQ — AI skin-lesion triage (founder)\n• HQ — B2B wellness SaaS (co-founder & CTO)\n• SouthShore — design & construction site\n• IdeaForge — startup idea validation\n• Kreston Estates — property management\n• CaseBridge — legal case management\n• MUNIK XVII — Model UN conference site for IBA Karachi\nOpen any folder in Projects for the case study.' },
  { k: ['open', 'available', 'hire', 'roles', 'job', 'remote', 'hybrid', 'on-site', 'onsite', 'relocate', 'notice'], a: 'Yes — Usman is open to full-time software engineering roles. He’s based in London and happy with hybrid, remote or on-site. Fastest route: usmanahmedwork@outlook.com.' },
  { k: ['dermiq', 'derm', 'skin', 'lesion', 'medical', 'health'], a: 'dermIQ is Usman’s own startup. A fine-tuned Vision Transformer classifies a skin photo across 7 lesion categories with a risk band. Inference runs from a Dockerised Flask + PyTorch API; the product is Next.js on Vercel. He’s the founder and sole technical lead.' },
  { k: ['hq', 'cto', 'co-founder', 'cofounder', 'saas', 'wellness'], a: 'HQ is a B2B corporate-wellness SaaS where Usman is Co-Founder & CTO. He owns the architecture: Next.js 16, Prisma 7 and PostgreSQL on Neon, designed GDPR-first for enterprise customers.' },
  { k: ['stack', 'tech', 'language', 'framework', 'skills', 'tools', 'know'], a: 'Core stack: TypeScript, Next.js, React, Node/Express, Python, Java (Spring Boot) and C#/.NET Core. Data: PostgreSQL, Prisma, Redis, Kafka, RabbitMQ. Cloud: AWS, Azure, Docker, Kubernetes, Terraform, Vercel. ML: PyTorch, Hugging Face, scikit-learn, LLM APIs.' },
  { k: ['hsbc', 'samsung', 'wavetec', 'enterprise', 'experience', 'years', 'backend', 'distributed', 'kafka'], a: 'At Wavetec, Usman builds distributed backend services for enterprise clients including HSBC, Samsung Europe, Delta Airlines and Banorte — event-driven pipelines on Kafka and RabbitMQ, Kubernetes on AWS and Azure, in Java, .NET Core and Python. 3+ years in production overall.' },
  { k: ['munik', 'model un', 'iba', 'karachi', 'conference'], a: 'MUNIK XVII is the official website for Model United Nations at IBA Karachi, built for a real organising team and served on the university’s domain, munik.iba.edu.pk.' },
  { k: ['education', 'degree', 'msc', 'master', 'university', 'hull', 'study', 'bsc'], a: 'MSc Artificial Intelligence & Data Science — Distinction — University of Hull. BSc Computer Science from FAST-NUCES, on the Dean’s Honours List.' },
  { k: ['ai', 'ml', 'machine learning', 'model', 'llm', 'pytorch'], a: 'Applied AI is a big part of his work: training and fine-tuning vision models (dermIQ), serving inference APIs, and integrating LLMs into products (IdeaForge, HQ). Backed by an MSc in AI & Data Science with Distinction.' },
  { k: ['contact', 'email', 'reach', 'linkedin', 'cv', 'resume', 'call'], a: 'Email usmanahmedwork@outlook.com, or find him on LinkedIn (linkedin.com/in/usman--ahmed). The CV is one click away in the menu — “Download CV”.' },
  { k: ['why', 'hire him', 'strength', 'different', 'stand out'], a: 'Three things: he’s shipped enterprise backend systems for global brands, he’s founded and shipped his own AI product end to end, and he has the MSc depth to back the ML. Engineer, owner and builder in one hire.' },
  { k: ['hi', 'hello', 'hey', 'salam'], a: 'Hi! Ask me about Usman’s projects, his stack, his enterprise experience or whether he’s open to roles.' },
];
function answer(q) {
  const s = q.toLowerCase();
  let best = null, score = 0;
  KB.forEach((e) => {
    const n = e.k.reduce((acc, k) => acc + (new RegExp(`\\b${k.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}`).test(s) ? k.length : 0), 0);
    if (n > score) { score = n; best = e; }
  });
  return best ? best.a : 'I don’t have that one — I only know what’s in this portfolio. Try asking about his projects, stack or experience, or email usmanahmedwork@outlook.com.';
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
  }, 350);
}
function ask(q) {
  if (!q.trim()) return;
  bubble(q, 'me');
  bubble(answer(q), 'bot');
}
$('#askForm').addEventListener('submit', (e) => { e.preventDefault(); ask(askInput.value); askInput.value = ''; });
askLog.addEventListener('click', (e) => { if (e.target.matches('.askp__sugg button')) ask(e.target.textContent); });