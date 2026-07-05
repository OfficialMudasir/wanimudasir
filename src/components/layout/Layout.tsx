import { Outlet } from 'react-router-dom'
import { BackToTop } from './BackToTop'
import { Footer } from './Footer'
import { SidebarLayout } from './Sidebar'

export function Layout() {
  return (
    <div className="app-layout">
      <SidebarLayout>
        <div className="app-main__content">
          <Outlet />
        </div>
        <Footer />
      </SidebarLayout>
      <BackToTop />
    </div>
  )
}
