import { CTASection } from '../components/content/CTASection'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { SkillGroup } from '../components/content/SkillGroup'
import { dataAnalysisContent } from '../content/portfolio'

export function DataAnalysisPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">Portfolio area</p><h1>Data analysis</h1><p>My data-analysis work includes data cleaning, data analysis, and employee-management-related analysis. This capability sits alongside operations, digital workflows, AI-assisted work, and Data Analysis course creation.</p></Section>
    <Section><SectionHeading title="Data-analysis focus" description="Private analysis work is not displayed. Approved public examples may be added in the future." /><div className="skill-grid">{dataAnalysisContent.map((group) => <SkillGroup key={group.title} capability={{ category: group.title, items: group.items }} />)}</div></Section>
    <CTASection title="Explore course creation" description="Learn more about Data Analysis course creation and PPT-based course material." to="/course-creation" label="Explore course creation" />
  </PageContainer>
}
