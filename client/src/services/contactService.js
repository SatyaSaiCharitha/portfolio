// client/src/services/contactService.js
import axios from 'axios';

// Get the base URL for the API from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL + '/contact';

/**
 * @desc Submits contact form data to the backend.
 * @param {Object} contactData - The data from the contact form (name, email, subject, message).
 * @returns {Promise<Object>} A promise that resolves to the backend's response (e.g., success message).
 * @throws {Error} If the API request fails (e.g., network error, backend validation error).
 */
const submitContact = async (contactData) => {
  try {
    const response = await axios.post(API_URL, contactData);
    return response.data; // Assuming backend returns a success message or data
  } catch (error) {
    console.error('Error submitting contact form:', error);
    // Re-throw the error so the calling component can handle it (e.g., display an error message)
    throw error;
  }
};

export {
  submitContact,
};
