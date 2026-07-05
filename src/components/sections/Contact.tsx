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
        <div className="contact-info">
          <div className="contact-info__item">
            <i className="bi bi-geo-alt" />
            <div>
              <h4>Location</h4>
              <p>{profile.contact.address}</p>
            </div>
          </div>
          <div className="contact-info__item">
            <i className="bi bi-envelope" />
            <div>
              <h4>Email</h4>
              <p>{profile.contact.email}</p>
            </div>
          </div>
          <div className="contact-info__item">
            <i className="bi bi-phone" />
            <div>
              <h4>Call</h4>
              <p>{profile.contact.phone}</p>
            </div>
          </div>
          <iframe
            title="Location map"
            src={profile.contact.mapUrl}
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: 'var(--radius-md)' }}
            loading="lazy"
          />
        </div>

        <form
          className="contact-form"
          action={FORM_ACTION}
          method="POST"
        >
          <input type="hidden" name="_subject" value="New portfolio message" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={THANKS_URL} />

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={6} required />
          </div>
          <button type="submit" className="btn btn--primary contact-form__submit">
            Send Message
          </button>
        </form>
      </div>
    </Section>
  )
}
