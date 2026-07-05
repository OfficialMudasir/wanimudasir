import { CertificationsSection } from '../components/sections/CertificationsSection'
import { SectionPage } from '../components/layout/SectionPage'
import { PAGE_META } from '../config/seo'

export function CertificationsPage() {
  return (
    <SectionPage meta={PAGE_META.certifications}>
      <CertificationsSection />
    </SectionPage>
  )
}
