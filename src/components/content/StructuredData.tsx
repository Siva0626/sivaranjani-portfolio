const SITE_URL =
  'https://sivaranjani-portfolio-web.sivaranjani0626.workers.dev'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Sivaranjani Selvaraj',
      url: `${SITE_URL}/`,
      jobTitle: 'Operations & Digital Workflow Professional',
      description:
        'Professional portfolio covering operations, management, digital work, AI-assisted workflows, instructional design, data analysis, course creation, and vibe coding.',
      sameAs: [
        'https://www.linkedin.com/in/sivaranjani-selvaraj26061996/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Sivaranjani Selvaraj | Professional Portfolio',
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
