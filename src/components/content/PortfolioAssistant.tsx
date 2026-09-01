import { useState } from 'react'
import { Link } from 'react-router-dom'
import { trackPortfolioEvent } from '../../app/analytics'
import { siteContent, whatsAppUrl } from '../../content/portfolio'

type Answer = { text: string; to?: string; label?: string; href?: string }

function answerFor(question: string): Answer {
  const value = question.toLowerCase()
  if (/(contact|email|reach)/.test(value)) return { text: 'You can send an enquiry through the contact page or email Sivaranjani directly.', to: '/contact', label: 'Contact Sivaranjani' }
  if (/whatsapp/.test(value)) return { text: 'You can start a professional enquiry through WhatsApp.', href: whatsAppUrl, label: 'Open WhatsApp' }
  if (/(project|work available)/.test(value)) return { text: 'Selected public work will be added as it becomes available. Some professional work is private and is not displayed publicly.', to: '/projects', label: 'View work and projects' }
  if (/(course|content|instructional|learning)/.test(value)) return { text: 'Sivaranjani works on instructional design, learning-content structure, Data Analysis course creation, and PPT-based course material.', to: '/course-creation', label: 'Explore course creation' }
  if (/(data|analysis|cleaning)/.test(value)) return { text: 'The portfolio presents data cleaning, data analysis, and employee-management-related analysis as connected professional capabilities.', to: '/data-analysis', label: 'Explore data analysis' }
  if (/(operation|management)/.test(value)) return { text: 'Her operations and management work includes office operations, employee-related operations, monitoring, day-to-day activities, and operational problem solving.', to: '/capabilities', label: 'View capabilities' }
  if (/(digital|ai|workflow|vibe|website)/.test(value)) return { text: 'Her digital work includes poster, brochure, and PPT creation, alongside AI-assisted workflows and vibe coding as an AI-assisted digital development capability.', to: '/capabilities', label: 'View capabilities' }
  return { text: 'Sivaranjani is an Operations & Digital Workflow Professional. I can help you explore her capabilities, public work information, course creation, data analysis, or contact options.', to: '/capabilities', label: 'Explore capabilities' }
}

export function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState<Answer | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const cleanQuestion = question.trim()
    if (!cleanQuestion) return
    setAnswer(answerFor(cleanQuestion))
    trackPortfolioEvent('chatbot_interaction', { question: cleanQuestion })
  }

  return <aside className="portfolio-assistant" aria-label="Sivaranjani Portfolio Assistant">
    {isOpen && <div className="portfolio-assistant__panel">
      <div className="portfolio-assistant__heading"><div><p className="eyebrow">Portfolio guide</p><h2>Sivaranjani Portfolio Assistant</h2></div><button type="button" onClick={() => setIsOpen(false)} aria-label="Close portfolio assistant">×</button></div>
      <p>Ask about capabilities, public work, course creation, data analysis, or contact options. Answers use approved portfolio information only.</p>
      <form onSubmit={handleSubmit}><label htmlFor="portfolio-question">Your question</label><input id="portfolio-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="What capabilities are available?" /><button className="button button--primary" type="submit">Ask</button></form>
      {answer && <div className="portfolio-assistant__answer" aria-live="polite"><p>{answer.text}</p>{answer.to && answer.label && <Link to={answer.to}>{answer.label}</Link>}{answer.href && answer.label && <a href={answer.href} target="_blank" rel="noopener noreferrer">{answer.label}</a>}</div>}
    </div>}
    <button className="portfolio-assistant__trigger" type="button" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>Ask the portfolio assistant</button>
  </aside>
}
