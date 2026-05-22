# Usman — Portfolio 2026

Personal portfolio site. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

## Project Structure

```
portfolio/
├── index.html          # Markup only — no inline styles or scripts
├── css/
│   └── styles.css      # All styles, organised into numbered sections
├── js/
│   └── main.js         # All interactions, fully commented
├── images/
│   ├── dermIQ.png
│   ├── southshore.png
│   ├── ideaForge.png
│   ├── krestonEstate.png
│   ├── HQ.png
│   └── casebridge.png
└── UsmanAhmed_Resume.pdf
```

## Deploying to Vercel

### Option A — Drag and drop (fastest)
1. Zip the entire `portfolio/` folder
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag and drop the zip

### Option B — CLI
```bash
cd portfolio
npx vercel
```

### Option C — GitHub (recommended for ongoing updates)
```bash
cd portfolio
git init
git add .
git commit -m "initial commit"
gh repo create usman-portfolio --public --push --source=.
```
Then import the repo on vercel.com — it auto-deploys on every push.

## Customisation

| What                | Where                                    |
|---------------------|------------------------------------------|
| Add photo           | `index.html` — find the `<!-- TO ADD YOUR PHOTO -->` comment |
| Change email        | `index.html` — `contact__mail` href and text |
| Update social links | `index.html` — `contact__socials` section |
| Project screenshots | Drop new PNGs into `images/`, match the filenames above |
| Colours / fonts     | `css/styles.css` — Section 1 (Design Tokens) |
| Animations timing   | `css/styles.css` — animation-delay values on `.hero__title .line` |

## Features

- Boot-sequence preloader with live progress counter
- Custom cursor (dot + lagging ring, action labels on project hover)
- Kinetic hero title with staggered fade-in
- Floating skill tags orbiting the profile photo with spinning ember ring
- Infinite marquee strip
- Scroll-triggered fade-up reveals on all sections
- Real-time London clock (hero + footer)
- Dark / light theme toggle
- Magnetic hover on email and logo
- Hero orb parallax on scroll
- Konami code easter egg (↑↑↓↓←→←→BA)
- Grain overlay
- Fully responsive down to 360px
- Respects `prefers-reduced-motion`
