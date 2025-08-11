// client/src/pages/CertificatesPage.jsx
import React, { useState, useEffect } from 'react';
import CertificateCard from '../components/CertificateCard';
import { getCertificates } from '../services/certificateService';
import { motion } from 'framer-motion';

const CertificatesPage = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await getCertificates();
        setCertificates(data);
      } catch (err) {
        setError('❌ Failed to load certificates. Please try again later.');
        console.error("Error fetching certificates:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <motion.div
          className="text-center text-xl text-indigo-500 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ⏳ Loading certificates...
        </motion.div>
      );
    }

    if (error) {
      return (
        <motion.div
          className="text-center text-xl text-red-600 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      );
    }

    if (certificates.length === 0) {
      return (
        <motion.div
          className="text-center text-xl text-gray-500 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🚫 No certificates found. Check back soon!
        </motion.div>
      );
    }

    return (
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CertificateCard certificate={certificate} />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎓 My Certificates
        </motion.h2>

        {renderContent()}
      </div>
    </section>
  );
};

export default CertificatesPage;
