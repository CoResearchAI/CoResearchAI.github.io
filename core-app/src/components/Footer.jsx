// src/components/Footer.jsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dark-blue to-darker-blue text-text-color text-center py-6 mt-16 shadow-md relative overflow-hidden">
      <div className="social-icons flex justify-center gap-5 my-5">
        <a href="#" className="text-2xl text-text-color transition-all duration-300 hover:text-accent-color hover:-translate-y-1">
          <FaTwitter />
        </a>
        <a href="#" className="text-2xl text-text-color transition-all duration-300 hover:text-accent-color hover:-translate-y-1">
          <FaLinkedin />
        </a>
        <a href="#" className="text-2xl text-text-color transition-all duration-300 hover:text-accent-color hover:-translate-y-1">
          <FaGithub />
        </a>
        <a href="#" className="text-2xl text-text-color transition-all duration-300 hover:text-accent-color hover:-translate-y-1">
          <FaDiscord />
        </a>
      </div>
      <p className="text-sm opacity-70">&copy; 2025 CoResearch AI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;