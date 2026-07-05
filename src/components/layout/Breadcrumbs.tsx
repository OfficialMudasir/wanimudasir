import { Link } from 'react-router-dom'

interface BreadcrumbsProps {
  title: string
  current: string
}

export function Breadcrumbs({ title, current }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container breadcrumbs__inner">
        <h2 className="breadcrumbs__title">{title}</h2>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li aria-current="page">{current}</li>
        </ol>
      </div>
    </nav>
  )
}
