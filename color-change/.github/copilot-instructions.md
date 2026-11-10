# Project Guidelines

## Architecture

- This is a dependency-free static web page. `index.html` owns the page markup and inline CSS; it loads `script.js` for browser interactions.
- The color buttons share the `.btn-color-change` selector. Their color-specific classes and IDs are defined in `index.html`; keep selector and markup changes coordinated across both files.
- The `#color-value` paragraph is an `aria-live` status region. Keep it synchronized when changing behavior that reports the selected color.

## Build and Test

- There is no build step, package manifest, automated test suite, or configured linter.
- To serve the page locally, follow the command in `README.md`: `python3 -m http.server 8000`.
- For a manual smoke check, open `http://localhost:8000`, confirm the page and buttons render, and exercise the button behavior after changing the JavaScript.
