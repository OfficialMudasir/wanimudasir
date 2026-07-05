import type { ReactNode } from 'react'
import type { PageMeta } from '../../config/seo'
import { PageSeo } from '../seo/PageSeo'
import { PageShell } from './PageShell'

interface SectionPageProps {
  meta: PageMeta
  children: ReactNode
  schema?: Record<string, unknown> | Record<string, unknown>[]
}

export function SectionPage({ meta, children, schema }: SectionPageProps) {
  return (
    <PageShell>
      <PageSeo meta={meta} schema={schema} />
      {children}
    </PageShell>
  )
}
