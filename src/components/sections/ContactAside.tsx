import { contactEngagement } from '../../data/contactContent'
import { profile } from '../../data/profile'

export function ContactAside() {
  return (
    <aside className="contact-aside" aria-label="Contact information and highlights">
      <div className="contact-aside__intro">
        <span className="contact-aside__badge">
          <i className="bi bi-circle-fill" aria-hidden="true" />
          {profile.freelance}
        </span>
        <h3>{contactEngagement.headline}</h3>
        <p>{contactEngagement.intro}</p>
      </div>

      <div className="contact-info">
        <div className="contact-info__item">
          <i className="bi bi-geo-alt" aria-hidden="true" />
          <div>
            <h3>Location</h3>
            <p>{profile.contact.address}</p>
          </div>
        </div>
        <div className="contact-info__item">
          <i className="bi bi-envelope" aria-hidden="true" />
          <div>
            <h3>Email</h3>
            <p>
              <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            </p>
          </div>
        </div>
        <div className="contact-info__item">
          <i className="bi bi-phone" aria-hidden="true" />
          <div>
            <h3>Call</h3>
            <p>
              <a href={`tel:${profile.contact.phone.replace(/\s/g, '')}`}>{profile.contact.phone}</a>
            </p>
          </div>
        </div>
        <div className="contact-info__item">
          <i className="bi bi-clock-history" aria-hidden="true" />
          <div>
            <h3>Response time</h3>
            <p>{contactEngagement.responseTime}</p>
          </div>
        </div>
      </div>

      <div className="contact-aside__help">
        <h4>How I can help</h4>
        <ul>
          {contactEngagement.helpWith.map((item) => (
            <li key={item}>
              <i className="bi bi-check2" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-aside__highlights">
        {contactEngagement.highlights.map((item) => (
          <article className="contact-aside__card" key={item.title}>
            <i className={`bi ${item.icon}`} aria-hidden="true" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="contact-aside__links">
        <a href={profile.resumeUrl} download="Resume_Mudasir_Ahmad_Wani.pdf" className="btn btn--primary">
          <i className="bi bi-download" aria-hidden="true" /> Download Resume
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline contact-aside__btn-outline"
        >
          <i className="bi bi-linkedin" aria-hidden="true" /> Connect on LinkedIn
        </a>
      </div>
    </aside>
  )
}
