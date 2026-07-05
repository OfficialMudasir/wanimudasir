import { Outlet } from 'react-router-dom'
import { BackToTop } from './BackToTop'
import { Footer } from './Footer'
import { SidebarLayout } from './Sidebar'

export function Layout() {
  return (
    <div className="app-layout">
      <SidebarLayout>
        <Outlet />
        <Footer />
      </SidebarLayout>
      <BackToTop />
    </div>
  )
}
