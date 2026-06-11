import { useState, useCallback } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Process from './components/Process'
import Features from './components/Features'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import useScrollReveal from './hooks/useScrollReveal'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)

  useScrollReveal()

  const handleComplete = useCallback(() => {
    setLoading(false)
    requestAnimationFrame(() => setVisible(true))
  }, [])

  return (
    <>
      {loading && <LoadingScreen onComplete={handleComplete} />}

      <div className={`app${visible ? ' app--visible' : ''}`}>
        <div className="ambient-orbs">
          <div className="ambient-orb ambient-orb--1" />
          <div className="ambient-orb ambient-orb--2" />
          <div className="ambient-orb ambient-orb--3" />
          <div className="ambient-orb ambient-orb--4" />
          <div className="ambient-orb ambient-orb--5" />
          <div className="ambient-orb ambient-orb--6" />
        </div>
        <CustomCursor />
        <Navbar />
        <main>
          <Hero isVisible={visible} />
          <div className="section-bridge" aria-hidden="true" />
          <Solutions />
          <Process />
          <Features />
          <Results />
          <Testimonials />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
