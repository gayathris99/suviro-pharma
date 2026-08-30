'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Flower from '@/components/ui/Flower'
import './Navbar.css'

const SEGMENTS = [
  { label: 'Neuro',  color: 'var(--neuro)'  },
  { label: 'Nephro', color: 'var(--nephro)' },
  { label: 'Cardio', color: 'var(--cardio)' },
  { label: 'Gastro', color: 'var(--gastro)' },
]

const NAV_LINKS = [
  { label: 'Home',       href: '/'           },
  { label: 'About',      href: '/about'      },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Products',   href: '/products'   },
  { label: 'Careers',    href: '/careers'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="header-wrap">

      {/* ── Topbar ── */}
      <div className="topbar">
        <div className="topbar-inner">
          <span className="topbar-label">Therapeutic Segments</span>
          <div className="topbar-segments">
            {SEGMENTS.map((s) => (
              <a key={s.label} href="#" className="topbar-segment">
                <span className="segment-dot" style={{ background: s.color }} />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Navbar ── */}
      <nav className={`navbar ${scrolled ? 'navbar--shadow' : ''}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <Flower size={52} spin spinDuration={30} />
            <span className="navbar-logo-text">
              <span className="navbar-logo-name">Suviro Pharmalife</span>
              <span className="navbar-logo-sub">Progress Through Science</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="navbar-links">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>

          {/* CTA */}
          <Link href="/contact" className="navbar-cta">Partner With Us</Link>

          {/* Mobile hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="navbar-mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="navbar-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}