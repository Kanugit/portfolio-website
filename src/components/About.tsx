import { GraduationCap, Code, Shield, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profilePhoto from '@/assets/kanupriya-profile.jpg';

const About = () => {
  const interests = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive web applications"
    },
    {
      icon: Shield,
      title: "Blockchain Technology",
      description: "Building decentralized solutions and smart contracts"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analyzing complex problems and developing efficient solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software developer and final year B.Tech CSE student with a strong foundation in modern web technologies and blockchain development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <Avatar className="w-64 h-64 shadow-glow">
              <AvatarImage src={profilePhoto} alt="Kanupriya Tiwari" className="object-cover" />
              <AvatarFallback className="text-4xl">KT</AvatarFallback>
            </Avatar>
          </div>

          {/* Education & Bio */}
          <div className="space-y-8 animate-slide-in">
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">B.Tech Computer Science & Engineering</h4>
                  <p className="text-muted-foreground">ITM University, Gwalior</p>
                  <p className="text-sm text-primary font-medium">CGPA: 8.59</p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a final year B.Tech CSE student at ITM University Gwalior, I've been passionate about technology and innovation. My journey in software development has led me to specialize in frontend technologies, particularly React.js, while also exploring the fascinating world of blockchain technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and have participated in various hackathons and competitions, winning several awards for innovative solutions. My goal is to create technology that makes a positive impact on people's lives.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold">Areas of Interest</h3>
            <div className="space-y-4">
              {interests.map((interest) => (
                <Card key={interest.title} className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <interest.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{interest.title}</h4>
                      <p className="text-muted-foreground">{interest.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;