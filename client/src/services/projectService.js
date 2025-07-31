// client/src/services/projectService.js
import axios from 'axios';

// Get the base URL for the API from environment variables
// Vite exposes environment variables prefixed with VITE_
const API_URL = import.meta.env.VITE_API_BASE_URL + '/projects';

/**
 * @desc Fetches all projects from the backend.
 * @returns {Promise<Array>} A promise that resolves to an array of project objects.
 * @throws {Error} If the API request fails.
 */
const getProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // The data property contains the actual response body
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error; // Re-throw to be handled by the component
  }
};

/**
 * @desc Fetches a single project by its ID from the backend.
 * @param {string} id - The ID of the project to fetch.
 * @returns {Promise<Object>} A promise that resolves to a single project object.
 * @throws {Error} If the API request fails or project is not found.
 */
const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    throw error;
  }
};

/**
 * @desc Creates a new project in the backend.
 * @param {Object} projectData - The data for the new project.
 * @returns {Promise<Object>} A promise that resolves to the created project object.
 * @throws {Error} If the API request fails (e.g., validation errors, unauthorized).
 */
const createProject = async (projectData) => {
  // In a real app, you'd pass a token for authorization here
  // const config = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const response = await axios.post(API_URL, projectData);
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

/**
 * @desc Updates an existing project in the backend.
 * @param {string} id - The ID of the project to update.
 * @param {Object} projectData - The updated data for the project.
 * @returns {Promise<Object>} A promise that resolves to the updated project object.
 * @throws {Error} If the API request fails.
 */
const updateProject = async (id, projectData) => {
  // const config = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const response = await axios.put(`${API_URL}/${id}`, projectData);
    return response.data;
  } catch (error) {
    console.error(`Error updating project with ID ${id}:`, error);
    throw error;
  }
};

/**
 * @desc Deletes a project from the backend.
 * @param {string} id - The ID of the project to delete.
 * @returns {Promise<Object>} A promise that resolves to a success message.
 * @throws {Error} If the API request fails.
 */
const deleteProject = async (id) => {
  // const config = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting project with ID ${id}:`, error);
    throw error;
  }
};

export {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
