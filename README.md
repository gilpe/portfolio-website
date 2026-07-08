# 📋 Portfolio Website

This is my Game Designer portfolio website.

A single-page, fully responsive site built from scratch with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just clean, hand-crafted code.

## 🚀 Live Demo

[https://javigilpe.com](https://javigilpe.com)

## ✨ Features

- **Dark/Light theme** — follows system preference (`prefers-color-scheme`), with manual toggle
- **Bilingual** — English and Spanish, auto-detected from browser language (`navigator.languages`)
- **Responsive** — mobile-first design with breakpoints at 576px, 768px, 1024px, and 1440px
- **Animated hero** — typing effect, gradient background, staggered entrance animations, scroll indicator
- **Image carousels** — touch-enabled, 16:9 framed slideshows in experience cards
- **Contact form** — validated client-side, delivered via [Web3Forms](https://web3forms.com) with honeypot spam protection
- **Accessible** — semantic HTML, keyboard navigation, ARIA attributes, `prefers-reduced-motion` support
- **SEO-ready** — Open Graph tags, sitemap, robots.txt, structured meta descriptions

## 💻 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, BEM naming) |
| Logic | Vanilla JavaScript (ES6 modules) |
| Icons | Font Awesome 6 Free |
| Fonts | Google Fonts (Outfit + Plus Jakarta Sans) |
| Email | Web3Forms API |
| Server | Node.js (local dev server only) |

## 🧩 Project Structure

```
portfolio-website/
├── index.html          # Single-page entry point
├── styles.css          # All styles (variables, components, responsive)
├── translations.js     # i18n translation objects (en/es)
├── app.js              # Theme, i18n, navigation, animations, form
├── server.js           # Local dev server with security headers
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Crawler directives
├── site.webmanifest    # PWA manifest
└── assets/
    ├── images/         # Profile photo, logo, experience screenshots
    ├── documents/      # Downloadable CV (PDF)
    └── favicons/       # Favicon set
```

## 📚 Sections

| Section | Description |
|---|---|
| **Home** | Hero with greeting, animated title, summary, CTAs, and social links |
| **Experience** | Timeline of professional roles with image carousels |
| **Education** | Degrees, certifications, and language proficiencies |
| **Contact** | Validated form with email delivery |

## ⚖️ License
> [!WARNING]
This repository is published solely for portfolio and evaluation purposes. It is not open source. The source code may be viewed but may not be copied, reused, modified, or redistributed without explicit permission.
