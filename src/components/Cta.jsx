const contactMethods = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: 'Book a Call',
    desc: '30-minute discovery call to map your automation potential.',
    action: 'Schedule Now',
    href: '#',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: 'Send Email',
    desc: 'Get a detailed proposal and pricing within 24 hours.',
    action: 'hello@criyx.ai',
    href: 'mailto:hello@criyx.ai',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'WhatsApp',
    desc: 'Quick chat with our team. Response in under 5 minutes.',
    action: 'Start Chat',
    href: '#',
  },
]

export default function Cta() {
  return (
    <section className="section" id="cta">
      <div className="cta-bg-glow" />
      <div className="cta-bg-grid" />
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Contact</span>
          <h2 className="section-title reveal reveal-delay-1">
            Ready to build your AI operating system?
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            Tell us about your business and we'll show you exactly what automation can do for you.
          </p>
        </div>

        <div className="cta-grid">
          {contactMethods.map((m) => (
            <div key={m.title} className="cta-card">
              <div className="cta-card-glow" />
              <div className="cta-card-icon">{m.icon}</div>
              <h3 className="cta-card-title">{m.title}</h3>
              <p className="cta-card-desc">{m.desc}</p>
              <a href={m.href} className="cta-card-action">
                <span>{m.action}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="cta-trust">
          <div className="cta-trust-item">
            <span className="cta-trust-value">200+</span>
            <span className="cta-trust-label">Businesses automated</span>
          </div>
          <div className="cta-trust-dot" />
          <div className="cta-trust-item">
            <span className="cta-trust-value">12</span>
            <span className="cta-trust-label">Industries served</span>
          </div>
          <div className="cta-trust-dot" />
          <div className="cta-trust-item">
            <span className="cta-trust-value">98%</span>
            <span className="cta-trust-label">Client satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}
