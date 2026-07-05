import { useEffect } from 'react'
import type { PageMeta } from '../../config/seo'
import { canonicalFromMeta } from '../../config/seo'
import { siteConfig } from '../../config/site'
import { applyDocumentMeta } from '../../lib/meta'
import { JsonLd } from './JsonLd'

interface PageSeoProps {
  meta: PageMeta
  schema?: Record<string, unknown> | Record<string, unknown>[]
}

export function PageSeo({ meta, schema }: PageSeoProps) {
  useEffect(() => {
    applyDocumentMeta({
      title: meta.title,
      description: meta.description,
      canonical: canonicalFromMeta(meta),
      image: meta.image ?? siteConfig.ogImage,
      robots: meta.noIndex ? 'noindex, nofollow' : 'index, follow',
      ogType: meta.type ?? 'website',
    })
  }, [meta])

  if (!schema) return null

  return <JsonLd data={schema} />
}
