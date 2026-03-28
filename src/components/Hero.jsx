import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
            {/* Background Profile Spotlight Highlight */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="relative w-full md:w-4/5 h-full md:h-4/5 opacity-55 lg:opacity-65">
                    <img
                        src="/profile.jpeg"
                        alt="Integrated Profile Highlight"
                        className="w-full h-full object-contain scale-95 translate-y-[10%] grayscale-[20%] blur-[1px] md:blur-0"
                        style={{
                            maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 80%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 80%)',
                        }}
                    />
                    {/* Dark Tint Overlay to ensure text pops */}
                    <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]"></div>
                </div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto w-full relative z-10 text-center"
            >
                <div className="flex flex-col items-center">
                    <motion.div variants={itemVariants} className="inline-block mb-8 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                        Available for new opportunities
                    </motion.div>

                    <motion.h1 
                        variants={itemVariants} 
                        className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold mb-8 text-white tracking-tighter leading-[0.85] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                    >
                        Harikrishna <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-indigo-300">
                            Alungal Prakas
                        </span>
                    </motion.h1>

                    <motion.h2 
                        variants={itemVariants} 
                        className="text-xl md:text-3xl text-slate-200 font-light mb-12 max-w-3xl leading-relaxed drop-shadow-md"
                    >
                        AI/ML Engineer <span className="opacity-50 mx-2 text-indigo-400">|</span> <span className="text-white font-semibold">Data Science Enthusiasts</span>
                    </motion.h2>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="/resume.pdf"
                            download
                            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-primary hover:bg-primaryHover text-white px-12 py-5 rounded-full transition-all duration-300 shadow-glow font-bold group text-center text-lg"
                        >
                            <span>Download Resume</span>
                            <Download size={24} className="group-hover:-translate-y-1 transition-transform" />
                        </a>

                        <Link to="contact" smooth={true} duration={800} className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-surface/60 backdrop-blur-xl hover:bg-surface border border-glassBorder text-white px-12 py-5 rounded-full transition-all duration-300 font-bold group cursor-pointer text-lg">
                            <span>Contact Me</span>
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
