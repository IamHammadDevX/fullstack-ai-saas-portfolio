import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../mock';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-shell section-shell--muted relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none dark:bg-cyan-500/10" />

      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-24"
        >
          <span className="section-kicker">Testimonials</span>
          <h2 className="section-title text-slate-950 dark:text-slate-50">
            Trusted by founders who needed shipping speed and technical depth.
          </h2>
          <p className="section-copy mx-auto">
            Hear what others have to say about working together
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            >
              <Card className="glass-card group h-full overflow-hidden rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="p-8 sm:p-10 relative">
                  <Quote className="absolute top-6 right-6 h-16 w-16 -rotate-12 text-slate-200 opacity-50 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110 dark:text-slate-800" />
                  
                  <div className="flex gap-1.5 mb-8 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5 drop-shadow-sm" />
                    ))}
                  </div>

                  <p className="relative z-10 mb-10 text-base font-medium leading-8 text-slate-700 transition-all group-hover:line-clamp-none dark:text-slate-300 sm:text-lg">
                    "{testimonial.text}"
                  </p>

                  <div className="relative z-10 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-gradient-to-br from-slate-100 to-slate-200 text-lg font-bold text-slate-900 shadow-inner dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:text-white">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                        <div className="mt-0.5 text-xs font-semibold text-cyan-600 dark:text-cyan-300">{testimonial.company}</div>
                      </div>
                    </div>
                    {testimonial.platform && (
                      <div className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:bg-slate-800/80 dark:text-slate-500">
                        {testimonial.platform}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
