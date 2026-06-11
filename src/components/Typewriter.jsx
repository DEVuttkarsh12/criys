import { useState, useEffect, useRef } from 'react'

export default function Typewriter({
  text,
  className,
  speed = 40,
  delay = 0,
  as: Tag = 'h1',
  onComplete,
  cursorChar = '|',
  startTyping = true,
}) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [done, setDone] = useState(false)
  const idxRef = useRef(0)
  const hasRunRef = useRef(false)

  useEffect(() => {
    // Don't start until the trigger prop is true
    if (!startTyping) return
    // Prevent double-running in strict mode
    if (hasRunRef.current) return
    hasRunRef.current = true

    const delayTimer = setTimeout(() => {
      setStarted(true)

      const interval = setInterval(() => {
        idxRef.current += 1
        if (idxRef.current > text.length) {
          clearInterval(interval)
          setDone(true)
          onComplete?.()
          setTimeout(() => setShowCursor(false), 2200)
          return
        }
        setDisplayed(text.slice(0, idxRef.current))
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => {
      clearTimeout(delayTimer)
      hasRunRef.current = false
    }
  }, [startTyping, text, speed, delay, onComplete])

  return (
    <Tag className={`${className}${!started ? ' typewriter-hidden' : ''}`}>
      {displayed}
      {showCursor && (
        <span className={`typewriter-cursor${done ? ' typewriter-cursor--done' : ''}`}>
          {cursorChar}
        </span>
      )}
    </Tag>
  )
}
