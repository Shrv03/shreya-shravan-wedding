# Shreya & Shravan — Wedding E-invite

A responsive, five-section wedding invitation website.

## Files
- `index.html` — page content and section structure
- `styles.css` — colours, layout, responsive breakpoints and animations
- `script.js` — curtain-opening interaction and scroll reveals
- `assets/` — illustrations extracted from the three supplied wedding PDFs

## Run locally
1. Keep the folder structure intact.
2. Open `index.html` in a browser. For the most reliable local preview, run a local server from this folder:
   - VS Code: install/use the Live Server extension, then right-click `index.html` → **Open with Live Server**.
   - Or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish online
Upload the complete folder (not just `index.html`) to a static hosting service such as Netlify, Vercel, or GitHub Pages. The three image files in `assets/` must remain in that folder so their relative paths work.

## Personalise
- Change the event text and timings in `index.html`.
- Change the Google Maps destination in the venue section's `href`.
- Adjust colours in the `:root` variables at the top of `styles.css`.
- The `श्री` logo is rendered as text using a Devanagari font. Google Fonts is loaded online; if you need offline use, download and self-host the font.
- The calligraphy and couple illustrations are the images you supplied, converted from PDF pages to PNGs for browser display.

## Important
The schedule is entered exactly as provided: 24 Feb — Varatham 7:00 AM, Nichyathartham 11:00 AM, Reception 6:30 PM; 25 Feb — Kasi Yathirai & Oonjal 7:31 AM, Thirumangalya Dharanam 9:00–10:30 AM.
