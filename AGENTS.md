# Portfolio Website - Architecture Guide

## Design System Rules

**CRITICAL: Always use design system tokens. Never use inline values or make micro-adjustments.**

When styling components:
- Use existing CSS custom properties (`--text-*`, `--space-*`, `--radius-*`, etc.)
- If a size doesn't exist, create a new token in the `:root` variables section
- Never use hardcoded values like `clamp(2.5rem, 2rem + 2.5vw, 3.5rem)` directly in component styles
- Never make one-off tweaks to individual elements that break system consistency

**CRITICAL: Never use hardcoded colors. Always use theme color tokens.**

- All colors must come from CSS custom properties defined in `:root` (dark theme) and `[data-theme="light"]` (light theme)
- Never use hex values like `#4a9ee0`, `#ffffff`, or named colors directly in component styles
- If a color variant doesn't exist (e.g., a hover state), create a new token following the naming convention (`--accent-blue-hover`)
- The only exception is `#ffffff` for text on accent backgrounds, which should still be used sparingly

Example:
```css
/* WRONG - hardcoded color */
.btn--primary:hover { background: #4a9ee0; }

/* CORRECT - use or create a token */
:root { --accent-blue-hover: #4a9ee0; }
.btn--primary:hover { background: var(--accent-blue-hover); }
```

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
/* HOME — .hero, .profile, .hero-cta, .hero__scroll-indicator, animated gradient, entrance animations */
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
  typing: { /* TypingEffect */ },
  scrollIndicator: { /* ScrollIndicator */ },
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

### TypingEffect
- `init()` — Find `.hero__title-text` element, load titles, start typing animation
- `loadTitles()` — Read `home.titles` and `home.titlePauses` from current language translations
- `tick()` — Type/delete characters one at a time, pause between titles
- `restart()` — Clear timeout, reload titles, restart animation (called on language switch)

The typing effect cycles through titles sequentially (not looping). Each title is typed character-by-character, pauses for a configurable duration, then is deleted before the next title begins. The final title remains displayed permanently.

#### Configuration

```javascript
home: {
  titles: ["IT Consultant", "Game Designer"],
  titlePauses: [2000],  // Pause (ms) after each title before deleting
}
```

- `titles` — Array of strings to type in order
- `titlePauses` — Array of pause durations (ms) after each title; falls back to `pauseEnd` (2000ms) if not specified
- `typeSpeed` — 80ms per character typing
- `deleteSpeed` — 40ms per character deleting
- `pauseStart` — 500ms pause before typing the next title

Respects `prefers-reduced-motion`: shows the first title statically without animation.

### ScrollIndicator
- `init()` — Find `.hero__scroll-indicator` element, attach scroll listener
- Adds `hero__scroll-indicator--hidden` class when `scrollY > 100px` to fade it out
- Hidden on small mobile (< 576px) via CSS

## Hero Section

### Animated Gradient Background
The `.hero` section uses an animated gradient background that shifts slowly over a 20-second cycle:

```css
background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%);
background-size: 400% 400%;
animation: heroGradient 20s ease infinite;
```

### Entrance Animations
Hero content elements fade and slide up sequentially on page load using `@keyframes fadeSlideUp`:

| Element | Delay |
|---|---|
| `.hero__greeting` | 0s |
| `.hero__name` | 0.15s |
| `.hero__title` | 0.3s |
| `.hero__summary` | 0.45s |
| `.hero__cta` | 0.6s |
| `.hero__social` | 0.75s |
| `.hero__image` | 0.3s (0.8s duration) |

All entrance animations are disabled when `prefers-reduced-motion: reduce` is active.

### Scroll Indicator
An animated bouncing chevron at the bottom of the hero section hints users to scroll:

```html
<div class="hero__scroll-indicator" aria-hidden="true">
    <i class="fas fa-chevron-down"></i>
</div>
```

- Bounces vertically using `@keyframes scrollBounce` (2s cycle)
- Fades out when `scrollY > 100px` via `hero__scroll-indicator--hidden` class
- Hidden on small mobile (< 576px) via `display: none`

## Internationalization

### Translation Structure

```javascript
const translations = {
  en: {
    nav: { home, experience, education, contact },
    home: { greeting, name, title, titles, titlePauses, summary, downloadResume, contactMe },
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

- v1.2 — Added typing effect (sequential, non-looping), animated gradient background, staggered entrance animations, and scroll indicator to hero section
- v1.1 — Added image carousel to experience cards with 16:9 framing, navigation controls, and touch support
- v1.0 — Initial implementation with Home, Experience, Education, Contact sections
