# The Aaradhya Post 📰❤️

A personalized newspaper-style newsletter website, built with Next.js.

## How to personalize it

**You only need to edit one file:** [`app/content.ts`](app/content.ts).

Open it, change the words inside the quotes (the headline, the stories, the
list of reasons, the quote, the coupon), save, and the site updates. No coding
required — just keep the quotes and commas where they are.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

This is a standard Next.js app, so Vercel detects everything automatically:

1. Push this repo to GitHub.
2. In Vercel, import the repo (or connect it to the existing
   `the-aaradhya-post` project) and deploy. No settings to change.

Every time you push a change to `app/content.ts`, Vercel rebuilds and the live
site updates.
