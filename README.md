# Emmanuel A. Ajilore — Portfolio

Personal portfolio and resume site. IT Support and operations professional with a design background.

**Live:** https://emman408.github.io/My-resume/

## Structure

```
.
├── index.html                          Main portfolio page
├── favicon.svg                         Site icon
├── assets/
│   ├── portfolio/                      Portfolio thumbnails
│   │   ├── opsdesk-pulse-preview.jpg   OpsDesk Pulse dashboard screenshot
│   │   ├── signaldeck-noc-preview.jpg  SignalDeck NOC screenshot
│   │   ├── quickfix-it-1.jpg           QuickFix IT mobile UI kit
│   │   ├── quickfix-it-2.jpg
│   │   ├── dukiadey-1.jpg              DUKIADEY.ng property app UI
│   │   ├── dukiadey-2.jpg
│   │   ├── giggles-cover.jpg           Giggles & Goodies brand
│   │   ├── giggles-packaging.jpg
│   │   ├── giggles-action.jpg
│   │   ├── giggles-event.jpg
│   │   └── alive-4-shirt.jpg           Alive 4.0 concert media shirt
│   └── posters/                        Video poster frames
│       ├── waziri-products.jpg
│       ├── bita-app.jpg
│       ├── why-learn.jpg
│       └── dj-muth.jpg
├── Videos/                             KEEP from existing repo!
│   ├── Waziri Products.mp4
│   ├── Bitapp.mp4
│   ├── Why Learn With Us.mp4
│   ├── Dj Muth Faaji - Animated.mp4
│   ├── Don J Birthday Final.mp4
│   └── Eee Class '19 Nikonxix-compressed.mp4
└── projects/
    ├── opsdesk-pulse/                  Live IT support dashboard demo
    │   ├── index.html
    │   ├── styles.css
    │   └── app.js
    └── signaldeck-noc/                 Live NOC dashboard demo
        ├── index.html
        ├── styles.css
        └── app.js
```

## Deploy to GitHub Pages

Assuming the repo is `Emman408/My-resume` and Pages serves from the `main` branch root:

### Option 1: Replace existing site (clean approach)

```bash
# 1. Clone or open your local repo
cd /path/to/your/My-resume

# 2. Pull latest, then make a safety branch in case you want to revert
git checkout main
git pull
git checkout -b backup-old-site
git checkout main

# 3. Remove the old site files (keeping .git, .gitignore, README if you want)
# Adjust this list based on what your current repo has
git rm -r --cached *
rm -rf index.html style.css lightbox.css lightbox-plus-jquery.js smooth-scroll.js Videos img

# 4. Copy in the new build
cp -r /path/to/deploy/* .

# 5. Commit and push
git add .
git commit -m "Redesign: new portfolio with featured case studies and animations"
git push origin main
```

### Option 2: Preview first on a branch (safer)

```bash
cd /path/to/your/My-resume
git checkout -b redesign

# Copy in the new build (without deleting the old yet)
cp -r /path/to/deploy/* .

git add .
git commit -m "WIP: new portfolio redesign"
git push origin redesign
```

Then enable GitHub Pages temporarily on the `redesign` branch via Settings → Pages, review the live preview, and merge to `main` when ready.

## Local development

Just open `index.html` in a browser. No build step. No dependencies.

For local testing of the project sub-pages (so the back links work correctly):

```bash
# From the repo root, run a simple local server
python3 -m http.server 8000

# Then open
# http://localhost:8000/
# http://localhost:8000/projects/opsdesk-pulse/
# http://localhost:8000/projects/signaldeck-noc/
```

## Notes

- **Phone number is intentionally not on the site.** Contact runs through email and LinkedIn only.
- **Cybersecurity credentials** are linked to your verified credsverse URL in the Education section and Contact footer.
- **Earlier portfolio pieces** (Wazumpa, Best Training Centre, Busta) are referenced via `raw.githubusercontent.com` URLs to the original repo's `img/` folder. If you remove those images during the deploy, the references will break.
- **Videos folder must be kept.** The portfolio's Videos tab references 6 videos at `./Videos/`: `Waziri Products.mp4`, `Bitapp.mp4`, `Why Learn With Us.mp4`, `Dj Muth Faaji - Animated.mp4`, `Don J Birthday Final.mp4`, and `Eee Class '19 Nikonxix-compressed.mp4`. If you do a clean replace of the repo, copy your existing `Videos/` folder over first, or these video tiles will break.
- **Case study modals** for QuickFix IT, DUKIADEY.ng, Giggles & Goodies, and Alive 4.0 currently trigger placeholder alerts. Build out full case study pages when ready.
- **Resume PDF**: The "Download resume" button points to `./Emmanuel_Ajilore_Resume.pdf` which is not included. Drop your current PDF in the root with that filename, or update the href in `index.html`.

## Tech

- Plain HTML, CSS, and vanilla JavaScript. No framework.
- Google Fonts: Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono.
- All animations CSS-driven or via lightweight IntersectionObserver. Respects `prefers-reduced-motion`.
- Designed mobile-first, breakpoints at 980px and 720px.
