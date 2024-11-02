// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://benr.dev/',
  integrations: [sitemap()],
  output: "hybrid",

  adapter: node({
    mode: "standalone"
  })
});