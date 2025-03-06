// src/components/Patents.jsx
import React from 'react';
import { FaFileContract } from 'react-icons/fa';

const Patents = () => {
  const patents = [
    { icon: <FaFileContract />, text: "Patent 1" },
    { icon: <FaFileContract />, text: "Patent 2" },
    { icon: <FaFileContract />, text: "Patent 3" },
  ];

  return (
    <section id="patents" className="relative py-16 px-5 mx-auto max-w-6xl bg-gradient-to-r from-dark-blue to-darker-blue rounded-lg mb-8 shadow-md">
      <div className="glow glow-2 absolute -z-10 bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-secondary-color blur-3xl opacity-15"></div>
      <h2 className="text-3xl md:text-4xl mb-8 text-center text-accent-color">Our Patents and IPs</h2>
      
      <div className="carousel-container flex overflow-x-auto snap-x gap-5 p-6 rounded-xl bg-dark-surface-2 shadow-md scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-dark-surface">
        {patents.map((patent, index) => (
          <div key={index} className="carousel-item min-w-[250px] h-[180px] flex flex-col justify-center items-center snap-start bg-dark-surface border border-white border-opacity-5 rounded-lg p-4 transition-transform duration-300 shadow-md hover:scale-105 hover:shadow-lg hover:border-accent-color">
            <div className="text-5xl mb-4 text-secondary-color">{patent.icon}</div>
            <p className="text-lg font-bold opacity-90">{patent.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Patents;
