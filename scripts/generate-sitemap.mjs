import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE_URL = 'https://www.mudasir.co.in'

const staticRoutes = [
  '/',
  '/about',
  '/facts',
  '/skills',
  '/resume',
  '/certifications',
  '/portfolio',
  '/services',
  '/testimonials',
  '/contact',
]

const projectSlugs = [
  'drink-up-web',
  'drink-up-software',
  'blinkay-integraparking',
  'ticket-tracer',
  'syntaq-falcon',
  'strategia',
  'orionstem',
  'alvarnet-cep',
]

const certificationIds = ['az-204']

const urls = [
  ...staticRoutes,
  ...projectSlugs.map((slug) => `/projects/${slug}`),
  ...certificationIds.map((id) => `/certifications/${id}`),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path === '/' ? '' : path}</loc>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve('public/sitemap.xml'), xml, 'utf8')
console.log(`Generated sitemap with ${urls.length} URLs`)
