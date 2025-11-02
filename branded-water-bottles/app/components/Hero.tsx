"use client";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your Brand.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Our Water.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl">
                Premium customized mineral water bottles for restaurants, hotels, cafes, and special events.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Your Custom Bottles
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Request a Sample
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1M+</div>
                <div className="text-sm text-gray-600">Bottles Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Eco-Friendly</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <svg className="w-full h-full p-12" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Water bottle illustration */}
                    <defs>
                      <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0284c7" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {/* Bottle cap */}
                    <rect x="70" y="20" width="60" height="30" rx="5" fill="#2563eb" />
                    <rect x="75" y="15" width="50" height="10" rx="3" fill="#1e40af" />
                    {/* Bottle neck */}
                    <path d="M 80 50 L 75 80 L 125 80 L 120 50 Z" fill="url(#waterGradient)" stroke="#0284c7" strokeWidth="2" />
                    {/* Bottle body */}
                    <ellipse cx="100" cy="80" rx="50" ry="10" fill="#0284c7" opacity="0.3" />
                    <path d="M 75 80 Q 60 200 70 320 L 130 320 Q 140 200 125 80 Z" fill="url(#waterGradient)" stroke="#0284c7" strokeWidth="2" />
                    {/* Bottle bottom */}
                    <ellipse cx="100" cy="320" rx="30" ry="15" fill="#0284c7" opacity="0.4" />
                    <path d="M 70 320 Q 100 340 130 320" fill="#0369a1" opacity="0.3" />
                    {/* Label area */}
                    <rect x="75" y="150" width="50" height="80" rx="5" fill="white" opacity="0.9" />
                    <text x="100" y="180" textAnchor="middle" fill="#2563eb" fontSize="14" fontWeight="bold">YOUR</text>
                    <text x="100" y="200" textAnchor="middle" fill="#2563eb" fontSize="14" fontWeight="bold">BRAND</text>
                    <text x="100" y="220" textAnchor="middle" fill="#06b6d4" fontSize="10">Premium Water</text>
                    {/* Water level */}
                    <path d="M 75 100 Q 60 180 70 280 L 130 280 Q 140 180 125 100 Z" fill="#06b6d4" opacity="0.5" />
                    {/* Highlights */}
                    <ellipse cx="85" cy="120" rx="8" ry="20" fill="white" opacity="0.6" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 z-20">
              <span className="font-bold">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
