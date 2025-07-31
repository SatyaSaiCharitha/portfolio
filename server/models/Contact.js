// server/models/Contact.js
const mongoose = require('mongoose');

/**
 * @desc Mongoose Schema for Contact messages.
 * Defines the structure and validation rules for messages received via the contact form.
 */
const contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add your name'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Please add your email'],
            match: [/.+@.+\..+/, 'Please enter a valid email address'], // Basic email regex validation
            trim: true,
            lowercase: true, // Store emails in lowercase
        },
        subject: {
            type: String,
            required: false, // Subject can be optional
            trim: true,
        },
        message: {
            type: String,
            required: [true, 'Please add your message'],
        },
    },
    {
        timestamps: true, // Mongoose automatically adds `createdAt` and `updatedAt` fields
    }
);

// Create the Contact model from the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
