import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiX, SiLinkedin, SiGithub } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center relative px-4 pt-20">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 -z-10" />
      
      <div className="max-w-5xl w-full mx-auto text-center space-y-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-32 w-32 mb-6 border-4 border-primary/40 shadow-2xl animate-pulse-slow">
            <AvatarImage src="/avatar.png" alt="Pratik Mohite" />
            <AvatarFallback className="text-2xl font-bold">PM</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance drop-shadow-lg">
            Pratik Mohite
          </h1>
          <span className="mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold shadow">
            Building scalable solutions for the future
          </span>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mt-4">
            Software Engineer | Backend Developer | Cloud Enthusiast
          </p>
        </div>
        
        <div className="h-px w-24 bg-border mx-auto"></div>
        
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          Experienced Backend Engineer with expertise in Node.js, Express, MongoDB, and Cloud technologies. 
          Passionate about building efficient, scalable solutions that solve real-world problems.
          Embracing the power of AI and Blockchain to create innovative products.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="https://miniature-pot-122.notion.site/ebd/1f2271645b2b80648d8ce96ad254a23a" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 hover:scale-105 shadow-lg transition-all duration-200"
          >
            <Download size={18} />
            Resume
          </a>
          
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-primary bg-secondary hover:bg-primary/20 hover:border-secondary hover:scale-105 transition-all duration-200"
          >
              Learn More
            <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="flex justify-center items-center gap-8 pt-8">
          
          <a
            href="https://github.com/Pratik2512"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 bg-muted/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pratikmohite2512/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 bg-muted/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={24} />
          </a>
          <a
            href="mailto:pratikmm010@gmail.com"
            className="rounded-full p-2.5 bg-muted/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            aria-label="Email"
          >
            <HiOutlineMail size={24} />
          </a>
          <a
            href="https://x.com/0xPratik010"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 bg-muted/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            aria-label="X"
          >
            <SiX size={24} />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1.5 h-3 bg-muted-foreground/30 rounded-full mt-1.5 animate-[slide-up_1.5s_ease-in-out_infinite_alternate]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
