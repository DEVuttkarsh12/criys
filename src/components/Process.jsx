import { useState, useEffect, useCallback } from 'react'

const overview = [
  {
    number: '01',
    title: 'Discovery & Audit',
    subtitle: 'Understand before you build',
    desc: 'We study your current operations, map every touchpoint, and identify where automation creates the most value.',
  },
  {
    number: '02',
    title: 'Design & Build',
    subtitle: 'Engineer the system',
    desc: 'We architect a custom automation layer — AI agents, CRM flows, APIs — wired to work exactly how your business runs.',
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    subtitle: 'Ship and improve continuously',
    desc: 'We deploy, monitor every interaction, and keep tuning so your automation gets sharper over time.',
  },
]

const detailSteps = [
  {
    number: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: 'Discovery Session',
    subtitle: 'Understand your business',
    desc: 'We sit down with your team to understand your business, your customers, and the repetitive tasks eating your time. This sets the foundation for everything we build together.',
    details: ['Understand your goals and pain points', 'Map customer touchpoints and channels', 'Identify high-ROI automation targets'],
  },
  {
    number: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" x2="21" y1="6" y2="6" />
        <line x1="8" x2="21" y1="12" y2="12" />
        <line x1="8" x2="21" y1="18" y2="18" />
        <line x1="3" x2="3.01" y1="6" y2="6" />
        <line x1="3" x2="3.01" y1="12" y2="12" />
        <line x1="3" x2="3.01" y1="18" y2="18" />
      </svg>
    ),
    title: 'Workflow Audit',
    subtitle: 'Find every bottleneck',
    desc: 'We trace every lead, every conversation, every manual handoff across your operations. Documenting your current process reveals exactly where automation creates the most value.',
    details: ['Audit existing tools and integrations', 'Document lead flow from capture to close', 'Quantify time spent on repetitive tasks'],
  },
  {
    number: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
      </svg>
    ),
    title: 'Solution Design',
    subtitle: 'Architect the system',
    desc: 'We design a custom automation system tailored to your workflows — choosing the right mix of AI agents, chatbots, CRM triggers, and API integrations to solve each bottleneck.',
    details: ['Design AI voice and chat workflows', 'Plan CRM and tool integrations', 'Define triggers, actions, and fallbacks'],
  },
  {
    number: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Build & Connect',
    subtitle: 'Develop the automation layer',
    desc: 'We build the automation layer, connect your CRM and tools, set up AI agents, and wire everything together into one seamless system that works the way your business does.',
    details: ['Develop automation pipelines', 'Integrate with existing systems', 'Configure AI agents and messaging flows'],
  },
  {
    number: '05',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v4" />
        <path d="m10 14 2 2 2-2" />
      </svg>
    ),
    title: 'Test & Launch',
    subtitle: 'Go live with confidence',
    desc: 'We run your real scenarios, catch edge cases, and deploy with confidence. Your team gets hands-on training and full documentation so you own the system from day one.',
    details: ['End-to-end testing with your data', 'Team training and knowledge transfer', 'Staged rollout with rollback plan'],
  },
  {
    number: '06',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Monitor & Optimize',
    subtitle: 'Keep getting better',
    desc: 'Automation is not set-and-forget. We track every interaction, fine-tune responses based on real performance, and evolve the system as your business grows and changes.',
    details: ['Real-time performance monitoring', 'A/B testing and response tuning', 'Quarterly reviews and continuous improvement'],
  },
]

export default function Process() {
  const [open, setOpen] = useState(false)

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setOpen(false)
  }, [])

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, handleKeyDown])

  return (
    <>
      <section className="section" id="process">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag reveal">How it works</span>
            <h2 className="section-title reveal reveal-delay-1">
              From messy operations to automated systems in three steps.
            </h2>
            <p className="section-desc reveal reveal-delay-2">
              We don't just throw AI at your problems. We study your workflow, build what fits, and keep making it better — so your automation actually works.
            </p>
          </div>

          <div className="process-steps">
            {overview.map((s, i) => (
              <div key={s.title} className={`process-step reveal reveal-delay-${i + 1}`}>
                <div className="process-step-number">{s.number}</div>
                <div className="process-step-content">
                  <span className="process-step-subtitle">{s.subtitle}</span>
                  <h3 className="process-step-title">{s.title}</h3>
                  <p className="process-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="process-action">
            <button className="process-cta" onClick={() => setOpen(true)}>
              <span>See the full process</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {open && (
        <div className="process-overlay" onClick={() => setOpen(false)}>
          <div className="process-modal" onClick={(e) => e.stopPropagation()}>
            <div className="process-modal-header">
              <span className="process-modal-tag">How it works</span>
              <h3 className="process-modal-title">The complete process, start to finish</h3>
              <button className="process-modal-close" onClick={() => setOpen(false)} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="process-modal-grid">
              {detailSteps.map((s) => (
                <div key={s.title} className="process-modal-card">
                  <div className="process-modal-card-top">
                    <div className="process-modal-card-icon">{s.icon}</div>
                    <div className="process-modal-card-number">{s.number}</div>
                  </div>
                  <div className="process-modal-card-content">
                    <span className="process-modal-card-subtitle">{s.subtitle}</span>
                    <h4 className="process-modal-card-title">{s.title}</h4>
                    <p className="process-modal-card-desc">{s.desc}</p>
                    <ul className="process-modal-card-list">
                      {s.details.map((d) => (
                        <li key={d} className="process-modal-card-item">{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
