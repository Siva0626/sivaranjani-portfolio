import { CTASection } from '../components/content/CTASection'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { SkillGroup } from '../components/content/SkillGroup'
import { courseCreationContent } from '../content/portfolio'

export function CourseCreationPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">Portfolio area</p><h1>Course creation</h1><p>I create and structure learning content, including Data Analysis course content and PPT-based course material. Instructional design and AI-assisted content workflows support the planning and creation of learning materials.</p></Section>
    <Section><SectionHeading title="Course-creation focus" description="Private course and content details are not displayed. Approved public examples may be added in the future." /><div className="skill-grid">{courseCreationContent.map((group) => <SkillGroup key={group.title} capability={{ category: group.title, items: group.items }} />)}</div></Section>
    <CTASection title="Explore additional work" description="Explore capabilities or get in touch for more information." to="/capabilities" label="Explore capabilities" />
  </PageContainer>
}
