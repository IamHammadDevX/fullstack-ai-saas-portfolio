import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../mock';
import * as LucideIcons from 'lucide-react';

const TechStack = () => {
  const categories = [
    { title: 'Frontend', items: techStack.frontend, delay: 0.1 },
    { title: 'Backend', items: techStack.backend, delay: 0.2 },
    { title: 'Databases', items: techStack.databases, delay: 0.3 },
    { title: 'DevOps / Cloud', items: techStack.devopsCloud, delay: 0.4 },
    { title: 'AI / LLM', items: techStack.aiMl, delay: 0.5 },
    { title: 'Blockchain', items: techStack.blockchain, delay: 0.6 },
    { title: 'Trading', items: techStack.trading, delay: 0.7 }
  ];

  return (
    <section id="techstack" className="section-shell section-shell--muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:28px_28px] opacity-60 dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]" />

      <div className="section-container">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-24"
        >
          <span className="section-kicker">Tech Stack</span>
          <h2 className="section-title text-slate-950 dark:text-slate-50">
            Tools chosen for speed, scale, and maintainability.
          </h2>
          <p className="section-copy mx-auto">
            Modern tools and technologies I use to build production-grade systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: category.delay }}
              className="glass-card group rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="mb-8 flex items-center text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                <span className="mr-4 h-1 w-8 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-12" />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-1 min-[1180px]:grid-cols-2">
                {category.items.map((tech, techIndex) => {
                  const IconComponent = LucideIcons[tech.icon] || LucideIcons.Terminal;
                  return (
                    <motion.div 
                      key={techIndex} 
                      whileHover={{ scale: 1.05 }}
                      className="surface-card flex min-w-0 cursor-default items-center rounded-2xl p-3 transition-all hover:shadow-md"
                    >
                      <div className="mr-3 text-cyan-600 dark:text-cyan-300">
                        <IconComponent strokeWidth={1.5} size={20} />
                      </div>
                      <span className="min-w-0 break-words text-sm font-semibold text-slate-800 dark:text-slate-200">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
