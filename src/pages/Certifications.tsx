
import React from 'react';
import CertificationsGrid from '../components/CertificationsGrid';

const Certifications = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold mb-3">Certifications</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I believe in continuous learning and professional development.
              Here are the certifications I've earned throughout my career.
            </p>
          </div>
          
          <CertificationsGrid />
          
          <div className="mt-16 p-6 rounded-lg border border-border bg-card text-center">
            <h2 className="text-xl font-medium mb-3">Always Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm constantly expanding my knowledge and skills. Currently, I'm working toward additional certifications in cloud architecture and advanced database management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
