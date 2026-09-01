import { lazy, Suspense } from 'react'
import { capabilities, projects } from '../content/portfolio'
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

const PortfolioScene = lazy(() =>
  import('../components/3D/PortfolioScene').then((module) => ({
    default: module.PortfolioScene,
  })),
)

const focusAreas = [
  'Operations & management',
  'Digital content',
  'AI-assisted workflows',
  'Learning & course design',
  'Data analysis',
  'Vibe coding',
]

export function HomePage() {
  return (
    <>
      <Hero />

      <PageContainer>
        <Section className="editorial-intro-section">
          <div className="modern-section-heading modern-section-heading--center">
            <p className="modern-eyebrow">Who I am</p>
            <h2>I turn practical operations, digital work and AI-assisted thinking into clear outcomes.</h2>
            <span className="heading-line heading-line--center" />
          </div>

          <div className="editorial-intro">
            <p className="editorial-intro__lead">
              I work across operations, management, digital creation and AI-assisted workflows.
            </p>

            <p className="editorial-intro__copy">
              My work brings together structured systems, human coordination, learning design,
              data-informed thinking and digital delivery. The result is a practical approach to
              organisation, communication and problem solving that works across business and
              creative workflows.
            </p>
          </div>

          <div className="stat-grid" aria-label="Portfolio focus areas">
            {focusAreas.map((area) => (
              <div className="stat-block" key={area}>
                <span className="stat-block__label">Focus</span>
                <strong>{area}</strong>
              </div>
            ))}
          </div>
        </Section>

        <Section className="capability-showcase-section">
          <div className="modern-section-heading modern-section-heading--left">
            <p className="modern-eyebrow">Capabilities</p>
            <h2>Operations, digital, AI and learning working as one system.</h2>
            <span className="heading-line" />
          </div>

          <div className="capability-showcase__grid">
            {capabilities.map((capability, index) => (
              <article className="capability-card" key={capability.category}>
                <div className="capability-card__header">
                  <span className="capability-card__index">
                    0{index + 1}
                  </span>
                  <span className="capability-card__tag">Capability</span>
                </div>

                <h3>{capability.category}</h3>

                <ul>
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <ServicesSection />
        </Section>

        <Section>
          <section aria-labelledby="portfolio-visual-title" className="portfolio-visual-block">
            <div className="modern-section-heading modern-section-heading--left">
              <p className="modern-eyebrow">Portfolio visual</p>
              <h2 id="portfolio-visual-title">A connected view of operations, learning, data and digital work.</h2>
              <span className="heading-line" />
            </div>

            <Suspense fallback={<p className="media-fallback">The interactive portfolio visual is loading.</p>}>
              <PortfolioScene />
            </Suspense>
          </section>
        </Section>

        <Section>
          <MediaShowcase />
        </Section>

        <Section>
          <section aria-labelledby="projects-title" className="portfolio-work-block">
            <div className="modern-section-heading modern-section-heading--left">
              <p className="modern-eyebrow">Selected Work</p>
              <h2 id="projects-title">Projects and practical work</h2>
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
