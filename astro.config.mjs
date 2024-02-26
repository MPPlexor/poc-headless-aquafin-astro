import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mpplexor.github.io',
  base: '/poc-headless-aquafin',
  output: 'server',
  integrations: [tailwind(), sitemap()]
});
