import { en } from './en';
import { it } from './it';
import type { Copy } from './en';

export const copyFor = (lang: string): Copy => (lang === 'it' ? it : en);

// '/creators/' for English, '/it/creators/' for Italian, '/' and '/it/' for the homes.
export const hrefFor = (lang: string, slug?: string): string =>
  (lang === 'it' ? '/it' : '') + (slug ? `/${slug}/` : '/');
