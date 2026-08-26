import { CTASection } from '../components/content/CTASection'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { SkillGroup } from '../components/content/SkillGroup'
import { aboutContent, siteContent } from '../content/portfolio'

export function AboutPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">About</p><h1>About {siteContent.name}</h1><p>{siteContent.aboutIntroduction}</p></Section>
    <Section><SectionHeading title="Professional focus" description="My work connects structured operations and management with digital work, AI-assisted workflows, instructional design, data analysis, and course creation." /><div className="skill-grid">{aboutContent.map((group) => <SkillGroup key={group.title} capability={{ category: group.title, items: group.items }} />)}</div></Section>
    <Section><SectionHeading title="Professional portrait" description="A professional portrait will be added when an approved image is provided." /><div className="portrait-placeholder" role="img" aria-label="Professional portrait placeholder for Sivaranjani Selvaraj">Professional portrait placeholder</div></Section>
    <CTASection title="Explore the portfolio" description="View the confirmed capability areas or get in touch." to="/capabilities" label="Explore capabilities" />
  </PageContainer>
}
