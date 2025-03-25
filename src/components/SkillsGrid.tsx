
import React from 'react';
import { 
  Database, Server, Cloud, Code, GitBranch, Globe, 
  BarChart, Users, MessageSquare, LucideIcon 
} from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'Backend Development',
    icon: Server,
    description: 'XSODATA, Node.js, Express.js, RESTful APIs',
  },
  {
    name: 'Database Management',
    icon: Database,
    description: 'SAP HANA, SQL, MongoDB, PostgreSQL',
  },
  {
    name: 'Cloud Services',
    icon: Cloud,
    description: 'GCP, AWS, Deployment, CI/CD, Docker, Jenkins',
  },
  {
    name: 'Frontend',
    icon: Code,
    description: 'React.js, Responsive Design',
  },
  {
    name: 'Version Control',
    icon: GitBranch,
    description: 'Git, GitHub, Collaborative Development',
  },
  {
    name: 'Web Technologies',
    icon: Globe,
    description: 'HTML5, CSS3, JavaScript',
  },
  {
    name: 'Blockchain',
    icon: BarChart,
    description: 'Smart Contracts, Solidity',
  },
  {
    name: 'Team Leadership',
    icon: Users,
    description: 'Project Management, Team Coordination',
  },
  {
    name: 'Communication',
    icon: MessageSquare,
    description: 'Technical Documentation, Teaching, Public Speaking',
  },
];

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {skills.map((skill, index) => (
        <div 
          key={skill.name} 
          className="p-6 rounded-lg glass-card dark:glass-card-dark hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 rounded-md p-2.5 text-primary">
              <skill.icon size={24} />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">{skill.name}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
