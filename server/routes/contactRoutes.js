// server/routes/contactRoutes.js
const express = require('express');
const { submitContactForm } = require('../controllers/contactController');

const router = express.Router();

// Route for submitting the contact form
// This route is public, as anyone should be able to contact you.
router.route('/')
    .post(submitContactForm);

module.exports = router;
