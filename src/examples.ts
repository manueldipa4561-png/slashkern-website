// Language-free facts about the example creators and projects. All of it is sample content: no real people.
export type Kind = 'video' | 'poster' | 'logo' | 'post' | 'web' | 'listing' | 'music' | 'prompt';
export type Who = 'Sanne' | 'Elin' | 'Mats' | 'Lotte' | 'Jonas';

// Order = reading order of the home gallery (the page lays them out in columns).
export const GALLERY: Array<{ kind: Kind; who: Who }> = [
  { kind: 'video', who: 'Sanne' },
  { kind: 'poster', who: 'Elin' },
  { kind: 'web', who: 'Mats' },
  { kind: 'listing', who: 'Lotte' },
  { kind: 'post', who: 'Sanne' },
  { kind: 'music', who: 'Jonas' },
  { kind: 'logo', who: 'Elin' },
  { kind: 'prompt', who: 'Mats' },
];

// Illustrated avatars, never photos. hair: style of the drawn hair.
export type Look = { bg: string; skin: string; hair: string; shirt: string; style: 'bob' | 'long' | 'bun' | 'curly' | 'short' | 'buzz' };
export const LOOKS: Record<Who, Look> = {
  Sanne: { bg: '#FFB547', skin: '#F0C7A3', hair: '#6B4226', shirt: '#0A0A0A', style: 'bob' },
  Elin: { bg: '#E4E4DE', skin: '#F7D9C4', hair: '#DDB86A', shirt: '#3B3B38', style: 'long' },
  Mats: { bg: '#F4F4F0', skin: '#F0C7A3', hair: '#B98F4E', shirt: '#5F625A', style: 'short' },
  Lotte: { bg: '#0A0A0A', skin: '#F7D9C4', hair: '#A8532B', shirt: '#FFFFFF', style: 'bun' },
  Jonas: { bg: '#FFB547', skin: '#8D5A3C', hair: '#1A1410', shirt: '#0A0A0A', style: 'buzz' },
};

// Each profile shows the projects that person owns in the gallery.
export const PROFILES: Record<'Sanne' | 'Elin' | 'Mats', Kind[]> = {
  Sanne: ['video', 'post'],
  Elin: ['poster', 'logo'],
  Mats: ['web', 'prompt'],
};
