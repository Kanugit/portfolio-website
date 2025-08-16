import { Briefcase, Calendar, MapPin, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experience = {
    role: "Software Developer Intern",
    company: "Information Data Systems",
    duration: "August - October 2024",
    location: "Remote",
    description: [
      "Developed and maintained the company's official website using React.js",
      "Led migration from legacy website architecture to modern React-based solution",
      "Implemented responsive UI components ensuring cross-browser compatibility",
      "Collaborated with design team to translate mockups into functional interfaces",
      "Optimized website performance resulting in improved loading times"
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Responsive Design"]
  };

  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gaining practical experience in software development and contributing to real-world projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{experience.role}</h3>
                    <p className="text-xl text-primary font-semibold">{experience.company}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col lg:items-end gap-2 mt-4 lg:mt-0">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-3">
                  {experience.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="mt-8 p-6 bg-muted/20 border border-primary/20 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Impact & Learning</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This internship provided valuable hands-on experience in modern web development practices, 
                    team collaboration, and project management. I gained deeper insights into the software 
                    development lifecycle and enhanced my technical skills in React.js ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Future Goals Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-semibold">Looking Forward</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seeking opportunities to contribute to innovative projects and continue growing as a 
              software developer. Open to full-time positions where I can apply my skills in 
              modern web technologies and blockchain development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;