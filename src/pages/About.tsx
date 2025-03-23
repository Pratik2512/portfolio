import React from 'react';
import SkillsGrid from '../components/SkillsGrid';
import { ArrowRight, Calendar, MapPin, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground mb-4">
              I'm Pratik Mohite, a passionate backend engineer currently working at Sodales Solutions, where I focus on building robust systems with SAP HANA, XSODATA, XSJS services, RESTful APIs, and authentication management.
            </p>
            <p className="text-lg text-muted-foreground">
              With a strong foundation in both backend and frontend technologies, I enjoy creating scalable, efficient solutions that solve real-world problems. My experience spans from developing APIs to implementing database solutions, always keeping user needs and performance in mind.
            </p>
            
            <div className="mt-6 space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Building size={18} className="mr-2" />
                <span>Backend Engineer at Sodales Solutions</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Based in Pune, India</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>3+ years of professional experience</span>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
            <SkillsGrid />
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
            
            <div className="space-y-8">
              <div className="p-6 rounded-lg border border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium">Backend Engineer</h3>
                    <p className="text-primary font-medium">Sodales Solutions</p>
                  </div>
                  <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                    June 2021 - Present
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developing and maintaining RESTful APIs and XSJS services</li>
                  <li>Implementing authentication and authorization mechanisms</li>
                  <li>Working with SAP HANA and XSODATA for efficient data management</li>
                  <li>Collaborating with cross-functional teams to deliver high-quality solutions</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium">GDSC Lead</h3>
                    <p className="text-primary font-medium">Google Developer Student Clubs</p>
                  </div>
                  <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                    August 2020 - May 2021
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Organized GCP, Kotlin, and Flutter events to promote learning and skill development</li>
                  <li>Led 30 GDSCs to organize GDSC WOW, Pune's largest student tech event</li>
                  <li>Mentored student developers and facilitated workshops on emerging technologies</li>
                  <li>Coordinated with Google and industry professionals for collaborative initiatives</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View My Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
