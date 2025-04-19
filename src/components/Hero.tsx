import { ArrowRight, Code, Github, Linkedin, Twitter } from 'lucide-react';
import Container from './layout/Container';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-4">
              <span className="inline-block bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full">
                Full Stack Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Creating <span className="text-blue-600 dark:text-blue-400">Digital Experiences</span> That Matter
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              I build elegant, responsive, and high-performance web applications using modern technologies and best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 group"
              >
                View Projects
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Code size={20} className="text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-mono">const developer = {`{`}</span>
                  </div>
                  <div className="pl-6 font-mono">
                    <span className="text-purple-600 dark:text-purple-400">name</span>: 
                    <span className="text-green-600 dark:text-green-400">'SammyTech'</span>,
                  </div>
                  <div className="pl-6 font-mono">
                    <span className="text-purple-600 dark:text-purple-400">skills</span>: 
                    <span className="text-amber-600 dark:text-amber-400">[...]</span>,
                  </div>
                  <div className="pl-6 font-mono">
                    <span className="text-purple-600 dark:text-purple-400">passions</span>: 
                    <span className="text-amber-600 dark:text-amber-400">[...]</span>,
                  </div>
                  <div className="pl-6 font-mono">
                    <span className="text-purple-600 dark:text-purple-400">status</span>: 
                    <span className="text-green-600 dark:text-green-400">'Available for hire'</span>
                  </div>
                  <div className="font-mono">
                    <span className="text-gray-700 dark:text-gray-300">{`}`};</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}