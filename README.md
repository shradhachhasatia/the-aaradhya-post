# The Aaradhya Post 📰❤️

A personalized newspaper-style newsletter website, built with Next.js and
Supabase.

- `/`: the cover page (masthead, latest issue link, letter link).
- `/archive`: every past edition, ever.
- `/letter`: the latest issue's editor's note, as its own page.
- `/songs`: the song of the week plus the back catalog of songs.
- `/post/[date]`: a single edition, e.g. `/post/2026-07-03`.

## How new editions get published

Every newsletter is a row in the `editions` table in Supabase; nothing is
hardcoded in the repo, so publishing a new week doesn't require touching code
or redeploying. Add a row (edition date, headline, story, columns, reasons,
quote, coupon, and optionally a song of the week with cover art + link), set
`published = true`, and it appears on the site immediately.

Only `app/content.ts` still lives in the repo, and it just holds the site's
permanent identity (title, motto, cover copy), things that don't change
week to week.

## Run it locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in your Supabase project URL and
anon key first. Then open http://localhost:3000.

## Deploy to Vercel

This is a standard Next.js app, so Vercel detects everything automatically:

1. Push this repo to GitHub.
2. In Vercel, import the repo (or connect it to the existing
   `the-aaradhya-post` project).
3. Add the two environment variables from `.env.example` in the Vercel
   project settings (Supabase URL, Supabase anon key).

Every time you push a change to `app/content.ts`, Vercel rebuilds and the live
site updates.
