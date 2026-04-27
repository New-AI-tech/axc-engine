import React from 'react';
import { ExternalLink, Github, Terminal, Cpu, Layers, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Dubai Kiosk 🇦🇪",
    description: "The 'Golden Triangle' Architecture: A multi-cloud Headless Kiosk for luxury tourism. Real-time Voice-to-Visual sync via Vapi.ai and Socket.io bridge.",
    tech: ["Vapi.ai", "Node.js", "Socket.io", "React"],
    link: "https://aiexpert-ig.github.io/dubai-kiosk",
    github: "https://github.com/AIexpert-ig/dubai-kiosk",
    icon: Cpu,
    status: "Live"
  },
  {
    title: "Hospitality Concierge",
    description: "AI Voice Receptionist built with ElevenLabs. Handles reservations and VIP services with human-like empathy and zero-latency conversation.",
    tech: ["ElevenLabs", "WebRTC", "CDN", "JavaScript"],
    link: "https://aiexpert-ig.github.io/hospitality-concierge/",
    github: "https://github.com/AIexpert-ig/hospitality-concierge",
    icon: MessageSquare,
    status: "Live"
  },
  {
    title: "Faryal Al Hosary ERP",
    description: `Luxury Booking App & Stylist AI

Enterprise dress reservation and availability management for luxury rental houses, stylists, and ateliers, powered by Gemini AI.
🚀 Features

Real-time Inventory: Managed via Google Cloud Firestore.
AI Stylist: Integrated with Gemini Pro for contextual outfit recommendations.
Secure: strict RBAC via Firestore Security Rules.
Performant: Code-split React architecture using Vite.
🛠️ Setup Instructions

Install Dependencies:
npm install`,
    tech: ["PostgreSQL", "React", "Node.js", "Vercel"],
    link: "https://booking-app-gamma-coral.vercel.app/",
    github: "https://github.com/AIexpert-ig/faryal-al-hosary",
    icon: Layers,
    status: "Live"
  },
  {
    title: "Instagram Concierge",
    description: "Automated high-end lead capture and luxury guest engagement for social platforms. Integrating AI logic with DM automation.",
    tech: ["Python", "Meta API", "OpenAI"],
    link: "#",
    github: "#",
    icon: Terminal,
    status: "Coming Soon"
  }
];

export default function ProjectVault() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/10 rounded-2xl">
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${project.status === "Coming Soon" ? "bg-gold/20 text-gold" : "bg-white/10 text-white/60"
                }`}>
                {project.status}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
            <p className="text-white/60 mb-6 leading-relaxed text-sm whitespace-pre-wrap">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white/40 uppercase font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.status !== "Coming Soon" && (
                <>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-gold transition-colors">
                    <ExternalLink className="w-4 h-4" /> DEPLOYMENT
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-white/40 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> SOURCE
                  </a>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}