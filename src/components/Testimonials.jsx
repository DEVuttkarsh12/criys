const testimonials = [
  {
    role: 'Founder, Service Business',
    text: 'Criyx helped us understand where automation could actually save time instead of just adding more tools.',
  },
  {
    role: 'Marketing Team Lead',
    text: 'The workflow-first approach made it easier to connect our leads, follow-ups, and CRM.',
  },
  {
    role: 'Operations Manager',
    text: 'The system gave our team a cleaner way to manage repetitive conversations and updates.',
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Testimonials</span>
          <h2 className="section-title reveal reveal-delay-1">
            Designed for teams that move fast.
          </h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.role} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#f97316" opacity="0.4">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              </svg>
              <blockquote className="testimonial-text">{t.text}</blockquote>
              <div className="testimonial-author">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
