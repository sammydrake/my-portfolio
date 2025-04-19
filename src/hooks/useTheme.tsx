import { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme || (prefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    // Update the data-theme attribute on the document element
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save the current theme to localStorage
    localStorage.setItem('theme', theme);
    
    // Add or remove the dark class from the HTML element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}