import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}>
      {/* Top Bar */}
      <div className={`bg-blue-600 text-white transition-all duration-500 ${isScrolled ? 'py-1' : 'py-3'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer">
                <Phone size={16} className="animate-pulse" />
                <span>Emergency: +1 (555) 911-HELP</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Clock size={16} />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <MapPin size={16} />
              <span>123 Medical Plaza, Health City, HC 12345</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-2xl">+</span>
            </div>
            <div>
              <span className={`text-3xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                BigMedix
              </span>
              <div className={`text-sm transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-blue-200'}`}>
                Medical Center
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/') 
                  ? (isScrolled ? 'text-blue-600' : 'text-orange-300') 
                  : (isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200')
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/about') 
                  ? (isScrolled ? 'text-blue-600' : 'text-orange-300') 
                  : (isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200')
              }`}
            >
              About Us
            </Link>
            
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 font-semibold transition-all duration-300 hover:scale-105 ${
                  isActive('/services') 
                    ? (isScrolled ? 'text-blue-600' : 'text-orange-300') 
                    : (isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200')
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link to="/services" className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    All Services
                  </Link>
                  <Link to="/patient-resources" className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    Patient Resources
                  </Link>
                  <Link to="/insurance" className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    Insurance & Payment
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/doctors" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/doctors') 
                  ? (isScrolled ? 'text-blue-600' : 'text-orange-300') 
                  : (isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200')
              }`}
            >
              Doctors
            </Link>
            <Link 
              to="/blog" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/blog') 
                  ? (isScrolled ? 'text-blue-600' : 'text-orange-300') 
                  : (isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200')
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/contact') 
                  ? (isScrolled ? 'text-blue-600' : 'text-orange-300') 
                  : (isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200')
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white rounded-lg shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 hover:bg-blue-50 px-4 rounded-lg">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 hover:bg-blue-50 px-4 rounded-lg">About Us</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 hover:bg-blue-50 px-4 rounded-lg">Services</Link>
              <Link to="/doctors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 hover:bg-blue-50 px-4 rounded-lg">Doctors</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 hover:bg-blue-50 px-4 rounded-lg">Blog</Link>
              <Link to="/patient-resources" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 hover:bg-blue-50 px-4 rounded-lg">Patient Resources</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 hover:bg-blue-50 px-4 rounded-lg">Contact</Link>
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium w-fit transform hover:scale-105"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;