# Experiemental NextJS project

Converting vanilla into using new features in NextJs 13

## Notes / Reminders

- By default, all components are server components. If you want a clientside component, you need to type `"use client"` at the top of the file. This will allow you to use `onClick` and hooks like `useState`, `useEffect`, and `window`
- To use env variables, `process.env.NAME`
- To make images available to app, you need to add them to `/public` folder
- Markdown files in `/posts` are statically generated on server

## Demo Prod Build

Note: there's a prebuild step that moves images from `/posts` and subdirs to the `/public/images/[SLUG]` directory.

1. First build: `npm run build`
2. Then start server: `npm start`

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
