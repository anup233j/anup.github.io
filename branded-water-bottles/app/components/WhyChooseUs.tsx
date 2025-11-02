export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Purity",
      description: "Our water undergoes rigorous filtration and quality testing to ensure the highest purity standards for your customers.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Stunning Design",
      description: "Professional design team creates eye-catching labels that perfectly represent your brand identity and values.",
      gradient: "from-cyan-500 to-blue-400",
    },
    {
      title: "Fast Turnaround",
      description: "Quick production and delivery times ensure you get your branded bottles exactly when you need them.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Eco-Friendly",
      description: "100% recyclable materials and sustainable practices to minimize environmental impact and support your green initiatives.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Competitive Pricing",
      description: "Flexible pricing options and bulk discounts that fit your budget without compromising on quality.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Expert Support",
      description: "Dedicated customer service team available to assist you throughout the entire ordering and design process.",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-cyan-100 font-semibold text-lg uppercase tracking-wide mb-4">Why Choose Us</h3>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The Perfect Partner for Your Brand
          </h2>
          <p className="text-xl text-blue-100">
            We combine quality, creativity, and reliability to deliver exceptional branded water bottles that elevate your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon Circle */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  )}
                  {index === 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  )}
                  {index === 3 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                  {index === 4 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                  {index === 5 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  )}
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">10+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-100">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">1M+</div>
            <div className="text-blue-100">Bottles Produced</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">99%</div>
            <div className="text-blue-100">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
