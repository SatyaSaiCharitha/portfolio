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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-indigo-400 text-3xl font-bold tracking-tight hover:text-sky-400 transition-all">
          Sai Charitha
        </Link>

        {/* Hamburger icon (mobile only) */}
        <button
          className="sm:hidden text-indigo-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            open ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:space-x-6 absolute sm:static top-full left-0 right-0 sm:bg-transparent bg-slate-900 text-slate-100 sm:text-base text-lg transition-all duration-300 px-4 sm:px-0`}
        >
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path} className="relative group my-2 sm:my-0">
                <Link
                  to={path}
                  className={`px-3 py-1 rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-sky-400 font-semibold border-b-2 border-indigo-400'
                      : 'hover:text-indigo-300'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-sky-400 transition-all group-hover:w-full ${
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
