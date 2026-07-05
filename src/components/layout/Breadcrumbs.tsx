import { Link } from 'react-router-dom'

interface BreadcrumbsProps {
  title: string
  current: string
}

export function Breadcrumbs({ title, current }: BreadcrumbsProps) {
  return (
    <section className="breadcrumbs">
      <div className="container breadcrumbs__inner">
        <h2>{title}</h2>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{current}</li>
        </ol>
      </div>
    </section>
  )
}
