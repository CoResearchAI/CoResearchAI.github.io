// src/components/Hero.jsx
import React from 'react';
import { FaUsers, FaMicrochip, FaDatabase } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative py-32 px-5 text-center">
      {/* Background Animations */}
      <div className="animated-bg absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="animated-bg-item absolute w-72 h-72 bg-primary-color bg-opacity-5 rounded-full top-[10%] right-[5%] animate-float"></div>
        <div className="animated-bg-item absolute w-48 h-48 bg-primary-color bg-opacity-5 rounded-full bottom-[20%] left-[10%] animate-float delay-500"></div>
        <div className="animated-bg-item absolute w-36 h-36 bg-primary-color bg-opacity-5 rounded-full top-[40%] left-[30%] animate-float delay-1000"></div>
      </div>
      <div className="glow glow-1 absolute -z-10 top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-accent-color blur-3xl opacity-15"></div>
      <div className="glow glow-2 absolute -z-10 bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-secondary-color blur-3xl opacity-15"></div>
      
      {/* Hero Content */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-shadow font-bold text-accent-color">
        <span className="glitch-text inline-block">Accelerating AI Innovation</span> Through Collaboration
      </h2>
      <p className="text-accent-color sm:text-lg max-w-4xl mx-auto my-5 px-4 ">
        CoResearch AI is a cutting-edge platform designed to foster
        collaboration, accelerate research, and democratize access to
        advanced AI tools and resources, with a strong focus on Generative AI
        Safety and Security.
      </p>
      
      {/* Features Section */}
      <div className="features flex flex-wrap justify-center gap-6 mt-12">
        <FeatureCard
          icon={<FaUsers />}
          title="Collaborative Research"
          description="Shared workspaces, version control, and real-time communication for seamless teamwork."
        />
        <FeatureCard
          icon={<FaMicrochip />}
          title="AI Model Development"
          description="Pre-built models, training capabilities, and easy deployment for rapid innovation."
        />
        <FeatureCard
          icon={<FaDatabase />}
          title="Our Patents and IPs"
          description="Secure storage, visualization tools, and data sharing to protect your innovations."
        />
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature flex-1 min-w-[280px] max-w-[400px] p-6 rounded-xl bg-dark-surface shadow-md transition-all duration-300 text-center border border-white border-opacity-5 hover:transform hover:-translate-y-1 hover:shadow-lg hover:border-accent-color">
      <div className="text-4xl mb-5 text-blue-950 flex flex-wrap justify-center">{icon}</div>
      <h3 className="text-xl mb-3 text-accent-color">{title}</h3>
      <p className="feature-description text-text-color opacity-80">{description}</p>
    </div>
  );
};

export default Hero;
