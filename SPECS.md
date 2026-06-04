# Portfolio Website - Project Specification

## Objective

Create a production-quality personal portfolio website intended for recruiters and hiring managers.

The website must communicate professionalism, maturity, credibility, and attention to detail. It should feel like a polished personal brand website rather than a tutorial, template demo, or practice project.

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome Free (icons)
- Google Fonts: Outfit (headings), Plus Jakarta Sans (body)

## Features

### Internationalization
- English (default) and Spanish support
- Language switcher in navigation
- Centralized translation objects
- Persisted language preference via `localStorage`

### Theme System
- Dark mode and light mode
- OneDark color palette
- Theme toggle in navigation
- Persisted theme preference via `localStorage`
- CSS custom properties for all colors

### Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 1024px, 1440px
- No horizontal scrolling
- Responsive navigation with mobile menu
- Fluid typography using `clamp()`

### Sections
1. **Home** - Hero with greeting, name, title, summary, profile image, CTAs, social links
2. **Experience** - Timeline/card layout for professional history
3. **Education** - Card-based layout for degrees, certifications, languages
4. **Contact** - Validated form with simulated submission

### Accessibility
- Semantic HTML throughout
- Keyboard navigable
- ARIA attributes where needed
- Focus states
- Respects `prefers-reduced-motion`

### Animations
- Subtle fade-in on scroll
- Hover transitions
- Smooth scrolling
- Section reveal effects

## Design Direction

**Tone**: Editorial/refined minimalism — distinctive yet professional
**Typography**: Outfit (headings) + Plus Jakarta Sans (body)
**Color**: OneDark palette with deep backgrounds and blue/cyan accents
**Layout**: Clean grid system with generous whitespace
**Interactions**: Subtle, purposeful, performant

## Placeholder Assets

```
assets/images/profile-placeholder.jpg
assets/images/experience-01.jpg
assets/images/experience-02.jpg
assets/documents/resume-placeholder.pdf
```

## Version History

- v1.0 — Initial implementation (Home, Experience, Education, Contact)
