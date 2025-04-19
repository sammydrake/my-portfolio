import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes product management, cart functionality, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates using WebSockets.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather and forecasts for multiple locations. Utilizes weather APIs and includes interactive charts.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: false
  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'A dashboard for social media analytics that aggregates data from multiple platforms and visualizes engagement metrics.',
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'D3.js', 'Node.js', 'REST API'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: false
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A professional portfolio website built with React and Tailwind CSS to showcase projects and skills.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Tailwind CSS', 'Responsive Design'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
    featured: true
  }
];