import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // No active section by default

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId); // Set active section when clicked
  };

  const navigationItems = [
     { label: 'READY TO MOVE', id: 'ready-to-move-projects' },
    { label: 'TOP HIGHLIGHTED', id: 'top-highlighted-projects' },
    { label: 'RECOMMENDED', id: 'recommended-projects' },
    { label: 'TRUSTED', id: 'trusted-projects' },
    { label: 'HIGH DEMAND', id: 'high-demand-projects' },
   
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Row - Logo and Search - This will stick */}
        <div className={`flex items-center justify-between ${isScrolled ? 'py-2' : 'py-3'}`}>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://res.cloudinary.com/ddw1upvx3/image/upload/v1759743979/harshEnterprise-logo_plim2o.jpg" 
              alt="Harsh Enterprises"
              className={`object-contain ${
                isScrolled ? 'w-8 h-8' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'
              }`}
            />
            <div>
              <h1 className={`font-bold text-gray-900 ${
                isScrolled ? 'text-lg' : 'text-lg sm:text-xl md:text-2xl'
              }`}>
                Harsh Enterprises
              </h1>
              <p className={`text-gray-500 ${
                isScrolled ? 'hidden' : 'text-xs hidden sm:block'
              }`}>
                Trusted Real Estate Partners
              </p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search locality, project, builder..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 text-sm">
              Search
            </button>
          </div>

          {/* Mobile Search Toggle */}
          <button className="md:hidden bg-blue-600 text-white px-3 py-2 rounded-lg text-sm">
            🔍
          </button>
        </div>

        {/* Mobile Navigation - ALWAYS VISIBLE (no scroll hiding) */}
        <div className="md:hidden border-t border-gray-100 py-1">
          <div className="flex space-x-1 overflow-x-auto pb-1 hide-scrollbar">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Navigation Tabs - No animation, just show/hide */}
        <div className={`hidden md:block border-t border-gray-100 ${
          isScrolled ? 'hidden' : 'block py-1'
        }`}>
          <div className="flex items-center justify-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Search Bar - Only show when not scrolled */}
        <div className={`md:hidden ${isScrolled ? 'hidden' : 'block py-2 border-t border-gray-100'}`}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search properties..."
              className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button className="bg-blue-600 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-700 text-sm">
              Search
            </button>
          </div>
        </div>


        {/* Add this CSS for hiding scrollbar */}
        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </header>
  );
};

export default Header;