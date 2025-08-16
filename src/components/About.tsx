import { GraduationCap, Code, Shield, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const interests = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating responsive and interactive web applications with modern frameworks"
    },
    {
      icon: Shield,
      title: "Data Analytics",
      description: "Analyzing data for meaningful insights and data-driven decision making"
    },
    {
      icon: Brain,
      title: "Modern AI",
      description: "Exploring AI technologies and integrating them into practical solutions"
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
            I am a Computer Science graduate passionate about creating user-friendly web applications, analyzing data for meaningful insights, and exploring modern AI technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  <p className="text-muted-foreground">ITM University, Gwalior (Graduate)</p>
                  <p className="text-sm text-primary font-medium">CGPA: 8.59</p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a Computer Science graduate from ITM University Gwalior, I am passionate about creating user-friendly web applications, analyzing data for meaningful insights, and exploring modern AI technologies. I enjoy solving problems, learning continuously, and applying my skills to build innovative solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey includes participation in various hackathons and competitions, winning several awards for innovative solutions. I believe in the power of technology to make a positive impact on people's lives through thoughtful design and implementation.
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