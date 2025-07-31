// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the DB connection function

// Import route files
const projectRoutes = require('./routes/projectRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database
connectDB();

// Initialize Express app
const app = express();

// Middleware
// express.json() parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());
// cors() enables Cross-Origin Resource Sharing. This is crucial for your React frontend
// to make requests to this Express backend, as they will be on different ports/domains during development.
app.use(cors());

// Basic route for testing server status
// When you visit http://localhost:5000/ in your browser, you should see this message.
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// Mount API routes
// All requests to /api/projects will be handled by projectRoutes
app.use('/api/projects', projectRoutes);
// All requests to /api/certificates will be handled by certificateRoutes
app.use('/api/certificates', certificateRoutes);
// All requests to /api/contact will be handled by contactRoutes
app.use('/api/contact', contactRoutes);

// Error handling middleware
// This middleware must be placed after all other routes and middleware.
// It catches any errors thrown by async handlers or other middleware and formats the response.
app.use(errorHandler);


// Define the port the server will listen on.
// It tries to use the PORT environment variable (e.g., set by hosting providers)
// or defaults to 5000 if not specified.
const PORT = process.env.PORT || 5000;

// Start the server and listen for incoming requests on the specified port.
app.listen(PORT, () => {
    // Log a message to the console indicating the server is running and in which mode.
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
