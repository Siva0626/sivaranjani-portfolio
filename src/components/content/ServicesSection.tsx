import { Link } from 'react-router-dom'

const services = [
  {
    icon: '⚙',
    title: 'Operations & Management',
    description:
      'Organising day-to-day activities, monitoring work, maintaining operational processes, and supporting problem solving.',
    link: '/capabilities',
  },
  {
    icon: '✦',
    title: 'Digital Work',
    description:
      'Creating practical digital materials including presentations, posters, brochures, and structured content.',
    link: '/capabilities',
  },
  {
    icon: '◈',
    title: 'Data Analysis',
    description:
      'Working with data cleaning, analysis, employee-management-related data, and structured reporting.',
    link: '/data-analysis',
  },
  {
    icon: '◎',
    title: 'Course Creation',
    description:
      'Designing learning content, course structures, presentations, and AI-assisted learning materials.',
    link: '/course-creation',
  },
]

export function ServicesSection() {
  return (
    <section
      className="modern-services"
      aria-labelledby="services-title"
    >
      <div className="modern-section-heading">
        <p className="modern-eyebrow">What I Do</p>

        <h2 id="services-title">
          Practical work across operations, digital, learning and data
        </h2>

        <span className="heading-line" />
      </div>

      <div className="modern-services__grid">
        {services.map((service) => (
          <article
            className="modern-service-card"
            key={service.title}
          >
            <div className="modern-service-card__icon">
              {service.icon}
            </div>

            <div>
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link to={service.link}>
                Explore <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}