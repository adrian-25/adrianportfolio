'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const onScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 pt-5 pointer-events-none">
      <nav
        className={`max-w-[900px] mx-auto rounded-full px-6 py-3 flex justify-between items-center pointer-events-auto transition-all duration-500 ${scrolled ? 'glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.4)]' : 'glass'}`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 focus:outline-none"
          aria-label="Scroll to top"
        >
          <div className="flex items-center gap-2">
            <AppLogo size={28} />
            <span className="font-extrabold text-sm tracking-tighter text-foreground hidden sm:block">
              Adrian<span className="text-primary">.</span>
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:adriandso212006@gmail.com"
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest hover:shadow-[0_0_20px_rgba(110,231,183,0.3)] transition-all duration-300"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded-full glass border border-border/50 flex items-center justify-center text-foreground hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden max-w-[900px] mx-auto mt-2 rounded-2xl glass-strong border border-border/50 shadow-[0_8px_40px_rgba(0,0,0,0.4)] pointer-events-auto overflow-hidden">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3.5 rounded-xl text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 focus:outline-none min-h-[44px]"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:adriandso212006@gmail.com"
              className="mt-2 px-4 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm text-center uppercase tracking-widest min-h-[44px] flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}