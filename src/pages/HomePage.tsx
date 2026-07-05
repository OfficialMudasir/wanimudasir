import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Facts } from '../components/sections/Facts'
import { Skills } from '../components/sections/Skills'
import { Resume } from '../components/sections/Resume'
import { Portfolio } from '../components/sections/Portfolio'
import { Services } from '../components/sections/Services'
import { Testimonials } from '../components/sections/Testimonials'
import { Contact } from '../components/sections/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
