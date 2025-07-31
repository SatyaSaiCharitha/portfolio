// server/config/db.js
const mongoose = require('mongoose');

/**
 * @desc Connects to the MongoDB database using the URI from environment variables.
 * Logs success or error and exits the process on failure.
 */
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the MONGO_URI from .env
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // Log successful connection details
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Log connection error and exit the process if connection fails
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit with a non-zero code to indicate an error
    }
};

module.exports = connectDB;
