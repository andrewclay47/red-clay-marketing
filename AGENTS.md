# Red Clay Marketing website

A static marketing site (no build step, no package manager, no test suite). It is deployed via GitHub Pages (see `CNAME` → `redclay.marketing`).

Files:
- `index.html` — main landing page.
- `thank-you.html` — confirmation page shown after a successful contact-form submission.
- `styles.css` — small amount of custom CSS (hero animations); most styling is Tailwind.
- `script.js` — contact-form submit handler.
- `assets/images/` — image assets.

## Cursor Cloud specific instructions

- There are no dependencies to install. Tailwind CSS, Google Fonts, and the Web3Forms API are all loaded from CDNs at runtime, so the page requires network access to render/style correctly.
- To run the site in development, serve the repo root as static files, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000/index.html`. Do not open the HTML files via `file://` — the contact-form `fetch`/redirect flow behaves best over HTTP.
- There is no lint, test, or build step. "Building" is not applicable; the served files are the deliverable.
- The contact form (`script.js`) POSTs to `https://api.web3forms.com/submit` using the hardcoded `access_key` in `index.html`. A successful submission redirects to `thank-you.html`. Submitting sends a real email to the site owner, so use clearly-labeled test data when exercising the full flow.
