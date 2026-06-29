# Portfolio Website - Architecture Guide

## Project Structure

```
/
├── index.html          # Single-page application entry point
├── styles.css          # All styles (variables, components, responsive)
├── app.js              # Theme, i18n, navigation, animations, form
├── SPECS.md            # Project specification
├── AGENTS.md           # This file — architecture documentation
└── assets/
    ├── images/
    │   ├── profile-placeholder.jpg
    │   ├── experience-01.jpg
    │   └── experience-02.jpg
    └── documents/
        └── resume-placeholder.pdf
```

## CSS Architecture

### Organization

```css
/* CSS VARIABLES — All colors, fonts, spacing, transitions */
/* RESET & BASE — Box-sizing, margin reset, body styles */
/* TYPOGRAPHY — Font imports, type scale, headings, body */
/* LAYOUT UTILITIES — .container, .grid, .flex, .section */
/* COMPONENTS — .btn, .card, .badge, .social-link */
/* NAVIGATION — .nav, .nav-menu, .nav-toggle */
/* HOME — .hero, .profile, .hero-cta */
/* EXPERIENCE — .timeline, .timeline-item, .experience-card, .carousel */
/* EDUCATION — .education-card, .cert-badge */
/* CONTACT — .form, .form-group, .form-error, .form-success */
/* FOOTER */
/* ANIMATIONS — @keyframes, .reveal classes */
/* RESPONSIVE — Media queries by breakpoint */
```

### Naming Conventions

- BEM-inspired but simplified: `.block__element--modifier`
- Utility classes: `.container`, `.grid`, `.flex`, `.text-center`
- Component classes: `.btn`, `.btn-primary`, `.card`, `.card-title`
- Section-specific: `.hero`, `.timeline`, `.form-group`

### Color System

All colors are CSS custom properties on `:root` (dark) and `[data-theme="light"]`:

```css
--bg-primary        /* Main background */
--bg-secondary      /* Card/section backgrounds */
--bg-tertiary       /* Elevated surfaces */
--text-primary      /* Main text */
--text-secondary    /* Muted text */
--text-tertiary     /* Subtle text */
--accent-blue       /* Primary accent */
--accent-cyan       /* Secondary accent */
--accent-green      /* Success/highlight */
--accent-yellow     /* Warning/highlight */
--accent-red        /* Error/danger */
--border-color      /* Borders and dividers */
```

### Spacing System

Consistent spacing using CSS custom properties:

```css
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
--space-2xl: 3rem;
--space-3xl: 4rem;
--space-4xl: 6rem;
```

## JavaScript Architecture

### Module Pattern

```javascript
const App = {
  theme: { /* ThemeManager */ },
  i18n: { /* LanguageManager */ },
  nav: { /* NavigationManager */ },
  scroll: { /* ScrollAnimator */ },
  form: { /* ContactForm */ },
  carousel: { /* CarouselManager */ },
  init() { /* Bootstrap */ }
};
```

### ThemeManager
- `init()` — Load saved theme, apply to DOM
- `toggle()` — Switch between dark/light
- `apply(theme)` — Set `data-theme` attribute, update localStorage

### LanguageManager
- `init()` — Load saved language, apply translations
- `switch(lang)` — Change language, persist, update DOM
- `apply(lang)` — Find all `[data-i18n]` elements, update text

### NavigationManager
- `init()` — Setup mobile toggle, smooth scroll, active section
- `toggleMobile()` — Open/close mobile menu
- `updateActive()` — Highlight current section in nav

### ScrollAnimator
- `init()` — Create IntersectionObserver for `.reveal` elements
- `observe()` — Watch elements for viewport entry

### ContactForm
- `init()` — Attach submit handler
- `validate()` — Check required fields, email format
- `showError(field, message)` — Display field error
- `showSuccess()` — Display success state
- `reset()` — Clear form after submission

### CarouselManager
- `init()` — Find all `[data-carousel]` elements, call `setup()` on each
- `setup(carousel)` — Initialize a single carousel instance

