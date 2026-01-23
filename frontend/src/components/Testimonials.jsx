import React from 'react';
import { testimonials } from '../mock';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black dark:text-white mb-4 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <Quote className="text-gray-300 dark:text-gray-600 mb-4" size={32} />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-black dark:fill-white text-black dark:text-white" size={16} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="text-sm sm:text-base font-medium text-black dark:text-white">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{testimonial.company}</div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    via {testimonial.platform}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
