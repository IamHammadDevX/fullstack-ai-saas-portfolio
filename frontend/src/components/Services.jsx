import React from 'react';
import { services } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import * as LucideIcons from 'lucide-react';

const serviceIcons = ['Code2', 'Layers', 'Brain', 'Database', 'Wrench'];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions from concept to deployment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = LucideIcons[serviceIcons[index]];
            return (
              <Card
                key={service.id}
                className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="text-white" size={24} />}
                  </div>
                  <CardTitle className="text-xl font-medium text-black">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
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
