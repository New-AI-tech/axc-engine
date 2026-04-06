import { motion } from 'motion/react';
import { Bot, MessageSquare, Database, Mic } from 'lucide-react';

const services = [
  {
    title: 'GRACE',
    subtitle: 'AI Voice Receptionist',
    description: 'Human-like voice interactions for luxury hospitality. Zero-latency, empathetic, and fully integrated with property management systems.',
    icon: Mic
  },
  {
    title: 'LingWA',
    subtitle: 'Language Workflows',
    description: 'Breaking language barriers in guest experience. Automated translation and learning workflows for diverse hospitality teams.',
    icon: MessageSquare
  },
  {
    title: 'Custom RAG',
    subtitle: 'Agentic Concierge',
    description: 'Leveraging proprietary data to provide instant, accurate, and personalized recommendations for VIP guests.',
    icon: Database
  }
];

export default function ServiceEngine() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-light mb-4">The Service Engine</h2>
        <p className="text-zinc-500 max-w-xl">
          Deconstructing complex hospitality workflows into elegant, automated AI systems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 group hover:border-gold/30 transition-colors"
          >
            <service.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-medium mb-1">{service.title}</h3>
            <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-4">{service.subtitle}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
