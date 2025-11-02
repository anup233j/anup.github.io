export default function Services() {
  const services = [
    {
      title: "Logo Printing",
      description: "High-resolution logo printing with vibrant colors that showcase your brand identity perfectly on every bottle.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Label Designing",
      description: "Professional label design services tailored to your brand guidelines, creating stunning visual impact.",
      gradient: "from-cyan-500 to-blue-400",
    },
    {
      title: "Bulk Orders",
      description: "Flexible bulk ordering options for events, hotels, and restaurants with competitive pricing and fast turnaround.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Custom Packaging",
      description: "Branded packaging solutions that enhance your product presentation and create memorable unboxing experiences.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Express Delivery",
      description: "Fast and reliable delivery services ensuring your branded bottles arrive on time for your events and operations.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Design Consultation",
      description: "Expert consultation to help you create the perfect bottle design that aligns with your brand vision and goals.",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-blue-600 font-semibold text-lg uppercase tracking-wide mb-4">Our Services</h3>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Complete Branding Solutions
          </h2>
          <p className="text-xl text-gray-600">
            From design to delivery, we provide end-to-end services to bring your branded water bottle vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  )}
                  {index === 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  )}
                  {index === 3 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  )}
                  {index === 4 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  )}
                  {index === 5 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  )}
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Need a custom solution? We're here to help!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
