export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Premium Quality</h4>
                  <p className="text-sm text-gray-600">Certified pure water</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform mt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Custom Design</h4>
                  <p className="text-sm text-gray-600">Your brand identity</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Quick turnaround</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform mt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Eco-Friendly</h4>
                  <p className="text-sm text-gray-600">Sustainable materials</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-blue-600 font-semibold text-lg uppercase tracking-wide">About Us</h3>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Crafting Premium Branded Water Bottles
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                We specialize in creating high-quality, customized mineral water bottles that elevate your brand presence. Whether you're running a luxury hotel, a trendy restaurant, or hosting a special event, our branded water bottles add a touch of elegance and professionalism.
              </p>
              <p>
                With years of experience in the industry, we understand the importance of brand identity. Our state-of-the-art printing technology ensures your logo and design are reproduced with stunning clarity and vibrant colors on every bottle.
              </p>
              <p>
                From concept to delivery, we work closely with you to create the perfect branded water solution. Our commitment to quality, sustainability, and customer satisfaction has made us the trusted choice for businesses across the hospitality and events industry.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">BPA-Free Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Premium Sourced Water</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
