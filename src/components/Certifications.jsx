import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, ArrowUpRight } from 'lucide-react';

const Certifications = () => {
  const items = [
    {
      title: "AI/ML Engineer Intern",
      org: "UniQtx Telecom Solutions",
      type: "internship",
      icon: <Briefcase size={20} />
    },
    {
      title: "Data Analytics Internship",
      org: "Teachnook",
      type: "internship",
      icon: <Briefcase size={20} />
    },
    {
      title: "Advanced NLP BERT",
      org: "Infosys Springboard",
      type: "certification",
      icon: <Award size={20} />
    },
    {
      title: "Data Analytics Certification",
      org: "Teachnook",
      type: "certification",
      icon: <Award size={20} />
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Experience</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Certifications & Internships</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card flex items-start p-6 rounded-2xl cursor-pointer hover:bg-glassBorder hover:border-primary/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-xl mr-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-slate-400 font-medium text-sm mb-3">{item.org}</p>
                <div className="flex items-center text-xs font-semibold tracking-wide uppercase text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                  <span className="mr-1">View Credential</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
