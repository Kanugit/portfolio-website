import { Trophy, Award, Medal, Star, FileText, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon Winner 2023",
      description: "First place for innovative Blockchain eVault solution",
      category: "Hackathon",
      highlight: true,
      color: "text-yellow-400"
    },
    {
      icon: Medal,
      title: "Kriyeta 2.0 - Second Runner-up",
      description: "National Level Hackathon recognition",
      category: "Competition",
      highlight: true,
      color: "text-orange-400"
    },
    {
      icon: FileText,
      title: "Patent Filed",
      description: "Blockchain eVault - Intellectual Property Protection",
      category: "Innovation",
      highlight: true,
      color: "text-blue-400"
    },
    {
      icon: Award,
      title: "IDE Bootcamp Best Idea Pitching",
      description: "Outstanding presentation and innovation",
      category: "Presentation",
      highlight: false,
      color: "text-green-400"
    },
    {
      icon: Code2,
      title: "CodeChef Highest Rating: 915",
      description: "Competitive programming achievement",
      category: "Programming",
      highlight: false,
      color: "text-purple-400"
    }
  ];

  const certifications = [
    {
      title: "CAD - ServiceNow",
      issuer: "ServiceNow",
      description: "Certified Application Developer",
      link:""
    },
    {
      title: "Python (3 Stars)",
      issuer: "HackerRank",
      description: "Advanced Python programming skills",
      link:""
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      description: "Fundamental problem-solving techniques",
      link:""
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      description: "Comprehensive understanding of cloud computing concepts and AWS services.",
      link: ""
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Achievements & <span className="bg-gradient-primary bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition of excellence in hackathons, competitions, and professional development
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className={`group relative overflow-hidden p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 ${
                achievement.highlight ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="space-y-4">
                {/* Icon and Category */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                  </div>
                  <Badge 
                    variant="outline"
                    className={`${achievement.highlight ? 'bg-primary/10 text-primary border-primary/20' : 'bg-muted/20'}`}
                  >
                    {achievement.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Highlight Indicator */}
                {achievement.highlight && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-primary opacity-80" />
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and skill validation through industry-recognized certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in"
                style={{
                  animationDelay: `${(index + achievements.length) * 0.1}s`
                }}
              >
                <div className="text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-primary text-sm font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5+", label: "Awards Won", icon: Trophy },
            { number: "10+", label: "Projects Completed", icon: Code2 },
            { number: "3+", label: "Certifications", icon: Award },
            { number: "915", label: "CodeChef Rating", icon: Star }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center space-y-2 animate-fade-in"
              style={{
                animationDelay: `${(index + 10) * 0.1}s`
              }}
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;