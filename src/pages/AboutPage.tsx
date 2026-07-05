import { About } from '../components/sections/About'
import { SectionPage } from '../components/layout/SectionPage'
import { PAGE_META } from '../config/seo'

export function AboutPage() {
  return (
    <SectionPage meta={PAGE_META.about}>
      <About />
    </SectionPage>
  )
}
