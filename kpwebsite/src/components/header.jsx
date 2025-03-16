import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg'; 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkStyles = ({ isActive }) =>
    `relative font-bold text-xl transition-colors ${
      isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
    } before:content-['</'] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:mr-2 after:content-['>'] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:ml-2`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-[100]">
      
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Kamand Prompt" className="h-10" />
            <h1 className="text-2xl font-bold text-black animate-fadeIn">
              Kamand Prompt
            </h1>
          </NavLink>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['home', 'gsoc', 'teams', 'contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item}`}
                    className={navLinkStyles}
                  >
                    {item.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden">
            <ul className="pt-4 pb-3">
              {['gsoc', 'teams', 'blogs', 'contact'].map((item) => (
                <li key={item} className="mb-3">
                  <NavLink
                    to={`/${item}`}
                    className={navLinkStyles}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;