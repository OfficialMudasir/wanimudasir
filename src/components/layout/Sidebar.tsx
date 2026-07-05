import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems, profile } from '../../data/profile'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

function isNavActive(pathname: string, path: string) {
  if (path === '/') {
    return pathname === '/' || pathname === ''
  }
  if (path === '/portfolio') {
    return pathname === '/portfolio' || pathname.startsWith('/projects/')
  }
  return pathname === path
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const { pathname } = useLocation()

  const handleNavClick = () => {
    if (window.innerWidth < 1200) onClose()
  }

  return (
    <>
      <div
        className={`mobile-overlay ${open ? 'mobile-overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`sidebar ${open ? '' : 'sidebar--hidden'}`} id="header">
        <div className="sidebar__profile">
          <img src={profile.avatar} alt={profile.name} className="sidebar__avatar" />
          <h1 className="sidebar__name">
            <Link to="/" onClick={handleNavClick}>
              {profile.name}
            </Link>
          </h1>
          <div className="sidebar__social">
            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href={profile.social.skype} target="_blank" rel="noopener noreferrer" aria-label="Skype">
              <i className="bx bxl-skype" />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>

        <nav aria-label="Main navigation">
          <ul className="sidebar__nav">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={isNavActive(pathname, item.path) ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  <i className={`bx ${item.icon}`} />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export function MobileToggle({ onClick }: { onClick: () => void }) {
  return (
    <button className="mobile-toggle" onClick={onClick} aria-label="Toggle navigation">
      <i className="bi bi-list" />
    </button>
  )
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MobileToggle onClick={() => setOpen((v) => !v)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="app-main">{children}</div>
    </>
  )
}
