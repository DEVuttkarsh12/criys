export default function Cta() {
  return (
    <section className="section" id="cta">
      <div className="cta-card reveal">
        <div className="cta-glow" />
        <h2 className="cta-title">Ready to build your AI operating system?</h2>
        <p className="cta-desc">
          Let Criyx turn your manual workflows into connected automation systems
          built around your exact business process.
        </p>
        <div className="cta-buttons">
          <a href="#" className="btn btn-primary btn-lg">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#" className="btn btn-secondary btn-lg">
            Talk to Criyx
          </a>
        </div>
      </div>
    </section>
  )
}
