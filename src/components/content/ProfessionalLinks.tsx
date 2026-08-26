import { siteContent } from '../../content/portfolio'

export function ProfessionalLinks() {
  return (
    <dl className="professional-links">
      <div><dt>Email</dt><dd><a href={`mailto:${siteContent.contactEmail}`}>{siteContent.contactEmail}</a></dd></div>
      <div><dt>LinkedIn</dt><dd><a href={siteContent.linkedInUrl}>linkedin.com/in/sivaranjani-selvaraj26061996</a></dd></div>
    </dl>
  )
}
