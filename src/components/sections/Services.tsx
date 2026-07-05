import { services } from '../../data/services'
import { Section, SectionTitle } from '../ui/Section'

export function Services() {
  return (
    <Section id="services">
      <SectionTitle
        title="Services"
        description="As a Full Stack Software Engineer, I offer a wide range of services to clients."
      />
      <div className="services__grid fade-in">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-card__icon">
              <i className={`bi ${service.icon}`} />
            </div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
