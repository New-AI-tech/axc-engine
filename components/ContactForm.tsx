import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-light mb-4">Concierge Request</h2>
        <p className="text-zinc-500 mb-12">
          Start your journey into the future of luxury and automation.
        </p>

        <form className="space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-luxury-gray border border-white/5 p-4 focus:border-gold/50 outline-none transition-colors text-sm"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-luxury-gray border border-white/5 p-4 focus:border-gold/50 outline-none transition-colors text-sm"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Service Interest</label>
            <select className="w-full bg-luxury-gray border border-white/5 p-4 focus:border-gold/50 outline-none transition-colors text-sm appearance-none">
              <option>AI Service Engine (GRACE, LingWA)</option>
              <option>The Travel Suite (VIP Concierge)</option>
              <option>Custom RAG / Automation Workflow</option>
              <option>Other / General Inquiry</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-luxury-gray border border-white/5 p-4 focus:border-gold/50 outline-none transition-colors text-sm resize-none"
              placeholder="How can we optimize your experience?"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-zinc-100 text-luxury-black py-4 font-medium hover:bg-gold transition-colors flex items-center justify-center gap-2 group"
          >
            Send Request
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
