import { Project, Skill, Service, TimelineItem, Certificate, Achievement, Testimonial, BlogPost, FAQItem } from './types';

export const personalInfo = {
  name: 'Sudireddy Nithya Priya',
  title: 'Computer Science Engineering Student & Full Stack Developer',
  shortIntro: 'Dedicated Computer Science Engineering student with practical experience in developing AI-based and web applications. Skilled in Python, Java, and database management.',
  longIntro: 'I am a Computer Science Engineering student at Anurag University with practical experience in developing AI-based and web applications. I am highly skilled in Python, Java, and database management, with a strong understanding of object-oriented programming. Passionate about creating innovative, scalable solutions and continuously refining my technical skills to contribute effectively to the software industry.',
  email: 'nithyapriyasudireddy001@gmail.com',
  phone: '+91 9182219851',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/NithyaPriya07',
  linkedin: 'https://www.linkedin.com/in/sudireddy-nithya-priya-b18963355/',
  leetcode: 'https://leetcode.com/u/e1JdMa3ufq/',
  resumeUrl: '#',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600',
  careerObjective: 'Dedicated Computer Science Engineering student with practical experience in developing AI-based and web applications. Skilled in Python, Java, and database management with a strong understanding of object-oriented programming. Passionate about creating innovative solutions and continuously improving technical skills to contribute effectively in the software industry.',
};

export const stats = [
  { value: 2, label: 'Core Projects' },
  { value: 15, label: 'Skills & Tools' },
  { value: 3, label: 'Certificates & Hackathons' },
  { value: 9.51, label: 'B.Tech CGPA', suffix: '/10' },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 90, category: 'technical', subCategory: 'Languages', icon: 'Hash' },
  { name: 'Java', level: 93, category: 'technical', subCategory: 'Languages', icon: 'Coffee' },
  { name: 'JavaScript', level: 88, category: 'technical', subCategory: 'Languages', icon: 'Cpu' },
  { name: 'C', level: 85, category: 'technical', subCategory: 'Languages', icon: 'Code' },
  
  // Web Development
  { name: 'HTML', level: 95, category: 'technical', subCategory: 'Frontend & Web', icon: 'Code' },
  { name: 'CSS', level: 90, category: 'technical', subCategory: 'Frontend & Web', icon: 'Sparkles' },
  { name: 'React.js', level: 88, category: 'technical', subCategory: 'Frontend & Web', icon: 'Atom' },
  { name: 'Node.js', level: 85, category: 'technical', subCategory: 'Backend & DB', icon: 'Terminal' },
  { name: 'Bootstrap', level: 85, category: 'technical', subCategory: 'Frontend & Web', icon: 'Layers' },
  
  // Databases
  { name: 'MongoDB', level: 85, category: 'technical', subCategory: 'Backend & DB', icon: 'Database' },
  { name: 'MySQL', level: 88, category: 'technical', subCategory: 'Backend & DB', icon: 'Table' },
  
  // Tools
  { name: 'Git', level: 88, category: 'technical', subCategory: 'Tools & DevOps', icon: 'GitBranch' },
  { name: 'GitHub', level: 90, category: 'technical', subCategory: 'Tools & DevOps', icon: 'Github' },
  { name: 'VS Code', level: 92, category: 'technical', subCategory: 'Tools & DevOps', icon: 'Laptop' },

  // Soft Skills
  { name: 'Problem Solving', level: 95, category: 'soft', subCategory: 'Professional Strengths', icon: 'Zap' },
  { name: 'Teamwork', level: 92, category: 'soft', subCategory: 'Professional Strengths', icon: 'Users' },
  { name: 'Communication', level: 90, category: 'soft', subCategory: 'Professional Strengths', icon: 'MessageSquare' },
  { name: 'Adaptability', level: 88, category: 'soft', subCategory: 'Professional Strengths', icon: 'RefreshCw' },
  { name: 'Leadership', level: 85, category: 'soft', subCategory: 'Professional Strengths', icon: 'Award' },
];

export const projects: Project[] = [
  {
    id: 'vidyaguide',
    title: 'VidyaGuide — AI Based Educational Guidance Platform',
    description: 'An AI-powered platform providing personalized academic and career guidance to students. Implements intuitive features such as a custom Resume Builder and Resume Analyzer to assist users in crafting professional profiles and evaluating skill sets. Strategically guides students in selecting appropriate academic streams and future career paths matching their unique goals and abilities.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['React.js', 'Node.js', 'Bootstrap', 'MongoDB', 'Generative AI', 'GitHub'],
    demoUrl: '',
    githubUrl: 'https://github.com/NithyaPriya07/VidyaGuide-AI',
  },
  {
    id: 'complaint-system',
    title: 'Online Complaint Registration System',
    description: 'A robust, full-stack web application enabling citizens to register accounts, submit grievances, and trace their live complaint resolution tickets via an intuitive portal. Leverages standard JWT-based authorization, granular role-based access controls (User, Agent, Admin), automated ticket allocation, and instant status synchronizations.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication', 'RESTful APIs', 'Bootstrap'],
    demoUrl: 'https://silly-basbousa-db5455.netlify.app',
    githubUrl: 'https://github.com/NithyaPriya07/online-complaint-system',
  },
];

