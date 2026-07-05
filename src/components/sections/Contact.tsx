import { profile } from '../../data/profile'
import { Section, SectionTitle } from '../ui/Section'

const FORM_ACTION = 'https://formsubmit.co/wanimudasir312@gmail.com'
const THANKS_URL = `${import.meta.env.BASE_URL}thanks`.replace(/\/$/, '')

export function Contact() {
  return (
    <Section id="contact">
      <SectionTitle
        title="Contact"
        description="Contact me to discuss your software development needs. Available for full-time, contract, or consulting opportunities."
      />

      <div className="contact__grid fade-in">
        <address className="contact-info">
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
          <iframe
            title="Map showing Keharpora Kokernag, Anantnag"
            src={profile.contact.mapUrl}
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: 'var(--radius-md)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </address>

        <form
          className="contact-form"
          action={FORM_ACTION}
          method="POST"
          aria-label="Contact form"
        >
          <input type="hidden" name="_subject" value="New portfolio message" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={THANKS_URL} />
          <input type="text" name="_honey" className="visually-hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                aria-required="true"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" required aria-required="true" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={6} required aria-required="true" />
          </div>
          <button type="submit" className="btn btn--primary contact-form__submit">
            Send Message
          </button>
        </form>
      </div>
    </Section>
  )
}
