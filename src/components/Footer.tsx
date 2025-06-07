import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <a href="mailto:contact@sperow.com" className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <span>contact@sperow.com</span>
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="tel:+916309467988" className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <span>+91 6309467988</span>
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="tel:+917893815371" className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <span>+91 7893815371</span>
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <a href="#features" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Features</a>
              <a href="#benefits" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Benefits</a>
              <a href="#how-it-works" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">How It Works</a>
              <a href="#about" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">About Us</a>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Sperow</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-md">
              Transforming healthcare delivery with AI-powered solutions that enhance patient care and streamline medical workflows.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Sperow. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;