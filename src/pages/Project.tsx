import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing my projects and skills, built with pure HTML, CSS, and JavaScript for optimal performance and cross-browser compatibility.",
      category: "Web Development",
      image: "/assets/portfolio1.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "http://localhost:63343/5/My-Personal-Portfolio/index.html?_ijt=u4iskmh8fg9jjfevj5p6g7rgpa&_ij_reload=RELOAD_ON_SAVE",
      githubLink: "https://github.com/Tashini4/My-Personal-Portfolio"
    },
    {
      title: "Portfolio Website",
      description: "Modern and interactive portfolio built with React and TypeScript, featuring smooth animations, responsive design, and enhanced user experience with Tailwind CSS styling.",
      category: "Web Development",
      image: "/assets/portfolio2.png",
      technologies: ["Figma", "React", "TypeScript", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "https://github.com/Tashini4/React-Portfolio"
    },
    {
      title: "Salon Appointment Booking System",
      description: "Full-stack salon management system with user authentication, appointment scheduling, and automated email notifications using Spring Boot, MySQL, and Bootstrap for responsive UI.",
      category: "Full Stack Development",
      image: "/assets/salon.png",
      technologies: ["Springboot", "MySQL", "Bootstrap"],
      liveLink: "#",
      githubLink: "https://github.com/Tashini4/E-Commerce-Web-Application"
    },
    {
      title: "Book Club Web Application",
      description: "Full-stack book sharing platform with user authentication, book management, and community features built using MERN stack with TypeScript and Tailwind CSS for modern UI.",
      category: "Full Stack Development",
      image: "/assets/book.png",
      technologies: ["React", "MongoDB", "Node.js", "TypeScript","Tailwindcss","Express"],
      liveLink: "#",
      githubLink: "https://github.com/Tashini4/library_frontend"
    },
    {
      title: "Mobile RecipeMate App",
      description: "Cross-platform recipe application with ingredient tracking, step-by-step cooking instructions, and personalized recipe recommendations using React Native and Firebase.",
      category: "Mobile Development",
      image: "/assets/mobile.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Travel-Destination-Gallery",
      description: "Interactive travel gallery website showcasing beautiful destinations with filtering capabilities, built with React and TypeScript, deployed using GitHub Actions and Netlify.",
      category: "Web Development",
      image: "/assets/travel.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "https://github.com/Tashini4/Travel-Destination-Gallery"
    }
  ];

  const categories = ["All", "Web Development", "Full Stack Development", "Mobile Development"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Explore my portfolio of innovative projects that showcase my expertise in modern web technologies and design principles.
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-10 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-16">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full transition-all duration-300 border text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/30"
                  : "bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl overflow-hidden hover:from-purple-900/20 hover:to-blue-900/20 transition-all duration-500 border border-gray-800 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 bg-gradient-to-br from-purple-500/10 to-blue-500/10 overflow-hidden">
                  <div className="w-full h-full bg-gray-700/50 flex items-center justify-center">
                    <img src={project.image} alt="project image" />
                 </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a 
                      href={project.liveLink} 
                      className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 text-sm"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="px-4 py-2 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 border border-gray-600 text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-6">
                  {/* Category Badge */}
                  <div className="inline-block bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-3 border border-purple-500/20">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a 
                      href={project.liveLink}
                      className="flex-1 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm text-center"
                    >
                      View Project
                    </a>
                    <a 
                      href={project.githubLink}
                      className="px-3 py-2.5 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-all duration-200 border border-gray-700/50 text-sm"
                    >
                      <span className="flex items-center justify-center w-5 h-5">⚡</span>
                    </a>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-[2px] rounded-2xl bg-gray-900"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Background Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 right-10 sm:right-20 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 sm:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-pink-500/40 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500/20 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500/25 rounded-full animate-float delay-3000"></div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
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
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;