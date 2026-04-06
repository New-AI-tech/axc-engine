import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ahmedbackerjr/',
    label: 'LinkedIn'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/ahmed__jrr/',
    label: 'Instagram'
  },
  {
    icon: Github,
    href: 'https://github.com/AIexpert-ig',
    label: 'GitHub'
  },
];

export default function SocialDock() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card flex items-center gap-4 px-6 py-4 rounded-full border border-white/20 shadow-2xl bg-black/20 backdrop-blur-xl"
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/70 hover:text-white transition-colors p-2 flex items-center justify-center"
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}