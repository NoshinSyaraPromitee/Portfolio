# Portfolio - Noshin Syara Promitee

React 19 + Vite. Run `npm install`, then `npm run dev`.

| Command | What it does |
| --- | --- |
| `npm run dev` | dev server |
| `npm run build` | production build to `dist/` |
| `npm run lint` | ESLint |
| `npm run format` | Prettier on `src/` |

## Structure

    src/
      app/        App (routes, theme, welcome flow) + main entry
      data/       all page content - edit these to update the site
      features/   one folder per page (jsx + css)
      shared/
        effects/  Ballpit, Particles (+ site background)
        layout/   Navbar, Footer
        styles/   tokens -> base -> light-theme -> overrides -> mobile (load order matters)
        ui/       reusable pieces: Slideshow, icons, CVDropdown, Loader, ...

Theme colours live in `shared/styles/tokens.css` (dark) and `light-theme.css` (light).
The site font is `--site-font` in `tokens.css`.