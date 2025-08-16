import { Code2, Database, Wrench, Monitor } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "JavaScript", "HTML5", "SQL"],
      color: "text-blue-400"
    },
    {
      icon: Monitor,
      title: "Frameworks/Tools",
      skills: ["ReactJS", "Next.js", "Vite", "CSS", "Git"],
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: ["Data Analytics", "SQL", "Python Libraries"],
      color: "text-purple-400"
    },
    {
      icon: Wrench,
      title: "Modern Technologies",
      skills: ["AI Fundamentals", "Cloud Computing", "API Integration"],
      color: "text-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technologies and tools for web development, data analytics, and modern AI applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-2 bg-muted/50 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;