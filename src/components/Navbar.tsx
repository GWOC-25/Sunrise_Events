import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Sunrise Events Logo" className="h-12 w-12 mr-2" />
            <Link to="/" className="text-2xl font-bold text-pink-500 navbar-brand">
              Sunrise Events
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-pink-500 transition-colors">
              Services
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-pink-500 transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;