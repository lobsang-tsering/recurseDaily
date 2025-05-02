import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lobsang-tsering.github.io",
  base: "/recurseDaily", // Must match your repo name exactly
  output: "static", // Ensure static site generation
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "dracula",
        dark: "dracula",
      },
      langs: [],
      wrap: true,
      transformers: [],
    },
  },
});
