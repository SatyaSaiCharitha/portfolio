// server/controllers/certificateController.js
const Certificate = require('../models/Certificate');
const asyncHandler = require('express-async-handler'); // Handles async errors, passes to error middleware

/**
 * @desc    Get all certificates from the database.
 * @route   GET /api/certificates
 * @access  Public
 */
const getCertificates = asyncHandler(async (req, res) => {
    // Find all certificates and sort them by the 'order' field ascending, then by issue date descending
    const certificates = await Certificate.find({}).sort({ order: 1, issueDate: -1 });
    res.json(certificates);
});

/**
 * @desc    Get a single certificate by its ID.
 * @route   GET /api/certificates/:id
 * @access  Public
 */
const getCertificateById = asyncHandler(async (req, res) => {
    const certificate = await Certificate.findById(req.params.id);

    if (certificate) {
        res.json(certificate);
    } else {
        res.status(404);
        throw new Error('Certificate not found');
    }
});

/**
 * @desc    Create a new certificate.
 * @route   POST /api/certificates
 * @access  Private (Admin) - Authentication middleware will be added here later.
 */
const createCertificate = asyncHandler(async (req, res) => {
    const { title, issuingAuthority, issueDate, credentialId, certificateUrl, order } = req.body;

    const certificate = new Certificate({
        title,
        issuingAuthority,
        issueDate,
        credentialId,
        certificateUrl,
        order: order || 0,
    });

    const createdCertificate = await certificate.save();
    res.status(201).json(createdCertificate);
});

/**
 * @desc    Update an existing certificate by its ID.
 * @route   PUT /api/certificates/:id
 * @access  Private (Admin) - Authentication middleware will be added here later.
 */
const updateCertificate = asyncHandler(async (req, res) => {
    const { title, issuingAuthority, issueDate, credentialId, certificateUrl, order } = req.body;

    const certificate = await Certificate.findById(req.params.id);

    if (certificate) {
        certificate.title = title !== undefined ? title : certificate.title;
        certificate.issuingAuthority = issuingAuthority !== undefined ? issuingAuthority : certificate.issuingAuthority;
        certificate.issueDate = issueDate !== undefined ? issueDate : certificate.issueDate;
        certificate.credentialId = credentialId !== undefined ? credentialId : certificate.credentialId;
        certificate.certificateUrl = certificateUrl !== undefined ? certificateUrl : certificate.certificateUrl;
        certificate.order = order !== undefined ? order : certificate.order;

        const updatedCertificate = await certificate.save();
        res.json(updatedCertificate);
    } else {
        res.status(404);
        throw new Error('Certificate not found');
    }
});

/**
 * @desc    Delete a certificate by its ID.
 * @route   DELETE /api/certificates/:id
 * @access  Private (Admin) - Authentication middleware will be added here later.
 */
const deleteCertificate = asyncHandler(async (req, res) => {
    const certificate = await Certificate.findById(req.params.id);

    if (certificate) {
        await Certificate.deleteOne({ _id: certificate._id });
        res.json({ message: 'Certificate removed successfully' });
    } else {
        res.status(404);
        throw new Error('Certificate not found');
    }
});

module.exports = {
    getCertificates,
    getCertificateById,
    createCertificate,
    updateCertificate,
    deleteCertificate,
};
