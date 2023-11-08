This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# What is this about?
This repo is just to demonstrate mutation bug for https://github.com/garmeeh/next-seo package.

https://github.com/garmeeh/next-seo/issues/1313

It is even not using `next-seo` but mimics its code on pure Next.js.

## Steps to reproduce
1. pnpm install
2. pnpm dev
3. see the server console and page rendered in the browser
4. now change `src/pages/api/toggle.json` to `true` and refresh the page
5. see everything again - it is still fine, but you will notice a corresponding change
6. now return the toggle to `false` and refresh the page
7. you will now see a hydration error saying: `Server: "{"noindex":true,"nofollow":false,"nosuchprop":"this prop will now persist between calls to page SSR (until the server restarts)"}" Client: "{"noindex":false,"nofollow":false}"`
8. you can use `suppressHydrationWarning` on `h2` (or uncomment similar commented tag) to suppress the warning, 
but by now you should understand the problem - DO NOT MUTATE THINGS


# Below goes regular Next.js README stuff:
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
