import React from 'react';
import { Github, Linkedin } from 'lucide-react'; // icons (optional)

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-6 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p className="text-slate-400">
          &copy; {currentYear} <span className="text-indigo-400 font-semibold">Sai Charitha</span>. All rights reserved.
        </p>
        <p className="mt-2 text-slate-400">
          Built with <span className="text-pink-400 text-lg">&hearts;</span> using MERN Stack & Tailwind CSS
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-4 text-slate-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition duration-300 flex items-center space-x-1"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition duration-300 flex items-center space-x-1"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
