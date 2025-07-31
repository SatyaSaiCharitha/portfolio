// client/src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-pattern" />

      {/* Main content */}
      <div className="z-10 text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Hi, I'm <span className="text-blue-500">Your Name</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300">
          A passionate <span className="text-white font-semibold">MERN Stack Developer</span> building responsive and interactive web applications.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white text-lg font-semibold px-8 py-3 rounded-xl transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
