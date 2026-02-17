import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Multi Language Translator",
      description: "Combines fine-tuned mBART (Transformer) and custom LSTM Seq2Seq for accurate and flexible translation. Transfer learning implementation with pre-trained mBART for domain-specific translation, Flask and Streamlit apps with Hugging Face integration",
      technologies: ["mBART", "Transformer", "LSTM", "Flask", "Streamlit", "Hugging Face"],
      github: "https://github.com/ashishprajapati2006/Multi-Language-Translator",
      demo: "https://multi-language-translator.streamlit.app/",
      image: "/img/Multi Language Translator.jpeg"
    },
    {
      title: "Face Mask Recognizer",
      description: "CNN-based face mask detection model for images and live video. TensorFlow/Keras CNN with OpenCV, delivered via Streamlit/Flask. Supports single-image, group-photo, and webcam inference",
      technologies: ["CNN", "TensorFlow", "Keras", "OpenCV", "Streamlit", "Flask"],
      github: "https://github.com/ashishprajapati2006/Face-Mask-recognition",
      demo: "https://face-mask-recognition.streamlit.app/",
      image: "/img/FACE MASK RECOGNIZER.jpeg"
    },
    {
      title: "Movie Sentiment Analysis System",
      description: "Built a sentiment analyzer using SimpleRNN deep learning model trained on IMDB dataset. Implemented preprocessing pipeline with word embedding (128-dim), sequence padding, and binary classification with sigmoid activation",
      technologies: ["SimpleRNN", "Deep Learning", "Python", "IMDB", "Streamlit"],
      github: "https://github.com/ashishprajapati2006/Movie-Sentiment-Analyzer",
      demo: "https://movie-sentiment-analyzer-app.streamlit.app/",
      image: "/img/MOVIE SENTIMENT ANALYSIS SYSTEM.jpeg"
    },
    {
      title: "Multiple Disease Prediction System",
      description: "Multi-disease prediction system for Diabetes, Heart Disease, and Parkinson's using SVM, integrated into one Streamlit web app with user-friendly UI",
      technologies: ["Python", "SVM", "Streamlit"],
      github: "https://github.com/ashishprajapati2006/Multiple-disease-prediction-system",
      demo: "https://multiple-disease-prediction-system-j33cjgvi47vrzknqyigkag.streamlit.app/",
      image: "/img/multiple disease prediction systeam.jpeg"
    },
    {
      title: "Forest Fire Weather Index (FWI) Prediction System",
      description: "Ridge Regression model to predict forest fire risk with interactive Streamlit app for real-time predictions, deployed on Streamlit Cloud",
      technologies: ["Python", "Ridge Regression", "Streamlit"],
      github: "https://github.com/ashishprajapati2006/Fire-Weather-Index",
      demo: "https://fire-weather-index.streamlit.app/",
      image: "/img/Forest Fire Weather Index (FWI) Prediction System.jpeg"
    },
    {
      title: "Student Performance Prediction System",
      description: "ML models to predict student exam scores across multiple algorithms, with Flask and Streamlit apps for testing and demonstration",
      technologies: ["Python", "Machine Learning", "Flask", "Streamlit"],
      github: "https://github.com/ashishprajapati2006/student-performance-flask",
      demo: "https://student-exam.streamlit.app/",
      image: "/img/Student Performance Prediction System.jpeg"
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
