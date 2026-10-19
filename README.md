# Jigar Patel — personal site

Static site for GitHub Pages. It is served at [jigarkpat.github.io](https://jigarkpat.github.io) from the root of `main`. There is no build step. Push to `main` and Pages redeploys in a minute or two.

## Where things live

- `index.html` — the whole page, in this order: hero, career chapters, education, impact, skills, contact. Each block starts with a comment such as `<!-- CAREER: Blueprint Alpha -->`.
- `styles.css` — layout, color, and type. Section markers match the page.
- `script.js` — theme toggle, scroll reveals, scoreboard count-up, hero-card tilt, and skill-card flip.
- `assets/favicon.svg` — the tab icon.
- `.nojekyll` — tells GitHub Pages to serve the files as they are.

## Change the words

Edit the text in `index.html`. Keep every claim aligned with the resume. Do not add a phone number, a street address, or a resume download. Email (`jigarkpat@gmail.com`) is the only contact method, in the hero and the contact section.

## Change colors and fonts

Brand colors live at the top of `styles.css`, in `:root`. They do not swap when the theme changes:

- `--ink` — off-black
- `--cream` — warm cream (`#F2EBDD`)
- `--gold` — championship gold, for text and rules on ink (posters, the scoreboard, the player card)
- `--gold-deep` — the same gold darkened (`#7A5610`) so small text clears WCAG AA on cream
- `--holo-purple`, `--holo-teal`, `--holo-gold` — holographic accents, used on the cards only

Theme colors are custom properties on `[data-theme]`. Dark is the default (`:root` and `[data-theme="dark"]`). Light is `[data-theme="light"]`.

- `--page`, `--page-text`, `--page-muted` — the page background and the type on it
- `--accent` — gold on the dark page, `--gold-deep` on the cream page
- `--header-bg`, `--focus`, and the hero frame tokens — chrome that has to follow the page

Dark mode is the whole site as printed: ink page, cream type. Light mode turns the page cream and the type ink. It does not invert the posters. Dark chapters stay dark prints in a cream margin, cream chapters keep a deeper gutter so they still have an edge, the stat wall keeps a dark scoreboard (gold digits stay on ink), and the hero card and skill cards stay dark-faced, like trading cards on a table.

A short script in `index.html` `<head>` sets `data-theme` before the stylesheet paints. It uses the saved choice in `localStorage` (`theme` is `dark` or `light`). With no saved choice it follows `prefers-color-scheme`, and it falls back to dark. The nav button writes the choice back. Without JavaScript the site stays dark.

Fonts load from the Google Fonts link in `index.html` (Anton for headlines, Inter for body, Bebas Neue for card labels). To switch one, update that link and the matching token: `--font-display`, `--font-body`, or `--font-card`.

## Photo and LinkedIn

There is no portrait yet. Search `index.html` for `PHOTO SLOT` and follow the comment.

Search for `LinkedIn`. Add a real profile URL when you have one. No link is rendered until then.

## Motion

The hero card tilts toward the mouse, scoreboard numbers count up, and sections fade in on scroll. All three stay off when the visitor has `prefers-reduced-motion` turned on. Skill cards still flip; the flip is instant in that case.
