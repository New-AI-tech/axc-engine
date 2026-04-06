import { motion } from 'motion/react';

const codeSnippet = `
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from . import models, schemas

app = FastAPI(title="ConciergeEngine")

@app.post("/v1/guest/request", response_model=schemas.Request)
def create_concierge_request(
    request: schemas.RequestCreate, 
    db: Session = Depends(get_db)
):
    """
    Luxury Guest Experience Automation
    Optimized for zero-latency response.
    """
    return service.process_rag_workflow(db, request)
`;

export default function CodeTerminal() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full max-w-3xl mx-auto glass-card rounded-lg overflow-hidden shadow-2xl"
    >
      <div className="bg-zinc-800/50 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] text-zinc-500 font-mono ml-2">concierge_engine.py</span>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
        <pre className="text-zinc-400">
          {codeSnippet.split('\n').map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-zinc-600 w-4 text-right select-none">{i + 1}</span>
              <span className={line.includes('"""') ? 'text-gold/80 italic' : ''}>
                {line}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </motion.div>
  );
}
