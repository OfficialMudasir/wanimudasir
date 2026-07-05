import { useBackToTop } from '../../hooks/useScrollSpy'

export function BackToTop() {
  const visible = useBackToTop()

  return (
    <a
      href="#hero"
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up-short" />
    </a>
  )
}
