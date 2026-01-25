import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Scene = () => {
  return (
    <mesh>
      <TorusKnot args={[1, 0.3, 128, 16]}>
        <MeshDistortMaterial color="#ffffff" wireframe distort={0.4} speed={2} />
      </TorusKnot>
    </mesh>
  );
};

const Home: React.FC = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Tashini4' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/tashini-wijethunga-9474b02b2/' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/share/1FkTevPvbU/' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/_tashimadu_?igsh=NngxMjdkZzQ3eDYw' }
  ];

  return (
    <div className="min-h-screen py-20 flex flex-col md:flex-row items-center justify-center px-4 md:px-20 relative z-10 overflow-hidden">

      {/* Text Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-left z-20"
      >
        <h2 className="text-xl md:text-2xl font-mono text-gray-400 mb-4 tracking-widest">HELLO, I AM</h2>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6">
          TASHINI <br />
          <span className="text-transparent text-stroke">MADUBHANI</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-8 leading-relaxed border-l-2 border-white pl-6">
          I'm a Frontend Developer
        </p>

        <div className="flex gap-6 mb-12">
          {socialLinks.map((link, i) => (
            <a key={i} href={link.href} className="text-2xl text-white hover:scale-125 transition-transform">{link.icon}</a>
          ))}
        </div>

        <div className="flex gap-4">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-transparent hover:text-white hover:border hover:border-white transition-all">
            View Work
          </button>
          <a href="./assets/Tashini Madubhani(1).pdf" download className="px-8 py-3 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Resume
          </a>
        </div>
      </motion.div>

      {/* 3D Element */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen absolute md:relative right-0 top-0 opacity-50 md:opacity-100 pointer-events-none md:pointer-events-auto">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Scene />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;