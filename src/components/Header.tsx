import { motion } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Travel', href: '#travel' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gold flex items-center justify-center text-luxury-black font-bold text-xs">
            AE
          </div>
          <span className="text-sm font-medium tracking-tighter uppercase">
            Travel Expert ™
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-6 py-2 bg-zinc-100 text-luxury-black text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-colors"
          >
            Concierge
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-luxury-black border-b border-white/5 p-6 space-y-6"
        >
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-light text-zinc-400 hover:text-gold"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
