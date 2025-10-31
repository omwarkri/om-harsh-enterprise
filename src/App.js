import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectShowcase from './components/ProjectShowcase';
import PropertyListings from './components/PropertyListings';
// import SellerSection from './components/SellerSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
 
      <ProjectShowcase />
      <PropertyListings />
      {/* <SellerSection /> */}
      <NewsSection />
      <AboutUsSection/>
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;