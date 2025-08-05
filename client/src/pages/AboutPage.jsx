// client/src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-purple-700 mb-12"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
          >
            <img
              src="https://placehold.co/300x300/6366F1/FFFFFF?text=Your+Photo"
              alt="Your Name"
              className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-indigo-500"
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/3 text-lg text-gray-800 leading-relaxed"
          >
            <p className="mb-4">
              Hello! I'm <span className="font-semibold text-indigo-700">[Your Name]</span>, a dedicated and enthusiastic <strong>MERN Stack Developer</strong> with a passion for creating robust, scalable, and user-friendly web applications. My journey into web development began <em>[mention when/how you started]</em>.
            </p>
            <p className="mb-4">
              I specialize in full-stack solutions using <strong>MongoDB, Express.js, Node.js</strong>, and <strong>React.js</strong>. I use <strong>Tailwind CSS</strong> for sleek, responsive UI designs.
            </p>
            <p className="mb-4">
              My focus is on writing elegant code with excellent performance and maintainability. I'm always exploring new tech and refining my problem-solving abilities.
            </p>
            <p>
              Outside coding, I enjoy <em>[mention your hobbies]</em>. Let’s connect and build something amazing!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default AboutPage;
