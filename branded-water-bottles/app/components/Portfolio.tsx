"use client";

import { useState } from "react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "hotels", name: "Hotels" },
    { id: "restaurants", name: "Restaurants" },
    { id: "events", name: "Events" },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "hotels",
      title: "Luxury Resort Collection",
      description: "Premium branded bottles for 5-star resort",
      color: "from-blue-400 to-cyan-300",
    },
    {
      id: 2,
      category: "restaurants",
      title: "Fine Dining Experience",
      description: "Elegant bottles for upscale restaurant",
      color: "from-cyan-400 to-blue-300",
    },
    {
      id: 3,
      category: "events",
      title: "Corporate Conference",
      description: "Custom bottles for business event",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 4,
      category: "hotels",
      title: "Boutique Hotel Brand",
      description: "Minimalist design for boutique hotel",
      color: "from-cyan-500 to-blue-400",
    },
    {
      id: 5,
      category: "restaurants",
      title: "Cafe & Bistro Series",
      description: "Trendy bottles for modern cafe",
      color: "from-blue-300 to-cyan-500",
    },
    {
      id: 6,
      category: "events",
      title: "Wedding Collection",
      description: "Personalized bottles for special day",
      color: "from-cyan-300 to-blue-500",
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-blue-600 font-semibold text-lg uppercase tracking-wide mb-4">Portfolio</h3>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600">
            Explore our collection of beautifully branded water bottles created for leading businesses and events.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Placeholder with Bottle Illustration */}
              <div className={`relative h-80 bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full opacity-20"></div>
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-white rounded-full opacity-10"></div>
                
                {/* Bottle SVG */}
                <svg className="w-32 h-64 relative z-10 transform group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id={`grad-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="white" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  {/* Bottle cap */}
                  <rect x="35" y="10" width="30" height="15" rx="3" fill="white" opacity="0.95" />
                  <rect x="37.5" y="7.5" width="25" height="5" rx="2" fill="white" opacity="0.9" />
                  {/* Bottle neck */}
                  <path d="M 40 25 L 37.5 40 L 62.5 40 L 60 25 Z" fill={`url(#grad-${item.id})`} stroke="white" strokeWidth="1" />
                  {/* Bottle body */}
                  <path d="M 37.5 40 Q 30 100 35 160 L 65 160 Q 70 100 62.5 40 Z" fill={`url(#grad-${item.id})`} stroke="white" strokeWidth="1" />
                  {/* Label */}
                  <rect x="37.5" y="75" width="25" height="40" rx="2" fill="white" opacity="0.95" />
                  <line x1="42" y1="85" x2="58" y2="85" stroke="#3b82f6" strokeWidth="2" />
                  <line x1="42" y1="95" x2="58" y2="95" stroke="#06b6d4" strokeWidth="1.5" />
                  <line x1="42" y1="102" x2="55" y2="102" stroke="#06b6d4" strokeWidth="1" />
                  {/* Bottle bottom */}
                  <ellipse cx="50" cy="160" rx="15" ry="7.5" fill="white" opacity="0.8" />
                  {/* Highlights */}
                  <ellipse cx="42.5" cy="60" rx="4" ry="10" fill="white" opacity="0.7" />
                </svg>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* View Details Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-semibold">
                  <span className="text-sm uppercase tracking-wide">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to See Your Brand on a Bottle?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Let's create something amazing together. Request a free mockup and see how your brand will look.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Request Free Mockup
          </button>
        </div>
      </div>
    </section>
  );
}
