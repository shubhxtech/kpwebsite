import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-4 bg-white shadow-md z-[100]">
      <div className="max-w-6xl px-4 py-6 flex justify-between items-center">
        <NavLink to="/" className="absolute left-5 flex items-center space-x-3">
          <img src={logo} alt="Kamand Prompt" className="h-10" />
          <h1 className="text-2xl font-bold text-black animate-fadeIn">
            Kamand Prompt
          </h1>
        </NavLink>

        <nav className="absolute right-20 mx-auto flex justify-between items-center">
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/gsoc"
                className={({ isActive }) =>
                  `relative font-bold text-xl transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                  } before:content-['</'] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:mr-2 after:content-['>'] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:ml-2`
                }
              >
                GSOC
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  `relative font-bold text-xl transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                  } before:content-['</'] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:mr-2 after:content-['>'] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:ml-2`
                }
              >
                TEAM
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `relative font-bold text-xl transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                  } before:content-['</'] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:mr-2 after:content-['>'] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:ml-2`
                }
              >
                BLOGS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative font-bold text-xl transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                  } before:content-['</'] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:mr-2 after:content-['>'] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:ml-2`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
