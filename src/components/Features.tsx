import React from 'react';
import { CheckCircle, Zap, Target, Clock, DollarSign, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Start selling in less than 24 hours with our optimized pages'
  },
  {
    icon: Target,
    title: 'Guaranteed Conversion',
    description: 'Templates tested with conversion rates up to 23%'
  },
  {
    icon: Clock,
    title: 'Save 100+ Hours',
    description: 'Forget about designing and coding. Everything is ready to use'
  },
  {
    icon: DollarSign,
    title: 'Proven ROI',
    description: 'Our clients recover their investment in the first week'
  },
  {
    icon: Shield,
    title: 'Premium Support',
    description: '24/7 personalized assistance to maximize your results'
  }
];

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our Pack?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are generating consistent sales with our proven landing pages
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-purple-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}