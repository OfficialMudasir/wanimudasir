import { profile } from '../../data/profile'
import { useTypewriter } from '../../hooks/useScrollSpy'

export function Hero() {
  const typed = useTypewriter(profile.typedRoles)

  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(11, 18, 32, 0.92), rgba(11, 18, 32, 0.75)), url("${profile.heroBackground}")`,
      }}
    >
      <div className="hero__content fade-in">
        <h1>{profile.name}</h1>
        <p className="hero__tagline">
          I&apos;m <span className="hero__typed">{typed}</span>
          <span className="hero__cursor">|</span>
        </p>
      </div>
    </section>
  )
}
