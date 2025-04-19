import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerClasses = scrolled
    ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo with Text */}
          <a 
            href="#home" 
            className="flex items-center space-x-2 text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <img 
              src="/mylogo3.png" // public/ folder
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <span>SammyTech</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={closeMenu}
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
