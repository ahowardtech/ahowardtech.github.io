# HowardTech

Marketing site for **HowardTech** — a consultancy focused on accelerating
software delivery with agent-driven development. A fast, fully static
single-page app with a light corporate theme.

🌐 **Live:** https://howardtech.solutions

## Tech stack

- **React 19** + **TypeScript** — UI layer (no router; views swap via state)
- **Vite 6** — dev server and production bundler
- **Tailwind CSS v4** — CSS-first `@theme` design tokens
- **motion** — view and section transitions
- **lucide-react** — icon set

## Project structure

```
src/
  App.tsx              # view-switch state machine (Home/Services/Methodology/Contact)
  components/
    Navigation.tsx     # Navbar (default export) + Footer (named export)
    Views.tsx          # the four page views + shared iconMap & SectionHeading
  constants.ts         # static content: industries, process phases, services, tech, team
  index.css            # Tailwind v4 theme tokens + utility classes
public/
  CNAME                # GitHub Pages custom domain
```

The app has no router: `App.tsx` keeps the active view in `useState` and swaps
between the four views with `AnimatePresence`. All page content lives in
`src/constants.ts`; visuals are driven by Tailwind v4 tokens in `src/index.css`.

## Local development

**Prerequisites:** Node.js 20+ (developed on Node 24, npm 11)

```bash
npm install      # install dependencies
npm run dev      # dev server on http://localhost:3000
npm run lint     # type-check (tsc --noEmit)
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
```

### Recent local UI updates

- Mobile menu now opens from the `Terminal` icon and includes a top-right close `X` button.
- The mobile menu is left-aligned, displayed as a rounded card, and closes when tapping outside the panel.
- The header `Get Started` CTA is hidden on small screens to avoid duplication with the hero CTA.
- Footer navigation columns are hidden on small screens and remain visible at `md+` breakpoints.
- A scroll-to-top button appears when the page is scrolled down.
- A site favicon has been added at `public/favicon.svg` and referenced in `index.html`.

These changes are implemented in `src/components/Navigation.tsx`, `src/App.tsx`, and `index.html`.

## Deployment

GitHub Pages deploys the site automatically on every push to `main` through
`.github/workflows/deploy.yml`. The workflow builds the Vite app, uploads
`dist/`, and publishes it to GitHub Pages.

`howardtech.solutions` is the primary domain. Namecheap routes the apex domain
to GitHub Pages with an `ALIAS` record, while `www` is a `CNAME` to
`ahowardtech.github.io`. The `public/CNAME` file is included in each production
build so GitHub Pages serves the custom domain. GitHub manages the TLS
certificate after its DNS TXT ownership challenge is verified.

The contact form posts directly to Formspree from the browser; no application
server or Azure resource is required.

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the DNS setup and deployment flow.
