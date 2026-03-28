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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
          Available for new opportunities
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white tracking-tight leading-tight">
          Harikrishna <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-300">
            Alungal Prakas
          </span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          AI/ML Engineer <span className="opacity-50 mx-2">|</span> Data Science Enthusiasts
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/resume.pdf" 
            download 
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary hover:bg-primaryHover text-white px-8 py-3.5 rounded-full transition-all duration-300 shadow-glow font-medium group text-center"
          >
            <span>Download Resume</span>
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>
          
          <Link to="contact" smooth={true} duration={800} className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-surface hover:bg-surfaceHover border border-glassBorder text-slate-200 px-8 py-3.5 rounded-full transition-all duration-300 font-medium group cursor-pointer">
            <span>Contact Me</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
