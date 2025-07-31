// server/controllers/contactController.js
const Contact = require('../models/Contact');
const asyncHandler = require('express-async-handler');
const sendEmail = require('../utils/sendEmail'); // Utility function for sending emails

/**
 * @desc    Handle contact form submission.
 * Saves the message to the database and sends an email notification.
 * @route   POST /api/contact
 * @access  Public
 */
const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    // 1. Basic validation (Mongoose schema also handles this)
    if (!name || !email || !message) {
        res.status(400);
        throw new Error('Please fill all required fields: Name, Email, and Message.');
    }

    // 2. Save the contact message to the database
    const contactMessage = new Contact({
        name,
        email,
        subject,
        message,
    });

    const createdMessage = await contactMessage.save();

    // 3. Send email notification
    const recipientEmail = process.env.CONTACT_EMAIL_RECEIVER; // Your personal email to receive notifications
    const senderEmail = process.env.EMAIL_SENDER; // The email configured in mailer.js to send from

    if (!recipientEmail || !senderEmail) {
        console.error('Email recipient or sender not configured in .env. Skipping email notification.');
        // Still send success response to user, but log the error internally
        return res.status(201).json({
            message: 'Your message has been sent successfully (email notification skipped due to server config).',
            data: createdMessage,
        });
    }

    const emailSubject = `New Contact Form Submission: ${subject || 'No Subject'}`;
    const emailText = `
        You have received a new message from your portfolio contact form.

        Name: ${name}
        Email: ${email}
        Subject: ${subject || 'N/A'}
        Message:
        ${message}
    `;

    try {
        await sendEmail({
            from: senderEmail,
            to: recipientEmail,
            subject: emailSubject,
            text: emailText,
            html: `<p>You have received a new message from your portfolio contact form.</p>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                   <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`,
        });
        console.log(`Contact email sent to ${recipientEmail}`);
        res.status(201).json({
            message: 'Your message has been sent successfully!',
            data: createdMessage,
        });
    } catch (emailError) {
        console.error(`Error sending contact email: ${emailError.message}`);
        // Log the email error but still send a success response to the user
        // as the message was saved to the DB. You might want a more robust error handling here.
        res.status(201).json({
            message: 'Your message has been sent successfully, but there was an issue sending the email notification.',
            data: createdMessage,
        });
    }
});

module.exports = {
    submitContactForm,
};
