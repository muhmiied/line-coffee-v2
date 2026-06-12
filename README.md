# Line Coffee V2

This repository is currently at a clean pre-drawing checkpoint.

Read this first:

- `LINE_COFFEE_V2_CURRENT_STATE_AUDIT.md`

The current app is a Next.js 16 + Supabase foundation with minimal public and
dashboard route skeletons. The previous drawn UI/UX layer, visual assets, and
old UI planning files were intentionally removed so the next UI step can start
cleanly.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## Notes

- Supabase is the source of truth for catalog and admin data.
- Keep service-role usage server-only.
- Read `AGENTS.md` and the local Next.js docs in `node_modules/next/dist/docs/`
  before editing App Router conventions.
