import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-shell section-shell--dark relative overflow-hidden">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-500/10" />
      <div className="section-container">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="section-kicker">Projects</span>
          <h2 className="section-title text-slate-950 dark:text-slate-50">
            Featured work with clear outcomes and real traction.
          </h2>
          <p className="section-copy mx-auto">
            Real-world solutions that deliver measurable business value
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === category
                  ? 'text-white dark:text-slate-950'
                  : 'glass-card text-slate-600 hover:bg-white/80 dark:text-slate-300 dark:hover:bg-slate-900/80'
              }`}
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-slate-950 dark:bg-cyan-300 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
                key={project.id}
              >
                <Card className="surface-card group overflow-hidden rounded-[2rem] border-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-800 sm:h-80">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/55 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
                    <img
                      src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {project.liveUrl && (
                      <div className="absolute bottom-4 right-4 z-20">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="translate-y-12 rounded-full bg-white/90 p-3 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-950/90 block"
                        >
                          <ExternalLink size={20} className="text-slate-900 dark:text-white" />
                        </a>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pt-8 pb-4 px-8">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                          <Badge className="border-0 bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-400/10 dark:text-cyan-300">
                            {project.category}
                          </Badge>
                          {project.highlightBadge && (
                            <Badge className="border-0 bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-300">
                              {project.highlightBadge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="mb-2 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                          {project.title}
                        </CardTitle>
                        {project.tagline && (
                          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                            {project.tagline}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Challenge</h4>
                          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Solution</h4>
                          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{project.solution}</p>
                        </div>
                      </div>

                      <div className="space-y-4 border-t border-slate-200 pt-4 sm:border-l sm:border-t-0 sm:pt-0 sm:pl-6 dark:border-slate-800">
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, idx) => (
                              <span
                                key={idx}
                                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-800">
                          <h4 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Impact</h4>
                          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{project.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
