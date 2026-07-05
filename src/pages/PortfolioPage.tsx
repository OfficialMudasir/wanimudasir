import { Portfolio } from '../components/sections/Portfolio'
import { SectionPage } from '../components/layout/SectionPage'
import { PAGE_META } from '../config/seo'

export function PortfolioPage() {
  return (
    <SectionPage meta={PAGE_META.portfolio}>
      <Portfolio />
    </SectionPage>
  )
}
