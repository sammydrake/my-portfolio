export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: number; // 1-5
}

export interface NavItem {
  name: string;
  path: string;
}

export type ThemeMode = 'light' | 'dark';