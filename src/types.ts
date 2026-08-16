export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'technical' | 'soft';
  subCategory?: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  subTitle: string;
  duration: string;
  description: string;
  type: 'education' | 'experience';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
