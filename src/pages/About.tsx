import React from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiThreema, SiMongodb } from 'react-icons/si';

const About: React.FC = () => {
  const technologies = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiThreema />, name: "Three.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left: Image & Status */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 sticky top-32"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/20 group">
            <img
              src="./assets/image.jpg"
              alt="Profile"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 font-mono text-sm">
              <p className="text-gray-400 mb-1">CURRENTLY</p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                OPEN FOR WORK
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="w-full md:w-2/3">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black uppercase mb-12 leading-[0.8]"
          >
            About <br />
            <span className="text-gray-800">Myself</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-lg font-light text-gray-300 leading-relaxed border-l-2 border-white/20 pl-8 mb-16"
          >
            <p>
              I'm Tashini Madubhani Wijethunga, a 23-year-old software engineer based in Sri Lanka. I don't just write code; I architect digital experiences that leave a lasting impression.
            </p>
            <p>
              My journey is defined by a relentless pursuit of pixel perfection and performance. Whether it's a 3D interactive web app or a robust backend system, I bring a unique blend of creativity and engineering rigor to every project.
            </p>
          </motion.div>

          <div className="mb-12">
            <h3 className="text-xl font-mono text-white mb-6 uppercase tracking-widest border-b border-white/20 pb-4">Tech Arsenal</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="aspect-square border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300 cursor-default group"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-wider">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;