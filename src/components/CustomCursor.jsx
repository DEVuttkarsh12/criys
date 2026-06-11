import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current
    if (!cursor || !trail) return

    let cx = -100, cy = -100
    let tx = -100, ty = -100
    let visible = false

    function onMove(e) {
      cx = e.clientX
      cy = e.clientY
      if (!visible) {
        visible = true
        cursor.style.opacity = 1
        trail.style.opacity = 0.4
      }
    }

    function onLeave() {
      visible = false
      cursor.style.opacity = 0
      trail.style.opacity = 0
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    function animate() {
      tx += (cx - tx) * 0.12
      ty += (cy - ty) * 0.12

      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      trail.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="custom-cursor-trail" />
    </>
  )
}
