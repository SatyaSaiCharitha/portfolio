// client/src/pages/ProjectsPage.jsx
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../services/projectService'; // Import the service function

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
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <section className="container mx-auto py-16 px-4 text-center text-xl text-gray-600">
        Loading projects...
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto py-16 px-4 text-center text-xl text-red-600">
        {error}
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="container mx-auto py-16 px-4 text-center text-xl text-gray-600">
        No projects found. Check back soon!
      </section>
    );
  }

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-dark text-center mb-12">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
