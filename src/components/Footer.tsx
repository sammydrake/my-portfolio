import { Github, Heart, Linkedin, Mail, Twitter } from 'lucide-react';
import Container from './layout/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">SammyTech</h3>
            <p className="mb-4 text-gray-400 max-w-md">
              Full stack developer passionate about creating beautiful, functional, and user-friendly websites and applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sammydrake/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:drakesammy0101@gmail.com" 
                aria-label="Email"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Adex Cafe, Opposite University of Abuja(Old site), Gwagwalada, Abuja, Nigeria.</p>
              <p>drakesammy0101@gmail.com</p>
              <p>+234 703 159 0997</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} SammyTech. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> and React
          </p>
        </div>
      </Container>
    </footer>
  );
}