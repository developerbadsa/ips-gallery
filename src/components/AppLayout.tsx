import React from 'react';
import Hero from './Hero';
import Packages from './Packages';
import ContactForm from './ContactForm';
import WhatsAppFloat from './WhatsAppFloat';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Packages />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default AppLayout;