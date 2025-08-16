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
      title: "Frameworks",
      skills: ["React.js", "Next.js", "Vite", "CSS"],
      color: "text-green-400"
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "VS Code", "GitHub"],
      color: "text-purple-400"
    },
    {
      icon: Database,
      title: "Other Technologies",
      skills: ["Django", "IPFS", "Blockchain", "Smart Contracts"],
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
            A comprehensive set of technologies and tools I use to bring ideas to life
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

        {/* Skill Progress Bars for Primary Skills */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "React.js", level: 90 },
              { skill: "JavaScript", level: 85 },
              { skill: "Python", level: 80 },
              { skill: "HTML/CSS", level: 95 },
              { skill: "Git/GitHub", level: 85 },
              { skill: "Blockchain", level: 75 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-primary font-medium">{item.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;