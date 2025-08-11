// client/src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certificates', path: '/certificates' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rebeccapurple]/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-3xl font-bold tracking-tight hover:text-[#e0d4f0] transition-all"
        >
          Sai Charitha
        </Link>

        {/* Hamburger icon (mobile only) */}
        <button
          className="sm:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            open ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:space-x-6 absolute sm:static top-full left-0 right-0 sm:bg-transparent bg-[rebeccapurple] text-white sm:text-base text-lg transition-all duration-300 px-4 sm:px-0`}
        >
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path} className="relative group my-2 sm:my-0">
                <Link
                  to={path}
                  className={`px-3 py-1 rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-[#e0d4f0] font-semibold border-b-2 border-white'
                      : 'hover:text-white'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full ${
                      isActive ? 'w-full' : ''
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
