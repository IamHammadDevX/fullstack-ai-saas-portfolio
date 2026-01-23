import React from 'react';
import { techStack } from '../mock';
import * as LucideIcons from 'lucide-react';

const TechStack = () => {
  const categories = [
    { title: 'Frontend', items: techStack.frontend, color: 'bg-gray-100' },
    { title: 'Backend', items: techStack.backend, color: 'bg-gray-100' },
    { title: 'Database', items: techStack.database, color: 'bg-gray-100' },
    { title: 'AI/ML', items: techStack.aiml, color: 'bg-gray-100' },
    { title: 'DevOps', items: techStack.devops, color: 'bg-gray-100' }
  ];

  return (
    <section id="techstack" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern tools and technologies I use to build production-grade systems
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-medium text-black mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((tech, techIndex) => {
                  const IconComponent = LucideIcons[tech.icon];
                  return (
                    <div key={techIndex} className="flex items-center group">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-black transition-colors duration-200">
                        {IconComponent && (
                          <IconComponent className="text-gray-700 group-hover:text-white transition-colors duration-200" size={20} />
                        )}
                      </div>
                      <span className="text-gray-700 font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
