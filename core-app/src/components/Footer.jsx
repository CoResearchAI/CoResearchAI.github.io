// src/components/Footer.jsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-black text-text-color text-center py-6 mt-16 shadow-md relative overflow-hidden w-full">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-colm justify-between">
        <div className="social-icons flex gap-4 my-10 md:my-0">
          <a 
            href="#" 
            aria-label="Twitter"
            className="text-2xl text-white transition-all duration-300 hover:text-accent-color hover:-translate-y-1"
          >
            <FaTwitter />
          </a>
          <a 
            href="#" 
            aria-label="LinkedIn"
            className="text-2xl text-white transition-all duration-300 hover:text-accent-color hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a 
            href="#" 
            aria-label="GitHub"
            className="text-2xl text-white transition-aluration-300 hover:text-accent-color hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a 
            href="#" 
            aria-label="Discord"
            className="text-2xl text-white transition-all duration-300 hover:text-accent-color hover:-translate-y-1"
          >
            <FaDiscord />
          </a>
        </div>
        <p className="text-sm opacity-70 text-white my-10">&copy; 2025 CoResearch AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;