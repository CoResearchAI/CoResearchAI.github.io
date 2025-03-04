import React from 'react';
import { Rocket, ShieldCheck, Users, Code2, Search, Zap, CheckCircle, ArrowRightCircle } from 'lucide-react';

const CoResearchAI = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-black text-white font-sans">
            {/* Hero Section */}
            <header className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    CoResearch.AI
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-300">
                    Generative AI - R&D Outsourcing
                </p>
                <p className="text-md sm:text-lg mt-4 text-gray-400 max-w-3xl mx-auto">
                    Applied and fundamental research, Gen AI process patents, benchmarking, security, foundation model training, domain adaptation, multi-modal voice-to-voice product creation, and product integration.
                </p>
                <button className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
                    <span className="flex items-center">
                        <Rocket className="mr-2 w-5 h-5" />
                        Explore Our Services
                    </span>
                </button>
            </header>

            {/* Services Overview Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Applied Research */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        <Rocket className="w-10 h-10 text-purple-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">Applied Research</h2>
                        <p className="text-gray-400">
                            Practical, real-world Gen AI solutions tailored to your business needs.
                        </p>
                    </div>

                    {/* Fundamental Research */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                        <Search className="w-10 h-10 text-blue-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">Fundamental Research</h2>
                        <p className="text-gray-400">
                            Deep dives into core AI technologies, pushing the boundaries of what's possible.
                        </p>
                    </div>

                    {/* Gen AI Process Patents */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        <ShieldCheck className="w-10 h-10 text-purple-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">Gen AI Process Patents</h2>
                        <p className="text-gray-400">
                            Protect your innovations with our patent development expertise.
                        </p>
                    </div>

                    {/* Gen AI Benchmarking */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                        <Users className="w-10 h-10 text-blue-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">Gen AI Benchmarking</h2>
                        <p className="text-gray-400">
                            Rigorous testing and analysis to ensure top performance and reliability.
                        </p>
                    </div>

                    {/* Gen AI Security */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        <ShieldCheck className="w-10 h-10 text-purple-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">Gen AI Security</h2>
                        <p className="text-gray-400">
                            Robust security measures to protect your AI systems from threats.
                        </p>
                    </div>

                    {/* GenAI Foundation Model Training */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                        <Code2 className="w-10 h-10 text-blue-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">GenAI Foundation Model Training</h2>
                        <p className="text-gray-400">
                            Advanced training for foundation models to meet your specific needs.
                        </p>
                    </div>

                    {/* GenAI Domain Adaptation */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        <Zap className="w-10 h-10 text-purple-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">GenAI Domain Adaptation</h2>
                        <p className="text-gray-400">
                            Tailoring AI models to excel in specific domains and applications.
                        </p>
                    </div>

                    {/* Multi Modal Voice to Voice Gen AI Product creation */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                        <CheckCircle className="w-10 h-10 text-blue-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">Multi Modal Voice to Voice Gen AI Product creation</h2>
                        <p className="text-gray-400">
                            Innovative product development with multi-modal voice-to-voice AI.
                        </p>
                    </div>

                    {/* Gen AI research */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        <Search className="w-10 h-10 text-purple-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">Gen AI research</h2>
                        <p className="text-gray-400">
                            Cutting-edge research to keep you ahead in the rapidly evolving AI landscape.
                        </p>
                    </div>

                    {/* Gen AI Product integration */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                        <ArrowRightCircle className="w-10 h-10 text-blue-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-white mb-2">Gen AI Product integration</h2>
                        <p className="text-gray-400">
                            Seamless integration of AI solutions into your existing products and services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Collaboration Section */}
            <section className="bg-gray-800/50 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                        Collaborating with the Best
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        We partner with top global researchers and product specialists in fundamental and applied Gen AI and Gen AI Security to support your AI journey.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    © {new Date().getFullYear()} CoResearch.AI. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default CoResearchAI;
