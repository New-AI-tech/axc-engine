import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mqayypgj');

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 bg-black/20 backdrop-blur-xl"
        >
          <h2 className="text-4xl font-light mb-4 tracking-tighter text-yellow-500">Request Received</h2>
          <p className="text-zinc-500 text-sm uppercase tracking-widest font-medium">
            Thank you. Our concierge team will reach out to you shortly.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 bg-black/20 backdrop-blur-xl"
      >
        <h2 className="text-4xl font-light mb-4 tracking-tighter">Concierge Request</h2>
        <p className="text-zinc-500 mb-12 text-sm uppercase tracking-widest font-medium">
          Start your journey into the future of luxury and automation.
        </p>

        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1 font-bold">Full Name</label>
              <input
                id="full-name"
                name="name"
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 p-4 focus:border-yellow-500/50 outline-none transition-all text-sm rounded-xl text-white placeholder:text-zinc-700"
                placeholder="Ahmed Backer"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-[10px] ml-1" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1 font-bold">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 p-4 focus:border-yellow-500/50 outline-none transition-all text-sm rounded-xl text-white placeholder:text-zinc-700"
                placeholder="concierge@axc-engine.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] ml-1" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1 font-bold">Service Interest</label>
            <div className="relative">
              <select
                id="service"
                name="service"
                className="w-full bg-white/5 border border-white/10 p-4 focus:border-yellow-500/50 outline-none transition-all text-sm appearance-none rounded-xl text-white cursor-pointer"
              >
                <option className="bg-zinc-900">AI Service Engine (Dubai Kiosk, Hospitality Concierge)</option>
                <option className="bg-zinc-900">The Travel Suite (VIP Experience Curation)</option>
                <option className="bg-zinc-900">Faryal Al Hosary ERP / Retail Automation</option>
                <option className="bg-zinc-900">Custom Agentic Workflow (Vapi + ElevenLabs)</option>
                <option className="bg-zinc-900">General Partnership Inquiry</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-500 text-[10px] ml-1" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1 font-bold">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 p-4 focus:border-yellow-500/50 outline-none transition-all text-sm resize-none rounded-xl text-white placeholder:text-zinc-700"
              placeholder="How can we optimize your digital or travel experience?"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] ml-1" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-white text-black py-5 font-bold text-xs uppercase tracking-[0.3em] hover:bg-yellow-500 transition-all flex items-center justify-center gap-3 group rounded-xl shadow-xl shadow-black/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Sending...' : 'Send Request'}
            {!state.submitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          </button>
        </form>
      </motion.div>
    </section>
  );
}