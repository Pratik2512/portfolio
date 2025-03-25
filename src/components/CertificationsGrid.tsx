
import React from 'react';
import CertificationCard from './CertificationCard';

const certifications = [
  {
    name: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: 'October 2022',
    // verificationUrl: 'https://www.credential.net/example',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'November 2022',
    // verificationUrl: 'https://aws.amazon.com/verification',
  },
  {
    name: 'React Developer Certification',
    issuer: 'LinkedIn Learning',
    date: 'July 2021',
    // verificationUrl: 'https://confirm.udacity.com/example',
  },
  {
    name: 'MongoDB Database Administrator',
    issuer: 'MongoDB University',
    date: 'March 2022',
    verificationUrl: 'https://university.mongodb.com/certification/verify',
  },
  {
    name: 'Node.js Application Developer',
    issuer: 'OpenJS Foundation',
    date: 'September 2021',
    verificationUrl: 'https://openjsf.org/certification-verification',
  },
  {
    name: 'Professional Data Engineer',
    issuer: 'Google Cloud',
    date: 'May 2023',
    verificationUrl: 'https://www.credential.net/example2',
  },
];

const CertificationsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert) => (
        <CertificationCard
          key={cert.name}
          name={cert.name}
          issuer={cert.issuer}
          date={cert.date}
          verificationUrl={cert.verificationUrl}
        />
      ))}
    </div>
  );
};

export default CertificationsGrid;
