import React from 'react';
import { FaFigma, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';

const AboutPage: React.FC = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Professional Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-shimmer" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side - Enhanced Professional Image Design */}
          <div className="lg:w-1/2 relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Floating Animation Container */}
              <div className="animate-float-slow">
                {/* Enhanced Background with Animated Particles */}
                <div className="absolute -inset-6 bg-gradient-to-br from-purple-600/25 via-pink-500/20 to-blue-500/25 rounded-3xl blur-2xl backdrop-blur-sm">
                  {/* Floating Particles */}
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full animate-pulse"
                      style={{
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        backgroundColor: ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B'][i % 5],
                        opacity: Math.random() * 0.4 + 0.1,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 4 + 2}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Animated Border Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-3xl opacity-20 blur-xl animate-pulse-slow"></div>
                
                {/* Enhanced Glass Morphism Container */}
                <div className="relative z-10 bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
                  <div className="bg-gradient-to-br from-purple-500/60 via-pink-500/60 to-blue-500/60 rounded-2xl p-2 backdrop-blur-lg">
                    <div className="bg-gray-800/90 rounded-xl p-3 backdrop-blur-md border border-white/5">
                      {/* Enhanced Image Container with Holographic Effect */}
                      <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-purple-400/15 via-pink-400/10 to-blue-400/15 rounded-xl flex items-center justify-center overflow-hidden group relative">
                        {/* Animated Grid Overlay */}
                        <div className="absolute inset-0 opacity-[0.03]">
                          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-shift"></div>
                        </div>
                        
                        {/* Holographic Scan Line */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-scan transition-opacity duration-1000"></div>

                        <div className="text-center w-full relative z-10">
                          {/* Enhanced Image Frame with 3D Effect */}
                          <div className="relative mx-auto mb-6">
                            {/* Outer Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Main Image Container */}
                            <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mx-auto border-2 border-purple-500/30 overflow-hidden shadow-2xl group-hover:border-purple-400/60 group-hover:shadow-purple-500/30 transition-all duration-500 transform group-hover:scale-105 relative">
                              {/* Inner Glow */}
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              <img 
                                src="./assets/image.jpg" 
                                alt="Tashini Madubhani Wijethunga"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 relative z-10"
                              />
                              
                              {/* Reflection Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                          </div>

                          {/* Animated Status Indicator */}
                          <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-400 font-medium">Available for work</span>
                          </div>

                          {/* Enhanced Animated Line */}
                          <div className="relative">
                            <div className="w-48 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full group-hover:w-56 transition-all duration-500 transform group-hover:scale-110 shadow-lg"></div>
                            <div className="absolute inset-0 w-48 h-1 bg-gradient-to-r from-white/30 to-white/10 rounded-full blur-sm group-hover:w-56 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-90 animate-bounce shadow-2xl"></div>
                <div className="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-80 animate-pulse shadow-2xl"></div>
                <div className="absolute top-1/2 -right-6 w-3 h-12 bg-purple-500 rounded-full opacity-70 animate-bounce-slow"></div>
                
                {/* Rotating Orb Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-md animate-spin-slow"></div>
                <div className="absolute -bottom-8 -left-8 w-14 h-14 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-md animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
              </div>
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

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Skills & Technologies
              </h3>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Skill Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes shift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(20px) translateY(20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-shift {
          animation: shift 15s ease-in-out infinite alternate;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;