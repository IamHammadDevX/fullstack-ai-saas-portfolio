import React, { useState } from 'react';
import { projects } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black dark:text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world solutions that deliver measurable business value
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white dark:bg-gray-800"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-6xl font-light text-gray-300 dark:text-gray-600">${project.title.charAt(0)}</span></div>`;
                  }}
                />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-lg sm:text-xl font-medium text-black dark:text-white mb-2">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Problem */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Problem</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Solution</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.solution}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Outcome</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{project.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
