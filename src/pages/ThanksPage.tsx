import { Link } from 'react-router-dom'

export function ThanksPage() {
  return (
    <div className="thanks-page">
      <div className="thanks-card fade-in">
        <h1>Thanks — your message was sent.</h1>
        <p>I&apos;ll get back to you as soon as possible.</p>
        <Link to="/contact" className="btn btn--primary">
          Back to Contact
        </Link>
      </div>
    </div>
  )
}
