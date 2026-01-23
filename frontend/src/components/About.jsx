import React from 'react';
import { about, personalInfo } from '../mock';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
              About Me
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {about.story.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Education & Location */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="font-medium mr-2">Education:</span>
                <span>{personalInfo.education}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="font-medium mr-2">Location:</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-6">Key Highlights</h3>
              <ul className="space-y-4">
                {about.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I Value */}
            <div className="mt-8 bg-black text-white p-8 rounded-lg">
              <h3 className="text-xl font-light mb-4">What I Value</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>• Clean, maintainable code</li>
                <li>• Transparent communication</li>
                <li>• On-time delivery</li>
                <li>• Long-term partnerships</li>
                <li>• Continuous learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
