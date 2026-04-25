import React from 'react';

interface Experience {
  role: string;
  company: string;
  status: string;
  points: string[];
  accent: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  metric: string;
  metricLabel: string;
}

const experiences: Experience[] = [
  {
    role: 'AI/ML Intern',
    company: 'UptoSkills',
    status: 'Ongoing',
    points: [
      'Working on machine learning projects and real-world implementations',
      'Hands-on experience in Python, data analysis, and ML models',
    ],
    accent: 'border-primary/30 bg-primary/5',
  },
  {
    role: 'Machine Learning Intern',
    company: 'iStudio',
    status: 'Ongoing',
    points: [
      'Implementing machine learning algorithms on practical problems',
      'Working on ML-based applications end-to-end',
    ],
    accent: 'border-secondary/30 bg-secondary/5',
  },
  {
    role: 'Data Science Intern',
    company: 'CodeB (via IT Vedant)',
    status: 'Completed',
    points: [
      'Data analysis, preprocessing, and ML-based tasks',
      'Hands-on experience with real-world datasets',
    ],
    accent: 'border-border bg-muted/20',
  },
];

const education: Education[] = [
  {
    degree: 'B.Tech Computer Engineering',
    institution: 'Vidyalankar Institute of Technology',
    period: '2023 – 2027',
    metric: '7.3',
    metricLabel: 'CGPA',
  },
  {
    degree: 'HSC (12th Grade)',
    institution: 'Higher Secondary',
    period: '2023',
    metric: '50%',
    metricLabel: 'Score',
  },
  {
    degree: 'SSC (10th Grade)',
    institution: 'Secondary School',
    period: '2021',
    metric: '77%',
    metricLabel: 'Score',
  },
];

export default function ExperienceEducationSection() {
  return (
    <section id="experience" className="py-20 px-6 md:px-10" aria-label="Experience and Education">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-14 reveal-up">
          <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-3 block">
            Background
          </span>
          <h2 className="font-extrabold tracking-tighter text-foreground leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Experience & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Experience — 7 cols */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-6 reveal-left">
              Work Experience
            </p>
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`reveal-left stagger-${i + 1} glass rounded-2xl p-6 border ${exp.accent} hover:border-primary/30 transition-all duration-400 group`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-foreground text-lg leading-tight">{exp.role}</h3>
                    <p className="text-primary text-sm font-semibold mt-0.5">{exp.company}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${exp.status === 'Ongoing' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-muted text-muted-foreground border border-border'}`}>
                    {exp.status}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education — 5 cols */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-6 reveal-right">
              Education
            </p>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={edu.degree}
                  className={`reveal-right stagger-${i + 1} glass rounded-2xl p-6 border border-border/60 hover:border-primary/20 transition-all duration-400`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-base leading-snug mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground text-xs">{edu.institution}</p>
                      <p className="text-muted-foreground/60 text-[11px] mt-1">{edu.period}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="block text-2xl font-extrabold text-primary tracking-tight">{edu.metric}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{edu.metricLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* About blurb */}
            <div className="reveal-right stagger-4 mt-6 glass rounded-2xl p-6 border border-border/40">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-3">About</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I enjoy solving problems, working with data, and creating scalable systems. My goal is to secure an AI/ML internship and contribute to impactful, data-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}