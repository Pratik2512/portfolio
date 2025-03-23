
import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: 'Sharing App',
    description: 'A platform for sharing educational content, allowing students and educators to collaborate effectively.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    demoUrl: 'https://tybca.netlify.app',
    githubUrl: 'https://github.com/yourusername/sharing-app',
  },
  {
    title: 'CollabBridge Tech',
    description: 'A client project built for seamless business collaboration, featuring real-time communication and data sharing.',
    technologies: ['React', 'Node.js', 'WebSockets', 'AWS'],
    demoUrl: 'https://example.com',
  },
  {
    title: 'Community Chat App',
    description: 'A real-time chat application for communities, with features like channels, direct messaging, and file sharing.',
    technologies: ['Socket.io', 'Express', 'MongoDB', 'React'],
    demoUrl: 'https://collabcraze.vercel.app',
    githubUrl: 'https://github.com/yourusername/community-chat',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on recently. Take a look at what I've built.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out.
            </p>
          </div>
          
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
