import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C/C++", "Java", "HTML", "CSS"],
      color: "bg-primary"
    },
    {
      title: "Technologies & Tools",
      skills: [
        "Git/Github",
        "Docker",
        "Windows",
        "Linux",
        "Kali",
        "Streamlit",
        "Flask",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "VS Code",
        "Colab"
      ],
      color: "bg-secondary"
    },
    {
      title: "Core Competency",
      skills: ["Machine Learning", "Artificial Intelligence"],
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="shadow-card border-none bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`${category.color} text-white hover:opacity-90 transition-opacity px-4 py-2 text-sm font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
