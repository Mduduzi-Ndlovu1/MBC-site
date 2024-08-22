import React, { useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';

const ContactUs = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'top',
      interval: 100,
      reset: false,
    });
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8 mt-[4rem] reveal">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 reveal">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Contact Form */}
        <div className="md:w-1/2 reveal">
          <form
            action="#"
            method="POST"
            className="bg-gray-800 p-6 rounded-lg shadow-md reveal"
          >
            <h2 className="text-2xl font-semibold mb-4 reveal">Get in Touch</h2>
            
            <div className="mb-4 reveal">
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
              />
            </div>
            
            <div className="mb-4 reveal">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
              />
            </div>
            
            <div className="mb-4 reveal">
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
              />
            </div>
            
            <div className="mb-4 reveal">
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition reveal"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="md:w-1/2 mt-8 md:mt-0 reveal">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md reveal">
            <h2 className="text-2xl font-semibold mb-4 reveal">Contact Information</h2>
            
            <div className="flex items-center mb-4 reveal">
              <FaPhoneAlt className="text-blue-600 mr-3" />
              <span className="text-white">+1 (123) 456-7890</span>
            </div>
            
            <div className="flex items-center mb-4 reveal">
              <FaEnvelope className="text-blue-600 mr-3" />
              <span className="text-white">contact@example.com</span>
            </div>
            
            <div className="flex items-center mb-4 reveal">
              <FaMapMarkerAlt className="text-blue-600 mr-3" />
              <span className="text-white">123 Main Street, Anytown, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
