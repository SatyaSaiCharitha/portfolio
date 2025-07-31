// server/middleware/errorHandler.js

/**
 * @desc Custom error handling middleware for Express.
 * Catches errors thrown in routes/controllers and sends a formatted JSON response.
 *
 * @param {Error} err - The error object that was caught.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function in the stack.
 */
const errorHandler = (err, req, res, next) => {
    // Determine the appropriate HTTP status code for the error.
    // If a status code was already set on the response (e.g., by a controller
    // throwing an error with `res.status(404)`), use that.
    // Otherwise, default to 500 (Internal Server Error) for unhandled errors.
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);

    // Send a JSON response back to the client.
    // The response includes the error message.
    // In a production environment, it's generally recommended to *not* send the
    // full stack trace for security reasons, as it can expose internal server details.
    // We check `process.env.NODE_ENV` to conditionally include the stack trace.
    res.json({
        message: err.message,
        // Only include stack trace if in development environment
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = errorHandler;
