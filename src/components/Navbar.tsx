import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-10 bg-black  border-none p-fixed">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Tashi
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Service', 'Project', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact Me Button */}
          <button className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;