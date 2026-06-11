import { useState, useCallback } from 'react'
import ThreeBackground from './ThreeBackground'
import Typewriter from './Typewriter'

export default function Hero({ isVisible = false }) {
  const services = [
    'AI Agents', 'WhatsApp Automation', 'Voice Agents',
    'Marketing Automation', 'Video & Content AI', 'Custom Workflows',
    'Lead Capture Systems', 'Analytics & Reporting',
  ]

  const [headingDone, setHeadingDone] = useState(false)
  const [subDone, setSubDone] = useState(false)

  const handleHeadingComplete = useCallback(() => {
    setHeadingDone(true)
  }, [])

  const handleSubComplete = useCallback(() => {
    setSubDone(true)
  }, [])

  return (
    <section className="hero-section" id="hero">
      <div className="hero-orbs">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-orb hero-orb--3" />
        <div className="hero-orb hero-orb--4" />
        <div className="hero-orb hero-orb--5" />
      </div>
      <ThreeBackground />
      <div className="hero-overlay" />
      <div className="hero-content">
        <Typewriter
          text="Automate the workflows that slow your business down."
          className="hero-heading"
          speed={42}
          delay={650}
          as="h1"
          onComplete={handleHeadingComplete}
          startTyping={isVisible}
        />
        {headingDone && (
          <Typewriter
            text="AI agents, WhatsApp systems, voice bots, marketing workflows, video automation — Criyx builds the infrastructure that keeps your business running without the manual chaos."
            className="hero-sub"
            speed={20}
            delay={400}
            as="p"
            cursorChar="▌"
            onComplete={handleSubComplete}
          />
        )}
        {subDone && (
          <div className="hero-pills hero-fade-in">
            {services.map((s) => (
              <span key={s} className="hero-pill">{s}</span>
            ))}
          </div>
        )}
        {subDone && (
          <div className="hero-buttons hero-fade-in hero-fade-in--delay">
            <a href="https://cal.com/criyx.ai/30min" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              Schedule Your Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#solutions" className="btn btn-secondary btn-lg">
              Explore Systems
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
