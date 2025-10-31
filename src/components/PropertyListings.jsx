import React from "react";

const PropertyListings = () => {
  const topSections = [
    {
      id: 1,
      title: "47908 Owner Properties",
      btnText: "Explore",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    },
    {
      id: 2,
      title: "Projects",
      btnText: "Explore",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118d?q=80&w=800",
    },
    {
      id: 3,
      title: "#PataBadloLifeBadlo",
      btnText: "Click Here",
      image: "https://images.unsplash.com/photo-1594737625785-c4f31f2b3b99?q=80&w=800",
    },
    {
      id: 4,
      title: "909 Budget Homes",
      btnText: "Explore",
      image: "https://images.unsplash.com/photo-1600585154154-1e6b2e3b8d3d?q=80&w=800",
    },
  ];

  const popularProperties = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800",
      bhk: "3 BHK Flat",
      price: "₹1.25 Cr",
      area: "1189 sqft",
      location: "Marathahalli, Bangalore",
      status: "Ready to Move",
      photos: 4,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1616486483449-67a6dcb6b1c8?q=80&w=800",
      bhk: "2 BHK Flat",
      price: "₹1.20 Cr",
      area: "1500 sqft",
      location: "Isro Layout, Kumaraswamy Layout, Bangalore",
      status: "Ready to Move",
      photos: 10,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1600585154206-0f3d3fdfc9d1?q=80&w=800",
      bhk: "3 BHK Flat",
      price: "₹2.70 Cr",
      area: "1684 sqft",
      location: "Thanisandra Main Road, Bangalore",
      status: "Under Construction",
      photos: 58,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1628744448840-3c5a0efc6198?q=80&w=800",
      bhk: "3 BHK Flat",
      price: "₹1.95 Cr",
      area: "1500 sqft",
      location: "Kundalahalli, Brookefield, Bangalore",
      status: "Ready to Move",
      photos: 7,
    },
  ];

  return (
    <div className="bg-white text-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          We’ve got properties for everyone
        </h1>

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {topSections.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden group shadow hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <button className="inline-flex items-center text-sm font-medium hover:underline">
                  {item.btnText} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Properties */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Popular Owner Properties
          </h2>
          <a
            href="#"
            className="text-red-500 font-semibold hover:underline text-base"
          >
            See all Properties →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative">
                <img
                  src={property.img}
                  alt={property.bhk}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                  🖼 {property.photos}
                </div>
              </div>
              <div className="p-4">
                <div className="font-semibold text-lg mb-1">{property.bhk}</div>
                <div className="text-gray-900 font-bold mb-2">
                  {property.price} | {property.area}
                </div>
                <div className="text-gray-600 text-sm mb-3">
                  {property.location}
                </div>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    property.status === "Ready to Move"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {property.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;
