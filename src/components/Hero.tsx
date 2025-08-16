import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="text-foreground">Kanupriya</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Tiwari
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Software Developer | React.js Enthusiast
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Building impactful solutions with modern web and blockchain technologies.
              Passionate about creating user-friendly applications and solving complex problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-card">
                <img 
                  src={profilePhoto} 
                  alt="Kanupriya Tiwari" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;