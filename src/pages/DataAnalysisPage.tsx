import { CTASection } from '../components/content/CTASection'
import { PageContainer, Section, SectionHeading } from '../components/content/Layout'
import { ProjectGrid } from '../components/content/ProjectGrid'
import { dataAnalysisProjects } from '../content/portfolio'

export function DataAnalysisPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">Portfolio area</p><h1>Data analysis</h1><p>[DATA ANALYSIS DETAILS]</p></Section>
    <Section><SectionHeading title="Analysis work" description="Verified data-analysis examples and outputs will be added here." /><ProjectGrid projects={dataAnalysisProjects} emptyTitle="Data analysis examples will appear here" emptyDescription="Verified data-analysis examples and outputs will be added here."/></Section>
    <CTASection title="Discuss a project" description="[CONTACT PREFERENCE OR MESSAGE]" to="/contact" label="Visit contact page" />
  </PageContainer>
}
