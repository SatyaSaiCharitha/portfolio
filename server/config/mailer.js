// server/config/mailer.js
const nodemailer = require('nodemailer');

/**
 * @desc Configures and returns a Nodemailer transporter using Gmail SMTP.
 */
const createTransporter = () => {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    } else {
        console.warn('Gmail transporter not configured. Check .env variables.');
        return null;
    }
};

module.exports = createTransporter;
