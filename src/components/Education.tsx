import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-elegant border-none bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Bachelor of Technology in Information Technology
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-4">
                    Rajasthan Technical University
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>Kota, Rajasthan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>Expected Graduation: April 2027</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="px-4 py-2 bg-gradient-primary rounded-lg">
                        <span className="text-primary-foreground font-bold text-lg">
                          CGPA: 7.6 / 10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
