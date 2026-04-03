# Value Journal

This project is now a static interactive website that can be hosted directly on GitHub Pages.

## Files

- `index.html`: app structure
- `styles.css`: visual design and responsive layout
- `script.js`: value data and browser-side sorting flow
- `src/valueSystem.ts`: original typed value schema reference
- `src/valueSorting.ts`: original typed sorting logic reference

## Local Preview

Open `index.html` in a browser, or serve the folder with any static file server.

## GitHub Pages

1. Push these files to a GitHub repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select your main branch and the `/ (root)` folder.
5. Save, then wait for the site URL to appear.

## Experience

1. Users compare values only within the same group first.
2. Each group produces one winner.
3. The four group winners enter a final comparison stage.
4. The interface is fully client-side, so no backend is required.
