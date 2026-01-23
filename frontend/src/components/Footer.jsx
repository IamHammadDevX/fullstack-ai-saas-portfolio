import React from 'react';
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
    <footer className="bg-black dark:bg-gray-950 text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{personalInfo.username}</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">{personalInfo.title}</p>
            <p className="text-xs sm:text-sm text-gray-500">{personalInfo.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-4">Follow Me</h4>
            <div className="flex flex-wrap gap-3">
              {contact.social.map((social, index) => {
                const IconComponent = LucideIcons[social.icon];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black dark:hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label={social.platform}
                  >
                    {IconComponent && <IconComponent size={18} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 dark:border-gray-900">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} {personalInfo.username}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-right">
              Built with React, FastAPI & MongoDB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
