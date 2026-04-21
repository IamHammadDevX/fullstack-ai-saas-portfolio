import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../mock';
import { Button } from './ui/button';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-shell section-shell--dark relative overflow-hidden">
      <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <div className="glass-card inline-flex max-w-full flex-wrap items-center justify-center rounded-[1.25rem] border border-emerald-200 px-5 py-2.5 text-center shadow-sm sm:rounded-full dark:border-emerald-400/20">
            <span className="relative mr-3 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Available for new projects
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="group relative mb-16 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-center text-white shadow-2xl shadow-slate-900/15 sm:rounded-[2.5rem] sm:p-16 dark:bg-slate-900"
        >
          <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transition-transform duration-1000 ease-in-out group-hover:translate-x-[100%]" />

          <Sparkles className="mx-auto mb-8 h-12 w-12 text-cyan-300" />

          <h2 className="relative z-10 mb-6 text-[2.4rem] font-bold tracking-tighter min-[420px]:text-4xl sm:text-5xl md:text-6xl">
            Let's Build Something Great
          </h2>
          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-lg font-medium text-slate-300 sm:text-xl">
            Have a project in mind? I'm ready to turn your vision into reality with modern tech and clean code.
          </p>
          <a href={`mailto:${contact.email}`} className="relative z-10 inline-block w-full sm:w-auto">
            <Button className="group/btn w-full rounded-full border-none bg-white px-8 py-7 text-lg font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-2xl sm:w-auto dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200">
              <Mail className="mr-3 h-6 w-6 transition-transform group-hover/btn:scale-110" />
              Say Hello
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid gap-8 text-center sm:grid-cols-2 sm:text-left"
        >
          <div className="surface-card rounded-[2rem] p-8 transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Direct Mail
            </h3>
            <a
              href={`mailto:${contact.email}`}
              className="inline-block text-xl font-semibold text-slate-900 transition-colors hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300 sm:text-2xl"
            >
              {contact.email}
            </a>
          </div>

          <div className="surface-card rounded-[2rem] p-8 transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Social Profiles
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
              {contact.social.map((social, index) => {
                const IconComponent = LucideIcons[social.icon] || LucideIcons.Link;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 shadow-sm transition-colors hover:bg-slate-950 hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-cyan-300 dark:hover:text-slate-950"
                    title={social.platform}
                  >
                    <IconComponent strokeWidth={2} size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
