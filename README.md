# slashkern website

The marketing site for slashkern: "From zero to product." Short projects with Slash, an AI that helps you make them, kept on your own page. Early access, English and Italian.

- Astro, light only, Geist. Brand: navy `#0E1B3D`, one accent ultramarine `#2D4BFF`, ice `#DCE6FF`. The Examples section also uses six light tints (sky, sun, mint, lilac, pink, coral), one per card (`src/styles/examples.css`).
- The product name and contact facts live in `src/site.ts`; copy in `src/i18n/en.ts` and `src/i18n/it.ts`.
- The logo and Slash are drawn from `src/slash.json` (made by `design/brand/gen_slash.py` in the app repo).
- `npm run dev` (port 4340), `npm run build`.

Example projects, creators and the demo clip are samples and say so on the page.

The Examples section (`src/components/Examples.astro`, files in `public/examples/`) shows eight real things for made-up clients: a clip, a poster, a study timer that runs (`ExTimer.astro`), a listing, a post, a jingle that plays (`ExJingle.astro`, bars = the file's real loudness), a logo, and a prompt with its answer. Images, clip and jingle were made with AI (Higgsfield for pictures, ElevenLabs for the jingle) and each card says so (`examples.tags` in the copy). Everything is served from this site: the CSP allows no other host.
