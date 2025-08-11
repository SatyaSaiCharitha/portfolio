import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, projectUrl, githubUrl } = project;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <img
        src={image}
        alt={title || 'Project Image'}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/400x300/E0E0E0/333333?text=No+Image`;
        }}
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-start gap-4">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition"
            >
              Live <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
            >
              GitHub <FaGithub className="text-sm" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
