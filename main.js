/**
 * main.js
 * Usman — Portfolio 2026
 *
 * Sections:
 *  1. Custom Cursor
 *  2. Preloader
 *  3. Scroll Reveal
 *  4. Live Clock
 *  5. Theme Toggle
 *  6. Magnetic Hover
 *  7. Hero Orb Parallax
 *  8. Konami Code Easter Egg
 */


/* ============================================================
   1. CUSTOM CURSOR
   ============================================================ */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

// Snap cursor dot to mouse immediately
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

// Lag the ring slightly behind for a smooth trail feel
(function animateRing() {
  ringX += (mouseX - ringX) * 0.16;
  ringY += (mouseY - ringY) * 0.16;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

// Expand cursor on hover
document.querySelectorAll('[data-cursor-hover], a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('is-hover');
    cursorRing.classList.add('is-hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-hover', 'has-label');
    cursor.removeAttribute('data-label');
    cursorRing.classList.remove('is-hover', 'has-label');
  });
});

// Show action label on project card hover
document.querySelectorAll('[data-cursor-label]').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('has-label');
    cursor.setAttribute('data-label', el.getAttribute('data-cursor-label'));
    cursorRing.classList.add('has-label');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('has-label');
    cursor.removeAttribute('data-label');
    cursorRing.classList.remove('has-label');
  });
});


/* ============================================================
   2. PRELOADER
   ============================================================ */
const preloader = document.getElementById('preloader');
const counter   = document.getElementById('counter');
const barFill   = document.getElementById('barFill');
const typingEl  = document.getElementById('typing');

const loadStages = [
  { threshold: 18, label: 'Linking modules'        },
  { threshold: 38, label: 'Compiling shaders'       },
  { threshold: 58, label: 'Resolving dependencies'  },
  { threshold: 78, label: 'Allocating memory'       },
  { threshold: 92, label: 'Hello, world'            },
];

let progress = 0;

// Lock scroll while loading
document.body.style.overflow = 'hidden';

(function tick() {
  progress += Math.random() * 7 + 2;
  if (progress > 100) progress = 100;

  const rounded = Math.floor(progress);
  counter.innerHTML = rounded + '<span class="pct">%</span>';
  barFill.style.width = progress + '%';

  // Update typing label at each threshold
  const currentStage = loadStages.find((s) => progress >= s.threshold && !s.done);
  if (currentStage) {
    typingEl.textContent = currentStage.label;
    currentStage.done = true;
  }

  if (progress < 100) {
    setTimeout(tick, 130);
  } else {
    setTimeout(() => {
      preloader.classList.add('done');
      document.body.style.overflow = '';
    }, 450);
  }
})();


/* ============================================================
   3. SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('[data-reveal]').forEach((el) => {
  revealObserver.observe(el);
});


/* ============================================================
   4. LIVE CLOCK (London time)
   ============================================================ */
function updateClock() {
  const now  = new Date();
  const timeOpts = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Europe/London' };
  const dateOpts = { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Europe/London' };

  const timeStr = now.toLocaleTimeString('en-GB', timeOpts);
  const dateStr = now.toLocaleDateString('en-GB', dateOpts);

  const heroTime  = document.getElementById('localTime');
  const footClock = document.getElementById('footClock');

  if (heroTime)  heroTime.textContent  = timeStr + ' GMT';
  if (footClock) footClock.textContent = dateStr + ' · ' + timeStr;
}

updateClock();
setInterval(updateClock, 1000);


/* ============================================================
   5. THEME TOGGLE
   ============================================================ */
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
});


/* ============================================================
   6. MAGNETIC HOVER
   Applies a subtle pull effect to large interactive elements
   ============================================================ */
document.querySelectorAll('.contact__mail, .nav__logo').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const dx   = e.clientX - rect.left - rect.width  / 2;
    const dy   = e.clientY - rect.top  - rect.height / 2;

    el.style.transform = `translate(${dx * 0.13}px, ${dy * 0.13}px)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});


/* ============================================================
   7. HERO ORB PARALLAX
   Moves the ambient glow orb at a slower rate than scroll
   ============================================================ */
const heroOrb = document.querySelector('.hero__orb');

window.addEventListener('scroll', () => {
  if (!heroOrb) return;
  const scrollY = window.scrollY;

  if (scrollY < window.innerHeight) {
    heroOrb.style.transform = `translate(${scrollY * -0.04}px, ${scrollY * 0.12}px)`;
  }
}, { passive: true });


/* ============================================================
   8. KONAMI CODE EASTER EGG
   ↑ ↑ ↓ ↓ ← → ← → B A
   ============================================================ */
const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

const eggModal = document.getElementById('egg');
let   keyBuffer = [];

window.addEventListener('keydown', (e) => {
  keyBuffer.push(e.key);

  // Keep buffer trimmed to sequence length
  if (keyBuffer.length > KONAMI_SEQUENCE.length) {
    keyBuffer.shift();
  }

  // Check for match
  const matched = KONAMI_SEQUENCE.every((key, i) => key === keyBuffer[i]);
  if (matched) {
    eggModal.classList.add('show');
    keyBuffer = [];
  }

  // Close on Escape
  if (e.key === 'Escape') {
    eggModal.classList.remove('show');
  }
});