Each carousel supports:
- **Prev/next buttons** — `.carousel__btn--prev` / `.carousel__btn--next` with wrapping navigation
- **Dot indicators** — Dynamically generated from slide count, appended to `.carousel__dots`
- **Touch/swipe** — 50px threshold on `touchstart`/`touchend` events
- **Single-slide mode** — Adds `.carousel--single` class, hides navigation controls

#### HTML Structure

```html
<div class="carousel" data-carousel>
    <div class="carousel__track">
        <div class="carousel__slide">
            <img src="assets/images/example.jpg" alt="Description">
        </div>
    </div>
    <button class="carousel__btn carousel__btn--prev" aria-label="Previous slide">
        <i class="fas fa-chevron-left"></i>
    </button>
    <button class="carousel__btn carousel__btn--next" aria-label="Next slide">
        <i class="fas fa-chevron-right"></i>
    </button>
    <div class="carousel__dots"></div>
</div>
```

#### CSS Key Properties
- Container: `aspect-ratio: 16/9`, `overflow: hidden`, `border-radius: var(--radius-md)`
- Images: `object-fit: cover` (crops to frame, no distortion)
- Buttons: Appear on hover, semi-transparent background, circular
- Dots: Positioned at bottom center, active dot is brighter and scaled up

#### Adding Slides
Add more `<div class="carousel__slide"><img src="..."></div>` elements inside `.carousel__track`. The JS automatically generates the corresponding dot indicators.

## Internationalization

### Translation Structure

```javascript
const translations = {
  en: {
    nav: { home, experience, education, contact },
    home: { greeting, name, title, summary, downloadResume, contactMe },
    experience: { title, subtitle, roles... },
    education: { title, subtitle, degrees... },
    contact: { title, subtitle, fields..., submit, success, errors... }
  },
  es: { /* Same structure in Spanish */ }
};
```

### Usage in HTML

```html
<h1 data-i18n="home.name">Javier Gil</h1>
```

### Dynamic Lists with data-i18n-list

For arrays of items (like responsibilities or certifications), use `data-i18n-list` to dynamically generate list elements from translation arrays:

```html
<ul data-i18n-list="experience.roles.0.responsibilities"></ul>
```

The translation structure should be an array:

```javascript
responsibilities: [
  "Led cross-functional team...",
  "Implemented CI/CD pipeline...",
  "Reduced deployment time by 40%"
]
```

The `updateContent()` method in `app.js` finds elements with `data-i18n-list`, looks up the array path, and creates `<li>` elements for each item. This eliminates the need to hardcode list items in HTML.

### Application

The `LanguageManager.apply()` function finds all elements with `data-i18n` attributes and updates their `textContent` using the translation lookup path.

## Responsive Breakpoints

| Breakpoint | Target | Layout Changes |
|---|---|---|
| < 576px | Mobile | Single column, hamburger nav |
| ≥ 576px | Large mobile | Minor spacing adjustments |
| ≥ 768px | Tablet | 2-column grids, expanded nav |
| ≥ 1024px | Laptop | Full nav, larger typography |
| ≥ 1440px | Desktop | Max-width container, generous spacing |

## Adding New Sections

1. Add section to `index.html` with appropriate `id` and `data-i18n` attributes
2. Add section styles to `styles.css` in the designated section block
3. Add translations to both `en` and `es` objects in `app.js`
4. Add nav link to both language translation objects
5. Update `AGENTS.md` with new section documentation

## Future Extensions

The architecture supports:
- Projects section (new card grid component)
- Skills section (progress bars or tag cloud)
- Blog section (article list with routing)
- Testimonials section (carousel or grid)
- Backend contact integration (replace simulated submit)
- Analytics integration (add tracking script)
- Resume generation (PDF generation from content)
- Multimedia galleries (lightbox component)

## Version History

- v1.1 — Added image carousel to experience cards with 16:9 framing, navigation controls, and touch support
- v1.0 — Initial implementation with Home, Experience, Education, Contact sections
