import React from 'react';
import { Timer, Shield, Gift, CheckCircle, Zap, ArrowRight } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({
    minutes: 29,
    seconds: 59
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 29, seconds: 59 }; // Reset timer when it reaches 0
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 text-2xl md:text-4xl font-black text-red-600 bg-red-100 p-4 md:p-6 rounded-xl shadow-inner">
      <Timer className="w-6 h-6 md:w-10 md:h-10 animate-pulse" />
      <span>
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
  );
}

export default function Pricing() {
  return (
    <div id="pricing" className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl mx-auto p-4 md:p-8 border-2 border-purple-100">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold mb-4 md:mb-6 animate-pulse text-sm md:text-base">
            <Zap className="w-4 h-4 md:w-5 md:h-5" />
            LAST CHANCE - 50% OFF!
          </div>
          
          <div className="text-2xl md:text-4xl font-black mb-2 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
            THIS OFFER EXPIRES SOON!
          </div>
          <div className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">Time remaining:</div>
          
          <div className="mb-8 md:mb-12">
            <CountdownTimer />
          </div>

          <div className="flex justify-center gap-6 md:gap-12 mb-8 md:mb-12">
            <div className="text-center transform -rotate-12">
              <div className="text-lg md:text-2xl text-gray-500 line-through">Regular Price</div>
              <div className="text-2xl md:text-4xl font-bold text-gray-400">$60 USD</div>
            </div>
            <div className="text-center transform scale-110">
              <div className="text-lg md:text-2xl text-green-600 font-black">TODAY'S Price</div>
              <div className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">$30 USD</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-purple-50 p-4 md:p-6 rounded-xl text-sm md:text-base">
              <h4 className="font-bold text-lg md:text-xl mb-4">What others charge:</h4>
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span>Basic Landing Page</span>
                  <span className="text-gray-500">$200-500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Custom Design</span>
                  <span className="text-gray-500">$300-800</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Optimization</span>
                  <span className="text-gray-500">$200-400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Monthly Support</span>
                  <span className="text-gray-500">$100-200</span>
                </div>
                <div className="border-t-2 border-purple-200 pt-3">
                  <div className="flex items-center justify-between font-bold">
                    <span>Total per page:</span>
                    <span className="text-red-600">$800-1900</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 md:p-6 rounded-xl text-sm md:text-base">
              <h4 className="font-bold text-lg md:text-xl mb-4">What you receive:</h4>
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span>300+ Landing Pages</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Premium Designs</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span>CRO Optimization</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Lifetime Support</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="border-t-2 border-green-200 pt-3">
                  <div className="flex items-center justify-between font-bold">
                    <span>Total Price:</span>
                    <span className="text-green-600">$30 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <a
              href="#checkout"
              className="group relative block w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600 text-white font-black py-4 md:py-8 px-4 md:px-8 rounded-xl text-xl md:text-3xl transition-all transform hover:scale-105 hover:-translate-y-1 shadow-[0_0_30px_rgba(147,51,234,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform"></div>
              <span className="relative flex items-center justify-center gap-2 md:gap-3">
                GET 50% OFF NOW <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform animate-pulse" />
              </span>
            </a>
            
            <div className="flex items-center justify-center gap-2 text-base md:text-lg">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              <span className="font-bold">7-day satisfaction guarantee</span>
            </div>
          </div>

          <div className="mt-8 md:mt-12 space-y-4">
            <h4 className="text-xl md:text-2xl font-black flex items-center gap-2 justify-center text-purple-600">
              <Gift className="w-6 h-6 md:w-8 md:h-8" />
              Limited Time Exclusive Bonuses:
            </h4>
            <div className="space-y-3 md:space-y-4 text-left text-sm md:text-base">
              {[
                'PLR eBooks Ready to Resell ($497 value)',
                'Landing Page Optimization Guide ($97 value)',
                'Sales Conversion Guide ($97 value)',
                'Lifetime Free Updates'
              ].map((bonus, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 bg-purple-50 p-3 md:p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                  <span className="font-semibold">{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}