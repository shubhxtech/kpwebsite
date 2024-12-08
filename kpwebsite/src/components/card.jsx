import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Card = ({ imageUrl, name, linkedin, instagram }) => {
  return (
    <div className="w-[300px] h-[350px] relative overflow-hidden transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl duration-300 ease-in-out rounded-2xl bg-gradient-to-b from-white to-gray-50">
      {/* Profile Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover rounded-t-2xl"
      />
      
      {/* Details Container */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] h-[80px] bg-white shadow-md flex flex-col items-center justify-center rounded-lg transition-transform duration-300 ease-in-out p-2">
        {/* Name */}
        <div className="text-center text-black font-serif font-bold text-lg leading-snug transition-all duration-300 ease-in-out">
          {name}
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-2">
          {/* Instagram Link */}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-[24px] h-[24px] text-black hover:text-gray-700 transition-colors duration-300"
              />
            </a>
          )}
          {/* LinkedIn Link */}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-[24px] h-[24px] text-black hover:text-gray-700 transition-colors duration-300"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
