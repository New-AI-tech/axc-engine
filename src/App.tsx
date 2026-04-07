import { motion } from 'framer-motion';
import Header from './components/Header';
import ServiceEngine from './components/ServiceEngine';
import TravelSuite from './components/TravelSuite';
import CodeTerminal from './components/CodeTerminal';
import RepositoryVault from './components/RepositoryVault';
import AhmedsTip from './components/AhmedsTip';
import ContactForm from './components/ContactForm';
import BackgroundVideo from './components/BackgroundVideo';
import SocialDock from './components/SocialDock';
import { TIPS } from './constants';
import { ChevronRight, ArrowDown } from 'lucide-react';

export default function App() {
  return (
    /* LOGICAL BREACH: Removing bg-black to allow BackgroundVideo to shine through */
    <div className="min-h-screen selection:bg-yellow-500 ... bg-transparent text-white ...">

      {/* Base Layer */}
      <BackgroundVideo />

      {/* Navigation */}
      <Header />

      {/* Content Layer */}
      <main className="relative z-10">

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
          <div className="relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-yellow-500 text-xs uppercase tracking-[0.5em] font-medium mb-6 block">
                Luxury Travel | Storytelling | AI-Optimized Experiences ™
              </span>
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 leading-[0.9] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                The <span className="text-zinc-400 italic">AI</span> <br />
                Concierge.
              </h1>

              <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
                Senior Luxury Travel Consultant meets Agentic AI Engineer.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="#travel"
                  className="group flex items-center gap-3 px-8 py-4 bg-zinc-100 text-black font-bold text-xs uppercase tracking-widest hover:bg-yellow-500 transition-all"
                >
                  Explore Travel Suite
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors border-b border-zinc-800 pb-1"
                >
                  View AI Service Engine
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </section>

        {/* Infrastructure / Code Preview */}
        <section className="py-24 px-6 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-widest text-yellow-500/60 mb-2 block">Infrastructure</span>
              <h2 className="text-3xl font-light italic text-white/90">"Smart, Not Smug."</h2>
            </div>
            <CodeTerminal />
          </div>
        </section>

        <ServiceEngine />
        <TravelSuite />
        <RepositoryVault />

        {/* Insights Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {TIPS.map(tip => (
              <AhmedsTip key={tip.id} tip={tip} />
            ))}
          </div>
        </section>

        <ContactForm />
      </main>

      <SocialDock />

      <footer className="py-12 px-6 border-t border-white/5 text-center relative z-10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <div className="text-sm font-bold tracking-tighter uppercase mb-2">Travel Expert ™</div>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
              © 2026 Ahmed's AI Concierge. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-widest text-zinc-700 font-bold italic">Dubai | Global Remote</span>
          </div>
        </div>
      </footer>
    </div>
  );
}