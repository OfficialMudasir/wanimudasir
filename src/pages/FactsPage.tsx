import { Facts } from '../components/sections/Facts'
import { SectionPage } from '../components/layout/SectionPage'
import { PAGE_META } from '../config/seo'

export function FactsPage() {
  return (
    <SectionPage meta={PAGE_META.facts}>
      <Facts />
    </SectionPage>
  )
}
