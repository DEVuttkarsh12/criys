const groups = [
  {
    label: 'Conversations',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    items: [
      'Human-like AI conversations',
      'WhatsApp campaigns and utility messages',
    ],
  },
  {
    label: 'Automation',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    items: [
      'Lead capture and qualification',
      'Follow-ups and reminders',
      'CRM updates and pipeline movement',
    ],
  },
  {
    label: 'Insights',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    items: ['Analytics and reporting'],
  },
]

const pipeline = [
  { label: 'Lead Form', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
  { label: 'AI Agent', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg> },
  { label: 'WhatsApp', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
  { label: 'CRM', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg> },
  { label: 'Follow-up', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Systems</span>
          <h2 className="section-title reveal reveal-delay-1">
            Built for real business operations, not just AI demos.
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            Criyx focuses on systems that actually run inside businesses — capturing leads,
            handling conversations, updating CRMs, triggering follow-ups, and reporting performance.
          </p>
        </div>

        <div className="features-card reveal reveal-delay-1">
          <div className="features-card-glow" />
          <div className="features-card-shimmer" />
          <div className="features-layout">
            <div className="features-groups">
              {groups.map((g) => (
                <div key={g.label} className="features-group">
                  <div className="features-group-top">
                    <span className="features-group-icon">{g.icon}</span>
                    <span className="features-group-label">{g.label}</span>
                  </div>
                  <div className="features-group-items">
                    {g.items.map((item) => (
                      <div key={item} className="features-group-item">
                        <div className="features-group-check">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="features-pipeline">
              <div className="pipeline-card">
                <div className="pipeline-header">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                  <span>How it flows</span>
                </div>
                <div className="pipeline-track">
                  <div className="pipeline-rail" />
                  {pipeline.map((node, i) => (
                    <div key={node.label} className="pipeline-step" style={{ animationDelay: `${i * 0.08}s` }}>
                      <div className="pipeline-node">
                        <span className="pipeline-dot">{i + 1}</span>
                        <span className="pipeline-icon">{node.icon}</span>
                        <span className="pipeline-label">{node.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pipeline-footnote">End-to-end automation pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
