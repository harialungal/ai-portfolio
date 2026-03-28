import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Get in Touch</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Let's Connect</h2>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full space-y-6"
          onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}
        >
          <div className="space-y-4">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-surface border border-glassBorder rounded-xl px-5 py-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-sm"
                required
              />
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-surface border border-glassBorder rounded-xl px-5 py-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-sm"
                required
              />
            </div>
            
            <div className="relative group">
              <textarea 
                rows="5" 
                placeholder="Your Message..." 
                className="w-full bg-surface border border-glassBorder rounded-xl px-5 py-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none shadow-sm"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full flex items-center justify-center space-x-2 bg-white text-background hover:bg-slate-200 font-bold py-4 rounded-xl transition-all duration-300 group"
          >
            <span>Send Message</span>
            <Send size={18} className="text-background group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
