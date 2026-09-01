import { siteContent } from '../../content/portfolio'
import { trackPortfolioEvent } from '../../app/analytics'

export function ProfessionalLinks() {
  return (
    <dl className="professional-links">
      <div><dt>Email</dt><dd><a href={`mailto:${siteContent.contactEmail}`} onClick={() => trackPortfolioEvent('email_cta', { source: 'contact_page' })}>{siteContent.contactEmail}</a></dd></div>
      <div><dt>LinkedIn</dt><dd><a href={siteContent.linkedInUrl} target="_blank" rel="noopener noreferrer">linkedin.com/in/sivaranjani-selvaraj26061996</a></dd></div>
    </dl>
  )
}
