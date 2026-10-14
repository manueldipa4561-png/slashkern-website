import { en } from './en';
import { it } from './it';
import { de } from './de';
import { fr } from './fr';
import { nl } from './nl';
import { sv } from './sv';
import { es } from './es';
import type { Copy } from './en';

// The app's seven languages. English lives at the root, the others under /<code>/ (the slugs stay English in every language).
export const LANGS = ['en', 'it', 'es', 'de', 'fr', 'nl', 'sv'] as const;
export type Lang = (typeof LANGS)[number];
// Each language named in itself, for the language menu.
export const LANG_NAMES: Record<Lang, string> = { en: 'English', it: 'Italiano', es: 'Español', de: 'Deutsch', fr: 'Français', nl: 'Nederlands', sv: 'Svenska' };
const COPY: Record<Lang, Copy> = { en, it, es, de, fr, nl, sv };

export const copyFor = (lang: string): Copy => COPY[lang as Lang] ?? en;

// '/creators/' for English, '/de/creators/' for German, '/' and '/de/' for the homes.
export const hrefFor = (lang: string, slug?: string): string =>
  (lang === 'en' ? '' : `/${lang}`) + (slug ? `/${slug}/` : '/');
