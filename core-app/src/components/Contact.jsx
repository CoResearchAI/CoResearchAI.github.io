import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-5 mx-auto max-w-6xl text-center bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 rounded-lg mb-8 shadow-md">
      <div className="glow glow-1 absolute -z-10 top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-accent-color blur-3xl opacity-15"></div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-accent-color font-bold">Contact Us</h2>
      
      <p className="max-w-2xl mx-auto my-3 sm:my-5 text-sm sm:text-base">
        We are excited to explore collaborations. Please fill out the form
        below to get in touch with us.
      </p>
      
      <form className="contact-form flex flex-col w-full max-w-2xl mx-auto my-4 sm:my-6 md:my-8 p-4 sm:p-6 md:p-8 rounded-xl bg-dark-surface shadow-md border border-white border-opacity-5">
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          className="mb-3 sm:mb-5 p-3 sm:p-4 border border-white border-opacity-10 rounded-lg bg-dark-surface-2 text-text-color focus:border-accent-color focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-opacity-20 text-sm sm:text-base"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          className="mb-3 sm:mb-5 p-3 sm:p-4 border border-white border-opacity-10 rounded-lg bg-dark-surface-2 text-text-color focus:border-accent-color focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-opacity-20 text-sm sm:text-base"
        />
        <textarea 
          placeholder="Your Message" 
          rows="4"
          required 
          className="mb-3 sm:mb-5 p-3 sm:p-4 border border-white border-opacity-10 rounded-lg bg-dark-surface-2 text-text-color focus:border-accent-color focus:outline-none focus:ring-2 focus:ring-accent-color focus:ring-opacity-20 text-sm sm:text-base"
        ></textarea>
        <button 
          type="submit" 
          className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-blue-950 border-none py-3 sm:py-4 px-6 sm:px-8 rounded-full font-bold cursor-pointer transition-all duration-300 shadow-md mt-2 sm:mt-4 relative overflow-hidden hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base"
        >
          Send Message
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -translate-x-full hover:translate-x-full transition-transform duration-700"></span>
        </button>
      </form>
      
      <p className="text-sm sm:text-base">
        You can also reach us at:
        <a href="mailto:info@CoResearch.AI" className="text-accent-color ml-1 no-underline hover:underline">info@CoResearch.AI</a>
      </p>
    </section>
  );
};

export default Contact;