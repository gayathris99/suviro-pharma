'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './Navbar.css'

const navItems = [
  {
    label: 'About Us',
    dropdown: [
      { label: 'Vision & Mission',   href: '/about/vision-mission' },
      { label: 'About Suviro',       href: '/about' },
      { label: 'Board of Directors', href: '/about/board' },
      { label: 'Top Leadership',     href: '/about/leadership' },
    ],
  },
  {
    label: 'Products',
    href:  '/products',
  },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Dropdown open/close with small delay so
  // the mouse can travel from button → panel
  const openDropdown  = (label) => {
    clearTimeout(window._dropdownTimer)
    setActiveDropdown(label)
  }

  const closeDropdown = () => {
    window._dropdownTimer = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const cancelClose = () => {
    clearTimeout(window._dropdownTimer)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      {/* ── Logo ── */}
      <Link href="/" className="navbar-logo">
        Suviro Pharmalife Pvt Ltd.
      </Link>

      {/* ── Desktop nav ── */}
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="nav-item"
            onMouseEnter={() => item.dropdown && openDropdown(item.label)}
            onMouseLeave={() => item.dropdown && closeDropdown()}
          >
            {item.dropdown ? (
              <>
                {/* Trigger */}
                <button className={`nav-btn ${activeDropdown === item.label ? 'active' : ''}`}>
                  {item.label}
                </button>

                {/* Dropdown */}
                {activeDropdown === item.label && (
                  <div
                    className="dropdown"
                    onMouseEnter={cancelClose}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="dropdown-inner">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="dropdown-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* ── Get in Touch ── */}
      <Link href="/contact" className="navbar-cta">
        Get in Touch
      </Link>

      {/* ── Mobile hamburger ── */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="mobile-menu">

          {/* About Us section */}
          <p className="mobile-section-label">About Us</p>
          {navItems[0].dropdown.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {sub.label}
            </Link>
          ))}

          <div className="mobile-divider" />

          {/* Products */}
          <Link
            href="/products"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  )
}