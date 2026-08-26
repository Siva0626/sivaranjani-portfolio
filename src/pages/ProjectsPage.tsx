import { CTASection } from '../components/content/CTASection'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { ProjectGrid } from '../components/content/ProjectGrid'
import { projects } from '../content/portfolio'

export function ProjectsPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">Work & projects</p><h1>Projects</h1><p>[PROJECT DETAILS]</p></Section>
    <Section><SectionHeading title="Project collection" description="Project cards show supplied details only." /><ProjectGrid projects={projects} emptyTitle="Projects will appear here" emptyDescription="Project cards will appear here when verified project details are available."/></Section>
    <CTASection title="Explore specialised work" description="View course creation and data analysis portfolio areas." to="/course-creation" label="View course creation" />
  </PageContainer>
}
