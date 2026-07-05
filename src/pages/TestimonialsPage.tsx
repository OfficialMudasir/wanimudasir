import { Testimonials } from '../components/sections/Testimonials'
import { SectionPage } from '../components/layout/SectionPage'
import { PAGE_META } from '../config/seo'

export function TestimonialsPage() {
  return (
    <SectionPage meta={PAGE_META.testimonials}>
      <Testimonials />
    </SectionPage>
  )
}
