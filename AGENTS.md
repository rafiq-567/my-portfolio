# my-portfolio

React 19 SPA — Vite, Tailwind CSS v4, daisyUI, Framer Motion, React Three Fiber.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build to `dist/` |
| `npm run lint` | ESLint (no typecheck — this is a JS-only project) |
| `npm run preview` | Preview production build |

No test runner is configured.

## Architecture

- **Entry**: `index.html` → `src/main.jsx` → `src/App.jsx`
- **Routes**: `/` (Home) and `/projects/:id` (ProjectDetails)
- **Data source of truth**: `src/data/Profile.jsx` and `src/data/Projects.jsx` — edit these to update portfolio content
- **Assets**: PDF resumes and images imported directly in data files; `vite.config.js` uses `assetsInclude: ['**/*.pdf']`
- **Dark mode**: persisted via `use-local-storage`, toggled by `<html class="dark">` and `[data-theme]` attribute

## Framework quirks

- Tailwind CSS v4 uses the `@tailwindcss/vite` plugin — **not** the PostCSS-based setup from v3. There is no `postcss.config.js`.
- daisyUI v5 is configured with forced `"dark"` theme only.
- Contact form uses **Web3Forms** (`VITE_WEB3FORMS_KEY` in `.env`), **not** EmailJS directly (despite EmailJS being in dependencies).

## Vercel

- SPA rewrites: all routes served via `/index.html` (see `vercel.json`)
- Deploy: `npm run build` → `dist/`
- `.env` keys are needed at build time for production

## Project structure

```
src/
  components/   — UI components (Hero, About, Projects, Contact, etc.)
  pages/        — Route-level pages (Home, ProjectDetails)
  data/         — Content data files (edit these for portfolio info)
  assets/       — Images, PDFs
```
