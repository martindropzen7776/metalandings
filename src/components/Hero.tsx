import React from 'react';
import { Laptop, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 text-center relative">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-4 md:px-8 py-2 md:py-3 rounded-full font-bold mb-8 animate-bounce shadow-lg text-sm md:text-base">
          <Zap className="w-4 h-4 md:w-5 md:h-5" />
          <span>SPECIAL OFFER - 50% OFF!</span>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 p-4 rounded-full">
            <Laptop className="w-8 h-8 md:w-12 md:h-12 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent leading-tight">
          WANT TO START SELLING DIGITAL
          <br className="hidden md:block" />
          PRODUCTS BUT DON'T KNOW WHAT?
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-300 mb-8 animate-pulse">
          +300 LANDING PAGES READY TO GENERATE SALES
        </p>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-2xl mb-8">
            <span className="font-bold text-yellow-300">Tired of wasting time and money</span> looking for products to sell? 
            Our premium pack of landing pages and PLR products is <span className="underline decoration-yellow-300 decoration-4">designed for you to start selling TODAY</span>, 
            without creating anything from scratch.
          </p>
          
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white font-black py-4 md:py-8 px-6 md:px-16 rounded-xl md:rounded-2xl text-xl md:text-3xl transition-all transform hover:scale-105 hover:-translate-y-1 shadow-[0_0_30px_rgba(236,72,153,0.5)] mb-8 md:mb-12 overflow-hidden w-full md:w-auto"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform"></div>
            <span className="relative">GET 50% OFF NOW!</span>
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform relative animate-pulse" />
          </a>
          
          <div className="bg-gradient-to-r from-purple-800/50 via-purple-700/50 to-purple-800/50 p-4 md:p-8 rounded-xl mb-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-yellow-300">What you get TODAY:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 text-left max-w-2xl mx-auto">
              {[
                'Proven & Optimized Designs',
                'Templates Converting at 23%',
                '24/7 Premium Support',
                'Lifetime Updates',
                '7-Day Guarantee',
                'PLR Products Ready to Sell'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 bg-white/5 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                  <CheckCircle className="text-yellow-300 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-base md:text-lg font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-base md:text-xl">
            <span className="font-bold text-yellow-300">1,387 entrepreneurs</span> are already generating sales with our templates
          </div>
        </div>
      </div>
    </div>
  );
}