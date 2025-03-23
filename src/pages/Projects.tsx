
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const allProjects = [
  {
    title: 'Sharing App',
    description: 'A platform for sharing educational content, allowing students and educators to collaborate effectively.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    demoUrl: 'https://tybca.netlify.app',
    githubUrl: 'https://github.com/yourusername/sharing-app',
    category: 'fullstack',
  },
  {
    title: 'CollabBridge Tech',
    description: 'A client project built for seamless business collaboration, featuring real-time communication and data sharing.',
    technologies: ['React', 'Node.js', 'WebSockets', 'AWS'],
    demoUrl: 'https://example.com',
    category: 'fullstack',
  },
  {
    title: 'Community Chat App',
    description: 'A real-time chat application for communities, with features like channels, direct messaging, and file sharing.',
    technologies: ['Socket.io', 'Express', 'MongoDB', 'React'],
    demoUrl: 'https://collabcraze.vercel.app',
    githubUrl: 'https://github.com/yourusername/community-chat',
    category: 'fullstack',
  },
  {
    title: 'API Gateway',
    description: 'A centralized API gateway for managing service requests, handling authentication, and load balancing.',
    technologies: ['Node.js', 'Express', 'Redis', 'JWT'],
    githubUrl: 'https://github.com/yourusername/api-gateway',
    category: 'backend',
  },
  {
    title: 'Cloud Data Pipeline',
    description: 'An ETL pipeline for processing and analyzing large datasets in the cloud.',
    technologies: ['Python', 'GCP', 'BigQuery', 'Dataflow'],
    category: 'backend',
  },
  {
    title: 'Authentication Service',
    description: 'A secure authentication and authorization service with multi-factor authentication.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/yourusername/auth-service',
    category: 'backend',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website to showcase projects and skills.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    demoUrl: '#',
    githubUrl: 'https://github.com/yourusername/portfolio',
    category: 'frontend',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard with location search, forecasts, and interactive visualizations.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    demoUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/yourusername/weather-app',
    category: 'frontend',
  },
];

type CategoryType = 'all' | 'frontend' | 'backend' | 'fullstack';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);
  
  const categories: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
  ];
  
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold mb-3">My Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's a collection of projects I've worked on throughout my career.
              Each represents different challenges and solutions in the world of software development.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
