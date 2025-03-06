import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const Academic = () => {
  const academicPartners = [
    { icon: <FaUniversity />, text: "IIT Collaboration" },
    { icon: <FaUniversity />, text: "BITS Collaboration" },
    { icon: <FaUniversity />, text: "Harvard Collaboration" },
  ];

  return (
    <section id="academic" className="relative py-8 md:py-16 px-3 md:px-5 mx-auto max-w-6xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 rounded-lg mb-8 shadow-md">
      <div className="glow glow-2 absolute -z-10 bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-secondary-color blur-3xl opacity-15"></div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-8 text-center text-accent-color">Academic Collaboration</h2>
      
      <div className="carousel-container flex flex-wrap md:flex-nowrap justify-center md:justify-start overflow-x-auto snap-x gap-3 sm:gap-5 p-4 md:p-6 rounded-xl bg-dark-surface-2 shadow-md scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-dark-surface">
        {academicPartners.map((partner, index) => (
          <div 
            key={index} 
            className="carousel-item w-full sm:w-1/2 md:min-w-[250px] mb-3 md:mb-0 h-[150px] md:h-[180px] flex flex-col justify-center items-center snap-start bg-dark-surface border border-white border-opacity-5 rounded-lg p-4 transition-transform duration-300 shadow-md hover:scale-105 hover:shadow-lg hover:border-accent-color"
          >
            <div className="text-4xl md:text-5xl mb-3 md:mb-4 text-secondary-color">{partner.icon}</div>
            <p className="text-base md:text-lg font-bold opacity-90 text-center">{partner.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academic;