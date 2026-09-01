import { CTASection } from '../components/content/CTASection'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { ProjectGrid } from '../components/content/ProjectGrid'
import { projects } from '../content/portfolio'

export function ProjectsPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">Work & projects</p><h1>Work and projects</h1><p>Selected work will be added as public projects become available. Some professional work is private and therefore not displayed publicly.</p></Section>
    <Section><SectionHeading title="Project collection" description="Future public examples will be added only when their details are approved for publication." /><ProjectGrid projects={projects} emptyTitle="Selected work will be added as public projects become available." emptyDescription="Some professional work is private and therefore not displayed publicly."/></Section>
    <CTASection title="Explore specialised work" description="View course creation and data analysis portfolio areas." to="/course-creation" label="View course creation" />
  </PageContainer>
}
