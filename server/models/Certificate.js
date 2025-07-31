// server/models/Certificate.js
const mongoose = require('mongoose');

/**
 * @desc Mongoose Schema for Certificate documents.
 * Defines the structure and validation rules for certificate data.
 */
const certificateSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a certificate title'],
            trim: true,
        },
        issuingAuthority: {
            type: String,
            required: [true, 'Please add the issuing authority'],
            trim: true,
        },
        issueDate: {
            type: Date,
            required: [true, 'Please add the issue date'],
        },
        credentialId: {
            type: String, // Unique ID or verification code for the certificate (optional)
            required: false,
            trim: true,
        },
        certificateUrl: {
            type: String, // URL to the certificate image or verification page
            required: [true, 'Please add the certificate URL'],
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

// Create the Certificate model from the schema
const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
