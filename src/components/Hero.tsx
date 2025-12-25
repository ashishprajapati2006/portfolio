import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Disable mouse tracking on mobile for performance
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    // Throttle mouse movement for better performance
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile]);

  const handleDownloadResume = () => {
    window.open('https://github.com/ashishprajapati2006/Certificates/blob/main/Ashish%20Resume.pdf', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--secondary)/0.15),transparent_50%)]" />
      </div>

      {/* Floating geometric shapes - disabled on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
            style={{ 
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              animationDelay: '1s'
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Profile Image - Left Side */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative group perspective-1000">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Image container with 3D transform - disabled on mobile */}
              <div 
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl transform-3d transition-transform duration-500 group-hover:scale-105"
                style={!isMobile ? {
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                } : undefined}
              >
                <img
                  src="/images/ashish-photo.jpg"
                  alt="Ashish Prajapati"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border-2 border-primary rounded-full px-4 py-2 shadow-lg animate-float">
                <div className="text-xs font-semibold text-primary">Available for Work</div>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-foreground">Ashish Prajapati</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient text-3xl md:text-4xl lg:text-5xl mt-2">
                IT Student | ML & AI Enthusiast
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Motivated 3rd-year IT student with strong interest in Machine Learning, Data Science, and AI innovation
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={handleDownloadResume}
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 glow-effect"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact}
                className="group border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left card-3d p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Hackathons</div>
              </div>
              <div className="text-center lg:text-left card-3d p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-xs text-muted-foreground">Internships</div>
              </div>
              <div className="text-center lg:text-left card-3d p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
