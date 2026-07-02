# The Aaradhya Post 📰❤️

A personalized newspaper-style newsletter website, built with Next.js and
Supabase.

- `/lock` — a password-locked scrapbook diary. The whole site sits behind
  this; nothing else loads until the right password is typed in.
- `/` — the scrapbook entry page (polaroids, washi tape, doodles) that opens
  into the latest edition.
- `/post/[date]` — a single edition, e.g. `/post/2026-07-03`.
- `/archive` — every past edition, ever.

## The password gate

Set `SITE_PASSWORD` (a plain env var, not `NEXT_PUBLIC_`) to whatever word
should unlock the site. Getting it right sets a long-lived cookie so it only
needs to be entered once. Change it any time in `.env.local` (and in
Vercel's project settings for production) — no code changes needed.

## How new editions get published

Every newsletter is a row in the `editions` table in Supabase — nothing is
hardcoded in the repo, so publishing a new week doesn't require touching code
or redeploying. Add a row (edition date, headline, story, columns, reasons,
quote, coupon, and optionally a song of the week with cover art + link), set
`published = true`, and it appears on the site immediately.

Only `app/content.ts` still lives in the repo, and it just holds the site's
permanent identity (title, motto, gate-page copy) — things that don't change
week to week.

## Run it locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in your Supabase project URL,
anon key, and `SITE_PASSWORD` first. Then open http://localhost:3000.

## Deploy to Vercel

This is a standard Next.js app, so Vercel detects everything automatically:

1. Push this repo to GitHub.
2. In Vercel, import the repo (or connect it to the existing
   `the-aaradhya-post` project).
3. Add the three environment variables from `.env.example` in the Vercel
   project settings (Supabase URL, Supabase anon key, `SITE_PASSWORD`).

Every time you push a change to `app/content.ts`, Vercel rebuilds and the live
site updates.
