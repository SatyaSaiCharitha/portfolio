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
        setError('❌ Failed to load projects. Please try again later.');
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center text-xl text-indigo-500 animate-pulse">
        🚀 Loading projects...
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
      <section className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        😕 No projects found. Check back soon!
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-white via-indigo-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="bg-white/70 backdrop-blur-md shadow-xl border border-slate-200 rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
