import React from 'react';
import { services } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import * as LucideIcons from 'lucide-react';

const serviceIcons = ['Code2', 'Layers', 'Brain', 'Database', 'Wrench'];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black dark:text-white mb-4 tracking-tight">
            Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions from concept to deployment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = LucideIcons[serviceIcons[index]];
            return (
              <Card
                key={service.id}
                className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="text-white dark:text-black" size={24} />}
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-medium text-black dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
