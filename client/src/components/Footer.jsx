// client/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-300 p-4 mt-8 shadow-inner">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        <p className="mt-2">
          Built with <span className="text-primary">&hearts;</span> and MERN Stack + Tailwind CSS
        </p>
        {/* You can add social media icons/links here */}
        <div className="flex justify-center space-x-4 mt-4">
          {/* Example Social Link (replace with actual icons/links) */}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition duration-300">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition duration-300">
            LinkedIn
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
