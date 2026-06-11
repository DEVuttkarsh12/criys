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
                <div className="contact-info-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Typically responds in 2–4 hours
                </div>
                <h3 className="contact-info-title">Let's talk</h3>
                <p className="contact-info-desc">
                  Choose the way that works best for you. We'll get back to you fast.
                </p>
              </div>

              <div className="contact-qr-section">
                <div className="contact-qr-wrapper">
                  <div className="contact-qr-frame">
                    <div className="contact-qr-corner contact-qr-corner--tl" />
                    <div className="contact-qr-corner contact-qr-corner--tr" />
                    <div className="contact-qr-corner contact-qr-corner--bl" />
                    <div className="contact-qr-corner contact-qr-corner--br" />
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
                    <a href="mailto:hello@criyx.ai" className="contact-qr-email">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      hello@criyx.ai
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-divider" />

              <div className="contact-alt">
                <div className="contact-alt-header">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  <span className="contact-alt-label">Book a discovery call</span>
                </div>
                <p className="contact-alt-desc">
                  Pick a time that works for you. We'll map out your automation potential in 30 minutes.
                </p>
                <a href="#" className="contact-alt-btn">
                  <span>Schedule your call</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <span className="contact-alt-footnote">Calendly integration — coming soon</span>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form-header">
                  <span className="contact-form-title">Send us a message</span>
                  <span className="contact-form-hint">We reply within 2–4 hours</span>
                </div>
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
