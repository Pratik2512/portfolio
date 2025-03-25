import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>
              <p className="text-muted-foreground mb-8">
                I'm always open to new opportunities, collaborations, or just a friendly chat about technology. Feel free to reach out through the form or my social links.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-md p-2.5 text-primary mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:pratikmm010@gmail.com" className="text-muted-foreground hover:text-primary">
                    pratikmm010@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-md p-2.5 text-primary mr-4">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/pratikmohite2512" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      linkedin.com/in/pratikmohite2512
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-md p-2.5 text-primary mr-4">
                    <Github size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a 
                      href="https://github.com/Pratik2512" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      github.com/Pratik2512
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-medium mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;