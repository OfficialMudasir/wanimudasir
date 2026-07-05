export const SITE_URL = 'https://www.mudasir.co.in'

export const siteConfig = {
  name: 'Mudasir Ibrahim',
  legalName: 'Mudasir Ahmad Wani',
  title: 'Senior Software Engineer & Full Stack Developer',
  description:
    'Portfolio of Mudasir Ibrahim — Senior Software Engineer and Full Stack Developer specializing in .NET, React, Azure, and enterprise applications.',
  locale: 'en_IN',
  email: 'wanimudasir312@gmail.com',
  phone: '+91-7889548173',
  location: 'Anantnag, Jammu and Kashmir, India',
  ogImage: absoluteUrl('/assets/img/mudasir.jpg'),
  twitterHandle: '@mudasir_ibrahim',
  sameAs: [
    'https://www.linkedin.com/in/mudasir-ibrahim-9298891a7/',
    'https://www.instagram.com/mudasir.ibrahim_/',
    'https://www.facebook.com/wani.mudasir.1004',
  ],
} as const

export function absoluteUrl(path = '/') {
  const base = SITE_URL.replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}
