import { lazy, Suspense } from 'react'
import { projects } from '../content/portfolio'
import { Hero } from '../components/content/Hero'
import { CTASection } from '../components/content/CTASection'
import { ServicesSection } from '../components/content/ServicesSection'
import { FAQSection } from '../components/content/FAQSection'
import {
  PageContainer,
  Section,
} from '../components/content/Layout'
import { ProjectGrid } from '../components/content/ProjectGrid'
import { MediaShowcase } from '../components/content/MediaShowcase'

const PortfolioScene = lazy(() => import('../components/3D/PortfolioScene').then((module) => ({ default: module.PortfolioScene })))

export function HomePage() {
  return (
    <>
      <Hero />

      <PageContainer>
        <Section>
          <ServicesSection />
        </Section>

      <Section>
        <section aria-labelledby="portfolio-visual-title">
          <div className="modern-section-heading modern-section-heading--left">
            <p className="modern-eyebrow">Portfolio visual</p>
            <h2 id="portfolio-visual-title">Operations, learning, data and digital workflows</h2>
            <span className="heading-line" />
          </div>
          <Suspense fallback={<p className="media-fallback">The interactive portfolio visual is loading.</p>}><PortfolioScene /></Suspense>
        </section>
      </Section>

      <Section>
        <MediaShowcase />
      </Section>

      <Section>
        <section aria-labelledby="projects-title">
          <div className="modern-section-heading modern-section-heading--left">
            <p className="modern-eyebrow">Selected Work</p>

            <h2 id="projects-title">
              Projects and practical work
            </h2>

            <span className="heading-line" />
          </div>

          <ProjectGrid
            projects={projects}
            emptyTitle="Selected work will be added as public projects become available."
            emptyDescription="Some professional work is private and therefore not displayed publicly."
          />
        </section>
      </Section>

      <Section>
        <FAQSection />
      </Section>

        <CTASection
          title="Let's work together"
          description="For enquiries about operations, management, digital work, AI-assisted workflows, instructional design, data analysis, course creation, or vibe coding, get in touch."
          to="/contact"
          label="Let's Talk"
        />
      </PageContainer>
    </>
  )
}
