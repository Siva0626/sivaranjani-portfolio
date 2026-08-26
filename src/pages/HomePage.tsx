import { Link } from 'react-router-dom'
import { capabilities, projects } from '../content/portfolio'
import { Hero } from '../components/content/Hero'
import { CTASection } from '../components/content/CTASection'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { ProjectGrid } from '../components/content/ProjectGrid'

export function HomePage() {
  return <PageContainer><Hero />
    <Section><SectionHeading eyebrow="Focus areas" title="Capabilities with a practical focus" description="Explore the connected operations, digital workflow, AI-assisted, data, and learning-content areas represented in this portfolio." />
      <ul className="capability-list">{capabilities.map((capability) => <li key={capability.category}><Link to="/capabilities">{capability.category}</Link></li>)}</ul>
    </Section>
    <Section><SectionHeading eyebrow="Selected work" title="Projects and work" description="Some professional work is private and therefore not displayed publicly." /><ProjectGrid projects={projects} emptyTitle="Selected work will be added as public projects become available." emptyDescription="Some professional work is private and therefore not displayed publicly." /></Section>
    <CTASection title="Start a conversation" description="For enquiries about operations, management, digital work, AI-assisted workflows, instructional design, data analysis, course creation, or vibe coding, get in touch." to="/contact" label="Get in touch" />
  </PageContainer>
}
