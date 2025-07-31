// client/src/services/certificateService.js
import axios from 'axios';

// Get the base URL for the API from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL + '/certificates';

/**
 * @desc Fetches all certificates from the backend.
 * @returns {Promise<Array>} A promise that resolves to an array of certificate objects.
 * @throws {Error} If the API request fails.
 */
const getCertificates = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching certificates:', error);
    throw error;
  }
};

/**
 * @desc Fetches a single certificate by its ID from the backend.
 * @param {string} id - The ID of the certificate to fetch.
 * @returns {Promise<Object>} A promise that resolves to a single certificate object.
 * @throws {Error} If the API request fails or certificate is not found.
 */
const getCertificateById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching certificate with ID ${id}:`, error);
    throw error;
  }
};

/**
 * @desc Creates a new certificate in the backend.
 * @param {Object} certificateData - The data for the new certificate.
 * @returns {Promise<Object>} A promise that resolves to the created certificate object.
 * @throws {Error} If the API request fails.
 */
const createCertificate = async (certificateData) => {
  // const config = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const response = await axios.post(API_URL, certificateData);
    return response.data;
  } catch (error) {
    console.error('Error creating certificate:', error);
    throw error;
  }
};

/**
 * @desc Updates an existing certificate in the backend.
 * @param {string} id - The ID of the certificate to update.
 * @param {Object} certificateData - The updated data for the certificate.
 * @returns {Promise<Object>} A promise that resolves to the updated certificate object.
 * @throws {Error} If the API request fails.
 */
const updateCertificate = async (id, certificateData) => {
  // const config = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const response = await axios.put(`${API_URL}/${id}`, certificateData);
    return response.data;
  } catch (error) {
    console.error(`Error updating certificate with ID ${id}:`, error);
    throw error;
  }
};

/**
 * @desc Deletes a certificate from the backend.
 * @param {string} id - The ID of the certificate to delete.
 * @returns {Promise<Object>} A promise that resolves to a success message.
 * @throws {Error} If the API request fails.
 */
const deleteCertificate = async (id) => {
  // const config = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting certificate with ID ${id}:`, error);
    throw error;
  }
};

export {
  getCertificates,
  getCertificateById,
  createCertificate,
  updateCertificate,
  deleteCertificate,
};
