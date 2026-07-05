import { useEffect } from 'react'
import type { ReactNode } from 'react'

export function PageShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <main className="page-shell">{children}</main>
}
