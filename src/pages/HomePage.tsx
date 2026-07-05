import { PAGE_META } from '../config/seo'
import { personSchema, websiteSchema } from '../components/seo/schemas'
import { PageSeo } from '../components/seo/PageSeo'
import { Hero } from '../components/sections/Hero'
import { HomeResumeIntro } from '../components/sections/HomeResumeIntro'
import { About } from '../components/sections/About'
import { Facts } from '../components/sections/Facts'
import { Skills } from '../components/sections/Skills'
import { Resume } from '../components/sections/Resume'
import { CertificationsSection } from '../components/sections/CertificationsSection'
import { Portfolio } from '../components/sections/Portfolio'
import { Services } from '../components/sections/Services'
import { Testimonials } from '../components/sections/Testimonials'
import { Contact } from '../components/sections/Contact'

export function HomePage() {
  return (
    <>
      <PageSeo meta={PAGE_META.home} schema={[personSchema(), websiteSchema()]} />
      <div className="home-scroll">
        <Hero />
        <HomeResumeIntro />
        <About />
        <Facts />
        <Skills />
        <Resume />
        <CertificationsSection />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </>
  )
}
