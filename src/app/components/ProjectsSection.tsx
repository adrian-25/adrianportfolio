import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface Project {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  featured: boolean;
  image: string;
  alt: string;
  tag: string;
}

const projects: Project[] = [
{
  title: 'NextStep Career AI',
  description: 'Full-stack AI platform combining Resume Analysis and Placement Prediction. Uses ML and NLP to analyze resumes, predict job roles, and deliver actionable career insights.',
  stack: ['React.js', 'Python', 'Flask', 'Machine Learning', 'NLP'],
  liveUrl: 'https://next-step-career-ai-c5t5.vercel.app/',
  featured: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17ec421bf-1772186759404.png",
  alt: 'Dark code editor interface on multiple screens, dim ambient lighting, deep shadows, dark workspace with glowing monitors',
  tag: 'Featured'
},
{
  title: 'Customer Segmentation ML Dashboard',
  description: 'K-Means clustering dashboard that segments customers by behavioral data. Includes data preprocessing, feature engineering, and business insight visualizations.',
  stack: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization'],
  liveUrl: 'https://segpredict-ml-dashboard.vercel.app/login',
  featured: false,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b09aca67-1772313899728.png",
  alt: 'Dark analytics dashboard with colorful charts and data visualizations, dim background, moody lighting',
  tag: 'ML'
},
{
  title: 'Retail Sales Analysis',
  description: 'Exploratory data analysis identifying trends and patterns in retail datasets, with visualizations for data-driven business decision making.',
  stack: ['Python', 'Pandas', 'Matplotlib'],
  featured: false,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fdf02348-1766525284996.png",
  alt: 'Dark financial charts and graphs on screen, moody low-key lighting, shadowed office environment',
  tag: 'Data'
},
{
  title: 'Virtual ATM Web Application',
  description: 'Web-based ATM system simulating real banking operations — authentication, transactions, and persistent data storage.',
  stack: ['Flask', 'SQLite', 'HTML', 'CSS'],
  featured: false,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e75b4754-1777110590799.png",
  alt: 'Dark banking terminal interface with glowing screen, dim industrial environment, low-key shadows',
  tag: 'Web'
}];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10" aria-label="Projects">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-up">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-3 block">
              Work
            </span>
            <h2 className="font-extrabold tracking-tighter text-foreground leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Real applications — deployed, functional, and built to solve actual problems.
          </p>
        </div>

        {/* Bento Grid
           Row 1: [NextStep cs-2] [CustomerSeg cs-1]
           Row 2: [RetailSales cs-1] [VirtualATM cs-2]
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Featured: NextStep — col-span-2 */}
          <div className="md:col-span-2 reveal-up stagger-1">
            <FeaturedProjectCard project={projects[0]} />
          </div>

          {/* CustomerSeg — col-span-1 */}
          <div className="reveal-up stagger-2">
            <SmallProjectCard project={projects[1]} />
          </div>

          {/* RetailSales — col-span-1 */}
          <div className="reveal-up stagger-3">
            <SmallProjectCard project={projects[2]} />
          </div>

          {/* VirtualATM — col-span-2 */}
          <div className="md:col-span-2 reveal-up stagger-4">
            <WideProjectCard project={projects[3]} />
          </div>
        </div>
      </div>
    </section>);

}

function FeaturedProjectCard({ project }: {project: Project;}) {
  return (
    <div className="group relative rounded-3xl overflow-hidden h-[380px] md:h-[420px] border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(110,231,183,0.08)]">
      <AppImage
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 66vw"
        priority />

      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/20 text-primary border border-primary/30">
            {project.tag}
          </span>
          {project.liveUrl &&
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20 hover:border-primary/40"
            aria-label={`View ${project.title} live`}>

              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          }
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">{project.title}</h3>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-lg">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) =>
            <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/8 text-white/70 border border-white/10">
                {t}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>);

}

function SmallProjectCard({ project }: {project: Project;}) {
  return (
    <div className="group relative rounded-3xl overflow-hidden h-[280px] md:h-[420px] border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(110,231,183,0.07)]">
      <AppImage
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-secondary/20 text-secondary border border-secondary/30">
            {project.tag}
          </span>
          {project.liveUrl &&
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label={`View ${project.title} live`}>

              <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          }
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-white mb-2">{project.title}</h3>
          <p className="text-stone-400 text-xs leading-relaxed mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((t) =>
            <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/8 text-white/60 border border-white/10">
                {t}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>);

}

function WideProjectCard({ project }: {project: Project;}) {
  return (
    <div className="group relative rounded-3xl overflow-hidden h-[220px] border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(110,231,183,0.07)]">
      <AppImage
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 66vw" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      <div className="absolute inset-0 flex flex-col justify-center p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-muted/50 text-muted-foreground border border-border">
            {project.tag}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">{project.title}</h3>
        <p className="text-stone-400 text-sm leading-relaxed max-w-lg mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) =>
          <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/8 text-white/60 border border-white/10">
              {t}
            </span>
          )}
        </div>
      </div>
    </div>);

}