import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';
import { Tip } from '../types';

interface AhmedsTipProps {
  tip: Tip;
  key?: string | number;
}

export default function AhmedsTip({ tip }: AhmedsTipProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-none border-l-4 border-l-gold relative overflow-hidden group"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <Lightbulb className="w-5 h-5 text-gold" />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-2 block">
            Ahmed's Tip — {tip.category}
          </span>
          <p className="text-lg font-light leading-relaxed text-zinc-300 italic">
            "{tip.content}"
          </p>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
        <Lightbulb className="w-32 h-32" />
      </div>
    </motion.div>
  );
}
