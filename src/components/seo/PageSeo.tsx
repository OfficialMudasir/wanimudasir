import { useEffect } from 'react'
import type { PageMeta } from '../../config/seo'
import { canonicalFromMeta } from '../../config/seo'
import { siteConfig } from '../../config/site'
import { toAbsoluteAssetUrl } from '../../lib/images'
import { applyDocumentMeta } from '../../lib/meta'
import { JsonLd } from './JsonLd'

interface PageSeoProps {
  meta: PageMeta
  schema?: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Dynamic SEO — updates title, meta description, canonical, Open Graph,
 * Twitter Cards, and optional JSON-LD per route.
 */
export function PageSeo({ meta, schema }: PageSeoProps) {
  const image = toAbsoluteAssetUrl(meta.image ?? siteConfig.ogImage)

  useEffect(() => {
    applyDocumentMeta({
      title: meta.title,
      description: meta.description,
      canonical: canonicalFromMeta(meta),
      image,
      robots: meta.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
      ogType: meta.type ?? 'website',
    })
  }, [meta, image])

  if (!schema) return null

  return <JsonLd data={schema} />
}
