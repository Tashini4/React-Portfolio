import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-toastify';



const Homepage: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayRole, setDisplayRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  
  //const navigate = useNavigate();
  
  const fullText = "Hi, I'm Tashini Madubhani Wijethunga";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = [
    "UI/UX Designer",
    "Web Developer", 
    "Front End Developer"
  ];

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
    }, 3000); // Change role every 3 seconds

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
      link.href = './tashini.pdf';
      link.download = 'Tashini_Madubhani_Wijethunga_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success('Downloading CV...' , {
        position: "bottom-right",
        autoClose: 3000,
      }) 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to download CV. Please try again later.', {
        position:'bottom-right',
        autoClose: 3000,
      })
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
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: [
                '#FFFFFF',
                '#FF00FF',
                '#7D3CFF',
                '#00AEEF',
                '#D1D1D1',
                '#F5D0C4',
                '#E6BCA7'
              ][Math.floor(Math.random() * 7)],
              opacity: 0.1,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center px-6 ">
          {/* Animated Text */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {currentText}
              {currentIndex >= fullText.length && <span className="animate-pulse">|</span>}
            </h1>
            
            {/* Animated Roles */}
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
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
                className="text-white hover:text-purple-300 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button onClick={handleDownloadCV} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl" 
            >

              Download CV
            </button>
            <button 
              onClick={handleHireMeClick}
              className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg md:text-xl"
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
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .role-container {
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Homepage;