// client/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-dark p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo or Your Name */}
        <Link to="/" className="text-white text-3xl font-bold rounded-md px-3 py-1 hover:bg-gray-700 transition duration-300">
          Your Name
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-wrap space-x-4 sm:space-x-6 text-lg">
          <li>
            <Link to="/about" className="text-gray-300 hover:text-primary transition duration-300 rounded-md px-3 py-1">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-gray-300 hover:text-primary transition duration-300 rounded-md px-3 py-1">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-300 hover:text-primary transition duration-300 rounded-md px-3 py-1">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certificates" className="text-gray-300 hover:text-primary transition duration-300 rounded-md px-3 py-1">
              Certificates
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-primary transition duration-300 rounded-md px-3 py-1">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
