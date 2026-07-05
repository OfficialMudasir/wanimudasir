import { Hero } from '../components/sections/Hero'
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
    <main className="home-scroll">
      <Hero />
      <About />
      <Facts />
      <Skills />
      <Resume />
      <CertificationsSection />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}
