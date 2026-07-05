import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'
import { useTypewriter } from '../../hooks/useScrollSpy'

export function Hero() {
  const typed = useTypewriter(profile.typedRoles)

  const heroStyle = {
    '--hero-bg-image': `url("${profile.heroBackground}")`,
  } as CSSProperties

  return (
    <section id="hero" className="hero" style={heroStyle}>
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
    </section>
  )
}
