// client/src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-dark text-center mb-12">About Me</h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* Profile Image */}
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src="https://placehold.co/300x300/6366F1/FFFFFF?text=Your+Photo" // Replace with your actual photo URL
            alt="Your Name"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-primary"
          />
        </div>

        {/* About Content */}
        <div className="md:w-2/3 text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Hello! I'm [Your Name], a dedicated and enthusiastic **MERN Stack Developer** with a passion for
            creating robust, scalable, and user-friendly web applications. My journey into web development
            began [mention when/how you started, e.g., "during my university days when I discovered the power of code"].
          </p>
          <p className="mb-4">
            I specialize in building full-stack solutions, leveraging **MongoDB** for flexible data storage,
            **Express.js** and **Node.js** for powerful backend APIs, and **React.js** for dynamic and
            interactive user interfaces. I'm also proficient in modern styling techniques using **Tailwind CSS**,
            ensuring that applications are not only functional but also visually appealing and responsive across all devices.
          </p>
          <p className="mb-4">
            My goal is to transform complex ideas into elegant code, always focusing on performance,
            maintainability, and user experience. I enjoy solving challenging problems and continuously
            learning new technologies to stay at the forefront of web development.
          </p>
          <p>
            Outside of coding, I enjoy [mention a hobby or two, e.g., "hiking, reading sci-fi novels, and experimenting with new recipes"].
            I'm always open to new opportunities and collaborations, so feel free to connect!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
