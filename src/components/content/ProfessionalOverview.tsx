import { Link } from 'react-router-dom'

export function ProfessionalOverview() {
  return (
    <section
      className="professional-overview"
      aria-labelledby="overview-title"
    >
      <div className="professional-overview__intro">
        <p className="eyebrow">Professional overview</p>

        <h2 id="overview-title">
          Operations, digital workflows, learning and data
        </h2>

        <p>
          My work brings together operations and management with digital
          workflows, AI-assisted work, instructional design, data analysis,
          and course creation.
        </p>

        <Link className="button button--secondary" to="/about">
          Learn more about me
        </Link>
      </div>

      <div className="professional-overview__timeline">
        <article className="timeline-item">
          <span className="timeline-item__number">01</span>

          <div>
            <h3>Operations & Management</h3>
            <p>
              Managing activities, monitoring work, maintaining operations,
              and solving operational problems.
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <span className="timeline-item__number">02</span>

          <div>
            <h3>Digital Work</h3>
            <p>
              Creating digital materials such as posters, brochures, and
              presentations.
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <span className="timeline-item__number">03</span>

          <div>
            <h3>Learning & Data</h3>
            <p>
              Structuring learning content, creating courses, cleaning data,
              and performing data analysis.
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <span className="timeline-item__number">04</span>

          <div>
            <h3>AI-Assisted Workflows</h3>
            <p>
              Using AI tools to support digital work, learning content, and
              development workflows.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}