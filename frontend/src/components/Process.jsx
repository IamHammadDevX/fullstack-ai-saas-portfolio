import React from 'react';
import { process } from '../mock';
import { CheckCircle2 } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            How I Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven process that delivers results
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {process.map((step, index) => (
            <div
              key={step.id}
              className="flex gap-6 items-start group"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-light group-hover:scale-110 transition-transform duration-200">
                  {index + 1}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 bg-white p-8 rounded-lg border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-medium text-black mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < process.length - 1 && (
                <div className="absolute left-6 mt-12 w-0.5 h-16 bg-gray-200 hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Commitment Box */}
        <div className="mt-16 bg-black text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-light mb-4">My Commitment</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I don't just deliver code—I deliver solutions that work, scale, and provide real value. 
            Every project gets my full attention, clear communication, and a commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
