export type PortfolioEvent =
  | 'page_view'
  | 'contact_submit'
  | 'email_cta'
  | 'whatsapp_cta'
  | 'chatbot_interaction'

export function trackPortfolioEvent(event: PortfolioEvent, detail: Record<string, string> = {}) {
  window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail: { event, ...detail } }))
}
