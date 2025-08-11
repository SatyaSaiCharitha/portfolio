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
              src="https://res.cloudinary.com/dkpjimiip/image/upload/v1754504172/cherry_jddpuq.jpg"
              alt="Sai Charitha"
              className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-indigo-500"
            />
          </motion.div>

          {/* About Content - MODIFIED for text alignment */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/3 text-lg text-gray-800 leading-relaxed text-justify"
          >
            <p className="mb-4">
              Hello! I'm <span className="font-semibold text-indigo-700">Dangeti Satya Sai Charitha</span>, a skilled MERN Stack Developer and Machine Learning enthusiast. I build responsive, scalable, and user-friendly web applications. With a solid foundation in full-stack development, I’ve created several real-world projects that showcase both functionality and clean UI design. Alongside web development, I’ve also worked on Machine Learning projects such as house price prediction, focusing on data preprocessing, model building, and performance evaluation. I’m passionate about creating impactful digital solutions and continuously expanding my skills in both development and AI.
            </p>
            <p className="mb-4">
              I specialize in full-stack solutions using <strong>MongoDB, Express.js, Node.js</strong>, and <strong>React.js</strong>. I use <strong>Tailwind CSS</strong> for sleek, responsive UI designs.
            </p>
            <p className="mb-4">
              My focus is on writing elegant code with excellent performance and maintainability. I'm always exploring new tech and refining my problem-solving abilities.
            </p>
            <p>
              Outside coding, I enjoy dancing and staying curious about new things in tech. Let’s connect and build something amazing!
            </p>

            {/* Download Resume Button - ADDED SECTION */}
            <div className="mt-8 text-left">
              <a
                href="https://drive.google.com/file/d/1wzXWd5uronSLwySOVjNbQzc8XkrE0oMi/view?usp=sharing" // <-- IMPORTANT: Replace with the actual path to your resume file
                download="Sai_Charitha_Resume.pdf" // This suggests a filename to the user
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Resume
              </a>
            </div>
            {/* End of Added Section */}

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
