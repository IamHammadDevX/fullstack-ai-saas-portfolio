import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, contact } from '../mock';
import * as LucideIcons from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-transparent pt-16 pb-8 dark:border-slate-900 sm:pt-24">
      <div className="absolute right-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl dark:bg-cyan-500/10" />

      <div className="section-container px-4 sm:px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          <div className="md:col-span-5 lg:col-span-4">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="mb-6 inline-block text-2xl font-bold tracking-tighter text-slate-900 dark:text-white"
            >
              Hammad<span className="text-cyan-600 dark:text-cyan-300">.dev</span>
            </a>
            <p className="mb-8 max-w-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
              {personalInfo.title}. Building modern, scalable, and beautiful AI SaaS applications.
            </p>
            <div className="flex gap-4">
              {contact.social.map((social, index) => {
                const IconComponent = LucideIcons[social.icon] || LucideIcons.Link;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ y: -4, scale: 1.1 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 shadow-sm transition-colors hover:bg-slate-950 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-cyan-300 dark:hover:text-slate-950"
                    aria-label={social.platform}
                  >
                    <IconComponent size={18} strokeWidth={2} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Explore
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group relative flex w-fit text-base font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-500 transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center text-base font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  <LucideIcons.Mail className="mr-3 h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-500 dark:group-hover:text-cyan-300" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center text-base font-medium text-slate-600 dark:text-slate-400">
                <LucideIcons.MapPin className="mr-3 h-5 w-5 text-slate-400" />
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-slate-800/50">
          <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 md:text-left">
            Copyright {currentYear} Hammad. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span>Built with React & Framer Motion</span>
            <LucideIcons.Heart className="ml-1 h-4 w-4 fill-red-500 text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
