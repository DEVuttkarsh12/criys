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

        <div className="contact-minimal">
          <a href="mailto:criyx.ai@gmail.com" className="contact-email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            criyx.ai@gmail.com
          </a>

          <form className="contact-minimal-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-input-group">
              <label className="contact-label" htmlFor="name">Name</label>
              <input id="name" type="text" className="contact-input" placeholder="Your full name" required />
            </div>
            <div className="contact-input-group">
              <label className="contact-label" htmlFor="email">Email</label>
              <input id="email" type="email" className="contact-input" placeholder="you@company.com" required />
            </div>
            <div className="contact-input-group">
              <label className="contact-label" htmlFor="message">Message</label>
              <textarea id="message" className="contact-input contact-textarea" placeholder="Tell us about your business and what you'd like to automate..." rows={4} required />
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
    </section>
  )
}
