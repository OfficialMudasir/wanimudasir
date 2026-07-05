import { Outlet } from 'react-router-dom'
import { BackToTop } from './BackToTop'
import { Footer } from './Footer'
import { HashScroll } from './HashScroll'
import { SidebarLayout } from './Sidebar'
import { SkipToContent } from './SkipToContent'

export function Layout() {
  return (
    <div className="app-layout">
      <SkipToContent />
      <HashScroll />
      <SidebarLayout>
        <main id="main-content" className="app-main__content" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
      </SidebarLayout>
      <BackToTop />
    </div>
  )
}
