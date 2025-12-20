import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Problem Solver",
      description: "Passionate about solving real-world problems through code and innovation"
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Deep interest in Machine Learning, Data Science, and AI technologies"
    },
    {
      icon: Rocket,
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving skills through research"
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-none bg-card/50 backdrop-blur-sm mb-12 animate-fade-in-up">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                I'm a motivated 3rd-year IT student at Rajasthan Technical University with a strong passion for 
                <span className="text-primary font-semibold"> Machine Learning</span>, 
                <span className="text-secondary font-semibold"> Data Science</span>, and 
                <span className="text-primary font-semibold"> AI innovation</span>. 
                I'm passionate about solving real-world problems through intelligent systems, research, and continuous learning. 
                My journey includes hands-on experience in cybersecurity research, ML model development, and deploying 
                production-ready applications.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="shadow-card border-none bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
