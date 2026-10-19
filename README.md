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

The hero card portrait is `assets/jigar-portrait.webp`, with `assets/jigar-portrait.png` as the fallback. The cutout is used as-is. Its bottom edge is a hard crop, so the image sits flush with the bottom of the art panel.

Search for `LinkedIn`. Add a real profile URL when you have one. No link is rendered until then.

## Motion

The hero card tilts toward the mouse. Inside the art panel, the gold dot field, the stripes, and the portrait sit at different depths and shift by different amounts (`--px` and `--py` on the slab). Scoreboard numbers count up, and sections fade in on scroll. Tilt, the art parallax, the count-up, and the fade stay off when the visitor has `prefers-reduced-motion` turned on, and the tilt stays off on a coarse pointer or a narrow window. Skill cards still flip; the flip is instant when motion is reduced.
