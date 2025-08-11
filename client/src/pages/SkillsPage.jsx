import React from 'react';
import { motion } from 'framer-motion';

// React Icons
import {
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss, SiRedux, SiMongodb, SiMongoose, SiVite, SiPostman,
  SiNetlify, SiRender, SiFigma, SiExpress, SiAxios
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { MdOutlineApi, MdOutlineDesignServices } from "react-icons/md";
import { PiBracketsCurlyBold } from "react-icons/pi";

// Map skill names to icons
const skillIcons = {
  "React.js": <FaReact className="text-blue-500" />,
  "JavaScript (ES6+)": <FaJs className="text-yellow-500" />,
  "HTML5": <FaHtml5 className="text-orange-600" />,
  "CSS3": <FaCss3Alt className="text-blue-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Vite": <SiVite className="text-purple-500" />,
  "Redux": <SiRedux className="text-purple-600" />,
  "Axios": <SiAxios className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  "Express.js": <SiExpress className="text-gray-800" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "Mongoose": <SiMongoose className="text-red-800" />,
  "RESTful APIs": <MdOutlineApi className="text-indigo-600" />,
  "Git & GitHub": <FaGitAlt className="text-orange-500" />,
  "VS Code": <VscCode className="text-blue-500" />,
  "Postman": <SiPostman className="text-orange-600" />,
  "Netlify": <SiNetlify className="text-teal-500" />,
  "Render": <SiRender className="text-teal-300" />,
  "Figma": <SiFigma className="text-pink-500" />,
  "Data Structures": <PiBracketsCurlyBold className="text-gray-700" />,
  "Problem Solving": <PiBracketsCurlyBold className="text-blue-700" />,
  "Responsive Design": <MdOutlineDesignServices className="text-indigo-500" />,
};

const skillsData = {
  "Frontend": [
    "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Redux", "Axios"
  ],
  "Backend": [
    "Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs"
  ],
  "Tools & Platforms": [
    "Git & GitHub", "VS Code", "Postman", "Netlify", "Render", "Figma"
  ],
  "Other": [
    "Data Structures", "Problem Solving", "Responsive Design"
  ]
};

const SkillsPage = () => {
  const allSkills = Object.values(skillsData).flat();

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-purple-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 Professional Skillset
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Here are the tools and technologies I specialize in. I’m always eager to learn and explore more!
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: index * 0.02 }}
            >
              <div className="text-5xl mb-3 group-hover:animate-pulse text-gray-600 group-hover:text-indigo-500 transition-colors duration-300">
                {skillIcons[skill]}
              </div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {skill}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;
