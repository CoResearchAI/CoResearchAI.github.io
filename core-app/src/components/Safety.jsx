// src/components/Safety.jsx
import React from 'react';

const Safety = () => {
  return (
    <section id="safety" className="relative py-16 px-5 mx-auto max-w-6xl bg-gradient-to-r from-dark-blue to-darker-blue rounded-lg mb-8 shadow-md">
      <div className="glow glow-1 absolute -z-10 top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-accent-color blur-3xl opacity-15"></div>
      <h2 className="text-3xl md:text-4xl mb-8 text-center text-accent-color">Generative AI Safety and Security Expertise</h2>
      <p className="bg-dark-surface p-5 rounded-lg border-l-4 border-accent-color my-8 shadow-md">
        All models and research infused with state of the art Prompt Injection,
        and Jailbreaking defense, robust safety, Topicality Guardrails,
        Hallucination Guardrails, DLP Guardrails, ensuring responsible AI
        innovation.
      </p>
    </section>
  );
};

export default Safety;