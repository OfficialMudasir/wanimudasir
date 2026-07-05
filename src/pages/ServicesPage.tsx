import { Services } from '../components/sections/Services'
import { SectionPage } from '../components/layout/SectionPage'
import { PAGE_META } from '../config/seo'

export function ServicesPage() {
  return (
    <SectionPage meta={PAGE_META.services}>
      <Services />
    </SectionPage>
  )
}
