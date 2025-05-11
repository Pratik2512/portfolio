import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProjects } from './Projects';

const Index = () => {
  // Only show projects marked as featured
  const featuredProjects = allProjects.filter(project => project.featured);
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      <section className="section-padding bg-gradient-to-br from-muted/40 to-background/80 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-primary drop-shadow-lg">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Here are some of the projects I've worked on recently. Each project showcases a different aspect of my skills and interests as a developer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
            
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
                // imageUrl={project.imageUrl}
                {...(project.demoUrl !== '' && { imageUrl: project.imageUrl })}
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
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
