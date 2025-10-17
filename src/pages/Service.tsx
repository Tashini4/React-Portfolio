import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Creating modern, responsive websites using the latest technologies and best practices. Specializing in React, TypeScript, and Tailwind CSS to build scalable web applications.",
      icon: "💻",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces that provide exceptional user experiences. Focus on user-centered design principles and modern aesthetics.",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Frontend Development",
      description: "Building interactive and dynamic frontend applications with cutting-edge technologies. Creating seamless user interactions and engaging digital experiences.",
      icon: "⚡",
      features: ["React Ecosystem", "State Management", "API Integration", "Modern CSS"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that combine innovative design with cutting-edge technology 
              to deliver exceptional results for your business.
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-500 border border-gray-800 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-[2px] rounded-2xl bg-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Background Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-purple-500/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-pink-500/40 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-blue-500/20 rounded-full animate-float delay-2000"></div>
      </div>

      {/* Custom Animations */}
      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
            opacity: 0.6;
          }
          66% {
            transform: translateY(10px) rotate(240deg);
            opacity: 0.4;
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;