import { siteConfig } from '../config/site'

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  if (!content) return

  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, attrs?: Record<string, string>) {
  if (!href) return

  const selector = attrs?.sizes
    ? `link[rel="${rel}"][sizes="${attrs.sizes}"]`
    : `link[rel="${rel}"]`

  let element = document.head.querySelector<HTMLLinkElement>(selector)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => element!.setAttribute(key, value))
  }
}

export interface DocumentMeta {
  title: string
  description: string
  canonical: string
  image: string
  robots: string
  ogType: string
}

export function applyDocumentMeta({
  title,
  description,
  canonical,
  image,
  robots,
  ogType,
}: DocumentMeta) {
  document.title = title

  upsertMeta('name', 'description', description)
  upsertMeta('name', 'author', siteConfig.name)
  upsertMeta('name', 'robots', robots)

  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', canonical)
  upsertMeta('property', 'og:image', image)
  upsertMeta('property', 'og:image:alt', `${siteConfig.name} portfolio`)
  upsertMeta('property', 'og:type', ogType)
  upsertMeta('property', 'og:site_name', siteConfig.name)
  upsertMeta('property', 'og:locale', siteConfig.locale)

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:site', siteConfig.twitterHandle)
  upsertMeta('name', 'twitter:creator', siteConfig.twitterHandle)
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', image)
  upsertMeta('name', 'twitter:image:alt', `${siteConfig.name} portfolio`)

  upsertLink('canonical', canonical)
}

export function applyThemeColor(color: string) {
  upsertMeta('name', 'theme-color', color)
}
