import { useState } from 'react';
import { projects } from '../data/projects';
import Container from './layout/Container';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))].sort();
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one was designed and built with attention to detail and best practices.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              All
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/sammydrake/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-300"
          >
            View More on GitHub
          </a>
        </div>
      </Container>
    </section>
  );
}