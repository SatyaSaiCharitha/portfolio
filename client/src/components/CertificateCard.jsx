// client/src/components/CertificateCard.jsx
import React from 'react';

const CertificateCard = ({ certificate }) => {
  // Destructure certificate properties
  const { title, issuingAuthority, issueDate, credentialId, certificateUrl } = certificate;

  // Format the date for better readability
  const formattedDate = new Date(issueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
      <div>
        {/* Certificate Title */}
        <h3 className="text-2xl font-bold text-dark mb-2">{title}</h3>

        {/* Issuing Authority */}
        <p className="text-gray-700 text-lg mb-2">
          <span className="font-semibold">Issued by:</span> {issuingAuthority}
        </p>

        {/* Issue Date */}
        <p className="text-gray-600 text-md mb-4">
          <span className="font-semibold">Date:</span> {formattedDate}
        </p>

        {/* Credential ID (Optional) */}
        {credentialId && (
          <p className="text-gray-600 text-sm mb-4">
            <span className="font-semibold">Credential ID:</span> {credentialId}
          </p>
        )}
      </div>

      {/* View Certificate Button */}
      {certificateUrl && (
        <div className="mt-4">
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center"
          >
            View Certificate
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;
