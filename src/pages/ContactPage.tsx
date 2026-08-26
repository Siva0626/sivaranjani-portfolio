import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { ProfessionalLinks } from '../components/content/ProfessionalLinks'

export function ContactPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">Contact</p><h1>Get in touch</h1><p>[CONTACT PREFERENCE OR MESSAGE]</p></Section>
    <Section><SectionHeading title="Professional contact details" description="Replace these clearly marked placeholders with verified contact information." /><ProfessionalLinks /></Section>
    <Section><div className="notice"><h2>Contact form</h2><p>A contact form is not included in this frontend-only MVP. No message delivery service has been configured.</p></div></Section>
  </PageContainer>
}
