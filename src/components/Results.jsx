import { useState, useEffect, useRef } from 'react'

const stats = [
  {
    value: '24/7',
    label: 'Coverage',
    desc: 'Automated response around the clock',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: '2.3s',
    label: 'First Response',
    desc: 'Average speed from lead to contact',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10" />
      </svg>
    ),
  },
  {
    value: '60%+',
    label: 'Task Reduction',
    desc: 'Manual work reclaimed by automation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v4" />
        <path d="m10 14 2 2 2-2" />
      </svg>
    ),
  },
  {
    value: '10x',
    label: 'Lead Velocity',
    desc: 'Faster follow-up on every incoming lead',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

const chartData = [
  { label: 'Jan', value: 35 },
  { label: 'Feb', value: 48 },
  { label: 'Mar', value: 52 },
  { label: 'Apr', value: 68 },
  { label: 'May', value: 82 },
  { label: 'Jun', value: 100 },
]

export default function Results() {
  const [chartVisible, setChartVisible] = useState(false)
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(chartRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="results">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Results</span>
          <h2 className="section-title reveal reveal-delay-1">
            Systems that save time every single day.
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            Real performance data from businesses using Criyx automation.
          </p>
        </div>

        <div className="results-card">
          <div className="results-card-glow" />
          <div className="results-card-shimmer" />

          <div className="results-body">
            <div className="results-stats-grid">
              {stats.map((s, i) => (
                <div key={s.label} className="results-stat-card">
                  <div className="results-stat-icon">{s.icon}</div>
                  <div className="results-stat-value">{s.value}</div>
                  <div className="results-stat-label">{s.label}</div>
                  <div className="results-stat-desc">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="results-chart" ref={chartRef}>
              <div className="results-chart-header">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                <span>Lead Response Efficiency</span>
                <span className="results-chart-trend">+65%</span>
              </div>
              <div className="results-chart-body">
                <div className="results-chart-y-axis">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                </div>
                <div className="results-chart-bars">
                  {chartData.map((m) => (
                    <div key={m.label} className="results-chart-col">
                      <div className="results-chart-bar-wrapper">
                        <div
                          className="results-chart-bar"
                          style={{ height: chartVisible ? `${m.value}%` : '0%' }}
                        >
                          <span className="results-chart-bar-value">{m.value}%</span>
                        </div>
                      </div>
                      <span className="results-chart-bar-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
