import React from 'react';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceEducationSection from './components/ExperienceEducationSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollObserver from './components/ScrollObserver';
import CursorGlow from './components/CursorGlow';

export default function HomePage() {
  return (
    <main className="relative bg-background min-h-screen overflow-x-hidden">
      {/* Grain Texture */}
      <div className="grain" aria-hidden="true" />

      {/* Grid Background */}
      <div
        className="fixed inset-0 bg-grid-pattern bg-grid pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Atmospheric blobs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="fixed bottom-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Client-side enhancements */}
      <CursorGlow />
      <ScrollObserver />

      <Header />

      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceEducationSection />
        <CertificationsSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}