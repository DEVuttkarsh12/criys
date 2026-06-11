const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CEO',
    company: 'BrightPath Services',
    industry: 'Professional Services',
    text: 'We went from missing 40% of leads to responding within 2 minutes. Our revenue jumped 35% in the first quarter alone. The AI handling intake calls was a game changer for our team.',
    rating: 5,
    initials: 'SC',
  },
  {
    name: 'Marcus Johnson',
    title: 'Operations Director',
    company: 'Apex Logistics',
    industry: 'Logistics & Supply Chain',
    text: 'The AI voice agent handles 80% of our intake calls now. My team finally has time to focus on actual clients instead of paperwork. Best operational decision we made this year.',
    rating: 5,
    initials: 'MJ',
  },
  {
    name: 'Priya Patel',
    title: 'Marketing Manager',
    company: 'Luxe Properties',
    industry: 'Real Estate',
    text: 'WhatsApp integration alone saved us 20 hours a week. Our follow-up rate went from 30% to 95%. Leads that used to slip through now get nurtured automatically.',
    rating: 5,
    initials: 'PP',
  },
]

function StarRating({ count }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="testimonials-pattern" />
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Testimonials</span>
          <h2 className="section-title reveal reveal-delay-1">
            Trusted by businesses that value their time.
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            Real stories from teams that transformed their operations with Criyx.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-ambient" />
              <div className="testimonial-quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.15">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <div className="testimonial-top">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-top-right">
                  <StarRating count={t.rating} />
                  <span className="testimonial-badge">Verified</span>
                </div>
              </div>
              <blockquote className="testimonial-text">{t.text}</blockquote>
              <div className="testimonial-divider" />
              <div className="testimonial-bottom">
                <div className="testimonial-author">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.title}, {t.company}</span>
                </div>
                <span className="testimonial-industry">{t.industry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
