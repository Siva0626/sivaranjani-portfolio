import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  PageContainer,
  Section,
  SectionHeading,
} from '../components/content/Layout'
import { ProfessionalLinks } from '../components/content/ProfessionalLinks'
import { trackPortfolioEvent } from '../app/analytics'
import { siteContent } from '../content/portfolio'

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000'

type ContactForm = {
  name: string
  email: string
  message: string
  website: string
}

export function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
    website: '',
  })

  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }))

    if (status) {
      setStatus('')
      setStatusType('')
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setStatus('')
    setStatusType('')
    setIsSubmitting(true)

    const cleanForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      website: form.website,
    }

    if (!cleanForm.name || !cleanForm.email || !cleanForm.message) {
      setStatus('Please complete all fields.')
      setStatusType('error')
      setIsSubmitting(false)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanForm.email)) {
      setStatus('Please enter a valid email address.')
      setStatusType('error')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanForm),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to submit your message.',
        )
      }

      if (data.emailSent === false) {
        setStatus(
          'Your message was saved, but the email notification could not be sent.',
        )
      } else {
        setStatus(
          'Your message has been sent successfully. Thank you for getting in touch.',
        )
      }
      setStatusType('success')
      trackPortfolioEvent('contact_submit')

      setForm({
        name: '',
        email: '',
        message: '',
        website: '',
      })
    } catch (error) {
      console.error('Contact form error:', error)

      setStatus(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again.',
      )
      setStatusType('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageContainer>
      {/* =====================================================
          PAGE INTRO
      ===================================================== */}

      <Section className="page-intro">
        <p className="eyebrow">Contact</p>

        <h1>Let's connect</h1>

        <p>{siteContent.contactIntroduction}</p>
      </Section>

      {/* =====================================================
          PROFESSIONAL CONTACT LINKS
      ===================================================== */}

      <Section>
        <SectionHeading
          title="Professional contact details"
          description="You can also use the professional contact links below."
        />

        <ProfessionalLinks />
      </Section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <Section>
        <SectionHeading
          title="Contact form"
          description="Send a message directly through the portfolio."
        />

        <form
          onSubmit={handleSubmit}
          className="contact-form"
          noValidate
          aria-busy={isSubmitting}
        >
          <div className="contact-form__honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
          </div>
          {/* NAME */}

          <div>
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              maxLength={100}
              autoComplete="name"
              placeholder="Your name"
            />
          </div>

          {/* EMAIL */}

          <div>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>

          {/* MESSAGE */}

          <div>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              maxLength={5000}
              rows={6}
              placeholder="Write your message..."
            />
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>

          {/* STATUS */}

          {status && (
            <p
              role={statusType === 'error' ? 'alert' : 'status'}
              aria-live={statusType === 'error' ? 'assertive' : 'polite'}
              className={`form-status${statusType ? ` form-status--${statusType}` : ''}`}
            >
              {status}
            </p>
          )}
        </form>
      </Section>
    </PageContainer>
  )
}
