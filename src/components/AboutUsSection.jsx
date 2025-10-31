import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000"
            alt="Harsh Enterprises Office"
            className="rounded-2xl shadow-lg object-cover w-full h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
            Harsh Enterprises
          </h3>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <strong>Harsh Enterprises</strong>, we believe in building more than just spaces —
            we build trust, quality, and lasting relationships. With a
            commitment to excellence and innovation, we specialize in
            residential and commercial property solutions that redefine
            comfort and style.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Since our inception, our goal has been to deliver properties that
            blend modern design with timeless value. From budget-friendly homes
            to premium projects, Harsh Enterprises stands for reliability,
            transparency, and craftsmanship that speaks for itself.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl shadow-md text-center py-6 hover:shadow-lg transition">
              <h4 className="text-2xl font-bold text-red-500">10+</h4>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="bg-white rounded-xl shadow-md text-center py-6 hover:shadow-lg transition">
              <h4 className="text-2xl font-bold text-red-500">500+</h4>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white rounded-xl shadow-md text-center py-6 hover:shadow-lg transition">
              <h4 className="text-2xl font-bold text-red-500">50+</h4>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
