const faqs = [
  {
    question: 'What type of work do you handle?',
    answer:
      'My work brings together operations and management, digital workflows, AI-assisted work, instructional design, data analysis, course creation, and vibe coding.',
  },
  {
    question: 'Do you work with digital and AI-assisted workflows?',
    answer:
      'Yes. I use digital tools and AI-assisted workflows to support content creation, learning materials, data-related work, documentation, and development workflows.',
  },
  {
    question: 'Can you create learning and course content?',
    answer:
      'Yes. My confirmed course-creation work includes structuring learning content, creating course material, Data Analysis course creation, and PPT-based course material.',
  },
  {
    question: 'Can you work with data?',
    answer:
      'Yes. The portfolio presents data cleaning, data analysis, and employee-management-related analysis. Private datasets and results are not displayed.',
  },
  {
    question: 'What is vibe coding?',
    answer:
      'Vibe coding is presented here as AI-assisted website development and a digital development capability. It does not position Sivaranjani as a full-stack developer.',
  },
  {
    question: 'How can I get in touch?',
    answer:
      'You can use the contact page to send an enquiry or use the professional contact links provided on the website.',
  },
]

export function FAQSection() {
  return (
    <section
      className="faq-section"
      aria-labelledby="faq-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Frequently asked questions</p>

        <h2 id="faq-title">
          Common questions
        </h2>

        <p>
          A quick overview of the type of work, capabilities,
          and digital services represented in this portfolio.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <details
            className="faq-item"
            key={faq.question}
          >
            <summary>
              <span>{faq.question}</span>
              <span
                className="faq-item__icon"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <div className="faq-item__answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
