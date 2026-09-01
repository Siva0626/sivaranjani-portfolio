export function HowIWork() {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      description:
        'Understand the requirement, task, or problem before starting the work.',
    },
    {
      number: '02',
      title: 'Organise',
      description:
        'Structure information, activities, content, or data into a practical workflow.',
    },
    {
      number: '03',
      title: 'Create',
      description:
        'Create the required digital material, learning content, workflow, or solution.',
    },
    {
      number: '04',
      title: 'Analyse',
      description:
        'Review information, data, or output to identify what needs attention.',
    },
    {
      number: '05',
      title: 'Deliver',
      description:
        'Present the completed work in a clear, usable, and organised form.',
    },
  ]

  return (
    <section
      className="how-i-work"
      aria-labelledby="how-i-work-title"
    >
      <div className="how-i-work__intro">
        <p className="eyebrow">Working approach</p>

        <h2 id="how-i-work-title">
          How I work
        </h2>

        <p>
          A structured approach connecting operations, digital workflows,
          learning content, and data-focused work.
        </p>
      </div>

      <div className="how-i-work__steps">
        {steps.map((step) => (
          <article
            className="how-i-work__step"
            key={step.number}
          >
            <span className="how-i-work__number">
              {step.number}
            </span>

            <div className="how-i-work__content">
              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}