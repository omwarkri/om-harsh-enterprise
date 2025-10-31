import React, { useRef, useState, useEffect } from "react";

const ProjectShowcase = () => {

    const readyToMoveProjects = [
    {
      name: "Palm Hills",
      developer: "Harsh Enterprises",
      configuration: "2, 3 BHK Row House Villas",
      location: "Between Igatpuri and Nashik",
      price: "₹80 L - 98 L",
      image: "https://res.cloudinary.com/ddw1upvx3/image/upload/v1759857158/HarshEnterprise/Screenshot_2025-10-07-19-15-16-17_6012fa4d4ddec268fc5c7112cbb265e7_au1eqy.jpg",
      status: "Ready to Move",
      highlights: ["Highway Touch", "Vacation Rental Income", "24x7 Security"]
    },
    {
      name: "Ambar Vaastu",
      developer: "Ambar Vaastu",
      configuration: "1, 2, 3, 4 BHK Apartments",
      location: "Badlapur East",
      price: "₹35.99 L - 84.99 L",
      image: "https://res.cloudinary.com/ddw1upvx3/image/upload/v1759860052/HarshEnterprise/Screenshot_2025-10-07_at_11.30.27_PM_zoxsq1.png",
      status: "Ready to Move",
      highlights: ["10-14 Floor Buildings", "Green Nature View", "Stilt Parking"]
    },
    {
      name: "Unimont Aurum",
      developer: "Unimont Group",
      configuration: "1, 2 BHK Apartments",
      location: "Karjat",
      price: "₹22 L - 33 L",
      image: "https://res.cloudinary.com/ddw1upvx3/image/upload/v1759860140/HarshEnterprise/Aurum-Elevation-op-1_n9rlli.webp",
      status: "Ready to Move",
      highlights: ["4 Towers OC Received", "350+ Families", "30+ Amenities"]
    },
    {
      name: "Shivshakti Prime",
      developer: "Shivshakti Builders",
      configuration: "1, 2, 3, 4 BHK Apartments & Shops",
      location: "2 mins from Badlapur Station",
      price: "₹35.99 L - 84.99 L",
      image: "https://res.cloudinary.com/ddw1upvx3/image/upload/v1759856908/HarshEnterprise/Screenshot_2025-10-07-19-40-33-00_6012fa4d4ddec268fc5c7112cbb265e7_tihebb.jpg",
      status: "Ready to Move",
      highlights: ["Walking to Station", "Luxurious Lifestyle", "RERA Approved"]
    },
    {
      name: "Mohan Willows",
      developer: "Mohan Group",
      configuration: "1, 2 BHK Apartments",
      location: "Badlapur East",
      price: "₹28.62 L - 40.79 L",
      image: "https://res.cloudinary.com/ddw1upvx3/image/upload/v1759856926/HarshEnterprise/Screenshot_2025-10-07-20-09-52-11_6012fa4d4ddec268fc5c7112cbb265e7_e6d18s.jpg",
      status: "Ready to Move",
      highlights: ["40,000 sqft Clubhouse", "Tallest in Badlapur", "Multiple Phases"]
    },
    {
      name: "Tharwani Ariana",
      developer: "Tharwani Group",
      configuration: "1, 2 BHK Apartments",
      location: "Badlapur West",
      price: "₹32 L - 45 L",
      image: "https://res.cloudinary.com/ddw1upvx3/image/upload/v1759860371/HarshEnterprise/Ariana_E1_E2_2_b_19381af302_vx1kvo.jpg",
      status: "Ready to Move",
      highlights: ["16 Storey Towers", "35+ Completed Projects", "Luxury Amenities"]
    }
  ];

  const topHighlightedProjects = [
    {
      name: "Luxury Towers",
      developer: "Premium Developers",
      configuration: "3, 4 BHK Apartments",
      location: "Powai, Mumbai",
      price: "₹2.5 Cr - 5 Cr",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&h=300&q=80",
      badge: "Premium"
    },
    {
      name: "Business Hub",
      developer: "Corporate Builders",
      configuration: "Commercial Spaces",
      location: "Bandra Kurla Complex",
      price: "₹3 Cr - 8 Cr",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&h=300&q=80",
      badge: "Commercial"
    },
    {
      name: "Tech Park Residency",
      developer: "IT Zone Developers",
      configuration: "2, 3 BHK Apartments",
      location: "Hinjewadi, Pune",
      price: "₹90 L - 2.1 Cr",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&h=300&q=80",
      badge: "IT Corridor"
    },
    {
      name: "Heritage Homes",
      developer: "Classic Constructions",
      configuration: "2, 3 BHK Apartments",
      location: "Pune Camp, Pune",
      price: "₹1.1 Cr - 2.8 Cr",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&h=300&q=80",
      badge: "Heritage"
    }
  ];


  const recommendedProjects = [
    {
      name: "Harsh Heights",
      developer: "Harsh Enterprises",
      configuration: "2, 3 BHK Apartments",
      location: "Thane West, Thane",
      price: "₹85 L - 1.25 Cr",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Sunshine Residency",
      developer: "Sunshine Developers",
      configuration: "1, 2 BHK Apartments",
      location: "Kalyan, Beyond Thane",
      price: "₹45 L - 75 L",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Green Meadows",
      developer: "Green Build",
      configuration: "2, 3 BHK Villas",
      location: "Panvel, Navi Mumbai",
      price: "₹60 L - 1.1 Cr",
      image: "https://images.unsplash.com/photo-1605276373954-0c4a2d3d0a9c?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Skyline Towers",
      developer: "Skyline Group",
      configuration: "1, 2, 3 BHK Apartments",
      location: "Mulund, Mumbai",
      price: "₹99 L - 2.5 Cr",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Riviera Bliss",
      developer: "Oceanic Builders",
      configuration: "2, 3 BHK Apartments",
      location: "Vasai, Mumbai",
      price: "₹55 L - 95 L",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Hilltop Residency",
      developer: "Hillstone Developers",
      configuration: "1, 2, 3 BHK Apartments",
      location: "Lonavala, Pune",
      price: "₹40 L - 80 L",
      image: "https://images.unsplash.com/photo-1600585154203-cbca1c54fba1?auto=format&fit=crop&w=400&h=300&q=80"
    }
  ];

  const trustedProjects = [
    {
      name: "Ashar Merac Phase 1",
      developer: "Ashar Group",
      configuration: "1, 2, 3, 4 BHK Apartments",
      location: "Thane West, Thane",
      price: "₹97 L - 3.17 Cr",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Lodha Splendora",
      developer: "Lodha Group",
      configuration: "1, 2, 3 BHK Apartments",
      location: "Ghodbunder Road, Thane",
      price: "₹75 L - 1.8 Cr",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Rustomjee Urbania",
      developer: "Rustomjee Group",
      configuration: "2, 3 BHK Apartments",
      location: "Majiwada, Thane",
      price: "₹1 Cr - 2.25 Cr",
      image: "https://images.unsplash.com/photo-1605276373954-0c4a2d3d0a9c?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Hiranandani Estate",
      developer: "Hiranandani Developers",
      configuration: "2, 3, 4 BHK Flats",
      location: "Thane West, Thane",
      price: "₹1.1 Cr - 3.5 Cr",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Kalpataru Parkcity",
      developer: "Kalpataru Group",
      configuration: "2, 3 BHK Apartments",
      location: "Kolshet Road, Thane",
      price: "₹95 L - 2.1 Cr",
      image: "https://images.unsplash.com/photo-1600585154203-cbca1c54fba1?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Piramal Vaikunth",
      developer: "Piramal Realty",
      configuration: "1, 2, 3 BHK Apartments",
      location: "Balkum, Thane",
      price: "₹85 L - 2.6 Cr",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&h=300&q=80"
    }
  ];

  const highDemandProjects = [
    {
      name: "Kartik Enclave",
      developer: "Shivay Developer",
      configuration: "1, 2 BHK Apartments",
      location: "Bhiwandi, Beyond Thane",
      price: "₹41.42 L - 60.52 L",
      image: "https://images.unsplash.com/photo-1600585154203-cbca1c54fba1?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Shree Sai Complex",
      developer: "Sai Developers",
      configuration: "1, 2 BHK Flats",
      location: "Nallasopara, Mumbai",
      price: "₹32 L - 55 L",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Omkar Residency",
      developer: "Omkar Group",
      configuration: "2, 3 BHK Apartments",
      location: "Virar, Mumbai",
      price: "₹38 L - 72 L",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Shiv Shakti Heights",
      developer: "Shakti Developers",
      configuration: "1, 2 BHK Flats",
      location: "Dombivli, Thane",
      price: "₹35 L - 58 L",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Navkar Residency",
      developer: "Navkar Builders",
      configuration: "2, 3 BHK Apartments",
      location: "Boisar, Palghar",
      price: "₹25 L - 45 L",
      image: "https://images.unsplash.com/photo-1605276373954-0c4a2d3d0a9c?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Dream City",
      developer: "Dream Homes",
      configuration: "1, 2 BHK Flats",
      location: "Badlapur, Thane",
      price: "₹28 L - 52 L",
      image: "https://images.unsplash.com/photo-1532926581846-af98fc2b514f?auto=format&fit=crop&w=400&h=300&q=80"
    }
  ];



  // Create refs for each section container
  const readyToMoveRef = useRef(null);
  const highDemandRef = useRef(null);
  const recommendedRef = useRef(null);
  const trustedRef = useRef(null);
  const topHighlightedRef = useRef(null);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      const headerOffset = 120; // Adjust this value based on your header height
      
      window.scrollTo({
        top: offsetPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  // Expose the scroll function globally if needed for navigation
  useEffect(() => {
    window.scrollToProjectSection = scrollToSection;
  }, []);

  // Reusable Scrollable Section Component
  const ScrollableSection = ({ 
    id, 
    title, 
    description, 
    projects, 
    scrollContainerRef,
    showBadge = false
  }) => {
    const scroll = (direction) => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollAmount = window.innerWidth < 768 ? 280 : 400;
        container.scrollBy({
          left: direction === 'right' ? scrollAmount : -scrollAmount,
          behavior: 'smooth'
        });
      }
    };

    return (
      <div 
        id={id} 
        className="scroll-mt-32" // This ensures proper scroll margin for fixed headers
        ref={scrollContainerRef}
      >
        <div className="max-w-7xl mx-auto w-full py-8 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 md:mb-8">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                {title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-between md:justify-end space-x-4 md:space-x-6">
              <div className="flex space-x-2 md:space-x-3">
                <button 
                  onClick={() => scroll('left')}
                  className="p-2 md:p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
                  aria-label={`Scroll ${title} left`}
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-2 md:p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
                  aria-label={`Scroll ${title} right`}
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <button className="text-blue-600 font-semibold hover:text-blue-700 whitespace-nowrap text-sm md:text-lg">
                View All →
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex space-x-4 md:space-x-8 overflow-x-auto pb-6 md:pb-8 scrollbar-hide scroll-smooth px-2 -mx-2"
              style={{ scrollPadding: '0 16px' }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} showBadge={showBadge} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project, showBadge = false }) => (
    <div className="flex-shrink-0 w-72 md:w-96 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:scale-105 md:hover:scale-105 relative border border-gray-100">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.name} 
          className="h-48 md:h-64 w-full object-cover" 
        />
        
        {/* Status Badge for Ready to Move */}
        {project.status && (
          <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-green-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
            {project.status}
          </div>
        )}
        
        {/* Custom Badge for Top Highlighted */}
        {showBadge && project.badge && (
          <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-purple-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
            {project.badge}
          </div>
        )}
      </div>
      
      <div className="p-4 md:p-6">
        <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-1 md:mb-2 line-clamp-1">{project.name}</h4>
        <p className="text-blue-600 font-semibold text-sm md:text-base mb-1 md:mb-2 line-clamp-1">by {project.developer}</p>
        <p className="text-gray-700 text-sm md:text-base mb-2 md:mb-3 line-clamp-1">{project.configuration}</p>
        <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 flex items-center line-clamp-1">
          <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </p>
        <p className="font-bold text-blue-700 text-lg md:text-xl">{project.price}</p>
        
        {/* Highlights for Ready to Move Projects */}
        {project.highlights && (
          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-1 md:gap-2">
              {project.highlights.slice(0, 2).map((highlight, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium line-clamp-1">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-gray-50">
      <div className="w-full">
        {/* Navigation Demo - You can place this in your header/menu */}
        <div className="hidden"> {/* This is just to show how navigation would work */}
          <button onClick={() => scrollToSection('ready-to-move-projects')}>Ready to Move</button>
          <button onClick={() => scrollToSection('high-demand-projects')}>High Demand</button>
          <button onClick={() => scrollToSection('recommended-projects')}>Recommended</button>
          <button onClick={() => scrollToSection('trusted-projects')}>Trusted</button>
          <button onClick={() => scrollToSection('top-highlighted-projects')}>Top Highlighted</button>
        </div>
        
        <ScrollableSection 
          id="ready-to-move-projects"
          title="Ready to Move"
          description="Immediate possession available properties with all amenities and ready for occupancy"
          projects={readyToMoveProjects}
          scrollContainerRef={readyToMoveRef}
        />
         <ScrollableSection 
          id="top-highlighted-projects"
          title="Top Highlighted Projects"
          description="Premium and exclusive property selections with unique features and amenities"
          projects={topHighlightedProjects}
          scrollContainerRef={topHighlightedRef}
          showBadge={true}
        />
         <ScrollableSection 
          id="recommended-projects"
          title="Recommended Projects"
          description="Handpicked homes specially recommended for you by our expert team"
          projects={recommendedProjects}
          scrollContainerRef={recommendedRef}
        />
         <ScrollableSection 
          id="trusted-projects"
          title="Projects by Trusted Developers"
          description="Exclusive showcase of top projects from renowned and trusted developers"
          projects={trustedProjects}
          scrollContainerRef={trustedRef}
        />
        <ScrollableSection 
          id="high-demand-projects"
          title="High-Demand Projects"
          description="Leading projects in high demand with excellent investment potential"
          projects={highDemandProjects}
          scrollContainerRef={highDemandRef}
        />
        
       

       

       
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Ensure proper scroll margin for all sections */
        [id] {
          scroll-margin-top: 120px;
        }
      `}</style>

      <style jsx global>{`
        /* Global smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Ensure sections have proper scroll margin */
        section[id] {
          scroll-margin-top: 120px;
        }
      `}</style>
    </section>
  );
};

export default ProjectShowcase;