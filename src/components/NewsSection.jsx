import React from 'react';

const NewsSection = () => {
  const news = [
    {
      title: "Inside Sachin Tendulkar's lavish home in Mumbai",
      description: "Sachin Tendulkar and Anjali Tendulkar own two premium properties located in Bandra (W) and BKG.",
      author: "Anuradha Ramamirtham",
      date: "Aug 2025",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=120&h=80&fit=crop"
    },
    {
      title: "How to pay stamp duty and registration charges in Maharashtra 2025?",
      description: "Know how to pay online stamp duty and registration charges in Nagpur, Mumbai, Pune, PCMC, Nashik, Thane and other places in Maharashtra.",
      author: "Anuradha Ramamirtham",
      date: "Jul 2025",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=120&h=80&fit=crop"
    }
  ];

  const searchTerms = [
    "Studio Apartments in Thane",
    "Resale Flats in Thane",
    "Ready to Move Flats in Thane",
    "Flats for Sale in Thane Without Brokerage",
    "Duplex in Thane",
    "Resale House in Thane"
  ];

  const cityCollections = [
    "Affordable Projects in Thane",
    "Townships in Thane",
    "Ready to Move Projects in Thane",
    "Properties for sale in Thane"
  ];

  const filterOptions = [
    "Penthouse in Thane",
    "Affordable House for sale in Thane",
    "House for sale without brokerage in Thane",
    "Rowhouse in Thane",
    "Under Construction Apartments in Thane"
  ];

  return (
    <div className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - News Articles */}
          <div className="lg:w-2/3">
            <h2 className="text-lg font-bold text-gray-900 mb-2">News and Articles</h2>
            <p className="text-gray-600 text-sm mb-6">Read what's happening in Real Estate</p>

            {/* News Articles List */}
            <div className="space-y-6">
              {news.map((article, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex gap-4">
                    {/* Article Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    </div>
                    
                    {/* Article Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                        {article.description}
                      </p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span className="font-medium">{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See All Button */}
            <button className="text-blue-600 text-sm font-medium mt-6 hover:text-blue-700 inline-flex items-center">
              See all news and articles
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Housing Head TV */}
            <div className="mt-8">
              <h3 className="font-bold text-gray-900 text-sm mb-4">Housing Head TV</h3>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-xs">📺</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Samruddhi Mahamarg: Revised toll, project status, route map
                    </h4>
                    <p className="text-gray-600 text-xs line-clamp-2">
                      The Mumbai Nagpur Expressway is a modern engineering marvel that will connect the two important cities of Maharashtra and is fully complete.
                    </p>
                    <div className="text-xs text-gray-500 mt-2">
                      <span className="font-medium">Anuradha Ramamirtham</span>
                      <span className="mx-2">•</span>
                      <span>Jun 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Search Links */}
          <div className="lg:w-1/3">
            <h3 className="font-bold text-gray-900 text-sm mb-4">
              Browse top links to search your home
            </h3>

            {/* People Also Search For */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 text-sm mb-3">People Also Search For</h4>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="space-y-3">
                  {searchTerms.map((term, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-blue-600 hover:text-blue-700 text-sm block transition-colors"
                    >
                      {term}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* City Collections */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 text-sm mb-3">City Collections</h4>
              <div className="space-y-2">
                {cityCollections.map((collection, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-600 hover:text-blue-700 text-sm block transition-colors"
                  >
                    {collection}
                  </a>
                ))}
              </div>
            </div>

            {/* Filter Your Search */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 text-sm mb-3">Filter Your Search</h4>
              <div className="space-y-2">
                {filterOptions.map((option, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-600 hover:text-blue-700 text-sm block transition-colors"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>

            {/* REA Group */}
            <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-4">
              <p>Part of 💡 REA Group</p>
            </div>
          </div>
        </div>

        {/* Seller CTA Section - Matching your image layout */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
          <div className="max-w-md mx-auto">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Have a property to sell?</h3>
            <p className="text-gray-600 text-sm mb-4">
              List your property & connect with clients faster!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Sell your property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;