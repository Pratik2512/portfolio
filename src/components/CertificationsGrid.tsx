
import React from 'react';
import CertificationCard from './CertificationCard';

const certifications = [
  {
    name: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: 'November 2022',
    // verificationUrl: 'https://www.credential.net/example',
  },
  {
    name: 'React Essential Thinking',
    issuer: 'LinkedIn Learning',
    date: 'March 2023',
    // verificationUrl: 'https://confirm.udacity.com/example',
  },
  {
    name: 'Foundations of Cybersecurity',
    issuer: 'Google',
    date: 'June 2024',
    // verificationUrl: 'https://aws.amazon.com/verification',
  },
  {
    name: 'Blockchain Basics and Introduction to Smart Contracts',
    issuer: 'Cyfrin Updraft',
    date: 'October 2024',
    // verificationUrl: 'https://university.mongodb.com/certification/verify',
  },
  {
    name: 'Python Data Science Toolbox',
    issuer: 'DataCamp',
    date: 'January 2021',
    // verificationUrl: 'https://openjsf.org/certification-verification',
  },
  {
    name: 'C for Everyone: Programming Fundamentals',
    issuer: 'Coursera',
    date: 'June 2021',
    // verificationUrl: 'https://www.credential.net/example2',
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
