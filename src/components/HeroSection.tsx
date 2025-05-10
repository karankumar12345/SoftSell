import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-500 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4 transition-colors">
              Maximize the Value of Your Unused Software Licenses
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 transition-colors">
              Turn your dormant software licenses into cash. Fast, secure, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sell My Licenses
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>
          <div className="md:w-1/2 transition-transform hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 scale-105 opacity-20 dark:opacity-30"></div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 relative">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400 text-2xl font-bold">$</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Average Return</h3>
                      <p className="text-gray-600 dark:text-gray-400">60-80% of original license value</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">24h</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Fast Valuation</h3>
                      <p className="text-gray-600 dark:text-gray-400">Get a quote within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-2xl font-bold">500+</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Trusted Partners</h3>
                      <p className="text-gray-600 dark:text-gray-400">Companies reselling with us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;