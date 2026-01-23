import React from 'react';
import { contact } from '../mock';
import { Button } from './ui/button';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* CTA Box */}
        <div className="bg-black text-white p-12 rounded-lg text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-tight">
            Let's Build Your Product
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'm available for freelance work and ready to turn your vision into reality.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block"
          >
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg hover:scale-105 transition-all duration-200">
              <Mail className="mr-2" size={20} />
              Get In Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-light text-black mb-3">Contact Information</h3>
          <a
            href={`mailto:${contact.email}`}
            className="text-lg text-gray-700 hover:text-black transition-colors"
          >
            {contact.email}
          </a>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-light text-black mb-6 text-center">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {contact.social.map((social, index) => {
              const IconComponent = LucideIcons[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-black hover:text-white text-gray-700 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {IconComponent && <IconComponent size={20} />}
                  <span className="font-medium">{social.platform}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Availability Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-gray-700">Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
