'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';


const badges = [
  { label: 'AI/ML Engineer', color: 'text-primary border-primary/30 bg-primary/5' },
  { label: 'Full Stack Dev', color: 'text-secondary border-secondary/30 bg-secondary/5' },
  { label: 'Python', color: 'text-muted-foreground border-border bg-muted/30' },
  { label: 'React.js', color: 'text-muted-foreground border-border bg-muted/30' },
];

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    title.style.opacity = '0';
    title.style.transform = 'translateY(30px)';
    const timer = setTimeout(() => {
      title.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
    e.currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-10 pt-24 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Portrait framed by the animated ring */}
      <div className="absolute right-8 top-1/3 w-[400px] h-[400px] hidden lg:block" aria-label="Portrait of Adrian Dsouza">
        <div className="w-full h-full border border-primary/5 rounded-full animate-spin-slow absolute inset-0" />
        <div className="absolute inset-8 border border-dashed border-secondary/8 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        <div className="absolute inset-5 overflow-hidden rounded-full border border-primary/30 bg-muted shadow-[0_0_50px_rgba(110,231,183,0.16)]">
          <Image
            src="/assets/images/adrian-dsouza.jpg"
            alt="Adrian Dsouza"
            fill
            priority
            sizes="400px"
            className="object-cover object-[50%_32%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>

      <div ref={containerRef} className="max-w-[1300px] mx-auto w-full">
        {/* Status badge */}
        <div className="reveal-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-primary">
            Open to AI/ML & Full Stack Internships
          </span>
        </div>

        {/* Main heading */}
        <h1
          ref={titleRef}
          className="font-extrabold leading-[0.92] tracking-tighter mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
        >
          <span className="block text-foreground">Adrian</span>
          <span className="block text-gradient-primary animate-gradient">Dsouza.</span>
        </h1>

        {/* Role line */}
        <div className="reveal-up stagger-2 flex flex-wrap items-center gap-3 mb-6">
          {badges.map((b) => (
            <span
              key={b.label}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${b.color} transition-all duration-300 hover:scale-105`}
            >
              {b.label}
            </span>
          ))}
          <span className="text-muted-foreground text-sm font-medium hidden sm:block">
            @ VIT Mumbai
          </span>
        </div>

        {/* Tagline */}
        <p className="reveal-up stagger-3 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mb-4">
          Building AI-powered applications with real-world impact.
        </p>

        {/* Description */}
        <p className="reveal-up stagger-4 text-sm md:text-base text-muted-foreground/70 leading-relaxed max-w-xl mb-10">
          Computer Engineering student passionate about AI/ML and Full Stack Development — focused on intelligent systems and scalable web applications.
        </p>

        {/* CTAs */}
        <div className="reveal-up stagger-5 flex flex-wrap gap-4 items-center">
          <button
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_40px_rgba(110,231,183,0.35)] transition-all duration-300"
            style={{ transition: 'box-shadow 0.3s ease' }}
            aria-label="View Projects"
          >
            View Projects
          </button>
          <a
            href="/Adrian__Dsouza_Resume.pdf"
            download="Adrian__Dsouza_260427_161400.pdf"
            className="px-8 py-4 rounded-full glass border font-bold text-sm uppercase tracking-widest text-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
          >
            DOWNLOAD RESUME
          </a>
          <button
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full border border-secondary/30 text-secondary font-bold text-sm uppercase tracking-widest hover:bg-secondary/10 transition-all duration-300"
            aria-label="Contact Me"
          >
            Contact Me
          </button>
        </div>

        {/* Stats row */}
        <div className="reveal-up stagger-6 flex flex-wrap gap-8 mt-14 pt-8 border-t border-border/50">
          {[
            { val: '6', label: 'Live Projects' },
            { val: '4', label: 'Internships' },
            { val: '90+', label: 'DSA Problems' },
            { val: '5+', label: 'Certifications' },
          ].map((s) => (
            <div key={s.label}>
              <span className="block text-2xl font-extrabold text-foreground tracking-tight">{s.val}</span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}
