import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Award, ArrowUpRight, X } from 'lucide-react';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const items = [
        {
            title: "AI/ML Engineer Intern",
            org: "UniQtx Telecom Solutions",
            type: "internship",
            icon: <Briefcase size={20} />,
            image: "/ai-ml-internship.jpeg"
        },
        {
            title: "Advanced NLP BERT",
            org: "Infosys Springboard",
            type: "certification",
            icon: <Award size={20} />,
            image: "https://placehold.co/1200x800/1e1e2f/6366f1?text=Infosys+NLP+Certificate"
        },
        {
            title: "Data Analytics Certification",
            org: "Teachnook",
            type: "certification",
            icon: <Award size={20} />,
            image: "https://placehold.co/1200x800/1e1e2f/3b82f6?text=Teachnook+Data+Analytics+Certificate"
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
                            onClick={() => setSelectedCert(item)}
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

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2"
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 0.9, opacity: 0, rotateX: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full aspect-[1.414/1] bg-surface rounded-lg shadow-2xl overflow-hidden cursor-default border border-glassBorder"
                        >
                            <img 
                                src={selectedCert.image} 
                                alt={selectedCert.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                                <p className="text-slate-300 text-sm">{selectedCert.org}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
