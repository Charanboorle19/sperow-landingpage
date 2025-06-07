import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavArrow = () => (
  <span className="inline-block ml-1.5 align-middle transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-focus:opacity-100 group-focus:translate-x-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 50 50" className="text-blue-600">
      <path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/>
      <path fill="currentColor" d="M33.3 26.7L25 18.4l-8.3 8.3l-1.4-1.4l9.7-9.7l9.7 9.7z"/>
      <path fill="currentColor" d="M24 17h2v17h-2z"/>
    </svg>
  </span>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionMap: { [key: string]: string } = {
      'features': 'features',
      'how-it-works': 'howitworks',
      'benefits': 'benefits',
      'contact': 'contact'
    };

    const targetId = sectionMap[sectionId.toLowerCase()];
    const section = document.getElementById(targetId);
    
    if (section) {
      setIsMenuOpen(false);
      
      setTimeout(() => {
        const headerHeight = 80;
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent border-b border-gray-200/30'
      }`}
    >
      {/* Animated Line - Only visible when not scrolled */}
      {!isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-shimmer"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center select-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="relative group cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <div className="relative flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
                  Sperow
                </span>
                <span className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tight">AI</span>
                <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-blue-600/10 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                </div>
              </div>
              {/* Animated Underline */}
              <div className="absolute -bottom-1 left-0 w-full h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Features', id: 'features' },
              { name: 'How it Works', id: 'how-it-works' },
              { name: 'Benefits', id: 'benefits' }
            ].map((item, index) => (
              <motion.button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-base text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
                <NavArrow />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div 
            className="hidden md:flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/80 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 py-6 rounded-b-2xl shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {[
                  { name: 'Features', id: 'features' },
                  { name: 'How it Works', id: 'how-it-works' },
                  { name: 'Benefits', id: 'benefits' },
                  { name: 'Contact', id: 'contact' }
                ].map((item, index) => (
                  <motion.button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-base text-gray-700 hover:text-blue-600 px-4 py-2.5 rounded-lg hover:bg-blue-50/80 transition-all duration-200 font-medium group flex items-center ${
                      item.name === 'Contact' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:text-white' : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                    <NavArrow />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;