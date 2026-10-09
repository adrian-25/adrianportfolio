import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface Project {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  image: string;
  alt: string;
  tag: string;
}

const projects: Project[] = [
  {
    title: 'NextStep Career AI',
    description: 'Full-stack AI platform combining resume analysis and placement prediction to deliver actionable career insights.',
    stack: ['React.js', 'Python', 'Flask', 'Machine Learning', 'NLP'],
    liveUrl: 'https://next-step-career-ai.onrender.com',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17ec421bf-1772186759404.png',
    alt: 'Code displayed across multiple monitors in a dark workspace',
    tag: 'AI / ML',
  },
  {
    title: 'Climate Guard',
    description: 'Explore the live Climate Guard application.',
    stack: ['Live demo'],
    liveUrl: 'https://climateguard-adrian.onrender.com',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=85',
    alt: 'Green plants growing in a sunlit natural setting',
    tag: 'Live',
  },
  {
    title: 'Arcdis',
    description: 'Explore the live Arcdis application.',
    stack: ['Live demo'],
    liveUrl: 'https://arcdis.onrender.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
    alt: 'Analytics dashboards shown on a computer screen',
    tag: 'Live',
  },
  {
    title: 'Memory Leak',
    description: 'Explore the live Memory Leak web application.',
    stack: ['Live demo'],
    liveUrl: 'https://memory-leak-web.onrender.com',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e75b4754-1777110590799.png',
    alt: 'A glowing technical interface in a dark environment',
    tag: 'Live',
  },
  {
    title: 'SegPredict ML Dashboard',
    description: 'K-Means clustering dashboard that segments customers by behavioral data and surfaces business insights.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization'],
    liveUrl: 'https://segpredict-ml-dashboard.onrender.com',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b09aca67-1772313899728.png',
    alt: 'Analytics dashboard with colourful charts and data visualisations',
    tag: 'ML',
  },
  {
    title: 'TrustLens',
    description: 'Explore the live TrustLens application.',
    stack: ['Live demo'],
    liveUrl: 'https://trustlens-34i0.onrender.com',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=85',
    alt: 'A person reviewing information on a laptop',
    tag: 'Live',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10" aria-label="Projects">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-up">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-3 block">Work</span>
            <h2 className="font-extrabold tracking-tighter text-foreground leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Six live applications, built to solve real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={`stagger-${Math.min(index + 1, 6)}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: string }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} live project`}
      className={`group reveal-up ${delay} relative block min-h-[340px] overflow-hidden rounded-3xl border border-border/40 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(110,231,183,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
    >
      <AppImage
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/15" />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-primary/30 bg-primary/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">{project.tag}</span>
          <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors group-hover:border-primary/40 group-hover:text-primary">View live ↗</span>
        </div>
        <div>
          <h3 className="mb-2 text-2xl font-extrabold tracking-tight text-white">{project.title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-stone-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/80">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
