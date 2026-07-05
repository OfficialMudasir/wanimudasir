import { Skills } from '../components/sections/Skills'
import { SectionPage } from '../components/layout/SectionPage'
import { PAGE_META } from '../config/seo'

export function SkillsPage() {
  return (
    <SectionPage meta={PAGE_META.skills}>
      <Skills />
    </SectionPage>
  )
}
