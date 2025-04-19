import { useState } from 'react';
import { skills } from '../data/skills';
import { Skill as SkillType } from '../types';
import Container from './layout/Container';
import { BrainCircuit, Code, Command, Database, Server } from 'lucide-react';

type SkillCategory = 'all' | SkillType['category'];

export default function Skills() {
  const [category, setCategory] = useState<SkillCategory>('all');
  
  const filteredSkills = category === 'all'
    ? skills
    : skills.filter(skill => skill.category === category);

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My technical toolkit and areas of expertise in web development.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-gray-100 dark:bg-slate-800">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                category === 'all'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setCategory('frontend')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                category === 'frontend'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setCategory('backend')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                category === 'backend'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setCategory('tools')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                category === 'tools'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Tools
            </button>
            <button
              onClick={() => setCategory('other')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                category === 'other'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Other
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {skill.icon === 'react' && <Code size={20} />}
                    {skill.icon === 'code' && <Code size={20} />}
                    {skill.icon === 'code2' && <Code size={20} />}
                    {skill.icon === 'layout' && <Command size={20} />}
                    {skill.icon === 'layout-template' && <Command size={20} />}
                    {skill.icon === 'server' && <Server size={20} />}
                    {skill.icon === 'database' && <Database size={20} />}
                    {skill.icon === 'git-branch' && <Command size={20} />}
                    {skill.icon === 'git-merge' && <Command size={20} />}
                    {skill.icon === 'package' && <Command size={20} />}
                    {skill.icon === 'cloud' && <Command size={20} />}
                    {skill.icon === 'trello' && <Command size={20} />}
                    {skill.icon === 'palette' && <BrainCircuit size={20} />}
                    {skill.icon === 'layers' && <Command size={20} />}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <div className="mt-1 flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-1 mr-1 rounded-sm ${
                          i < skill.proficiency
                            ? 'bg-blue-500 dark:bg-blue-400'
                            : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}