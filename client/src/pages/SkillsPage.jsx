// client/src/pages/SkillsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
  "Frontend": [
    { name: "React.js", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Vite", level: "Intermediate" },
    { name: "Redux", level: "Intermediate" },
    { name: "Axios", level: "Advanced" },
  ],
  "Backend": [
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "Mongoose", level: "Advanced" },
    { name: "RESTful APIs", level: "Advanced" },
  ],
  "Tools & Platforms": [
    { name: "Git & GitHub", level: "Advanced" },
    { name: "VS Code", level: "Advanced" },
    { name: "Postman / Thunder Client", level: "Advanced" },
    { name: "Netlify / Vercel", level: "Intermediate" },
    { name: "Heroku / Render", level: "Intermediate" },
    { name: "Figma (Basic)", level: "Beginner" },
  ],
  "Other": [
    { name: "Data Structures & Algorithms", level: "Intermediate" },
    { name: "Problem Solving", level: "Advanced" },
    { name: "Responsive Design", level: "Advanced" },
  ]
};

const SkillsPage = () => {
  return (
    <section className="bg-gradient-to-br from-white to-indigo-50 py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center text-indigo-700 mb-12"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white border-t-4 border-indigo-500 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">{category}</h3>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center text-gray-800">
                  <span>{skill.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${skill.level === 'Advanced' ? 'bg-green-100 text-green-800' : ''}
                    ${skill.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' : ''}
                    ${skill.level === 'Beginner' ? 'bg-yellow-100 text-yellow-800' : ''}
                  `}>
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
