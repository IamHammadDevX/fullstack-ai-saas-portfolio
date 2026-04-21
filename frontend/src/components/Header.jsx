import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 px-2 pt-2 transition-all duration-500 sm:px-0 sm:pt-0 ${
        isScrolled 
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full border px-2.5 py-2 transition-all duration-500 sm:px-3 ${
            isScrolled
              ? 'glass-card border-white/30 dark:border-slate-800/80 shadow-2xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="focus-ring flex items-center gap-3 rounded-full px-3 py-2 text-base font-bold text-slate-900 dark:text-white sm:text-lg"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm text-white shadow-lg dark:bg-cyan-300 dark:text-slate-950">
              H
            </span>
            <span className="hidden min-[360px]:inline">
              Hammad<span className="text-cyan-600 dark:text-cyan-300">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <div className="glass-card flex rounded-full p-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="focus-ring relative rounded-full px-4 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300"
                >
                  <span className="relative z-10 transition-colors hover:text-slate-950 dark:hover:text-white">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
            
            <div className="ml-4 flex items-center space-x-3 border-l border-slate-200/70 pl-4 dark:border-slate-800/80">
              <button
                onClick={toggleTheme}
                className="focus-ring glass-card flex h-11 w-11 items-center justify-center rounded-full text-slate-600 hover:-translate-y-0.5 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>

              <Button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="rounded-full border border-cyan-400/50 bg-slate-950 px-6 font-semibold text-white shadow-xl hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Hire Me
              </Button>
            </div>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="focus-ring glass-card flex h-10 w-10 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 min-[380px]:h-11 min-[380px]:w-11"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              className="focus-ring glass-card flex h-10 w-10 items-center justify-center rounded-full text-slate-900 dark:text-white min-[380px]:h-11 min-[380px]:w-11"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}>
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="glass-card mt-4 overflow-hidden rounded-[2rem] border border-white/40 shadow-2xl md:hidden dark:border-slate-800/80"
            >
              <div className="flex flex-col space-y-2 p-4">
                {navItems.map((item, i) => (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="focus-ring rounded-2xl px-4 py-3 text-base font-semibold text-slate-600 hover:bg-white/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-2 border-t border-slate-200/70 pt-4 dark:border-slate-800"
                >
                  <Button
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="w-full rounded-2xl bg-slate-950 py-6 text-lg font-semibold text-white dark:bg-cyan-300 dark:text-slate-950"
                  >
                    Hire Me
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
