import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, DollarSign } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Johnson',
    revenue: '12,547',
    timeframe: '30 days',
    image: '/src/components/1.png',
    text: 'I recovered my investment in just 2 days. These landing pages converted amazingly well with my digital products.',
    stars: 5
  },
  {
    name: 'Carlos Rodriguez',
    revenue: '8,932',
    timeframe: '14 days',
    image: 'https://images.pexels.com/photos/7821726/pexels-photo-7821726.jpeg',
    text: 'The templates helped me launch my first digital product. My first sale came within hours of launching.',
    stars: 5
  },
  {
    name: 'Anna Martinez',
    revenue: '23,819',
    timeframe: '45 days',
    image: 'https://images.pexels.com/photos/7821715/pexels-photo-7821715.jpeg',
    text: 'These landing pages transformed my business. My conversion rate went from 2% to 15% overnight.',
    stars: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Results / Reviews
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">Real results from our clients</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 ${
                  index === currentIndex ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="relative mb-4">
                  <img
                    src={testimonial.image}
                    alt={`Results from ${testimonial.name}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                    <div className="flex items-center gap-2 text-white">
                      <DollarSign className="w-6 h-6 text-green-400" />
                      <span className="text-2xl font-bold">${testimonial.revenue}</span>
                    </div>
                    <div className="text-white/80 text-sm">in {testimonial.timeframe}</div>
                  </div>
                </div>
                
                <div className="flex mb-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
