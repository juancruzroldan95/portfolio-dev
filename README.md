# My Dev Portfolio

This is my personal developer portfolio built with Astro, HTML, CSS and Tailwind CSS. It showcases my skills, professional experience, and personal projects as a full-stack web developer. The portfolio is designed to be responsive, fast, and easy to navigate.

## Features
- Full responsive design, optimized for mobile and desktop.
- Display of my skills, experience, and technical expertise.
- Showcases multiple projects with a brief description, tech stack used, and links.
- Contact section with social media links.
- Available in English and Spanish.
- Supports dark mode.

## Tech Stack
- **Frontend:** Astro 7, HTML, CSS, Tailwind CSS 4 (via the Vite plugin)
- **Deployment:** Cloudflare Workers Static Assets

## Development

Requires Node.js 24.x and npm.

If you use nvm, select the version with `nvm use` (or `nvm install 24` and `nvm use 24` on Windows).

```sh
npm ci
npm run dev
```

Run `npm run build` to check types and generate the production build in `dist/`.

## Cloudflare deployment

The portfolio is a static Astro site deployed to Cloudflare Workers Static Assets.
It does not require the `@astrojs/cloudflare` adapter, which is intended for
server-rendered routes, actions, and other server features.

Sign in once with `npx wrangler login`, then run:

```sh
npm run deploy
```

Use `npm run preview:cloudflare` to build and test locally with Cloudflare's runtime.
The Worker name and asset directory are configured in `wrangler.jsonc`.

For Git-based deployments in Cloudflare Workers Builds, use `npm run build` as
the build command and `npx wrangler deploy` as the deploy command. Set the
`NODE_VERSION` build variable to `24`.

Live site: https://chaka.dev (also available at https://www.chaka.dev).
Worker URL: https://portfolio-dev.chaka-dev.workers.dev

The Astro `site` setting is `https://chaka.dev` for canonical URLs.
Both custom domains are configured in `wrangler.jsonc` and served by `portfolio-dev`.
The domain remains registered at Hostinger and uses Cloudflare DNS with
`chloe.ns.cloudflare.com` and `jeremy.ns.cloudflare.com` as its nameservers.

## Acknowledgements
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Astro](https://astro.build/) for building the app
- Components from [Flowbite](https://flowbite.com/)
- Icons from [Tabler Icons](https://tabler.io/icons)
- Fonts from [Fontsource](https://fontsource.org/)
- Logos from [pheralb.svgl](https://svgl.app/)
- Backgrounds from [bg.ibelick](https://bg.ibelick.com/)
- Mockups made with [Shots](https://shots.so/)
- Image optimization with [Squoosh](https://squoosh.app/)
