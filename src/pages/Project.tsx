import React from 'react';

const Projects: React.FC = () => {
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
    category: "full-stack Development",
    image: "/assets/salon.png",
    technologies: ["Springboot", "MySQL", "Bootstrap"],
    liveLink: "#",
    githubLink: "https://github.com/Tashini4/E-Commerce-Web-Application"
  },
  {
    title: "Book Club Web Application",
    description: "Full-stack book sharing platform with user authentication, book management, and community features built using MERN stack with TypeScript and Tailwind CSS for modern UI.",
    category: "Web Application",
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

  const categories = ["All", "Web Development", "UI/UX Design", "Frontend Development", "Full Stack", "Mobile Development"];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative projects that showcase my expertise in modern web technologies and design principles.
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-transparent"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-500 border border-gray-800 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <img src={project.image} alt="project image" />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
                      Live Demo
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors duration-200 border border-gray-600">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm">
                    View Project
                  </button>
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-700 text-sm">
                    ⚡
                  </button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="absolute inset-[2px] rounded-2xl bg-gray-900"></div>
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

export default Projects;