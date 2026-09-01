import { CTASection } from '../components/content/CTASection'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { SkillGroup } from '../components/content/SkillGroup'
import { capabilities } from '../content/portfolio'

export function CapabilitiesPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">Capabilities</p><h1>Professional capabilities</h1><p>My work combines structured operations and management with digital tools, AI-assisted workflows, data-focused tasks, and learning-content creation. These connected areas support organised, practical digital work.</p></Section>
    <Section><SectionHeading title="Areas of focus" description="Capabilities are grouped by the approved portfolio areas." /><div className="skill-grid">{capabilities.map((capability) => <SkillGroup key={capability.category} capability={capability} />)}</div></Section>
    <CTASection title="See the work" description="Some professional work is private and therefore not displayed publicly." to="/projects" label="View work and projects" />
  </PageContainer>
}
