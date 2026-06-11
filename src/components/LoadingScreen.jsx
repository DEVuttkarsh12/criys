import { useState, useEffect } from 'react'
import logo from '../assets/criyx.avif'

const messages = [
  'Initializing systems...',
  'Loading neural networks...',
  'Calibrating AI agents...',
  'Preparing interface...',
]

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const duration = 2400
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(eased)

      setMsgIndex(Math.min(Math.floor(eased * messages.length), messages.length - 1))

      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setFading(true)
          setTimeout(onComplete, 500)
        }, 400)
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <div className={`loading-screen${fading ? ' loading-screen--fade' : ''}`}>
      <div className="loading-ambient" />
      <div className="loading-content">
        <img src={logo} alt="Criyx" className="loading-logo" />
        <p className="loading-text">{messages[msgIndex]}</p>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="loading-percent">{Math.round(progress * 100)}%</span>
      </div>
    </div>
  )
}
