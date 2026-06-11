import { useState } from 'react'
import logo from '../assets/criyx.avif'

const links = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'Systems', href: '#features' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#cta' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="Criyx" className="navbar-logo-img" />
        </a>

        <div className={`navbar-links${open ? ' navbar-links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#cta" className="navbar-cta" onClick={() => setOpen(false)}>
            Book Strategy Call
          </a>
        </div>

        <button className="navbar-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`hamburger-line${open ? ' open' : ''}`} />
          <span className={`hamburger-line${open ? ' open' : ''}`} />
          <span className={`hamburger-line${open ? ' open' : ''}`} />
        </button>
      </div>
    </nav>
  )
}
