import { CTASection } from '../components/content/CTASection'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { ProjectGrid } from '../components/content/ProjectGrid'
import { courseCreationProjects } from '../content/portfolio'

export function CourseCreationPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">Portfolio area</p><h1>Course creation</h1><p>[COURSE DETAILS]</p></Section>
    <Section><SectionHeading title="Course work" description="Verified course examples and outputs will be added here." /><ProjectGrid projects={courseCreationProjects} emptyTitle="Course examples will appear here" /></Section>
    <CTASection title="Explore additional work" description="Browse projects or get in touch for more information." to="/projects" label="View projects" />
  </PageContainer>
}
