import { Resume } from '../components/sections/Resume'
import { SectionPage } from '../components/layout/SectionPage'
import { PAGE_META } from '../config/seo'

export function ResumePage() {
  return (
    <SectionPage meta={PAGE_META.resume}>
      <Resume />
    </SectionPage>
  )
}
