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
        <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10"
            >
                {/* Left Side: Text Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                    <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                        Available for new opportunities
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-white tracking-tight leading-tight">
                        Harikrishna <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-300">
                            Alungal Prakas
                        </span>
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        AI/ML Engineer <span className="opacity-50 mx-2 text-indigo-400">|</span> <span class="text-white font-medium">Data Science Enthusiasts</span>
                    </motion.h2>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a
                            href="/resume.pdf"
                            download
                            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-full transition-all duration-300 shadow-glow font-medium group text-center"
                        >
                            <span>Download Resume</span>
                            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                        </a>

                        <Link to="contact" smooth={true} duration={800} className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-surface hover:bg-surfaceHover border border-glassBorder text-slate-200 px-8 py-4 rounded-full transition-all duration-300 font-medium group cursor-pointer">
                            <span>Contact Me</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Right Side: Optimized Circular Profile Photo */}
                <motion.div
                    variants={itemVariants}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end items-center relative"
                >
                    <div className="relative group">
                        {/* Premium Glow Aura */}
                        <div className="absolute -inset-8 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-500 opacity-70"></div>
                        
                        {/* Circular Photo Container */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full p-2 bg-gradient-to-br from-primary via-indigo-500/50 to-transparent border border-white/10 overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/profile.jpeg"
                                alt="Harikrishna Alungal Prakas"
                                className="w-full h-full object-cover object-top scale-100 grayscale-[10%] group-hover:grayscale-0 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Professional Badge Overlay */}
                        <div className="absolute -bottom-2 -right-2 bg-surface/90 backdrop-blur-lg border border-glassBorder p-4 rounded-2xl shadow-2xl hidden md:block">
                            <div className="flex items-center space-x-2">
                                <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                                <p className="text-sm font-bold text-white uppercase tracking-tight">Open to Work</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 blur-[150px] pointer-events-none -z-10"></div>
        </section>
    );
};

export default Hero;
