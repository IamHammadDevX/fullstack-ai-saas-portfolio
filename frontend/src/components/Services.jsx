import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section-shell">
      <div className="section-container">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <span className="section-kicker">Services</span>
          <h2 className="section-title text-slate-950 dark:text-slate-50">
            Product-focused engineering for ambitious teams.
          </h2>
          <p className="section-copy mx-auto">
            Comprehensive solutions from concept to deployment built with modern tech
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.Terminal;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <Card className="surface-card group relative h-full cursor-pointer overflow-hidden rounded-[2rem] border-0 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-950 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:bg-slate-900">
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <CardHeader className="pt-8 px-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white dark:bg-cyan-400/10 dark:text-cyan-300">
                      {IconComponent && <IconComponent strokeWidth={1.5} size={28} />}
                    </div>
                    <CardTitle className="mb-3 text-2xl font-bold tracking-tight text-slate-950 transition-colors duration-500 group-hover:text-white dark:text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-slate-500 transition-colors duration-500 group-hover:text-slate-300 dark:text-slate-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <div className="space-y-3 mt-4">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm font-medium text-slate-600 transition-colors duration-500 group-hover:text-slate-300 dark:text-slate-400">
                          <CheckCircle2 className="mr-3 h-4 w-4 text-cyan-500 group-hover:text-cyan-300" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

