// client/src/pages/CertificatesPage.jsx
import React, { useState, useEffect } from 'react';
import CertificateCard from '../components/CertificateCard';
import { getCertificates } from '../services/certificateService'; // Import the service function

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
        setError('Failed to load certificates. Please try again later.');
        console.error("Error fetching certificates:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <section className="container mx-auto py-16 px-4 text-center text-xl text-gray-600">
        Loading certificates...
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto py-16 px-4 text-center text-xl text-red-600">
        {error}
      </section>
    );
  }

  if (certificates.length === 0) {
    return (
      <section className="container mx-auto py-16 px-4 text-center text-xl text-gray-600">
        No certificates found. Check back soon!
      </section>
    );
  }

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-dark text-center mb-12">My Certificates</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate._id} certificate={certificate} />
        ))}
      </div>
    </section>
  );
};

export default CertificatesPage;
