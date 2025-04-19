import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-end space-x-2">
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white text-gray-900 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
                aria-label="View demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.codeLink && (
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white text-gray-900 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
                aria-label="View code"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}