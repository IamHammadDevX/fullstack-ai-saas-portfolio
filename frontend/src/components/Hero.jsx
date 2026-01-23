import React from 'react';
import { Button } from './ui/button';
import { personalInfo } from '../mock';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm text-gray-700 dark:text-gray-300">{personalInfo.availability}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-black dark:text-white mb-6 tracking-tight leading-tight px-4">
          {personalInfo.tagline}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto px-4">
          {personalInfo.title} | {personalInfo.experience} Experience
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto px-4">
          {personalInfo.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Button
            onClick={() => scrollToSection('#contact')}
            className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 transition-all duration-200 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
          >
            Hire Me
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection('#projects')}
            variant="outline"
            className="w-full sm:w-auto border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-105 transition-all duration-200 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
          >
            View Projects
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-12 border-t border-gray-200 dark:border-gray-700 px-4">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-2">3.5+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-2">35+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-2">100%</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-light text-black dark:text-white mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
