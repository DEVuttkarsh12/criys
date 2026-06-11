import { useEffect, useRef } from 'react'

export default function ThreeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animId

    // Small resolution canvas for extremely high performance
    const w = 400
    const h = 250
    canvas.width = w
    canvas.height = h

    const numPoints = 80
    const centerX = w / 2
    const centerY = h / 2

    // Corner ambient glows (keeps the outer screen areas filled with professional ambient lighting)
    const ambientGlows = [
      { x: 40,  y: 40,  r: 90,  color: 'rgba(217, 119, 6, 0.08)' },
      { x: 360, y: 40,  r: 100, color: 'rgba(234, 88, 12, 0.06)' },
      { x: 50,  y: 210, r: 110, color: 'rgba(249, 115, 22, 0.07)' },
      { x: 350, y: 210, r: 95,  color: 'rgba(217, 119, 6, 0.08)' },
    ]

    // Orbiting symbiote droplets that drift through outer areas
    const droplets = [
      { orbitRadius: 130, speed: 0.5,  size: 28, color: 'rgba(217, 119, 6, 0.25)',  phase: 0 },
      { orbitRadius: 160, speed: -0.4, size: 32, color: 'rgba(234, 88, 12, 0.22)', phase: 2 },
      { orbitRadius: 110, speed: 0.6,  size: 24, color: 'rgba(249, 115, 22, 0.28)', phase: 4 },
      { orbitRadius: 145, speed: -0.3, size: 26, color: 'rgba(251, 191, 36, 0.20)', phase: 1.5 },
    ]

    // Calculates points of a wobbly, organic wiggling circle
    function getBlobPoints(cx, cy, baseRadius, time, speedMult, seed) {
      const points = []
      const t = time * speedMult + seed
      
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2
        
        // Multi-frequency overlapping sine waves to create organic wobbly/dripping edges
        const wobble1 = Math.sin(angle * 3 - t * 1.0) * (baseRadius * 0.16)
        const wobble2 = Math.cos(angle * 5 + t * 1.7) * (baseRadius * 0.10)
        const wobble3 = Math.sin(angle * 2 + t * 0.6) * (baseRadius * 0.12)
        
        const r = baseRadius + wobble1 + wobble2 + wobble3
        
        const x = cx + Math.cos(angle) * r
        const y = cy + Math.sin(angle) * r
        points.push({ x, y })
      }
      return points
    }

    function drawBlob(points, fillStyle) {
      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y)
      }
      ctx.closePath()
      ctx.fillStyle = fillStyle
      ctx.fill()
    }

    function animate(time) {
      // Clear with dark base color matching your theme
      ctx.fillStyle = '#050508'
      ctx.fillRect(0, 0, w, h)

      const t = time * 0.001 // normalize time

      // 1. Draw corner ambient glows to fill the outer regions
      ambientGlows.forEach(g => {
        // Slow pulsing radius
        const pulse = Math.sin(t * 0.5 + g.x) * 10
        ctx.beginPath()
        ctx.fillStyle = g.color
        ctx.arc(g.x, g.y, g.r + pulse, 0, Math.PI * 2)
        ctx.fill()
      })

      // 2. Draw orbiting symbiote droplets that fill the intermediate areas
      droplets.forEach(d => {
        const angle = t * d.speed + d.phase
        // Calculate orbit position around center
        const dx = Math.cos(angle) * d.orbitRadius
        const dy = Math.sin(angle) * d.orbitRadius * 0.6 // flattened ellipse orbit for 3D depth
        
        const cx = centerX + dx
        const cy = centerY + dy

        // Get wobbly points for droplet
        const points = getBlobPoints(cx, cy, d.size, t, 1.5, d.phase * 10)
        drawBlob(points, d.color)
      })

      // 3. Draw central main symbiote (three layers)
      const points1 = getBlobPoints(centerX, centerY, 85, t, 1.1, 0)
      drawBlob(points1, 'rgba(217, 119, 6, 0.45)')

      const points2 = getBlobPoints(centerX, centerY, 68, t, 1.4, 15)
      drawBlob(points2, 'rgba(249, 115, 22, 0.50)')

      const points3 = getBlobPoints(centerX, centerY, 50, t, 1.8, 30)
      drawBlob(points3, 'rgba(251, 191, 36, 0.65)')

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="three-bg"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        filter: 'blur(75px)', // Blurs wobbly shapes into gooey fluid drops
        transform: 'translate3d(0, 0, 0)', // Force GPU hardware acceleration
        opacity: 0.95
      }}
    />
  )
}
