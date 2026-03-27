import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://jayapurajs-org.pages.dev",
  i18n: {
    defaultLocale: 'en',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), alpinejs()],
  adapter: cloudflare({
    imageService: "compile"
  }),
});