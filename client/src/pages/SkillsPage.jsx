import React from 'react';
import { motion } from 'framer-motion';

// React Icons - A comprehensive list for all skills
import {
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss, SiRedux, SiMongodb, SiMongoose, SiVite, SiPostman,
  SiNetlify, SiRender, SiFigma, SiExpress, SiAxios, SiJsonwebtokens,
  SiChakraui, SiFramer, SiPostgresql, SiMysql, SiPandas, SiScikitlearn,
  SiTensorflow, SiNumpy, SiStreamlit, SiVercel, SiYarn
} from "react-icons/si";
import { VscCode, VscGithub } from "react-icons/vsc";
import { MdOutlineApi, MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineBranches } from "react-icons/ai";
import { BsCodeSlash, BsGear } from "react-icons/bs";
import { GoGitCommit } from "react-icons/go";
import { TbBrain } from "react-icons/tb";

// This object maps the skill name (string) to the icon component (JSX)
const skillIcons = {
  // Frontend
  "React": <FaReact className="text-sky-500" />,
  "JavaScript (ES6+)": <FaJs className="text-yellow-400" />,
  "HTML5": <FaHtml5 className="text-orange-600" />,
  "CSS3": <FaCss3Alt className="text-blue-600" />,
  "Chakra UI": <SiChakraui className="text-teal-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "Framer Motion": <SiFramer className="text-purple-500" />,
  "Responsive Design": <MdOutlineDesignServices className="text-indigo-500" />,

  // Backend
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-800" />,
  "RESTful APIs": <MdOutlineApi className="text-green-700" />,
  "Authentication (JWT)": <SiJsonwebtokens className="text-pink-500" />,

  // Databases
  "MongoDB": <SiMongodb className="text-green-600" />,
  "Mongoose": <SiMongoose className="text-red-800" />,
  "SQL (PostgreSQL/MySQL)": <FaDatabase className="text-blue-700" />,

  // Data Science & ML
  "Machine Learning": <TbBrain className="text-pink-600" />,
  "Pandas": <SiPandas className="text-indigo-800" />,
  "Scikit-learn (sklearn)": <SiScikitlearn className="text-orange-500" />,
  "TensorFlow": <SiTensorflow className="text-orange-400" />,
  "NumPy": <SiNumpy className="text-blue-500" />,
  "Python": <FaPython className="text-yellow-500" />,

  // Deployment & Tools
  "Render": <SiRender className="text-teal-400" />,
  "Streamlit": <SiStreamlit className="text-red-500" />,
  "Git": <FaGitAlt className="text-orange-600" />,
  "GitHub": <VscGithub className="text-gray-800" />,
  "Postman": <SiPostman className="text-orange-500" />,
  "VS Code": <VscCode className="text-blue-500" />,
  "npm / Yarn": <SiYarn className="text-blue-600" />,
  "Vercel / Netlify": <SiVercel className="text-black" />,

  // Concepts
  "MVC Architecture": <AiOutlineBranches className="text-teal-700" />,
  "API Design": <BsGear className="text-gray-600" />,
  "Object-Oriented Programming (OOP)": <BsCodeSlash className="text-indigo-700" />,
  "Data Structures & Algorithms": <GoGitCommit className="text-purple-700" />,
};

// Data is organized by category, matching the new structure
const skillsData = {
  "Frontend Development": [
    "React", "JavaScript (ES6+)", "HTML5", "CSS3", "Chakra UI", "Tailwind CSS", "Framer Motion", "Responsive Design"
  ],
  "Backend Development": [
    "Node.js", "Express.js", "RESTful APIs", "Authentication (JWT)"
  ],
  "Databases": [
    "MongoDB", "Mongoose", "SQL (PostgreSQL/MySQL)"
  ],
  "Data Science & ML (Python)": [
    "Python", "Machine Learning", "Pandas", "Scikit-learn (sklearn)", "TensorFlow", "NumPy"
  ],
  "ML Model Deployment": [
    "Render", "Streamlit"
  ],
  "Tools & Technologies": [
    "Git", "GitHub", "Postman", "VS Code", "npm / Yarn", "Vercel / Netlify"
  ],
  "Concepts & Methodologies": [
    "MVC Architecture", "API Design", "Object-Oriented Programming (OOP)", "Data Structures & Algorithms"
  ]
};

const SkillCard = ({ skill }) => (
  <motion.div
    className="group bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-indigo-400 hover:-translate-y-2"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-5xl mb-4 text-gray-600 transition-colors duration-300">
      {skillIcons[skill] || <BsCodeSlash />}
    </div>
    <p className="text-sm font-medium text-gray-700">
      {skill}
    </p>
  </motion.div>
);

const SkillsPage = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-800">
            Professional <span className="text-indigo-600">Skillset</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">A showcase of my technical abilities and tools.</p>
        </div>

        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-700 mb-8 text-center"
            >
              {category}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {skills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;