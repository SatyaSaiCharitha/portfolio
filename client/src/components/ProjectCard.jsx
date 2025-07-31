// client/src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  // Destructure project properties for easier access
  const { title, description, image, technologies, projectUrl, githubUrl } = project;

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-center"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = `https://placehold.co/400x300/E0E0E0/333333?text=No+Image`; // Placeholder on error
        }}
      />

      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-dark mb-2">{title}</h3>

        {/* Project Description */}
        <p className="text-gray-700 text-base mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              View Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-gray-600 hover:bg-gray-700 text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
