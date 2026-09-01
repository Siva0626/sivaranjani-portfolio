import { lazy, Suspense } from 'react'
import { capabilities, projects } from '../content/portfolio'
import { Hero } from '../components/content/Hero'
import { CTASection } from '../components/content/CTASection'
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
            <h2>I turn practical operations, digital work and AI-assisted thinking into structured outcomes.</h2>
            <span className="heading-line heading-line--center" />
          </div>

          <div className="editorial-intro">
            <p className="editorial-intro__lead">
              I work across operations, management, digital creation and AI-assisted workflows.
            </p>

            <p className="editorial-intro__copy">
              My work connects structured systems, human coordination, learning design,
              data-informed thinking and modern digital delivery. The result is a practical,
              thoughtful approach to organisation, communication and problem solving across
              professional and creative workflows.
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
                  <span className="capability-card__index">0{index + 1}</span>
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

        <Section className="storytelling-section">
          <div className="storytelling-layout">
            <div className="story-block story-block--feature">
              <p className="modern-eyebrow">Creative system</p>
              <h2>Operations, learning, AI, and digital work shaped into one practical practice.</h2>
              <p>
                Each area of the portfolio connects to the next: structured operations, human
                coordination, digital communication, data-informed decisions, and AI-supported work.
              </p>
            </div>

            <div className="story-block story-block--stack">
              <div className="story-micro-label">Professional layers</div>
              <ul className="capability-stack" aria-label="Professional capability stack">
                {capabilities.slice(0, 6).map((capability, index) => (
                  <li key={capability.category} className="capability-stack__item">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{capability.category}</strong>
                    <small>{capability.items[0]}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section className="capability-immersive-section">
          <div className="modern-section-heading modern-section-heading--left">
            <p className="modern-eyebrow">Capability system</p>
            <h2>Practical expertise across operations, design, AI and digital execution.</h2>
            <span className="heading-line" />
          </div>

          <div className="capability-immersive-grid">
            {capabilities.map((capability, index) => (
              <article className="capability-immersive-card" key={capability.category}>
                <div className="capability-immersive-card__index">0{index + 1}</div>
                <h3>{capability.category}</h3>
                <p>{capability.items.slice(0, 2).join(' • ')}</p>
                <ul>
                  {capability.items.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
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
          <div className="portfolio-story-section" aria-labelledby="portfolio-story-title">
            <div className="modern-section-heading modern-section-heading--left">
              <p className="modern-eyebrow">Selected work</p>
              <h2 id="portfolio-story-title">Portfolio storytelling in motion.</h2>
              <span className="heading-line" />
            </div>

            <div className="portfolio-story-grid">
              <article className="story-panel story-panel--large">
                <div className="story-panel__meta">Operations • Learning</div>
                <h3>Structured work systems with practical digital delivery.</h3>
                <p>Work that connects management routines, digital creativity, AI-assisted thinking, and organised communication.</p>
              </article>

              <article className="story-panel story-panel--tall">
                <div className="story-panel__meta">Data • Analysis</div>
                <h3>Patterns, structure and useful reporting.</h3>
                <p>Learning design, data analysis, and operational clarity come together in a disciplined workflow.</p>
              </article>

              <article className="story-panel story-panel--wide">
                <div className="story-panel__meta">AI • Digital Work</div>
                <h3>AI-assisted execution with human judgement.</h3>
                <p>Creative, organisational, and technical thinking are folded into one connected digital practice.</p>
              </article>
            </div>
          </div>
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
