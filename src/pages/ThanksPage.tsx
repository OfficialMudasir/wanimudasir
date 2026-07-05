import { Link } from 'react-router-dom'
import { PAGE_META } from '../config/seo'
import { PageSeo } from '../components/seo/PageSeo'

export function ThanksPage() {
  return (
    <>
      <PageSeo meta={PAGE_META.thanks} />
      <div className="thanks-page">
        <div className="thanks-card fade-in">
          <h1>Thanks — your message was sent.</h1>
          <p>I&apos;ll get back to you as soon as possible.</p>
          <Link to="/contact" className="btn btn--primary">
            Back to Contact
          </Link>
        </div>
      </div>
    </>
  )
}
