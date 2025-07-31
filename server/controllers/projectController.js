// server/controllers/projectController.js
const Project = require('../models/Project');
const asyncHandler = require('express-async-handler'); // Handles async errors, passes to error middleware

/**
 * @desc    Get all projects from the database.
 * @route   GET /api/projects
 * @access  Public
 */
const getProjects = asyncHandler(async (req, res) => {
    // Find all projects and sort them by the 'order' field ascending, then by creation date descending
    const projects = await Project.find({}).sort({ order: 1, createdAt: -1 });
    res.json(projects);
});

/**
 * @desc    Get a single project by its ID.
 * @route   GET /api/projects/:id
 * @access  Public
 */
const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project) {
        res.json(project);
    } else {
        // If project not found, set status to 404 and throw an error
        res.status(404);
        throw new Error('Project not found');
    }
});

/**
 * @desc    Create a new project.
 * @route   POST /api/projects
 * @access  Private (Admin) - Authentication middleware will be added here later.
 */
const createProject = asyncHandler(async (req, res) => {
    const { title, description, image, technologies, projectUrl, githubUrl, order } = req.body;

    // Create a new Project instance with the data from the request body
    const project = new Project({
        title,
        description,
        image,
        technologies,
        projectUrl,
        githubUrl,
        order: order || 0, // Use provided order or default to 0
    });

    // Save the new project to the database
    const createdProject = await project.save();
    // Respond with 201 (Created) status and the created project data
    res.status(201).json(createdProject);
});

/**
 * @desc    Update an existing project by its ID.
 * @route   PUT /api/projects/:id
 * @access  Private (Admin) - Authentication middleware will be added here later.
 */
const updateProject = asyncHandler(async (req, res) => {
    const { title, description, image, technologies, projectUrl, githubUrl, order } = req.body;

    // Find the project by ID
    const project = await Project.findById(req.params.id);

    if (project) {
        // Update fields only if new values are provided in the request body
        project.title = title !== undefined ? title : project.title;
        project.description = description !== undefined ? description : project.description;
        project.image = image !== undefined ? image : project.image;
        project.technologies = technologies !== undefined ? technologies : project.technologies;
        project.projectUrl = projectUrl !== undefined ? projectUrl : project.projectUrl;
        project.githubUrl = githubUrl !== undefined ? githubUrl : project.githubUrl;
        project.order = order !== undefined ? order : project.order; // Allow setting order to 0

        // Save the updated project to the database
        const updatedProject = await project.save();
        res.json(updatedProject);
    } else {
        // If project not found, set status to 404 and throw an error
        res.status(404);
        throw new Error('Project not found');
    }
});

/**
 * @desc    Delete a project by its ID.
 * @route   DELETE /api/projects/:id
 * @access  Private (Admin) - Authentication middleware will be added here later.
 */
const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project) {
        // Delete the project document
        await Project.deleteOne({ _id: project._id });
        res.json({ message: 'Project removed successfully' });
    } else {
        // If project not found, set status to 404 and throw an error
        res.status(404);
        throw new Error('Project not found');
    }
});

module.exports = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
};
