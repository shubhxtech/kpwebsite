import React from 'react';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-8 sm:pt-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mx-16">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start">
            <img src={logo} alt="Programming Club Logo" className="h-16 mb-4" />
            <p className="font-bold py-2 sm:py-4 text-xl text-center sm:text-left">
              PROGRAMMING CLUB
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left mx-10">
            <h3 className="font-extrabold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['HOME', 'GSOC', 'TEAMS', 'CONTACT'].map((link) => (
                <li key={link}>
                  <Link
                    to={`${link.toLowerCase()}`}
                    className="relative font-medium transition-colors hover:text-gray-900 before:content-['</'] after:content-['>'] before:opacity-0 after:opacity-0 hover:before:opacity-100 hover:after:opacity-100 before:transition-opacity before:duration-300 after:transition-opacity after:duration-300 before:mr-1 after:ml-1"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center sm:text-left mx-10">
            <h3 className="font-extrabold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="font-medium">pc@students.iitmandi.ac.in</span>
              </p>
              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">+91 92637 30646</span>
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center sm:text-left mx-10">
            <h3 className="font-extrabold text-xl mb-4">Follow us</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <FontAwesomeIcon icon={faInstagram} className="text-black w-6 h-6" />
                <a href="#" className="font-medium hover:text-gray-900 before:content-['</'] after:content-['>'] before:opacity-0 after:opacity-0 hover:before:opacity-100 hover:after:opacity-100 before:transition-opacity before:duration-300 after:transition-opacity after:duration-300 before:mr-1 after:ml-1">
                  Instagram
                </a>
              </p>
              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <FontAwesomeIcon icon={faLinkedin} className="text-black w-6 h-6" />
                <a href="#" className="font-medium hover:text-gray-900 before:content-['</'] after:content-['>'] before:opacity-0 after:opacity-0 hover:before:opacity-100 hover:after:opacity-100 before:transition-opacity before:duration-300 after:transition-opacity after:duration-300 before:mr-1 after:ml-1">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>


      </div>
      {/* Copyright */}
      <div className="bg-gray-200 py-6 sm:py-8 mt-8 sm:mt-16">
        <p className="text-md text-gray-600 text-center">
          © 2024 Kammand Prompt{' '}
          <a href="https://iitmandi.ac.in" className="hover:text-gray-900 hover:underline font-semibold">
            IIT Mandi
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;