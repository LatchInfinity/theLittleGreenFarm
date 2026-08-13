# Hostinger Deploy

## Build

```bash
npm install
npm run build
```

## Upload

Upload the contents of `dist/` to Hostinger `public_html/`.

Make sure these files are at the root of `public_html/`:

- `index.html`
- `.htaccess`
- `assets/`

## Notes

- `.htaccess` is copied from `public/.htaccess` during `npm run build`.
- The rewrite rule supports direct page refreshes for this React/Vite single page app.
- Static assets are cached long term; `index.html` is not cached.
