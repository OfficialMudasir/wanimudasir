import { absoluteUrl, siteConfig } from './site'

export interface PageMeta {
  title: string
  description: string
  path: string
  image?: string
  noIndex?: boolean
  type?: 'website' | 'article'
}

function pageMeta(
  title: string,
  description: string,
  path: string,
  options?: Partial<Pick<PageMeta, 'image' | 'noIndex' | 'type'>>,
): PageMeta {
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    path,
    image: siteConfig.ogImage,
    type: 'website',
    ...options,
  }
}

export const PAGE_META = {
  home: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    path: '/',
    image: siteConfig.ogImage,
    type: 'website' as const,
  },
  about: pageMeta(
    'About',
    'Learn about Mudasir Ibrahim — background, experience, and approach as a full stack software engineer.',
    '/about',
  ),
  facts: pageMeta(
    'Facts',
    'Key facts and metrics about Mudasir Ibrahim\'s experience, clients, and projects delivered.',
    '/facts',
  ),
  skills: pageMeta(
    'Skills',
    'Technical skills including .NET, React, Azure, SQL, and modern full stack development.',
    '/skills',
  ),
  resume: pageMeta(
    'Resume',
    'Professional resume and career timeline of Mudasir Ibrahim, Senior Software Engineer.',
    '/resume',
  ),
  certifications: pageMeta(
    'Certifications',
    'Microsoft Azure certifications, badges, and trophies earned on Microsoft Learn.',
    '/certifications',
  ),
  portfolio: pageMeta(
    'Portfolio',
    'Selected web and software projects by Mudasir Ibrahim including enterprise and SaaS applications.',
    '/portfolio',
  ),
  services: pageMeta(
    'Services',
    'Software development services — web apps, APIs, cloud solutions, and consulting.',
    '/services',
  ),
  testimonials: pageMeta(
    'Testimonials',
    'Client and colleague testimonials for Mudasir Ibrahim.',
    '/testimonials',
  ),
  contact: pageMeta(
    'Contact',
    'Contact Mudasir Ibrahim for freelance, contract, or full-time software engineering opportunities.',
    '/contact',
  ),
  thanks: pageMeta(
    'Thank You',
    'Your message has been sent successfully.',
    '/thanks',
    { noIndex: true },
  ),
  notFound: pageMeta(
    'Page Not Found',
    'The page you are looking for could not be found on Mudasir Ibrahim\'s portfolio.',
    '/404',
    { noIndex: true },
  ),
} as const

export function projectMeta(title: string, description: string, slug: string, image?: string): PageMeta {
  return pageMeta(title, description, `/projects/${slug}`, { image, type: 'article' })
}

export function certificationMeta(title: string, description: string, id: string): PageMeta {
  return pageMeta(title, description, `/certifications/${id}`, { type: 'article' })
}

export function canonicalFromMeta(meta: PageMeta) {
  return absoluteUrl(meta.path)
}
