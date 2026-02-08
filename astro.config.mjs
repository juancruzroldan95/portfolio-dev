// @ts-check
import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jcroldan.dev',
  integrations: [
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
  ]
});
