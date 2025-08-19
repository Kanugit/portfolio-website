import { ExternalLink, Github, Shield, Award, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Decentralized eVault (SIH Project)",
      description: "Secure digital vault system built with React, Django, and MongoDB, improving efficiency in document management. Winner of Smart India Hackathon 2023 with focus on user security and data integrity.",
      icon: Shield,
      technologies: ["React", "Django", "MongoDB", "Authentication", "Security"],
      github: "https://github.com/Pranshu12354/Decentralized-Evault/tree/main/Evault-master",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Certificate Verification System",
      description: "Web application for certificate validation, showcasing skills in secure application design and user authentication systems. Built with modern web technologies for reliable verification.",
      icon: Award,
      technologies: ["React", "Node.js", "Security", "Authentication", "Database"],
      github: "https://github.com/Kanugit/Blockchain-Certificate-Generation-and-Validation-System",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Anti-Assignment Piracy System",
      description: "Django + Python project to detect plagiarism in assignments, highlighting data analysis and automation capabilities. Uses advanced algorithms for content comparison and similarity detection.",
      icon: Search,
      technologies: ["Django", "Python", "Data Analysis", "Automation", "Algorithms"],
      github: "https://github.com/Kanugit/AntiAssignment-Piracy-System-/tree/main/mproject/antiassignment",
      demo: "https://demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise in web development, data analytics, and innovative problem-solving solutions
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group relative overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 
                ${project.featured ? 'lg:grid-cols-3' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Project Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="bg-muted/20 border-primary/20 text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6 pt-6 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />

              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/Kanugit" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
