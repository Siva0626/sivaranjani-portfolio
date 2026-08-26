import { useState, type FormEvent } from 'react'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { ProfessionalLinks } from '../components/content/ProfessionalLinks'

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setStatus('')
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit message')
      }

      setStatus('Your message has been sent successfully.')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setStatus('Unable to send your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageContainer>
      <Section className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch</h1>
        <p>
          Have a professional enquiry or collaboration opportunity?
          Send a message using the form below.
        </p>
      </Section>

      <Section>
        <SectionHeading
          title="Professional contact details"
          description="You can also use the verified professional contact links below."
        />
        <ProfessionalLinks />
      </Section>

      <Section>
        <SectionHeading
          title="Contact form"
          description="Send a message directly through the portfolio."
        />

        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Write your message..."
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>

          {status && (
            <p role="status" className="form-status">
              {status}
            </p>
          )}
        </form>
      </Section>
    </PageContainer>
  )
}