import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const ServiceNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Servizi', href: '/#servizi' },
    { label: 'Contatti', href: '/#contatti' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-primary-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center text-xl font-bold">
              <GraduationCap className="text-white mr-2" size={32} />
              <span className="text-white">Il Sapere</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-primary-100 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-white hover:text-primary-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ServiceNavbar;