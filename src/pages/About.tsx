import React from 'react';
import SkillsGrid from '../components/SkillsGrid';
import TechFloaters from '../components/TechFloaters';
import { ArrowRight, Calendar, MapPin, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row relative">
            {/* Left: About text */}
            <div className="mb-12 max-w-3xl z-10">
              <h1 className="text-3xl font-bold mb-6">About Me</h1>
              <p className="text-lg text-muted-foreground mb-4">
                I'm Pratik Mohite, a passionate backend engineer currently working at Sodales Solutions, where I focus on building robust systems with SAP HANA, XSODATA, XSJS services, RESTful APIs, and authentication management.
              </p>
              <p className="text-lg text-muted-foreground">
                With a strong foundation in both backend and frontend technologies, I enjoy creating scalable, efficient solutions that solve real-world problems. My experience spans from developing APIs to implementing database solutions, always keeping user needs and performance in mind.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow">
                  <Building size={18} /> Backend Engineer at Sodales Solutions
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/90 text-white font-semibold text-sm shadow">
                  <MapPin size={18} /> Pune, India
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-600/80 text-white font-semibold text-sm shadow">
                  <Calendar size={18} /> 1.5+ years experience
                </span>
              </div>
            </div>
            {/* Right: Floating tech icons */}
            <div className="hidden md:block flex-1 relative h-[340px]">
              {/* <TechFloaters /> */}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
            <SkillsGrid />
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-primary drop-shadow">Achievements</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-gradient-to-r from-yellow-200 via-yellow-50 to-yellow-100 rounded-xl shadow p-6 border border-yellow-300">
                <h3 className="text-lg font-bold text-yellow-900 mb-2">DPU Academic Topper 2024</h3>
                <p className="text-yellow-800">Awarded for outstanding academic performance at Dr. D.Y. Patil Vidyapeeth, Pune.</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-blue-200 via-blue-50 to-blue-100 rounded-xl shadow p-6 border border-blue-300">
                <h3 className="text-lg font-bold text-blue-900 mb-2">State Level Inter School Essay Writing Competition Winner 2016</h3>
                <p className="text-blue-800">Secured first place at the Maharashtra State level for essay writing organized by the Yashwnatrao Chavan Vidyapeeth Mumbai.</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-green-200 via-green-50 to-green-100 rounded-xl shadow p-6 border border-green-300">
                <h3 className="text-lg font-bold text-green-900 mb-2">Quick Heal Cyber Warrior</h3>
                <p className="text-green-800">Created cyber-awareness among 5,000+ students as part of a national initiative.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-extrabold mb-10 text-primary drop-shadow-lg">Professional Experience</h2>
            <div className="relative border-l-4 border-primary/30 pl-8 space-y-12">
              <div className="relative bg-white/80 dark:bg-card/90 p-6 rounded-xl shadow-md border border-border">
                <span className="absolute -left-5 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></span>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Backend Engineer</h3>
                    <p className="text-primary font-semibold">Sodales Solutions</p>
                  </div>
                  <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                    April 2024 - Present
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developing and maintaining RESTful APIs and testing them using Postman</li>
                  <li>Implementing authentication and authorization mechanisms</li>
                  <li>Working with SAP HANA database and XSODATA services for efficient data management and delivery</li>
                  <li>Collaborating with cross-functional teams to deliver high-quality solutions</li>
                  <li>Research on Full-text Indexing in SAP HANA</li>
                  <li>Research on IP Whitelisting in Application Layer</li>


                </ul>
              </div>
              
              <div className="p-6 rounded-lg border border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium">GCP Cloud Campus Facilitator</h3>
                    <p className="text-primary font-medium">Google Developer Student Clubs</p>
                  </div>
                  <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                  July 2023 - June 2024
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Organized GCP, Kotlin, and Flutter events to promote learning and skill development</li>
                  <li>Led 30 GDSCs to organize GDSC WOW, Pune's largest student tech event</li>
                  <li>Mentored student developers and facilitated workshops on emerging technologies</li>
                  <li>Coordinated with Google and industry professionals for collaborative initiatives</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg border border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium">GDSC Lead</h3>
                    <p className="text-primary font-medium">Google Developer Student Clubs</p>
                  </div>
                  <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                  July 2021 - June 2022
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Organized GCP, Kotlin, and Flutter events to promote learning and skill development</li>
                  <li>Led 30 GDSCs to organize GDSC WOW, Pune's largest student tech event</li>
                  <li>Mentored student developers and facilitated workshops on emerging technologies</li>
                  <li>Coordinated with Google and industry professionals for collaborative initiatives</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium">Solution Architect</h3>
                    <p className="text-primary font-medium">CollabCraze Tech Pvt. Ltd.</p>
                  </div>
                  <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                    August 2020 - May 2021
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Designed 10+ scalable, efficient, and sustainable solutions aligned with business needs</li>
                  <li>Ensured performance, security, and maintainability in the implemented technology</li>
                  <li>Works closely with developers, clients, and stakeholders to bridge technical feasibility and business goals</li>
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
