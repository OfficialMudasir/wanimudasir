import { Contact } from '../components/sections/Contact'
import { SectionPage } from '../components/layout/SectionPage'
import { PAGE_META } from '../config/seo'

export function ContactPage() {
  return (
    <SectionPage meta={PAGE_META.contact}>
      <Contact />
    </SectionPage>
  )
}
