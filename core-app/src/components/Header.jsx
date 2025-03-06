// src/components/Header.jsx
import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { FaMoon } from 'react-icons/fa';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'academic', label: 'Academic' },
    { id: 'safety', label: 'Safety' },
    { id: 'patents', label: 'Patents' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-5 shadow-md flex justify-between items-center w-full">
      <h1 className="text-2xl flex items-center">
        <img src="src/static/images/logo.png" alt="Logo" className="mr-2 h-8" />
        CoResearch AI
      </h1>
      <nav className="flex items-center">
        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
        
        {/* Navigation Links */}
        <div className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-blue-900 lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
          <ul className="lg:flex lg:space-x-6 p-4 lg:p-0">
            {navItems.map((item) => (
              <li key={item.id} className="my-3 lg:my-0">
                <a
                  href={`#${item.id}`}
                  className={`px-4 py-2 rounded transition-all duration-300 hover:bg-opacity-10 hover:bg-white hover:text-accent-color block lg:inline ${
                    activeSection === item.id ? 'text-accent-color' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Theme Toggle */}
        <div className="ml-4 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-full p-2 cursor-pointer transition-all duration-300 hover:bg-opacity-10">
          <FaMoon className="text-accent-color" />
        </div>
      </nav>
    </header>
  );
};

export default Header;