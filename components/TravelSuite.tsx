import { motion } from 'motion/react';
import { MapPin, Star, Calendar, ShieldCheck } from 'lucide-react';

export default function TravelSuite() {
  return (
    <section id="travel" className="py-24 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4 block">
            Travel Expert ™
          </span>
          <h2 className="text-5xl font-light mb-8 leading-tight">
            The Travel Suite: <br />
            <span className="text-zinc-500 italic">Luxury Reimagined.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
            Bridging high-end hospitality with AI-optimized logistics. We don't just plan trips; we engineer experiences that are seamless, exclusive, and profoundly personal.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: ShieldCheck, title: 'VIP Management', text: 'Discreet, end-to-end guest experience management.' },
              { icon: Calendar, title: 'AI Itineraries', text: 'Logistics optimized by custom agentic workflows.' },
              { icon: Star, title: 'Exclusive Access', text: 'Unlocking the world’s most guarded destinations.' },
              { icon: MapPin, title: 'Global Presence', text: 'A network that spans luxury hubs worldwide.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <item.icon className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" 
            alt="Luxury Hotel" 
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="glass-card p-6 border-white/10">
              <p className="text-xs text-gold uppercase tracking-widest mb-2">Current Focus</p>
              <h4 className="text-xl font-light italic">"Polaris Buggy Expeditions — High Performance meets High Luxury."</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
