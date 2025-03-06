// src/components/Services.jsx
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
    <section id="services" className="relative py-16 px-5 mx-auto max-w-6xl bg-gradient-to-r from-dark-blue to-darker-blue rounded-lg mb-8 shadow-md">
      <div className="glow glow-1 absolute -z-10 top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-accent-color blur-3xl opacity-15"></div>
      <h2 className="text-3xl md:text-4xl mb-8 text-center text-accent-color">Our R&D and IP Creation Services</h2>
      
      <div className="carousel-container flex overflow-x-auto snap-x gap-5 p-6 rounded-xl bg-dark-surface-2 shadow-md scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-dark-surface">
        {services.map((service, index) => (
          <CarouselItem key={index} icon={service.icon} text={service.text} />
        ))}
      </div>
    </section>
  );
};

const CarouselItem = ({ icon, text }) => {
  return (
    <div className="carousel-item min-w-[250px] h-[180px] flex flex-col justify-center items-center snap-start bg-dark-surface border border-white border-opacity-5 rounded-lg p-4 transition-transform duration-300 shadow-md hover:scale-105 hover:shadow-lg hover:border-accent-color">
      <div className="text-5xl mb-4 text-secondary-color">{icon}</div>
      <p className="text-lg font-bold opacity-90">{text}</p>
    </div>
  );
};

export default Services;

