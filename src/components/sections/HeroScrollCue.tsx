interface HeroScrollCueProps {
  targetId?: string
}

export function HeroScrollCue({ targetId = 'home-intro' }: HeroScrollCueProps) {
  const scrollToContent = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className="hero__scroll-cue"
      onClick={scrollToContent}
      aria-label="Scroll down to explore more about Mudasir Ibrahim"
    >
      <span className="hero__scroll-cue__ring" aria-hidden="true" />
      <span className="hero__scroll-cue__label">Scroll to explore</span>
      <span className="hero__scroll-cue__arrow" aria-hidden="true">
        <i className="bi bi-chevron-double-down" />
      </span>
    </button>
  )
}
