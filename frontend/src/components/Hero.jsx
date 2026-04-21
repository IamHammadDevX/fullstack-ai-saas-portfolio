import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { personalInfo } from '../mock';
import { ArrowRight, Bot, BriefcaseBusiness, CheckCircle2, Globe2, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <section id="hero" className="section-shell flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-gradient-to-b from-cyan-200/30 via-transparent to-transparent dark:from-cyan-500/10" />
      <div className="absolute left-[8%] top-24 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/15" />
      <div className="absolute bottom-12 right-[6%] h-64 w-64 rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-400/12" />

      <motion.div 
        className="section-container grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative z-10">
          <motion.div variants={itemVariants} className="section-kicker">
            <Sparkles size={14} />
            {personalInfo.availability}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-5xl font-bold leading-[0.95] text-slate-950 dark:text-slate-50 sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            Modern AI and SaaS products,
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-500 bg-clip-text text-transparent">
              designed to convert and scale.
            </span>
          </motion.h1>

          <motion.a
            variants={itemVariants}
            href="https://thevulnguardai.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-transform hover:-translate-y-0.5 hover:bg-slate-900 dark:bg-slate-900 dark:text-slate-100"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
            </span>
            <span>{'LIVE \u2014 VulnGuard AI \u00B7 thevulnguardai.tech'}</span>
          </motion.a>

          <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg font-semibold text-slate-700 dark:text-slate-300 sm:text-xl">
            {personalInfo.title} <span className="mx-2 text-slate-300 dark:text-slate-600">/</span> {personalInfo.experience}
          </motion.p>

          <motion.p variants={itemVariants} className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            {personalInfo.description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="group h-14 rounded-full bg-slate-950 px-8 text-base font-semibold text-white shadow-2xl shadow-slate-900/15 hover:-translate-y-1 hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:shadow-cyan-900/20 dark:hover:bg-cyan-200"
            >
              Start a Project
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </Button>

            <Button
              onClick={() => scrollToSection('#projects')}
              variant="outline"
              className="h-14 rounded-full border-slate-300/80 bg-white/50 px-8 text-base font-semibold text-slate-700 hover:-translate-y-1 hover:bg-white dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/70"
            >
              View Work
            </Button>
          </motion.div>

          <motion.div variants={containerVariants} className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Years Experience', value: '3.5+' },
              { label: 'Projects Shipped', value: '55+' },
              { label: 'Client Satisfaction', value: '100%' },
              { label: 'Remote Delivery', value: 'Worldwide' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="metric-card rounded-[1.75rem] p-5 text-left shadow-lg shadow-slate-900/5"
              >
                <div className="text-3xl font-bold text-slate-950 dark:text-white">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative z-10">
          <div className="glass-card overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center justify-between rounded-[1.5rem] border border-white/40 bg-white/70 p-4 dark:border-slate-800/80 dark:bg-slate-900/70">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Project Focus
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                  Build with strategy, polish, and speed.
                </div>
              </div>
              <div className="rounded-2xl bg-slate-950 p-3 text-white dark:bg-cyan-300 dark:text-slate-950">
                <BriefcaseBusiness size={28} />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Bot,
                  title: 'AI-Ready Systems',
                  text: 'LLM features, automation, intelligent workflows, and data-backed product thinking.',
                },
                {
                  icon: Globe2,
                  title: 'Global Delivery',
                  text: 'Remote collaboration, clean handoff, and reliable communication across time zones.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="surface-card rounded-[1.5rem] p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200/70 bg-slate-950 p-6 text-white dark:border-slate-800 dark:bg-slate-950">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                Delivery Promise
              </div>
              <div className="mt-4 space-y-4">
                {[
                  'Modern frontend design that feels premium on desktop and mobile.',
                  'Scalable backend architecture with maintainable code and clear structure.',
                  'Frequent updates so you always know what is shipping next.',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle2 className="mt-1 text-cyan-300" size={18} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
