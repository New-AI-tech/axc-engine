import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Github } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function SocialDock() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card flex items-center gap-4 px-6 py-4 rounded-full border-white/20 shadow-2xl"
      >
        {socialLinks.map((social, i) => (
          <motion.a
            key={social.label}
            href={social.href}
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            className="text-zinc-400 hover:text-gold transition-colors p-2"
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
