// client/src/pages/ContactPage.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-dark text-center mb-12">Contact Me</h2>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
