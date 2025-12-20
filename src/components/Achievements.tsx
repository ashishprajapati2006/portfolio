import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const achievements = [
    {
      title: "National CyberShield Hackathon",
      organization: "MP Police",
      achievement: "National Finalist (Top 35)",
      badge: "🥉 Finalist"
    },
    {
      title: "TechJam 2.0",
      organization: "Code Rangers × Microsoft",
      achievement: "National Finalist (Top 40)",
      badge: "🏆 Finalist"
    },
    {
      title: "Arjuna 2.0",
      organization: "NIT Agartala",
      achievement: "National Finalist (Top 5)",
      badge: "🏆 Finalist"
    }
  ];

  const certifications = [
    {
      title: "Industrial Training Certificate",
      issuer: "MNIT, Jaipur",
      url: "https://github.com/ashishprajapati2006/Certificates/blob/main/MNIT_ashish_certificate.pdf"
    },
    {
      title: "Industrial Training Certificate",
      issuer: "PharmSight Research and Analytics",
      url: "https://github.com/ashishprajapati2006/Certificates/blob/main/Ashish%20Pharmsight%20certi.pdf"
    },
    {
      title: "National CyberShield Hackathon Certificate",
      issuer: "MP Police",
      url: "https://github.com/ashishprajapati2006/Certificates/blob/main/National%20Cybershield%20Hackathon%20Certi.jpg"
    },
    {
      title: "AI/ML for Geodata Analysis",
      issuer: "ISRO",
      url: "https://github.com/ashishprajapati2006/Certificates/blob/main/AI%20ML%20certificate%20isro.png"
    },
    {
      title: "Arjuna 2.0 Hackathon Certificate",
      issuer: "NIT Agartala",
      url: "https://github.com/ashishprajapati2006/Certificates/blob/main/Arjuna%202.0%20certificate.png"
    },
    {
      title: "Rajasthan Digifest X Tie Global Hackathon",
      issuer: "Rajasthan Government",
      url: "https://github.com/ashishprajapati2006/Certificates/blob/main/Rajasthan%20Digifest%20X%20Tie%20Global%20Hackathon%20certificate.jpg"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Achievements</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="shadow-card border-none bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-primary font-semibold">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground">{achievement.achievement}</p>
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      {achievement.badge}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-secondary" />
              <h3 className="text-3xl font-bold text-foreground">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="shadow-card border-none bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                    >
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
