# Food Zone

A modern, single-page restaurant experience built with **HTML, CSS, and vanilla JavaScript**. The page highlights a fictional dining brand with a cinematic hero, curated menu showcase, responsive masonry gallery, guest testimonials, and a reservation-focused contact block.

## Preview

- Hero with headline, CTA buttons, and operating hours pill
- Signature plates grid using Unsplash food photography
- Masonry gallery (3-column desktop → single column on mobile)
- Stories/testimonials section
- Visit & reservation form with validation alert
- Sticky glassmorphic nav that collapses into a hamburger menu on small screens

## Tech Stack

- Semantic HTML5
- Custom CSS (modern layout, gradients, responsive utilities)
- Vanilla JS (`script.js`) for navigation toggle, reservation form handling, dynamic footer year
- Google Fonts (Playfair Display, Work Sans, Bebas Neue)
- Unsplash-hosted imagery (requires internet connection)

## Project Structure

```
food_zone/
├─ index.html   # Markup for all sections
├─ style.css    # Global styles, responsive rules, component design
└─ script.js    # Nav toggle, reservation alert, footer year
```

## Getting Started

1. Clone or download this repository (or copy the `food_zone` folder into your project).
2. Open `index.html` in your browser, or serve the folder via a local web server:
   ```bash
   cd food_zone
   npx serve .
   ```
3. Ensure you have an internet connection so Google Fonts and Unsplash images load properly.

## Customization Tips

- **Branding:** Update colors or gradients in `:root` within `style.css`.
- **Typography:** Swap Google Font imports in `index.html`.
- **Images:** Replace Unsplash URLs with your own assets (hosted locally or via CDN).
- **Sections:** Duplicate menu cards, gallery items, or testimonials to expand content.

## Credits

- Photography from [Unsplash](https://unsplash.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

Feel free to fork and adapt Food Zone for your own restaurant concepts or front-end showcase. PRs welcome! 🍽️

