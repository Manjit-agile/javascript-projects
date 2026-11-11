# Project Guidelines

## Architecture

This repository contains small, standalone JavaScript learning projects. The current `color-change/` project is a static browser page: `index.html` provides the markup and inline styles, and loads `script.js` at the end of the body. `script.js` attaches click handlers to the color buttons, changes the page background, and updates the `#color-value` live region.

## Build, Test, and Lint

There are no build, automated test, or lint scripts in this repository. To run the current page locally from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory color-change
```

Then open `http://localhost:8000/`. Verify changes by interacting with the page in a browser; there is no automated single-test command.

## Conventions

- Keep each practice project independently runnable with browser-native HTML, CSS, and JavaScript; there is no shared application framework or build pipeline.
- In `color-change/`, keep button IDs (`red`, `grey`, `blue`, `green`), their matching styles, and the behavior in `script.js` consistent. The IDs are also used as CSS color values.
- Keep user-visible color feedback in `#color-value`, which is marked `aria-live="polite"`.
