import { Mail, Phone, MapPin, Github, Linkedin, Code, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kanupriyatiwari51@gmail.com",
      href: "mailto:kanupriyatiwari51@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6269384660",
      href: "tel:+916269384660"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gwalior, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: Code,
      label: "CodeChef",
      href: "https://codechef.com",
      color: "hover:text-yellow-400"
    },
    {
      icon: Trophy,
      label: "HackerRank",
      href: "https://hackerrank.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
                I'd love to hear from you. I'm currently seeking full-time opportunities in software development.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.label} className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Find me online</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    className="border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 h-auto p-4"
                    asChild
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <social.icon className={`h-5 w-5 transition-colors duration-200 ${social.color}`} />
                      <span>{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="animate-fade-in">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card h-full">
              <div className="text-center space-y-6 h-full flex flex-col justify-center">
                <div className="p-6 bg-primary/10 rounded-full w-fit mx-auto">
                  <Mail className="h-12 w-12 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Ready to collaborate?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm actively looking for software development opportunities where I can contribute 
                    my skills in React.js, blockchain development, and modern web technologies.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full"
                    asChild
                  >
                    <a href="mailto:kanupriyatiwari51@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                    asChild
                  >
                    <a href="tel:+916269384660">
                      <Phone className="mr-2 h-5 w-5" />
                      Give me a call
                    </a>
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-muted/20 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Quick Response Guaranteed!</strong><br />
                    I typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center space-y-4">
          <p className="text-muted-foreground">
            © 2024 Kanupriya Tiwari. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;