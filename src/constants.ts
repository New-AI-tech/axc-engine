import { Project, Service, Tip } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'grace',
    title: 'GRACE',
    description: 'The AI Voice Receptionist for high-end hospitality. Automating guest interactions with human-like empathy.',
    tech: ['Python', 'FastAPI', 'Twilio', 'OpenAI'],
    category: 'AI'
  },
  {
    id: 'lingwa',
    title: 'LingWA',
    description: 'Advanced language learning and communication workflows for global hospitality teams.',
    tech: ['FastAPI', 'PostgreSQL', 'React'],
    category: 'AI'
  },
  {
    id: 'hosary',
    title: 'FARYAL AL HOSARY System',
    description: 'Custom RAG solution for automated lead generation and concierge services.',
    tech: ['Python', 'LangChain', 'Pinecone'],
    category: 'FullStack'
  },
  {
    id: 'insta-bot',
    title: 'Instagram Concierge',
    description: 'Automated guest experience management via social channels.',
    tech: ['Python', 'Meta API', 'FastAPI'],
    category: 'AI'
  }
];

export const TIPS: Tip[] = [
  {
    id: '1',
    content: "Automation isn't about replacing the human touch; it's about freeing the human to be more present.",
    category: 'Mindset'
  },
  {
    id: '2',
    content: "Luxury is the absence of friction. If your AI adds friction, it's not luxury.",
    category: 'Travel'
  },
  {
    id: '3',
    content: "Your database schema is your destiny. Design it for the scale of your ambitions, not your current reality.",
    category: 'Tech'
  }
];
