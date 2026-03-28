import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Conversational AI Platform",
      desc: "An advanced, fully integrated conversational agent capable of understanding contextual logic dynamically and outputting highly accurate spoken language.",
      techStack: ["NLP", "TTS", "ASR", "Python", "React"],
      imagePlaceholder: "bg-gradient-to-br from-primary/20 to-indigo-900/40"
    },
    {
      title: "Mushroom Classification",
      desc: "A rigorous data modeling case study identifying safe-to-eat biological samples using robust supervised machine learning models.",
      techStack: ["KNN", "SVM", "Random Forest", "Scikit-Learn"],
      imagePlaceholder: "bg-gradient-to-br from-cyan-500/10 to-blue-900/40"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Case Studies</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Featured Projects</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-glow transition-all duration-500 cursor-pointer"
            >
              {/* Image Header Area simulating a screenshot */}
              <div className={`h-48 md:h-64 ${proj.imagePlaceholder} w-full relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="text-white/20 font-bold text-4xl tracking-widest uppercase mix-blend-overlay rotate-[-5deg] pointer-events-none select-none">Preview</div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 md:p-10 flex flex-col flex-1 bg-surface/50">
                <h4 className="text-2xl font-bold mb-4 text-white hover:text-primary transition-colors inline-block">{proj.title}</h4>
                <p className="text-slate-400 font-light text-base md:text-lg leading-relaxed mb-8 flex-1">
                  {proj.desc}
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-glass border border-glassBorder rounded-full text-xs font-medium text-indigo-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-sm font-semibold text-white group/btn self-start">
                  <span>View Details</span>
                  <div className="bg-primary/20 group-hover/btn:bg-primary p-2 rounded-full transition-colors ml-2">
                    <ArrowUpRight size={16} className="text-primary group-hover/btn:text-white transition-colors" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
