import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio showing HTML/CSS mastery.",
      category: "Web Development",
      image: "/assets/portfolio1.png",
      tech: ["HTML", "CSS", "JS"],
      live: "#",
      github: "https://github.com/Tashini4/My-Personal-Portfolio"
    },
    {
      title: "React Portfolio",
      description: "Modern portfolio with React & Framer Motion.",
      category: "Web Development",
      image: "/assets/portfolio2.png",
      tech: ["React", "TypeScript", "Tailwind"],
      live: "#",
      github: "https://github.com/Tashini4/React-Portfolio"
    },
    {
      title: "Salon Booking",
      description: "Full-stack appointment system.",
      category: "Full Stack Development",
      image: "/assets/salon.png",
      tech: ["Spring Boot", "MySQL"],
      live: "#",
      github: "https://github.com/Tashini4/E-Commerce-Web-Application"
    },
    {
      title: "Book Club",
      description: "MERN stack book sharing platform.",
      category: "Full Stack Development",
      image: "/assets/book.png",
      tech: ["MERN", "TypeScript"],
      live: "#",
      github: "https://github.com/Tashini4/library_frontend"
    },
    {
      title: "RecipeMate App",
      description: "Mobile recipe tracking application.",
      category: "Mobile Development",
      image: "/assets/mobile.png",
      tech: ["React Native", "Firebase"],
      live: "#",
      github: "#"
    },
    {
      title: "Travel Gallery",
      description: "Interactive destination showcase.",
      category: "Web Development",
      image: "/assets/travel.png",
      tech: ["React", "TypeScript"],
      live: "#",
      github: "https://github.com/Tashini4/Travel-Destination-Gallery"
    }
  ];

  const categories = ["All", "Web Development", "Full Stack Development", "Mobile Development"];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen py-20 px-4 md:px-20 bg-black text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tight"
        >
          Selected /<span className="text-gray-600">Works</span>
        </motion.h2>

        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-bold uppercase tracking-widest px-4 py-2 border ${filter === cat ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-gray-800 hover:border-white hover:text-white'} transition-all duration-300`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-500"
            >
              <div className="relative h-60 overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-mono text-gray-500 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 uppercase">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-bold border border-white/20 px-2 py-1 uppercase text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;