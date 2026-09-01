import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL =
  'https://sivaranjani-portfolio-web.sivaranjani0626.workers.dev'

const OG_IMAGE = `${SITE_URL}/og-image.png.png`

const DEFAULT_DESCRIPTION =
  'Professional portfolio of Sivaranjani Selvaraj covering operations, management, digital workflows, AI-assisted work, instructional design, data analysis, course creation, and digital development.'

const pageSEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Sivaranjani Selvaraj | Operations & Digital Workflow Professional',
    description: DEFAULT_DESCRIPTION,
  },
  '/about': {
    title: 'About | Sivaranjani Selvaraj',
    description:
      'Learn about Sivaranjani Selvaraj and her professional work across operations, digital workflows, AI-assisted work, instructional design, data analysis, and course creation.',
  },
  '/projects': {
    title: 'Projects | Sivaranjani Selvaraj',
    description:
      'Learn about Sivaranjani Selvaraj’s public work information and connected capabilities across operations, digital workflows, course creation, and data analysis.',
  },
  '/capabilities': {
    title: 'Capabilities | Sivaranjani Selvaraj',
    description:
      'Explore professional capabilities in operations, management, digital work, AI-assisted workflows, instructional design, data analysis, course creation, and vibe coding.',
  },
  '/course-creation': {
    title: 'Course Creation | Sivaranjani Selvaraj',
    description:
      'Explore learning design, instructional content, course creation, and structured learning solutions.',
  },
  '/data-analysis': {
    title: 'Data Analysis | Sivaranjani Selvaraj',
    description:
      'Explore data cleaning, data analysis, reporting, and practical analytical work.',
  },
  '/contact': {
    title: 'Contact | Sivaranjani Selvaraj',
    description:
      'Contact Sivaranjani Selvaraj for professional enquiries, collaborations, digital work, course creation, data analysis, and related opportunities.',
  },
  '/404': {
    title: 'Page Not Found | Sivaranjani Selvaraj',
    description: 'The requested Sivaranjani Selvaraj portfolio page is not available.',
  },
}

function setMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  ) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function setCanonical(url: string) {
  let link = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', url)
}

export function SEO() {
  const location = useLocation()

  useEffect(() => {
    const isKnownRoute = Boolean(pageSEO[location.pathname])
    const currentPage = pageSEO[location.pathname] ?? pageSEO['/404']
    const canonicalURL =
      location.pathname === '/'
        ? `${SITE_URL}/`
        : `${SITE_URL}${location.pathname}`

    document.title = currentPage.title

    setMetaTag('name', 'description', currentPage.description)
    setMetaTag('name', 'author', 'Sivaranjani Selvaraj')
    setMetaTag('name', 'robots', isKnownRoute ? 'index, follow' : 'noindex, follow')

    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:title', currentPage.title)
    setMetaTag('property', 'og:description', currentPage.description)
    setMetaTag('property', 'og:url', canonicalURL)
    setMetaTag('property', 'og:site_name', 'Sivaranjani Selvaraj')
    setMetaTag('property', 'og:image', OG_IMAGE)
    setMetaTag('property', 'og:image:width', '1200')
    setMetaTag('property', 'og:image:height', '630')
    setMetaTag('property', 'og:image:alt', 'Sivaranjani Selvaraj professional portfolio')

    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', currentPage.title)
    setMetaTag('name', 'twitter:description', currentPage.description)
    setMetaTag('name', 'twitter:image', OG_IMAGE)
    setMetaTag('name', 'twitter:image:alt', 'Sivaranjani Selvaraj professional portfolio')

    setCanonical(canonicalURL)
  }, [location.pathname])

  return null
}
