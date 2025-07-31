// server/routes/certificateRoutes.js
const express = require('express');
const {
    getCertificates,
    getCertificateById,
    createCertificate,
    updateCertificate,
    deleteCertificate,
} = require('../controllers/certificateController');
// const { protect, authorize } = require('../middleware/authMiddleware'); // Will add auth middleware later

const router = express.Router();

// Route for getting all certificates and creating a new certificate
// For `createCertificate`, you'll typically add authentication middleware
router.route('/')
    .get(getCertificates)
    .post(createCertificate); // .post(protect, authorize('admin'), createCertificate);

// Routes for getting, updating, and deleting a single certificate by ID
// For `updateCertificate` and `deleteCertificate`, you'll typically add authentication middleware
router.route('/:id')
    .get(getCertificateById)
    .put(updateCertificate)    // .put(protect, authorize('admin'), updateCertificate);
    .delete(deleteCertificate); // .delete(protect, authorize('admin'), deleteCertificate);

module.exports = router;
