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
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm text-gray-700">{personalInfo.availability}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-black mb-6 tracking-tight leading-tight">
          {personalInfo.tagline}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
          {personalInfo.title} | {personalInfo.experience} Experience
        </p>

        <p className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          {personalInfo.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200 px-8 py-6 text-lg"
          >
            Hire Me
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection('#projects')}
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white hover:scale-105 transition-all duration-200 px-8 py-6 text-lg"
          >
            View Projects
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200">
          <div>
            <div className="text-3xl md:text-4xl font-light text-black mb-2">3.5+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-black mb-2">15+</div>
            <div className="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-black mb-2">100%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-black mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
