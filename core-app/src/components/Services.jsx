import React from 'react';
import { FaLightbulb, FaGraduationCap, FaWrench, FaSearchPlus, FaRobot } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaLightbulb />, text: "Gen AI Research" },
    { icon: <FaGraduationCap />, text: "Model Training" },
    { icon: <FaWrench />, text: "Custom Solutions" },
    { icon: <FaSearchPlus />, text: "RAG Implementation" },
    { icon: <FaRobot />, text: "Agentic Solutions" },
  ];

  return (
    <section id="services" className="relative py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-5 mx-auto max-w-6xl bg-gradient-to-r from-blue-400 to-blue-800 rounded-lg mb-8 shadow-md">
      <div className="glow glow-1 absolute -z-10 top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-accent-color blur-3xl opacity-15"></div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 text-center text-accent-color">Our R&D and IP Creation Services</h2>
      
      <div className="carousel-container grid grid-cols-1 sm:grid-cols-2 md:flex md:overflow-x-auto md:snap-x gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-xl bg-dark-surface-2 shadow-md scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-dark-surface">
        {services.map((service, index) => (
          <CarouselItem key={index} icon={service.icon} text={service.text} />
        ))}
      </div>
    </section>
  );
};

const CarouselItem = ({ icon, text }) => {
  return (
    <div className="carousel-item w-full md:min-w-[220px] lg:min-w-[250px] h-[140px] sm:h-[160px] md:h-[180px] flex flex-col justify-center items-center snap-start bg-dark-surface border border-white border-opacity-5 rounded-lg p-3 sm:p-4 mb-3 md:mb-0 transition-transform duration-300 shadow-md hover:scale-105 hover:shadow-lg hover:border-accent-color">
      <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4 text-secondary-color">{icon}</div>
      <p className="text-base sm:text-lg font-bold opacity-90 text-center">{text}</p>
    </div>
  );
};

export default Services;