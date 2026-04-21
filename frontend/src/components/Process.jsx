import React from 'react';
import { motion } from 'framer-motion';
import { process } from '../mock';

const Process = () => {
  return (
    <section id="process" className="section-shell">
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center sm:mb-24"
        >
          <span className="section-kicker">Process</span>
          <h2 className="section-title text-slate-950 dark:text-slate-50">
            A workflow that keeps projects clear, calm, and moving.
          </h2>
          <p className="section-copy mx-auto">
            A proven process that delivers robust AI SaaS solutions
          </p>
        </motion.div>

        <div className="relative ml-6 space-y-16 border-l-2 border-slate-200 md:ml-12 sm:space-y-24 dark:border-slate-800">
          {process.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative pl-10 md:pl-16"
            >
              <div className="absolute -left-[17px] top-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-950 bg-white shadow-xl transition-all duration-300 group-hover:scale-125 group-hover:border-cyan-500 dark:border-cyan-300/30 dark:bg-slate-950">
                  <div className="h-2 w-2 rounded-full bg-slate-950 transition-colors group-hover:bg-cyan-500 dark:bg-white" />
                </div>
              </div>

              <span className="absolute -left-12 -top-10 -z-10 select-none text-8xl font-bold text-slate-100 transition-transform group-hover:-translate-y-2 group-hover:text-slate-200 dark:text-slate-900/50 dark:group-hover:text-slate-800">
                0{index + 1}
              </span>

              <div className="surface-card rounded-[2rem] p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl sm:p-10">
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                  {step.title}
                </h3>
                <p className="text-base font-medium leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[2.25rem] bg-slate-950 p-10 text-center text-white shadow-xl sm:mt-32 sm:p-12 dark:bg-slate-900"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-transparent" />
          <h3 className="relative z-10 mb-6 text-3xl font-bold tracking-tight">
            My Commitment
          </h3>
          <p className="relative z-10 mx-auto max-w-3xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
            I don't just deliver code - I deliver solutions that work, scale, and provide real value.
            Every project gets my full attention, clear communication, and a commitment to excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
