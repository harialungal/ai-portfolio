import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Get in Touch</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">Let's Connect</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <a href="mailto:alungalhari@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group">
              <div className="p-3 rounded-full bg-surface border border-glassBorder group-hover:border-primary/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <span className="text-lg font-medium">alungalhari@gmail.com</span>
            </a>
            <a href="tel:+919847998632" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group">
              <div className="p-3 rounded-full bg-surface border border-glassBorder group-hover:border-primary/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span className="text-lg font-medium">+91 9847998632</span>
            </a>
          </div>
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
