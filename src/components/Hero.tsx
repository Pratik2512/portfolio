
import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center relative px-4 pt-20">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 -z-10" />
      
      <div className="max-w-5xl w-full mx-auto text-center space-y-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-32 w-32 mb-6 border-4 border-primary/20 shadow-lg">
            <AvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80" alt="Pratik Mohite" />
            <AvatarFallback className="text-2xl font-bold">PM</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Pratik Mohite
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mt-2">
            Software Engineer | Backend Developer | Tech Enthusiast
          </p>
        </div>
        
        <div className="h-px w-24 bg-border mx-auto"></div>
        
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          Experienced backend engineer with expertise in Node.js, Express, MongoDB, and cloud technologies. 
          Passionate about building efficient, scalable solutions that solve real-world problems.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Download size={18} />
            Resume
          </a>
          
          <a 
            href="/about" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-secondary hover:bg-secondary/80 transition-colors"
          >
            Learn More
            <ArrowRight size={18} />
          </a>
        </div>
        
        <div className="flex justify-center items-center gap-6 pt-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 bg-muted/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 bg-muted/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="rounded-full p-2.5 bg-muted/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
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
