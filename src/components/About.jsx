import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card rounded-[2rem] p-10 md:p-16 relative overflow-hidden isolate"
        >
          {/* Subtle inside glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/10 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
          
          <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-8 inline-block">
            Professional Summary
          </h3>
          
          <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light tracking-wide text-balance">
            Computer Science postgraduate specializing in <strong className="font-semibold text-white">AI, ML, and Data Science</strong> with experience in <span className="text-indigo-300">NLP, TTS, and ASR</span> for Data Science Enthusiasts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
