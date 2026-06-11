const footerLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#cta' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">C</span>
          <span>Criyx</span>
        </div>
        <p className="footer-links">
          {footerLinks.map((l, i) => (
            <span key={l.href}>
              <a href={l.href}>{l.label}</a>
              {i < footerLinks.length - 1 && <span className="footer-divider">/</span>}
            </span>
          ))}
        </p>
        <p className="footer-text">
          AI Automation &middot; WhatsApp Systems &middot; Voice Agents &middot; CRM Workflows
        </p>
        <p className="footer-copy">&copy; 2026 Criyx. All rights reserved.</p>
      </div>
    </footer>
  )
}
