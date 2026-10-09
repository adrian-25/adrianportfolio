import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
  accent: string;
  colSpan: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'C++', 'Java'],
    accent: 'text-primary border-primary/20',
    colSpan: 'col-span-1',
  },
  {
    title: 'Web Development',
    skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Tailwind CSS'],
    accent: 'text-secondary border-secondary/20',
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Machine Learning',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'K-Means Clustering', 'Feature Engineering', 'Data Preprocessing'],
    accent: 'text-primary border-primary/20',
    colSpan: 'col-span-1',
  },
  {
    title: 'Data Analysis',
    skills: ['EDA', 'Data Cleaning', 'Matplotlib'],
    accent: 'text-secondary border-secondary/20',
    colSpan: 'col-span-1',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'SQLite', 'MongoDB'],
    accent: 'text-primary border-primary/20',
    colSpan: 'col-span-1',
  },
  {
    title: 'Tools',
    skills: ['GitHub', 'Google Colab', 'VS Code', 'Microsoft Azure'],
    accent: 'text-muted-foreground border-border',
    colSpan: 'col-span-1',
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'OOP', 'REST APIs', 'Artificial Intelligence'],
    accent: 'text-secondary border-secondary/20',
    colSpan: 'col-span-1',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 md:px-10" aria-label="Skills">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="mb-14 reveal-up">
          <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-3 block">
            Technical Arsenal
          </span>
          <h2 className="font-extrabold tracking-tighter text-foreground leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Skills & Technologies
          </h2>
        </div>

        {/* Bento Grid — 4 cols
          Row 1: [Programming cs-1] [WebDev cs-2] [ML/Data cs-1]
          Row 2: [Analysis cs-1] [Databases cs-1] [Tools cs-1] [CoreConcepts cs-1]
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {/* Card 0: Programming — col-span-1 */}
          <SkillCard category={skillCategories[0]} delay="stagger-1" />

          {/* Card 1: Web Development — col-span-2 */}
          <div className={`md:col-span-2 reveal-up stagger-2`}>
            <SkillCardInner category={skillCategories[1]} />
          </div>

          {/* Card 2: ML & Data — col-span-1 */}
          <SkillCard category={skillCategories[2]} delay="stagger-3" />

          {/* Card 3: Analysis — col-span-1 */}
          <SkillCard category={skillCategories[3]} delay="stagger-1" />

          {/* Card 4: Databases — col-span-1 */}
          <SkillCard category={skillCategories[4]} delay="stagger-2" />

          {/* Card 5: Tools — col-span-1 */}
          <SkillCard category={skillCategories[5]} delay="stagger-3" />

          {/* Card 6: Core Concepts — col-span-1 */}
          <SkillCard category={skillCategories[6]} delay="stagger-4" />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, delay }: { category: SkillCategory; delay: string }) {
  return (
    <div className={`reveal-up ${delay}`}>
      <SkillCardInner category={category} />
    </div>
  );
}

function SkillCardInner({ category }: { category: SkillCategory }) {
  return (
    <div className="glass rounded-2xl p-6 h-full border hover:border-primary/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(110,231,183,0.06)] group">
      <h3 className={`text-xs font-bold uppercase tracking-[0.3em] mb-4 ${category.accent.split(' ')[0]}`}>
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border text-foreground/80 border-border/60 bg-muted/30 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
