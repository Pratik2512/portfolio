import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export const allProjects = [
  {
    title: 'SEO Inspector',
    description: 'A real-time SEO Score Tracker and Analysis Tool.',
    technologies: ['Express','PostgreSQL', 'Neon DB', 'React Charts', 'React', 'Replit', 'Cursor'],
    demoUrl: 'https://seoinspector.onrender.com',
    githubUrl: 'https://github.com/Pratik2512/SeoInspector',
    imageUrl: 'https://iad.microlink.io/_70VWmZ1L3f5F6IsdmnStFmBrdKYGoWxv07gz87tGLgJBOZV7QU2dPqqrEYZ5F-I7MXK1_Ie_bE4qZ1NPO2XGw.png',
    featured: true,
    category: 'fullstack',
  },
  {
    title: 'CollabCraze Tech',
    description: 'A client project built for seamless business collaboration, featuring real-time communication and data sharing.',
    technologies: ['React', 'Node.js', 'WebSockets', 'AWS'],
    demoUrl: 'https://collabcraze1.vercel.app',
    githubUrl: 'https://github.com/Pratik2512/collabbridge-tech',
    imageUrl: 'https://iad.microlink.io/cfVrv7nXNelew2uBm5AIzFlPsbjCHDklI4UOL2qgcZv-yCrXQgrxELVU5qVquUwrGGm3s5PJunK4XyVFZIezQQ.png',
    featured: true,
    category: 'fullstack',
  },
  {
    title: 'Community Chat App',
    description: 'A real-time chat application for communities, with features like channels, direct messaging, and file sharing.',
    technologies: ['Socket.io', 'Express', 'MongoDB', 'React'],
    demoUrl: 'https://collabcraze.vercel.app',
    githubUrl: 'https://github.com/Pratik2512/CommunityChat',
    imageUrl: 'https://iad.microlink.io/ikP9_blvz0QesdaUzdUQV297x_IvOdO9W7JOFFNBc1c3ibeXFoYBOCo26l_EeJdDh5FHyGr8nbCuLRJduD7z7A.png',
    featured: true,
    category: 'fullstack',
  },
  {
    title: 'Sharing App',
    description: 'A platform for sharing educational content, allowing students and educators to collaborate effectively.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    demoUrl: 'https://tybca.netlify.app',
    githubUrl: 'https://github.com/Pratik2512/SharingSite',
    imageUrl: 'https://iad.microlink.io/nD50IyesCZZ7rr1UlruMqrBMBHXzuIpMPiow2zjTuIGkHTvuFjwENnK0JZd1312sZeCW_5xoJ9deYLGxoy_Dvw.png',
    featured: true,
    category: 'frontend',
  },
  {
    title: 'Project Tracker',
    description: 'An Enterprise-level Project Management Tool with Analytics and Report Generation along with Gen-AI Integration.',
    technologies: ['Express', 'Neon DB', 'React Charts', 'React', 'Replit', 'OpenAI API', 'Hugging Face API', 'Axios'],
    demoUrl: 'https://projectpilotai.onrender.com/',
    githubUrl: 'https://github.com/0xpratik010/ProjectPilotAI',
    imageUrl: 'https://iad.microlink.io/L5pQt_g1cHHVCK5Dazi4tLrmM1fXHqOsb3rUraeGcjH-CZcYBcAqPbaZZ5VxArylHjKIqgM5kb9PXPXcDEoNWw.png',
    featured: false,
    category: 'fullstack',
  },
  // {
  //   title: 'API Gateway',
  //   description: 'A centralized API gateway for managing service requests, handling authentication, and load balancing.',
  //   technologies: ['Node.js', 'Express', 'Redis', 'JWT'],
  //   githubUrl: 'https://github.com/yourusername/api-gateway',
  //   category: 'backend',
  // },
  // {
  //   title: 'Cloud Data Pipeline',
  //   description: 'An ETL pipeline for processing and analyzing large datasets in the cloud.',
  //   technologies: ['Python', 'GCP', 'BigQuery', 'Dataflow'],
  //   category: 'backend',
  // },
  // {
  //   title: 'Authentication Service',
  //   description: 'A secure authentication and authorization service with multi-factor authentication.',
  //   technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
  //   githubUrl: 'https://github.com/yourusername/auth-service',
  //   category: 'backend',
  // },
  // {
  //   title: 'Portfolio Website',
  //   description: 'A responsive personal portfolio website to showcase projects and skills.',
  //   technologies: ['React', 'Tailwind CSS', 'Vite'],
  //   demoUrl: '#',
  //   githubUrl: 'https://github.com/yourusername/portfolio',
  //   category: 'frontend',
  // },
  // {
  //   title: 'Weather Dashboard',
  //   description: 'A weather dashboard with location search, forecasts, and interactive visualizations.',
  //   technologies: ['React', 'OpenWeather API', 'Chart.js'],
  //   demoUrl: 'https://example.com/weather',
  //   githubUrl: 'https://github.com/yourusername/weather-app',
  //   category: 'frontend',
  // },
];

type CategoryType = 'all' | 'frontend' | 'backend' | 'fullstack';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  // State to store screenshot URLs fetched from Microlink
  const [microlinkScreenshots, setMicrolinkScreenshots] = useState<{ [title: string]: string }>({});

  useEffect(() => {
    // Fetch screenshots for projects with demoUrl
    const fetchScreenshots = async () => {
      const updates: { [title: string]: string } = {};
      await Promise.all(
        allProjects.map(async (project) => {
          if (project.demoUrl) {
            try {
              const res = await fetch(`https://api.microlink.io/?url=$project.demoUrl&screenshot=true`);
              const json = await res.json();
              if (json?.status === 'success' && json?.data?.screenshot?.url) {
                updates[project.title] = json.data.screenshot.url;
              }
            } catch (e) {
              // Ignore errors, fallback will be used
            }
          }
        })
      );
      setMicrolinkScreenshots(updates);
    };
    fetchScreenshots();
  }, []);

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
            {filteredProjects.map((project) => {
              // Use Microlink screenshot if available, else fallback to static image or empty image
              const screenshotUrl = microlinkScreenshots[project.title] || project.imageUrl || '/empty-project.png';
              if(project.demoUrl == ''){
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    demoUrl={project.demoUrl}
                    githubUrl={project.githubUrl}
                    featured={project.featured}
                  />
                )
              }
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                  imageUrl={project.imageUrl}
                  featured={project.featured}
                />
              );
            })}
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
