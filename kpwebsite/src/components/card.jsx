import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Card = ({ imageUrl, name }) => {
  return (
    <div className="w-[300px] h-[350px] relative overflow-hidden transition-transform transform hover-scale-small shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.6)] duration-300 ease-in-out rounded-2xl bg-gradient-to-b from-white to-gray-50">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[267px] h-[74px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_20px_rgba(10,10,10,0.4)] flex flex-col items-center justify-center rounded-lg transition-transform duration-300 ease-in-out  p-2">
        <div className="text-center text-black font-serif font-bold text-[24px] leading-[28.8px] transition-all duration-300 ease-in-out">
          {name}
        </div>
        <div className="flex gap-4 mt-2">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="w-[24px] h-[24px] text-black hover:text-gray-700 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="w-[24px] h-[24px]  text-black hover:text-gray-700 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
