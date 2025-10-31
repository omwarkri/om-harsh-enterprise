import React from "react";

const HeroSection = () => {
  const navigationItems = [
     { label: 'READY TO MOVE', id: 'ready-to-move-projects' },
    { label: 'TOP HIGHLIGHTED', id: 'top-highlighted-projects' },
    { label: "RECOMMENDED", id: "recommended-projects" },
    { label: "TRUSTED", id: "trusted-projects" },
    { label: "HIGH DEMAND", id: "high-demand-projects" },
  ];

  return (
    <section className="relative text-gray-900 overflow-hidden min-h-screen bg-black">
      {/* Background Container with Gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Black Gradient Overlays on Sides */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black to-transparent z-1"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black to-transparent z-1"></div>

        {/* Background Logo Image - Full width and height on mobile */}
        <img
          src="https://res.cloudinary.com/ddw1upvx3/image/upload/v1759743979/harshEnterprise-logo_plim2o.jpg"
          alt="Harsh Enterprises Background"
          className="w-full h-full object-cover opacity-40 z-0 md:w-4/5 md:h-auto md:object-contain"
        />
      </div>

      {/* Overlay for better content readability */}
      <div className="absolute inset-0 bg-black/30 z-1"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Logo Branding */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-6">
            <img
              src="https://res.cloudinary.com/ddw1upvx3/image/upload/v1759743979/harshEnterprise-logo_plim2o.jpg"
              alt="Harsh Enterprises"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain bg-white/10 rounded-2xl p-2 md:p-3 backdrop-blur-sm border border-gray-600 shadow-lg"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Harsh Enterprises
              </h2>
              <p className="text-gray-300 text-base md:text-xl mt-1 md:mt-2 font-medium">
                Trusted Real Estate Partners
              </p>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight">
            Find Your
            <br /> Dream Home
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Discover 63K+ verified properties in Thane with 7K+ new listings every day
          </p>
        </div>

        {/* Navigation Tabs (Replaced Search Menu) */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-8 max-w-4xl mx-auto border border-gray-600 shadow-2xl">
          
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 md:gap-6 mb-4 md:mb-6">
    {navigationItems.map((item, i) => (
      <a
        key={i}
        href={`#${item.id}`}
        className="px-4 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-lg tracking-wide transition-all border text-center text-white border-gray-500 hover:border-white hover:bg-white/20 hover:text-white"
      >
        {item.label}
      </a>
    ))}
  </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-white to-gray-200 text-gray-900 px-8 py-3 md:px-14 md:py-5 rounded-xl font-bold text-lg md:text-xl shadow-2xl transition-all transform hover:scale-105 hover:shadow-3xl border border-gray-400"
          >
            🏠 Get Free Consultation
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 mt-16 md:mt-20 max-w-3xl mx-auto">
          {[
            { number: "63K+", label: "Properties" },
            { number: "7K+", label: "Daily Listings" },
            { number: "15+", label: "Years Experience" },
            { number: "50K+", label: "Happy Clients" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-5 border border-gray-600 shadow-lg"
            >
              <div className="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-xs md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;