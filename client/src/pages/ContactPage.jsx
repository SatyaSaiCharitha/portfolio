// client/src/pages/ContactPage.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-blue-100 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          📬 Contact Me
        </motion.h2>

        {/* Form Container */}
        <motion.div
          className="bg-white/70 backdrop-blur-md shadow-2xl border border-slate-200 rounded-2xl p-8 sm:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
