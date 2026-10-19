# Jigar Patel — personal site

Static site for GitHub Pages. It is served at [jigarkpat.github.io](https://jigarkpat.github.io) from the root of `main`. There is no build step. Push to `main` and Pages redeploys in a minute or two.

## Where things live

- `index.html` — the whole page, in this order: hero, career chapters, education, stat wall, card set, off the clock, contact. Each block starts with a comment such as `<!-- CAREER: Blueprint Alpha -->`.
- `styles.css` — layout, color, and type. Section markers match the page.
- `script.js` — scroll reveals, scoreboard count-up, hero-card tilt, and skill-card flip.
- `assets/favicon.svg` — the tab icon.
- `.nojekyll` — tells GitHub Pages to serve the files as they are.

## Change the words

Edit the text in `index.html`. Keep every claim aligned with the resume. Do not add a phone number, a street address, or a resume download. Email (`jigarkpat@gmail.com`) is the only contact method, in the hero and the contact section.

## Change colors and fonts

Tokens are at the top of `styles.css`, in `:root`:

- `--ink` — off-black
- `--cream` — warm cream
- `--gold` — championship gold
- `--holo-purple`, `--holo-teal`, `--holo-gold` — holographic accents, used on the cards only

Fonts load from the Google Fonts link in `index.html` (Anton for headlines, Inter for body, Bebas Neue for card labels). To switch one, update that link and the matching token: `--font-display`, `--font-body`, or `--font-card`.

## Photo and LinkedIn

There is no portrait yet. Search `index.html` for `PHOTO SLOT` and follow the comment.

Search for `LinkedIn`. Add a real profile URL when you have one. No link is rendered until then.

## Motion

The hero card tilts toward the mouse, scoreboard numbers count up, and sections fade in on scroll. All three stay off when the visitor has `prefers-reduced-motion` turned on. Skill cards still flip; the flip is instant in that case.
