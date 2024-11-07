import React from 'react';
import bg from '../assets/bg.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode , faCodeBranch, faLaptopCode, faServer, faTerminal} from '@fortawesome/free-solid-svg-icons';
import {faGithub,faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const FloatingElement = ({ className, icon }) => (
  <div className={`absolute w-10 h-10 bg-gray-600/20 shadow-sm shadow-white opacity-60 rounded-lg backdrop-blur-sm animate-float ${className}`}>
    <FontAwesomeIcon icon={icon} className="text-white w-[24px] h-[24px] p-2" />
  </div>
);

const HeroSection = () => {

  const socialIcons = [
    { icon: faGithub, name: 'GitHub' },
    { icon: faInstagram, name: 'Instagram' },
    { icon: faLinkedin, name: 'LinkedIn' },
  ];
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image */}
      <div 
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
  style={{ backgroundImage: `url(${bg})` }}
/>

      
      <FloatingElement className="top-1/4 left-1/4" icon={faGithub} />
      <FloatingElement className="top-1/3 right-1/4 animation-delay-1000" icon={faCodeBranch} />
      <FloatingElement className="bottom-1/4 left-1/3 animation-delay-2000" icon={faCode} />
      <FloatingElement className="top-2/3 right-[150px] animation-delay-3000" icon={faLaptopCode} />
      <FloatingElement className="top-[30%] left-[20%] animation-delay-4000" icon={faServer} />
      <FloatingElement className="bottom-[30%] right-[20%] animation-delay-5000" icon={faTerminal} />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl font-bold text-white mb-4 animate-fadeIn">
          &lt;Kamand Prompt/&gt;
        </h1>
        <p className="text-gray-400 text-2xl animate-slideUp">
          &lt;Coding the future with Prompt/&gt;
        </p>
      </div>

      {/* Social Icons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        {socialIcons.map((iconObj, index) => (
          <div
            key={iconObj.name}
            className="w-8 h-8 bg-gray-800/50 rounded-lg backdrop-blur-sm 
                     hover:bg-gray-700/50 transition-all duration-300 
                     animate-fadeIn"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <FontAwesomeIcon 
              icon={iconObj.icon} 
              alt={`${iconObj.name} icon`} 
              className="text-white w-[24px] h-[24px] p-1"
            />
          </div>
        ))}
      </div>
      </div>

  );
};

// Add these custom animations to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
  
  .animate-slideUp {
    animation: slideUp 1s ease-out forwards;
  }
  
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-3000 {
    animation-delay: 3s;
  }
`;
document.head.appendChild(style);

export default HeroSection;