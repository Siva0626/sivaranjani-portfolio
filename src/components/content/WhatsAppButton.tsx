import { trackPortfolioEvent } from '../../app/analytics'
import { whatsAppUrl } from '../../content/portfolio'

export function WhatsAppButton() {
  return (
    <a
      href={whatsAppUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sivaranjani on WhatsApp about an opportunity"
      title="Chat with Sivaranjani on WhatsApp"
      onClick={() => trackPortfolioEvent('whatsapp_cta', { source: 'floating_button' })}
    >
      <span aria-hidden="true">💬</span>
      <span>WhatsApp</span>
    </a>
  )
}
