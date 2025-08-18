import { Award, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "CAD - ServiceNow",
      issuer: "ServiceNow",
      description: "Certified Application Developer with expertise in ServiceNow platform development and customization.",
      link: "#"
    },
    {
      title: "Python (3 Stars)",
      issuer: "HackerRank",
      description: "Advanced Python programming skills certified through comprehensive coding challenges.",
      link: "#"
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      description: "Fundamental problem-solving techniques and algorithmic thinking certification.",
      link: "#"
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      description: "Comprehensive understanding of cloud computing concepts and AWS services.",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and credentials that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Certifications;