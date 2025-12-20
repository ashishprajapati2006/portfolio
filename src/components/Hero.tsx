import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(https://miaoda-site-img.s3cdn.medo.dev/images/9ee9fa65-ef12-497e-ab8c-93656af671e9.jpg)` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-70" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-secondary font-semibold tracking-wide uppercase text-sm">
                IT Student | ML & AI Enthusiast
              </p>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Ashish
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Prajapati
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Motivated 3rd-year IT student with strong interest in Machine Learning, Data Science, and AI innovation
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-glow"
                asChild
              >
                <a href="#resume" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">3×</div>
                <div className="text-sm text-muted-foreground">Hackathon Finalist</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">2+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">ML Projects</div>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative lg:flex justify-center hidden animate-scale-in">
            <div className="relative">
              <div 
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant animate-float bg-cover bg-center"
                style={{ backgroundImage: `url(https://miaoda-site-img.s3cdn.medo.dev/images/05cbde20-af78-4563-b964-5382de513fb0.jpg)` }}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl font-bold text-secondary-foreground">ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
