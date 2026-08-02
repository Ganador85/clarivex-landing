import { siteConfig } from '@/content/seoPages';

/** Absoliutus www URL — SEO crawleriams (vidinės nuorodos). */
export function seoHref(path = '/') {
  if (!path || path === '/') return `${siteConfig.url}/`;
  if (path.startsWith('#')) return `${siteConfig.url}/${path}`;
  if (path.startsWith('/#')) return `${siteConfig.url}${path}`;
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export const SEO_INTERNAL_LINKS = [
  { path: '/', label: 'Pradžia' },
  { path: '/features', label: 'Funkcijos' },
  { path: '/kaip-veikia', label: 'Kaip veikia' },
  { path: '/nauda', label: 'Nauda' },
  { path: '/prekiu-katalogas', label: 'Prekių katalogas' },
  { path: '/svetainiu-kurejas', label: 'Svetainių kūrėjas' },
  { path: '/telegram', label: 'Telegram' },
  { path: '/atsakiklis', label: 'Atsakiklis' },
  { path: '/kainos', label: 'Kainodara' },
  { path: '/duk', label: 'DUK' },
  { path: '/statusas', label: 'Statusas' },
  { path: '/resursai', label: 'Resursai' },
  { path: '/blog', label: 'Blogas' },
];
