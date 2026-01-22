import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
          <div className="text-xl font-bold tracking-tighter text-white cursor-pointer" onClick={() => scrollToSection('home')}>
            TASHI
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-8 right-8 text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-3xl font-bold text-transparent text-stroke hover:text-white transition-all duration-300 uppercase tracking-tighter"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;