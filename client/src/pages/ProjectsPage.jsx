// client/src/pages/ProjectsPage.jsx
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../services/projectService';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center text-xl text-slate-500">
        Loading projects...
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center text-xl text-red-500">
        {error}
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center text-xl text-slate-500">
        No projects found. Check back soon!
      </section>
    );
  }

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-slate-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
         My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
