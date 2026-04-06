import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function RepositoryVault() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-light mb-4">The Repository Vault</h2>
          <p className="text-zinc-500 max-w-xl">
            A curated collection of agentic workflows, RAG systems, and automation tools.
          </p>
        </div>
        <a 
          href="#" 
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-zinc-100 transition-colors"
        >
          <Github className="w-4 h-4" />
          View All GitHub
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-1">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative bg-luxury-gray/30 p-8 border border-white/5 hover:bg-luxury-gray/50 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-zinc-800/50 rounded-sm">
                <Code2 className="w-5 h-5 text-zinc-400 group-hover:text-gold transition-colors" />
              </div>
              <div className="flex gap-4">
                <ExternalLink className="w-4 h-4 text-zinc-600 hover:text-zinc-100 cursor-pointer" />
              </div>
            </div>

            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[9px] px-2 py-1 bg-white/5 text-zinc-400 uppercase tracking-tighter">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
