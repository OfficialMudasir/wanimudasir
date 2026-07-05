export function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading page">
      <div className="page-loader__spinner" aria-hidden="true" />
      <span className="visually-hidden">Loading…</span>
    </div>
  )
}
