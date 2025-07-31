// server/utils/sendEmail.js
const createTransporter = require('../config/mailer'); // Import the function to create the Nodemailer transporter

/**
 * @desc Sends an email using the configured Nodemailer transporter.
 * This function abstracts the email sending logic, making it reusable.
 *
 * @param {Object} options - An object containing email details.
 * @param {string} options.from - The sender's email address (e.g., "Your Portfolio <no-reply@yourdomain.com>").
 * @param {string} options.to - The recipient's email address (e.g., "your_personal_email@example.com").
 * @param {string} options.subject - The subject line of the email.
 * @param {string} options.text - The plain text body of the email.
 * @param {string} options.html - The HTML body of the email (for rich text emails).
 *
 * @throws {Error} If the email transporter is not configured or if there's an error sending the email.
 */
const sendEmail = async (options) => {
    // Get the configured Nodemailer transporter instance
    const transporter = createTransporter();

    // Check if the transporter was successfully created (it might be null if config is missing)
    if (!transporter) {
        console.error('Email transporter is not configured. Cannot send email.');
        // Throw an error to indicate that the email service is not available
        throw new Error('Email service not available. Please check server/config/mailer.js and .env configuration.');
    }

    // Define the mail options based on the provided parameters
    const mailOptions = {
        from: options.from,     // Sender address
        to: options.to,         // List of receivers
        subject: options.subject, // Subject line
        text: options.text,     // Plain text body
        html: options.html,     // HTML body
    };

    try {
        // Send the email using the transporter
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
    } catch (error) {
        // Log the error if email sending fails
        console.error('Error sending email:', error);
        // Re-throw the error to be handled by the calling function (e.g., contactController)
        throw new Error(`Email could not be sent: ${error.message}`);
    }
};

module.exports = sendEmail;
