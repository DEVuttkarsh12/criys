const solutions = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'WhatsApp Automation',
    desc: 'Automate customer conversations, inquiries, appointment reminders, marketing campaigns, and lead qualification entirely through structured WhatsApp workflows — no manual replies needed.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
    title: 'AI Voice Agents',
    desc: 'Deploy human-like AI voice agents that handle inbound and outbound calls — qualify leads, book appointments, answer FAQs, and follow up automatically, 24/7.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Voice Automation',
    desc: 'Build intelligent voice flows for call routing, interactive voice menus, appointment confirmations, payment reminders, and automated notifications — all without human operators.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: 'Video & Voice Cloning',
    desc: 'Clone voices with stunning accuracy and generate realistic video content from simple text input — perfect for personalized outreach, training videos, and scalable brand messaging.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
      </svg>
    ),
    title: 'Video Generation',
    desc: 'Create high-quality, AI-generated video content from text prompts — product demos, social media ads, onboarding videos, and explainer content, produced in minutes not weeks.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Marketing Automation',
    desc: 'Design multi-channel marketing campaigns with automated follow-ups, lead nurturing sequences, behavior-based triggers, and personalized customer journeys that drive conversions.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: 'CRM & Lead Pipelines',
    desc: 'Capture, score, and route leads through automated sales pipelines. Sync with your existing CRM or use our built-in system to track every interaction without manual entry.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
      </svg>
    ),
    title: 'Custom AI Workflows',
    desc: 'Connect your forms, websites, CRMs, calendars, email, and Slack into custom automation workflows that trigger actions based on real-time business events and data changes.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
        <path d="M8 6v12" />
        <path d="M16 6v12" />
        <path d="M12 6v12" />
      </svg>
    ),
    title: 'Business Analytics',
    desc: 'Get a real-time view of your business performance — track lead sources, conversion rates, response times, campaign ROI, and workflow activity all in one unified dashboard.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'We build fast, responsive websites and full-scale web applications — from landing pages to complex SaaS platforms — designed to convert visitors and scale with your business.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <line x1="12" x2="12.01" y1="18" y2="18" />
      </svg>
    ),
    title: 'App Development',
    desc: 'Design and develop native iOS and Android applications with clean, intuitive interfaces, robust backend APIs, and real-time data sync — built for performance and user delight.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
    title: 'Custom Software',
    desc: 'Build bespoke software tailored to your operations — internal dashboards, admin panels, API integrations, data processing tools, and anything else your business needs to run smoothly.',
  },
]

export default function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">What We Build</span>
          <h2 className="section-title reveal reveal-delay-1">
            Automation, AI, and software — built for how your business actually runs.
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            From AI voice agents to custom dashboards, we build the systems that handle the work so your team can focus on what matters.
          </p>
        </div>
        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <div key={s.title} className={`solution-card reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="solution-icon">{s.icon}</div>
              <h3 className="solution-title">{s.title}</h3>
              <p className="solution-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
