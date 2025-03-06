// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 px-5 mx-auto max-w-6xl text-center bg-gradient-to-r from-dark-blue to-darker-blue rounded-lg mb-8 shadow-md">
      <div className="glow glow-1 absolute -z-10 top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-accent-color blur-3xl opacity-15"></div>
      <h2 className="text-3xl md:text-4xl mb-6 text-accent-color">Contact Us</h2>
      <p className="max-w-2xl mx-auto my-5">
        We are excited to explore collaborations. Please fill out the form
        below to get in touch with us.
      </p>
      
      <form className="contact-form flex flex-col max-w-2xl mx-auto my-8 p-6 md:p-8 rounded-xl bg-dark-surface shadow-md border border-white border-opacity-5">
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          className="mb-5 p-4 border border-white border-opacity-10 rounded-lg bg-dark-surface-2 text-text-color focus:border-accent-color focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-opacity-20"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          className="mb-5 p-4 border border-white border-opacity-10 rounded-lg bg-dark-surface-2 text-text-color focus:border-accent-color focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-opacity-20"
        />
        <textarea 
          placeholder="Your Message" 
          rows="5" 
          required 
          className="mb-5 p-4 border border-white border-opacity-10 rounded-lg bg-dark-surface-2 text-text-color focus:border-accent-color focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-opacity-20"
        ></textarea>
        <button 
          type="submit" 
          className="bg-gradient-to-r from-primary-color to-secondary-color text-text-color border-none py-4 px-8 rounded-full font-bold cursor-pointer transition-all duration-300 shadow-md mt-4 relative overflow-hidden hover:-translate-y-1 hover:shadow-lg"
        >
          Send Message
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -translate-x-full hover:translate-x-full transition-transform duration-700"></span>
        </button>
      </form>
      
      <p>
        You can also reach us at:
        <a href="mailto:info@CoResearch.AI" className="text-accent-color ml-1 no-underline">info@CoResearch.AI</a>
      </p>
    </section>
  );
};

export default Contact;

