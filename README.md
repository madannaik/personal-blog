# the html blog

A blog that looks like the internet used to. Raw HTML aesthetic, no fluff.

## Stack

- Next.js 16 (App Router)
- Sanity CMS
- Tailwind CSS
- TypeScript
- Vercel Analytics

## Pages

- `/` — home, lists all posts
- `/post/[slug]` — individual post
- `/archive` — post archive with tag filtering
- `/about` — about page

## Run it

```
pnpm install
pnpm dev
```

Runs on `localhost:3000`.

## Build

```
pnpm build
pnpm start
```

## CMS

Content lives in Sanity. Config is in `lib/sanity.ts`.
