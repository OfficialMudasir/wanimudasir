import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Section, SectionTitle } from '../ui/Section'
import { ContactAside } from './ContactAside'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
  website: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
}

export function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your message. Please try again.')
      }

      setForm(initialForm)
      navigate('/thanks')
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again or email me directly.',
      )
    }
  }

  return (
    <Section id="contact">
      <SectionTitle
        title="Contact"
        description="Contact me to discuss your software development needs. Available for full-time, contract, or consulting opportunities."
      />

      <div className="contact__grid fade-in">
        <ContactAside />

        <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form" noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                required
                autoComplete="name"
                aria-required="true"
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                required
                autoComplete="email"
                aria-required="true"
                disabled={status === 'sending'}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={form.subject}
              onChange={(event) => updateField('subject', event.target.value)}
              required
              aria-required="true"
              disabled={status === 'sending'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              required
              aria-required="true"
              disabled={status === 'sending'}
            />
          </div>

          <input
            type="text"
            name="website"
            value={form.website}
            onChange={(event) => updateField('website', event.target.value)}
            className="visually-hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {status === 'error' && errorMessage ? (
            <p className="contact-form__error" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <button type="submit" className="btn btn--primary contact-form__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </Section>
  )
}
