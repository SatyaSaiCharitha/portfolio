// server/routes/projectRoutes.js
const express = require('express');
const {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
} = require('../controllers/projectController');
// const { protect, authorize } = require('../middleware/authMiddleware'); // Will add auth middleware later

const router = express.Router();

// Route for getting all projects and creating a new project
// For `createProject`, you'll typically add authentication middleware like `protect` and `authorize`
router.route('/')
    .get(getProjects)
    .post(createProject); // .post(protect, authorize('admin'), createProject);

// Routes for getting, updating, and deleting a single project by ID
// For `updateProject` and `deleteProject`, you'll typically add authentication middleware
router.route('/:id')
    .get(getProjectById)
    .put(updateProject)    // .put(protect, authorize('admin'), updateProject);
    .delete(deleteProject); // .delete(protect, authorize('admin'), deleteProject);

module.exports = router;
