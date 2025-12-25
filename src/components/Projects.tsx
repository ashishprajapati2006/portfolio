import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Multiple Disease Prediction System",
      description: "Multi-disease prediction system for Diabetes, Heart Disease, and Parkinson's using SVM, integrated into one Streamlit web app with user-friendly UI",
      technologies: ["Python", "SVM", "Streamlit"],
      github: "https://github.com/ashishprajapati2006/Multiple-disease-prediction-system",
      demo: "https://multiple-disease-prediction-system-j33cjgvi47vrzknqyigkag.streamlit.app/",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/7dc6801a-dc81-4645-bd1b-0df2f9868765.jpg"
    },
    {
      title: "Forest Fire Weather Index (FWI) Prediction System",
      description: "Ridge Regression model to predict forest fire risk with interactive Streamlit app for real-time predictions, deployed on Streamlit Cloud",
      technologies: ["Python", "Ridge Regression", "Streamlit"],
      github: "https://github.com/ashishprajapati2006/Fire-Weather-Index",
      demo: "https://fire-weather-index.streamlit.app/",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/f3eb4d6d-6e99-4955-bd3b-d845c7064444.jpg"
    },
    {
      title: "Student Performance Prediction System",
      description: "ML models to predict student exam scores across multiple algorithms, with Flask and Streamlit apps for testing and demonstration",
      technologies: ["Python", "Machine Learning", "Flask", "Streamlit"],
      github: "https://github.com/ashishprajapati2006/student-performance-flask",
      demo: "https://student-performance-flask.onrender.com/predictdata",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/f1f082f0-8e13-4fb6-81f2-1f39c80b054c.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-3d shadow-card border-none bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-cover bg-center relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
