import React from 'react';
import { motion } from 'framer-motion';
import { about, personalInfo } from '../mock';
import { CheckCircle2, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-shell section-shell--muted overflow-hidden">
      <div className="absolute -right-12 top-12 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10" />
      <div className="absolute -left-10 bottom-0 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl dark:bg-teal-500/10" />

      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7">
            <span className="section-kicker">About</span>
            <h2 className="section-title text-slate-950 dark:text-slate-50">
              A builder who cares about the product, not just the code.
            </h2>
            <div className="glass-card mt-8 rounded-[2rem] p-8 sm:p-10">
              {about.story.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg ${index > 0 ? 'mt-6' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-card flex items-center gap-4 rounded-[1.5rem] px-6 py-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <GraduationCap size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Education</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{personalInfo.education}</div>
                </div>
              </div>
              <div className="surface-card flex items-center gap-4 rounded-[1.5rem] px-6 py-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Location</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="surface-card rounded-[2rem] p-8 transition-all duration-300 sm:p-10"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Key Highlights</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">How I approach client work</h3>
              <ul className="space-y-5">
                {about.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="mt-1 mr-4 rounded-full border border-cyan-200 bg-cyan-50 p-1.5 text-cyan-700 transition-transform group-hover:scale-110 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                      <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <span className="text-base font-medium leading-relaxed text-slate-600 dark:text-slate-400">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/15 transition-all duration-300 sm:p-10 dark:bg-slate-900"
            >
              <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-cyan-400/10" />
              <div className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">What I Value</div>
              <h3 className="relative z-10 mt-4 text-2xl font-bold tracking-tight">Long-term product thinking.</h3>
              <ul className="relative z-10 mt-6 space-y-4 text-sm font-medium text-slate-300 sm:text-base">
                {['Clean, maintainable code', 'Transparent communication', 'On-time delivery', 'Long-term partnerships', 'Continuous learning'].map((val, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {val}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