export const services: Service[] = [
  {
    title: 'Web Application Development',
    description: 'Designing and building fast, responsive, and cross-browser web platforms using React.js, Node.js, and modern CSS guidelines.',
    icon: 'Globe',
  },
  {
    title: 'Database Architecture',
    description: 'Designing clean and performant relational schemas in MySQL and document structures in MongoDB to ensure reliable data consistency.',
    icon: 'Database',
  },
  {
    title: 'AI Feature Engineering',
    description: 'Integrating Generative AI models to enable smart capabilities such as automated resume building, profiling, and document analysis.',
    icon: 'Sparkles',
  },
  {
    title: 'Grievance & Portal Architectures',
    description: 'Developing highly secure, authenticated admin desks and ticketing channels using JWT authorization and robust role-based structures.',
    icon: 'Server',
  },
];

export const timelineData: TimelineItem[] = [
  // Hackathons & Conventions as Experience/Milestones
  {
    id: 'hack-1',
    title: 'Gen AI Hackathon Participant',
    subTitle: 'Anurag University Dept. of CSE & NASSCOM',
    duration: '2025',
    description: 'Collaborated with engineering peers to conceptualize and pitch custom Generative AI frameworks, aligning with smart educational models.',
    type: 'experience',
  },
  {
    id: 'hack-2',
    title: 'Avensis 2K25 Hackathon competitor',
    subTitle: 'CSI Regional Convention',
    duration: '2025',
    description: 'Participated in intense regional coding conventions, designing rapid prototypes and resolving complex, time-bound technical challenges.',
    type: 'experience',
  },
  // Education
  {
    id: 'edu-1',
    title: 'B.Tech in Computer Science Engineering',
    subTitle: 'Anurag University, Ghatkesar, Telangana',
    duration: 'Present',
    description: 'Focusing heavily on Object-Oriented Programming, Data Structures, Algorithms, and Modern Web Systems. Academic standout maintaining a top-tier CGPA of 9.51/10.',
    type: 'education',
  },
  {
    id: 'edu-2',
    title: 'Intermediate (Class XII - MPC)',
    subTitle: 'Narayana Junior College, Champapet',
    duration: '2022 - 2024',
    description: 'Specialized in Mathematics, Physics, and Chemistry. Graduated with a high-distinction score of 988/1000 (98.8%).',
    type: 'education',
  },
  {
    id: 'edu-3',
    title: 'Secondary School Certificate (SSC)',
    subTitle: 'Nagarjuna The NextGen School, Karmanghat',
    duration: '2022',
    description: 'Completed basic secondary education with a perfect merit GPA score of 10.0/10.',
    type: 'education',
  },
];

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Programming in Java — Elite Certification',
    issuer: 'NPTEL — IIT Kharagpur',
    date: '2025',
    link: '#',
  },
  {
    id: 'cert-2',
    title: 'CSI Regional Convention Participation',
    issuer: 'CSI Avensis 2K25',
    date: '2025',
    link: '#',
  },
  {
    id: 'cert-3',
    title: 'Gen AI Hackathon Award of Participation',
    issuer: 'Department of CSE & NASSCOM',
    date: '2025',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Elite Java Certification Score',
    description: 'Completed Programming in Java from IIT Kharagpur (NPTEL) with a high credential rating score of 93/100.',
    icon: 'Trophy',
    date: '2025',
  },
  {
    id: 'ach-2',
    title: 'Perfect SSC GPA Metric',
    description: 'Recognized for achieving a perfect 10.0/10 cumulative score during the Secondary School Certificate evaluations.',
    icon: 'Sparkles',
    date: '2022',
  },
  {
    id: 'ach-3',
    title: 'Regional CSI Convention Delegate',
    description: 'Selected to represent the college chapter at the CSI regional hackathon and academic symposium.',
    icon: 'Target',
    date: '2025',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Department Head',
    role: 'Professor of Computer Science',
    company: 'Anurag University',
    content: 'Nithya Priya demonstrates a high degree of technical aptitude, especially in web application development and core programming. Her practical projects represent a true understanding of engineering principles.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 'test-2',
    name: 'Hackathon Evaluation Lead',
    role: 'Principal Assessor',
    company: 'Gen AI NASSCOM Chapter',
    content: 'An incredibly focused student developer who is eager to adapt to and design solutions with state-of-the-art Generative AI frameworks. Outstanding team contribution and documentation skill.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Building AI Guidance Engines: The VidyaGuide Journey',
    category: 'EdTech & AI',
    date: 'June 2026',
    excerpt: 'An investigation into how smart resume builders and analyzer models can optimize decision routes for students choosing academic tracks and vocational goals.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400&h=250',
    readTime: '5 min read',
  },
  {
    id: 'blog-2',
    title: 'Designing Secure Full-Stack Ticketing Interfaces',
    category: 'MERN Stack',
    date: 'April 2026',
    excerpt: 'Deep-dive into role-based authentication architectures, JWT sessions, and real-time document sync for scale web services.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400&h=250',
    readTime: '6 min read',
  },
];

export const faqData: FAQItem[] = [
  {
    question: 'Are you available for employment and internships?',
    answer: 'Yes! I am currently in Anurag University, actively building core software development experiences. I am looking for software engineering roles, internships, and research collaborations.',
  },
  {
    question: 'What is your main programming stack?',
    answer: 'My technical focus revolves around Python, Java, JavaScript, and Web Development frameworks (specifically MERN: MongoDB, Express, React.js, Node.js, and Bootstrap CSS).',
  },
  {
    question: 'Do you have certification in Java?',
    answer: 'Yes, I hold an Elite certification in Programming in Java from NPTEL, IIT Kharagpur, with an outstanding score of 93/100.',
  },
];
