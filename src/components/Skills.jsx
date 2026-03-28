import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Web Development', level: 75 }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Technical Skills</h2>
        </div>

        <div className="glass-card rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle bg glow */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>

          <div className="space-y-12">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-200 font-medium text-lg tracking-wide">{skill.name}</span>
                  <span className="text-primary font-bold tracking-wider">{skill.level}%</span>
                </div>
                
                {/* Progress Track */}
                <div className="w-full bg-surfaceHover rounded-full h-3 border border-glassBorder/50 overflow-hidden relative">
                  {/* Progress Fill */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 + (index * 0.1) }}
                    className="absolute top-0 left-0 bg-gradient-to-r from-indigo-500 to-primary h-full rounded-full shadow-[0_0_15px_rgba(79,70,229,0.8)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
