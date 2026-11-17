// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chaka.dev',
  integrations: [sitemap()],

  // Preserve the whitespace behavior used before Astro 7.
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
});
