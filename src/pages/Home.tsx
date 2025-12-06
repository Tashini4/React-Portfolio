import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Homepage: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayRole, setDisplayRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, speed: number, color: string}>>([]);

  const fullText = "Hi, I'm Tashini Madubhani Wijethunga";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = [
    "UI/UX Designer",
    "Web Developer", 
    "Front End Developer"
  ];

  // Initialize particles with pink and purple colors
  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, () => {
      const colors = [
        'rgba(236, 72, 153, 0.3)', // pink-500
        'rgba(192, 38, 211, 0.3)', // purple-500
        'rgba(168, 85, 247, 0.3)', // purple-400
        'rgba(244, 114, 182, 0.3)', // pink-400
        'rgba(219, 39, 119, 0.3)', // pink-600
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        color: randomColor
      };
    });
    setParticles(newParticles);
  }, []);

  // Typewriter effect for main text
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Role animation effect
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setRoleIndex(0);
      setDisplayRole('');
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  // Typewriter effect for current role
  useEffect(() => {
    if (currentIndex >= fullText.length && roleIndex < roles[currentRole].length) {
      const timeout = setTimeout(() => {
        setDisplayRole(prev => prev + roles[currentRole][roleIndex]);
        setRoleIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [roleIndex, currentRole, currentIndex, roles]);

  // Handle Hire Me button click
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = async () => {
    try {
      const link = document.createElement('a');
      link.href = './assets/Tashini Madubhani(1).pdf';
      link.download = 'Tashini_Madubhani_Wijethunga_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success('Downloading CV...', {
        position: "bottom-right",
        autoClose: 3000,
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to download CV. Please try again later.', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  const socialIcons = [
    { icon: <FaGithub />, name: 'GitHub', href: 'https://github.com/Tashini4' },
    { icon: <FaLinkedin />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/tashini-wijethunga-9474b02b2/' },
    { icon: <FaFacebook />, name: 'Facebook', href: 'https://www.facebook.com/share/1FkTevPvbU/' },
    { icon: <FaInstagram />, name: 'Instagram', href: 'https://www.instagram.com/_tashimadu_?igsh=NngxMjdkZzQ3eDYw' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              animationDuration: `${particle.speed * 20}s`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
        
        {/* Pink and Purple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-pink-900/20"></div>
        
        {/* Additional Gradient Layers for More Color */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-pink-950/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-600/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-50 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center px-6">
          {/* Animated Text */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {currentText}
              {currentIndex >= fullText.length && <span className="animate-pulse">|</span>}
            </h1>
            
            {/* Animated Roles */}
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                {displayRole}
                {currentIndex >= fullText.length && roleIndex < roles[currentRole].length && (
                  <span className="animate-pulse">|</span>
                )}
              </h2>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-300 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl shadow-lg hover:shadow-purple-500/25"
            >
              Download CV
            </button>
            <button 
              onClick={handleHireMeClick}
              className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl shadow-lg hover:shadow-white/25"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.5;
          }
          33% {
            transform: translateY(-15px) translateX(5px);
            opacity: 0.8;
          }
          66% {
            transform: translateY(-25px) translateX(-5px);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Homepage;