// client/src/pages/SkillsPage.jsx
import React from 'react';

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
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-dark text-center mb-12">My Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
              {category}
            </h3>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center text-lg text-gray-800">
                  <span>{skill.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${skill.level === 'Advanced' ? 'bg-green-100 text-green-800' : ''}
                    ${skill.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' : ''}
                    ${skill.level === 'Beginner' ? 'bg-yellow-100 text-yellow-800' : ''}
                  `}>
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
