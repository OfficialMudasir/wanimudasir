import { Link } from 'react-router-dom'
import { PAGE_META } from '../config/seo'
import { PageSeo } from '../components/seo/PageSeo'

export function NotFoundPage() {
  return (
    <>
      <PageSeo meta={PAGE_META.notFound} />
      <div className="thanks-page">
        <div className="thanks-card fade-in">
          <h1>Page not found</h1>
          <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}
