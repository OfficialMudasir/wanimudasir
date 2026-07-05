import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from './components/errors/ErrorBoundary'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { PageLoader } from './components/ui/PageLoader'

const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const FactsPage = lazy(() => import('./pages/FactsPage').then((m) => ({ default: m.FactsPage })))
const SkillsPage = lazy(() => import('./pages/SkillsPage').then((m) => ({ default: m.SkillsPage })))
const ResumePage = lazy(() => import('./pages/ResumePage').then((m) => ({ default: m.ResumePage })))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then((m) => ({ default: m.PortfolioPage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage').then((m) => ({ default: m.TestimonialsPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const CertificationsPage = lazy(() =>
  import('./pages/CertificationsPage').then((m) => ({ default: m.CertificationsPage })),
)
const CertificationDetailPage = lazy(() =>
  import('./pages/CertificationDetailPage').then((m) => ({ default: m.CertificationDetailPage })),
)
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })),
)
const ThanksPage = lazy(() => import('./pages/ThanksPage').then((m) => ({ default: m.ThanksPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="facts" element={<FactsPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="resume" element={<ResumePage />} />
              <Route path="certifications" element={<CertificationsPage />} />
              <Route path="certifications/:id" element={<CertificationDetailPage />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="testimonials" element={<TestimonialsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="projects/:slug" element={<ProjectDetailPage />} />
              <Route path="thanks" element={<ThanksPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
