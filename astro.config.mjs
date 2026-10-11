import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL lives in src/site.ts too; keep both in sync when the real domain is chosen.
export default defineConfig({
  site: 'https://yourkern.com',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', it: 'it' } },
    }),
  ],
});
