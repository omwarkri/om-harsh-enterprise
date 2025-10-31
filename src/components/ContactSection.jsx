import React from 'react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+91 93206 58734',
      link: 'https://wa.me/919320658734',
      description: 'Click to chat directly on WhatsApp'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'contact@harshenterprises.com',
      link: 'mailto:contact@harshenterprises.com',
      description: 'Send us an email for inquiries'
    },
    {
      icon: '📺',
      title: 'YouTube',
      value: '@HARSHENTERPRISES-z4y',
      link: 'https://www.youtube.com/@HARSHENTERPRISES-z4y',
      description: 'Subscribe to our channel'
    },
    {
      icon: '📷',
      title: 'Instagram',
      value: '@harshenterprises.7979',
      link: 'https://www.instagram.com/harshenterprises.7979?igsh=MW8wdmYxZTlxMDE1cQ==',
      description: 'Follow us on Instagram'
    },
    {
      icon: '👥',
      title: 'Facebook',
      value: 'Harsh Enterprises',
      link: 'https://www.facebook.com/share/15KzAWXG4Lb/',
      description: 'Like our Facebook page'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'View on Google Maps',
      link: 'https://maps.app.goo.gl/BYBpLRZqZDM6XDKi6',
      description: 'Visit our office location'
    }
  ];

  return (
    <div id="contact" className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to find your dream property? Contact us through any of the channels below. 
            We're here to help you with all your real estate needs.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {contact.title}
                </h3>
                <p className="text-blue-600 font-medium text-base mb-2 group-hover:text-blue-700">
                  {contact.value}
                </p>
                <p className="text-gray-500 text-sm">
                  {contact.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Business Hours */}
        <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
            <div>
              <p className="font-semibold">Monday - Friday</p>
              <p>9:00 AM - 7:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Saturday</p>
              <p>10:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Sunday</p>
              <p>11:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;