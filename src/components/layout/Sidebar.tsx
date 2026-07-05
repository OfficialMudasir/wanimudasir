import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { homeSectionIds, navItems, navPathToSectionId, profile } from '../../data/profile'
import { ThemeToggle } from './ThemeToggle'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { useIsMobileNav } from '../../hooks/useIsMobileNav'
import { useScrollSpy } from '../../hooks/useScrollSpy'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

function isRouteNavActive(pathname: string, path: string) {
  if (path === '/') {
    return pathname === '/' || pathname === ''
  }
  if (path === '/portfolio') {
    return pathname === '/portfolio' || pathname.startsWith('/projects/')
  }
  if (path === '/certifications') {
    return pathname === '/certifications' || pathname.startsWith('/certifications/')
  }
  return pathname === path
}

function isOnHomePath(pathname: string) {
  return pathname === '/' || pathname === ''
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const onHome = isOnHomePath(pathname)
  const activeSection = useScrollSpy(onHome ? homeSectionIds : [], 160)
  const [pendingSection, setPendingSection] = useState<string | null>(null)

  const isNavActive = useCallback(
    (path: string) => {
      if (onHome) {
        const sectionId = navPathToSectionId[path as keyof typeof navPathToSectionId]
        return sectionId === activeSection
      }
      return isRouteNavActive(pathname, path)
    },
    [activeSection, onHome, pathname],
  )

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleNavClick = useCallback(
    (event: React.MouseEvent, path: string) => {
      const sectionId = navPathToSectionId[path as keyof typeof navPathToSectionId]

      if (onHome && sectionId) {
        event.preventDefault()
        scrollToSection(sectionId)
        if (window.innerWidth < 1200) onClose()
        return
      }

      if (!onHome && sectionId && path !== pathname) {
        event.preventDefault()
        setPendingSection(sectionId)
        navigate('/')
        if (window.innerWidth < 1200) onClose()
        return
      }

      if (window.innerWidth < 1200) onClose()
    },
    [navigate, onClose, onHome, pathname, scrollToSection],
  )

  useEffect(() => {
    if (!onHome || !pendingSection) return

    const timer = window.setTimeout(() => {
      scrollToSection(pendingSection)
      setPendingSection(null)
    }, 120)

    return () => window.clearTimeout(timer)
  }, [onHome, pendingSection, scrollToSection])

  const handleHomeClick = (event: React.MouseEvent) => {
    if (onHome) {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
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
            <Link to="/" onClick={handleHomeClick}>
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
                  className={isNavActive(item.path) ? 'active' : ''}
                  onClick={(event) => handleNavClick(event, item.path)}
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

export function MobileToggle({ onClick, open }: { onClick: () => void; open: boolean }) {
  return (
    <button
      type="button"
      className="mobile-toggle"
      onClick={onClick}
      aria-label={open ? 'Close navigation' : 'Open navigation'}
      aria-expanded={open}
      aria-controls="header"
    >
      <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} />
    </button>
  )
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isMobileNav = useIsMobileNav()

  useBodyScrollLock(open && isMobileNav)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    if (open) {
      window.addEventListener('keydown', onKeyDown)
      return () => window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <ThemeToggle />
      <MobileToggle open={open} onClick={() => setOpen((value) => !value)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="app-main">{children}</div>
    </>
  )
}
