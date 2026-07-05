import { useBackToTop } from '../../hooks/useScrollSpy'

export function BackToTop() {
  const visible = useBackToTop()

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="bi bi-arrow-up-short" />
    </button>
  )
}
