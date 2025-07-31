// server/models/Project.js
const mongoose = require('mongoose');

/**
 * @desc Mongoose Schema for Project documents.
 * Defines the structure and validation rules for project data.
 */
const projectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a project title'], // Title is required
            trim: true, // Removes whitespace from both ends of a string
        },
        description: {
            type: String,
            required: [true, 'Please add a project description'], // Description is required
        },
        image: {
            type: String, // URL to the project image (e.g., hosted on Cloudinary, Imgur, or your server)
            required: [true, 'Please add a project image URL'], // Image URL is required
        },
        technologies: [
            {
                type: String, // Array of strings, e.g., ["React", "Node.js", "MongoDB", "Tailwind CSS"]
                required: [true, 'Please add at least one technology'], // Technologies array is required
            },
        ],
        projectUrl: {
            type: String, // Link to the live project (optional)
            required: false,
        },
        githubUrl: {
            type: String, // Link to the GitHub repository (optional)
            required: false,
        },
        order: {
            type: Number,
            default: 0, // Default order for display, lower numbers appear first
        },
    },
    {
        timestamps: true, // Mongoose automatically adds `createdAt` and `updatedAt` fields
    }
);

// Create the Project model from the schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
