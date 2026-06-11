const stats = [
  { value: '24/7', label: 'Automated response coverage' },
  { value: '2.3s', label: 'Average first response target' },
  { value: '60%+', label: 'Manual task reduction potential' },
  { value: '10x', label: 'Faster lead follow-up' },
]

export default function Results() {
  return (
    <section className="section" id="results">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Results</span>
          <h2 className="section-title reveal reveal-delay-1">
            Systems that save time every single day.
          </h2>
        </div>
        <div className="results-grid">
          {stats.map((s, i) => (
            <div key={s.label} className={`result-card reveal reveal-delay-${i + 1}`}>
              <div className="result-value">{s.value}</div>
              <div className="result-label">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="results-note reveal">
          Example performance targets depend on the workflow and implementation.
        </p>
      </div>
    </section>
  )
}
