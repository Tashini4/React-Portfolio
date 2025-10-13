import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side - Image with VISH screenshot style */}
          <div className="lg:w-1/2 relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Gradient */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-blue-500/20 rounded-3xl"></div>
              
              {/* Image Container - Square style like VISH screenshot */}
              <div className="relative z-10 bg-gray-900 rounded-2xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl p-1">
                  <div className="bg-gray-800 rounded-xl p-1">
                    {/* Square image container like VISH screenshot */}
                    <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10 rounded-lg flex items-center justify-center overflow-hidden">
                      <div className="text-center w-full">
                        {/* Square image frame like VISH screenshot */}
                        <div className="w-64 h-64 bg-gray-700/50 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/40 overflow-hidden shadow-lg">
                          <img 
                            src="./src/assets/image.jpg" 
                            alt="Tashini Madubhani Wijethunga"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Decorative line */}
                        <div className="w-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple decorative elements - less flashy than before */}
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
              <div className="absolute -top-3 -left-3 w-5 h-5 bg-blue-400 rounded-full opacity-70"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Heading Section */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                Hi, I'm Tashini Madubhani Wijethunga, a 23-year-old Software Engineering undergraduate at IJSE, Sri Lanka. I'm passionate about technology and design, with a strong interest in web development, UI/UX design, and frontend development.
              </p>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                I love creating modern, user-friendly, and visually appealing digital experiences that combine creativity with functionality. I'm continuously learning and improving my skills to build innovative solutions that make a positive impact.
              </p>
            </div>

            {/* GitHub Button */}
            <div className="pt-4">
              <button className="px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation Elements - Grid removed */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-500/20 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-pink-500/30 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-blue-500/15 rounded-full"></div>
      </div>
    </div>
  );
};

export default AboutPage;