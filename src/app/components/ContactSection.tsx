'use client';
import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend connection point
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-10" aria-label="Contact">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-14 reveal-up">
          <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-extrabold tracking-tighter text-foreground leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Let&apos;s Work Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left — info */}
          <div className="lg:col-span-5 reveal-left">
            <div className="glass rounded-3xl p-8 border border-border/50 h-full flex flex-col justify-between">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I&apos;m actively looking for AI/ML and Full Stack internship opportunities. If you have a project, role, or just want to connect — I&apos;d love to hear from you.
                </p>

                <div className="space-y-5">
                  <a
                    href="mailto:adriandso212006@gmail.com"
                    className="flex items-center gap-4 group hover:text-primary transition-colors"
                    aria-label="Send email to Adrian"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-4.5 h-4.5 text-primary" style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">adriandso212006@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/adrian-25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group hover:text-primary transition-colors"
                    aria-label="Adrian's GitHub profile"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                      <svg className="text-foreground group-hover:text-primary transition-colors" style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">GitHub</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">github.com/adrian-25</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/adrian-dsouza-b19b4933b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group hover:text-primary transition-colors"
                    aria-label="Adrian's LinkedIn profile"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                      <svg className="text-foreground group-hover:text-primary transition-colors" style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">LinkedIn</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">in/adrian-dsouza</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/40">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">Open to Internship Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7 reveal-right">
            <div className="glass rounded-3xl p-8 border border-border/50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3.5 rounded-xl bg-muted/30 border border-border/60 text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/50 focus:bg-muted/50 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-muted/30 border border-border/60 text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/50 focus:bg-muted/50 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full px-4 py-3.5 rounded-xl bg-muted/30 border border-border/60 text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/50 focus:bg-muted/50 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_40px_rgba(110,231,183,0.3)] transition-all duration-300 hover:opacity-90"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}