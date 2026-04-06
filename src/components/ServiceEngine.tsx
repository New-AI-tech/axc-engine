import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, MessageSquare, Layers, Instagram } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Dubai Kiosk 🇦🇪',
    subtitle: 'Headless Kiosk Architecture',
    description: 'Multi-cloud Voice-to-Visual sync for luxury tourism hubs. Integrated with Vapi.ai and Socket.io for zero-latency guest interaction.',
    icon: Cpu,
    tags: ['Vapi.ai', 'Socket.io', 'Real-time']
  },
  {
    id: '02',
    title: 'Hospitality Concierge',
    subtitle: 'AI Voice Receptionist',
    description: 'ElevenLabs-powered voice agents designed for high-end hospitality. Automating guest inquiries with natural, human-like empathy.',
    icon: MessageSquare,
    tags: ['ElevenLabs', 'Voice AI', 'WebRTC']
  },
  {
    id: '03',
    title: 'Faryal Al Hosary ERP',
    subtitle: 'Enterprise Retail Engine',
    description: 'Production-grade ERP featuring a PostgreSQL availability engine and specialized luxury bridal measurement vault.',
    icon: Layers,
    tags: ['PostgreSQL', 'Inventory', 'Retail']
  },
  {
    id: '04',
    title: 'Instagram Concierge',
    subtitle: 'Social Automation',
    description: 'Coming Soon: Automated high-end lead capture and luxury guest engagement for social platforms.',
    icon: Instagram,
    tags: ['Meta API', 'Automation', 'Pending'],
    isComingSoon: true
  }
];

export default function ServiceEngine() {
  return (
    <section className="py-24 px-6 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tighter mb-4">THE SERVICE ENGINE</h2>
          <div className="h-1 w-20 bg-white/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex gap-8 p-8 rounded-3xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-500"
            >
              <div className="text-white/20 text-5xl font-black italic tracking-tighter">
                {service.id}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <service.icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex gap-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[9px] px-3 py-1 border border-white/10 rounded-full text-white/30 uppercase font-bold tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}