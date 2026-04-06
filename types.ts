export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  category: 'AI' | 'Travel' | 'FullStack';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Tip {
  id: string;
  content: string;
  category: 'Tech' | 'Travel' | 'Mindset';
}
