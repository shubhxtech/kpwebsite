import React, { useEffect } from 'react';
import bg from '../assets/bg.jpg';

import DottedBackground from './dots';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faCodeBranch, faLaptopCode, 
  faServer, faTerminal 
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub, faInstagram, faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const FloatingElement = ({ className, icon }) => (
  <div className={`absolute w-8 md:w-10 h-8 md:h-10 
    shadow-lg shadow-purple-500/20 opacity-80 rounded-xl backdrop-blur-md animate-float 
    hover:scale-110 transition-transform duration-300 ${className}`}>
    <FontAwesomeIcon 
      icon={icon} 
      className="text-white w-[20px] md:w-[24px] h-[20px] md:h-[24px] p-2" 
    />
  </div>
);

const SocialIcon = ({ icon, name, link }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
      rounded-xl backdrop-blur-md hover:from-purple-500/30 hover:to-blue-500/30 
      transition-all duration-300 flex items-center justify-center"
  >
    <FontAwesomeIcon
      icon={icon}
      className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-300"
    />
    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800/90 text-white text-sm 
      rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {name}
    </span>
  </a>
);

const HeroSection = () => {
  const socialIcons = [
    { icon: faGithub, name: 'Follow on GitHub', link: 'https://github.com/KamandPrompt' },
    { icon: faInstagram, name: 'Follow on Instagram', link: 'https://www.instagram.com/kamandprompt/' },
    { icon: faLinkedin, name: 'Connect on LinkedIn', link: 'https://www.linkedin.com/company/programming-club-iit-mandi/posts/?feedView=all' },
  ];
  const floatingElements = [
    // Top row
    {
      icon: faGithub,
      className: "top-[15%] left-[15%] parallax",
      speed: 2,
      delay: "animation-delay-1000"
    },
    {
      icon: faCodeBranch,
      className: "top-[20%] right-[20%] parallax",
      speed: 4,
      delay: "animation-delay-2000"
    },
    // Middle row - left and right
    {
      icon: faCode,
      className: "top-[50%] left-[10%] parallax",
      speed: 3,
      delay: "animation-delay-3000"
    },
    {
      icon: faLaptopCode,
      className: "top-[45%] right-[12%] parallax",
      speed: 5,
      delay: "animation-delay-2500"
    },
    // Bottom row
    {
      icon: faServer,
      className: "bottom-[20%] left-[25%] parallax",
      speed: 6,
      delay: "animation-delay-4000"
    },
    {
      icon: faTerminal,
      className: "bottom-[15%] right-[25%] parallax",
      speed: 3,
      delay: "animation-delay-3500"
    }
  ];

  useEffect(() => {
    const parallaxEffect = (e) => {
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(elem => {
        const speed = elem.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', parallaxEffect);
    return () => document.removeEventListener('mousemove', parallaxEffect);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      />

<div className="fixed left-0 top-0 inset-0 grid"
        style={{
          backgroundImage: 'radial-gradient(circle, #eeeeee 2px, transparent 2px)',
          backgroundSize: '64px 64px',
          backgroundAttachment: 'fixed',
          opacity: 0.3
        }}>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" /> */}

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <FloatingElement
          key={index}
          icon={element.icon}
          className={`${element.className} ${element.delay}`}
          data-speed={element.speed}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-1 h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold  bg-clip-text 
          text-white mb-4 animate-fadeIn text-center">
          &lt;Kamand Prompt/&gt;
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 animate-slideUp text-center 
          max-w-2xl mx-auto leading-relaxed">
          &lt;Coding the future with Prompt/&gt;
        </p>
        
        {/* CTA Button */}
        <button
  onClick={() => window.open("https://www.instagram.com/kamandprompt/", "_blank")}
  className="mt-8 px-8 py-3 bg-white
    rounded-full text-black font-semibold hover:scale-105 transition-transform 
    duration-300 animate-pulse"
>
  Join Our Community
</button>

      </div>

      {/* Social Icons */}
      {/* <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-2">
        {socialIcons.map((iconObj, index) => (
          <SocialIcon 
            key={iconObj.name}
            icon={iconObj.icon}
            name={iconObj.name}
            link={iconObj.link}
          />
        ))}
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="block w-6 h-6 border-2 border-white border-t-0 border-l-0 rotate-45" />
      </div>
    </div>
  );
};

// Add these custom animations to your Tailwind config
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

  .animation-delay-1000 { animation-delay: 1s; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-3000 { animation-delay: 3s; }
  .animation-delay-4000 { animation-delay: 4s; }
  .animation-delay-5000 { animation-delay: 5s; }
`;
document.head.appendChild(style);

export default HeroSection;