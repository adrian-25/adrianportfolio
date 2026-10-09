import React from 'react';

const certifications = [
  { name: 'Machine Learning Intermediate', issuer: 'Kaggle', icon: '🏅' },
  { name: 'Artificial Intelligence Fundamentals', issuer: 'Certificate', icon: '🤖' },
  { name: 'Python Programming', issuer: 'Certification', icon: '🐍' },
  { name: 'Web Development', issuer: 'Certification', icon: '🌐' },
  { name: 'CDAC Logic Building', issuer: 'CDAC', icon: '🧠' },
];

const achievements = [
  {
    value: '90+',
    label: 'DSA Problems Solved',
    description: 'Consistent problem-solving across arrays, trees, graphs, and dynamic programming.',
    color: 'text-primary',
  },
  {
    value: '6',
    label: 'Live Applications',
    description: 'Full-stack and AI-based apps deployed for people to explore online.',
    color: 'text-secondary',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 md:px-10" aria-label="Certifications and Achievements">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-14 reveal-up">
          <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-3 block">
            Credentials
          </span>
          <h2 className="font-extrabold tracking-tighter text-foreground leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Certifications & Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications — 7 cols */}
          <div className="lg:col-span-7 reveal-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-5">
              Certifications
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications?.map((cert, i) => (
                <div
                  key={cert?.name}
                  className={`reveal-up stagger-${i + 1} glass rounded-2xl p-5 border border-border/50 hover:border-primary/25 transition-all duration-300 hover:shadow-[0_0_20px_rgba(110,231,183,0.05)] group flex items-start gap-4`}
                >
                  <span className="text-2xl shrink-0 mt-0.5" role="img" aria-label={cert?.name}>{cert?.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm leading-snug">{cert?.name}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{cert?.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements — 5 cols */}
          <div className="lg:col-span-5 reveal-right">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-5">
              Achievements
            </p>
            <div className="space-y-4">
              {achievements?.map((ach) => (
                <div
                  key={ach?.label}
                  className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/25 transition-all duration-300"
                >
                  <span className={`block text-4xl font-extrabold tracking-tight ${ach?.color} mb-2`}>
                    {ach?.value}
                  </span>
                  <h3 className="font-bold text-foreground text-base mb-2">{ach?.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ach?.description}</p>
                </div>
              ))}

              {/* Mini stat */}
              <div className="glass rounded-2xl p-5 border border-border/40 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Internship Experience</p>
                  <p className="text-muted-foreground text-xs">Zeno Talent · UptoSkills · iStudio · CodeB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
