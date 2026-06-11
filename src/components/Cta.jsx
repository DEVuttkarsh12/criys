export default function Cta() {
  return (
    <section className="section" id="cta">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Contact</span>
          <h2 className="section-title reveal reveal-delay-1">
            Let's build your AI operating system.
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            Tell us about your business. We'll show you exactly what automation can do.
          </p>
        </div>

        <div className="contact-card reveal reveal-delay-1">
          <div className="contact-card-glow" />
          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-info-header">
                <h3 className="contact-info-title">Get in touch</h3>
                <p className="contact-info-desc">
                  Drop us a message or scan the QR code to email us directly.
                  We typically respond within 2–4 hours.
                </p>
              </div>

              <div className="contact-qr-wrapper">
                <div className="contact-qr-frame">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=mailto:hello@criyx.ai"
                    alt="QR code to email Criyx"
                    className="contact-qr-img"
                    loading="lazy"
                  />
                </div>
                <div className="contact-qr-text">
                  <span className="contact-qr-label">Scan to email us</span>
                  <span className="contact-qr-hint">Opens your default mail app</span>
                </div>
              </div>

              <div className="contact-divider" />

              <div className="contact-alt">
                <span className="contact-alt-label">Prefer a call?</span>
                <a href="#" className="contact-alt-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  Book a 30-min discovery call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <span className="contact-alt-hint">Calendly booking — coming soon</span>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-input-group">
                  <label className="contact-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="contact-input"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="contact-input-group">
                  <label className="contact-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="contact-input"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="contact-input-group">
                  <label className="contact-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="contact-input contact-textarea"
                    placeholder="Tell us about your business and what you'd like to automate..."
                    rows={4}
                    required
                  />
                </div>
                <button type="submit" className="contact-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="contact-trust">
            <div className="contact-trust-item">
              <span className="contact-trust-value">200+</span>
              <span className="contact-trust-label">Businesses automated</span>
            </div>
            <div className="contact-trust-dot" />
            <div className="contact-trust-item">
              <span className="contact-trust-value">12</span>
              <span className="contact-trust-label">Industries served</span>
            </div>
            <div className="contact-trust-dot" />
            <div className="contact-trust-item">
              <span className="contact-trust-value">98%</span>
              <span className="contact-trust-label">Client satisfaction</span>
            </div>
            <div className="contact-trust-dot" />
            <div className="contact-trust-item">
              <span className="contact-trust-value">&lt;4h</span>
              <span className="contact-trust-label">Avg. response time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
