import React from 'react';

const Safety = () => {
  return (
    <section id="safety" className="relative py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-5 mx-auto max-w-6xl bg-gradient-to-r from-dark-blue to-darker-blue rounded-lg mb-8 shadow-md">
      <div className="glow glow-1 absolute -z-10 top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-accent-color blur-3xl opacity-15"></div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 text-center text-accent-color">Generative AI Safety and Security Expertise</h2>
      
      <p className="bg-dark-surface p-3 sm:p-4 md:p-5 rounded-lg border-l-2 sm:border-l-4 border-accent-color my-4 sm:my-6 md:my-8 shadow-md text-sm sm:text-base leading-relaxed sm:leading-relaxed">
        All models and research infused with state of the art Prompt Injection,
        and Jailbreaking defense, robust safety, Topicality Guardrails,
        Hallucination Guardrails, DLP Guardrails, ensuring responsible AI
        innovation.
      </p>
    </section>
  );
};

export default Safety;