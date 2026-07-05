import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HashScroll } from './components/layout/HashScroll'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ThanksPage } from './pages/ThanksPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <HashScroll />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="thanks" element={<ThanksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
