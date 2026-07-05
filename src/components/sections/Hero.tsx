import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'
import { useTypewriter } from '../../hooks/useScrollSpy'
import { HeroBackground } from './HeroBackground'
import { HeroCursorEffects } from './HeroCursorEffects'
import { HeroScrollCue } from './HeroScrollCue'

export function Hero() {
  const typed = useTypewriter(profile.typedRoles)

  return (
    <section id="hero" className="hero">
      <HeroBackground />
      <HeroCursorEffects />
      <div className="hero__content fade-in">
        <h1>{profile.name}</h1>
        <p className="hero__tagline">
          I&apos;m <span className="hero__typed">{typed}</span>
          <span className="hero__cursor">|</span>
        </p>
        <div className="hero__actions">
          <Link to="/about" className="btn btn--primary">
            About Me
          </Link>
          <Link to="/portfolio" className="btn btn--outline">
            View Portfolio
          </Link>
        </div>
      </div>
      <HeroScrollCue targetId="home-intro" />
    </section>
  )
}
