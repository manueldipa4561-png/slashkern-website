import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL lives in src/site.ts too; keep both in sync when the real domain is chosen.
export default defineConfig({
  site: 'https://slashkern.com',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } }, // never inline scripts or CSS into the pages: keeps the CSP at script-src 'self'
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', it: 'it', es: 'es', de: 'de', fr: 'fr', nl: 'nl', sv: 'sv' } },
      namespaces: { news: false, image: false, video: false },
      serialize: (item) => {
        const en = item.links?.find((l) => l.lang === 'en');
        return en ? { ...item, links: [...item.links, { url: en.url, lang: 'x-default' }] } : item;
      },
    }),
  ],
});
