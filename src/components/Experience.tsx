import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Malaviya National Institute of Technology (MNIT), Jaipur",
      role: "Research Intern",
      duration: "June 2025 – July 2025",
      responsibilities: [
        "Conducted research on reverse engineering and exploit analysis in cybersecurity environment",
        "Studied real-world Metasploit exploits (EternalBlue MS17-010, VSFTPD v2.3.4 backdoor, Samba Username Map Script exploit)",
        "Hands-on experience using Kali Linux, Metasploit, and Meterpreter shell for penetration testing",
        "Strengthened knowledge of system exploitation, payload execution, and defense mechanisms"
      ]
    },
    {
      company: "Pharmsight Research and Analytics",
      role: "Machine Learning Intern",
      duration: "June 2025 – July 2025",
      responsibilities: [
        "Performed feature engineering and exploratory data analysis using Python",
        "Implemented and compared supervised and unsupervised ML algorithms",
        "Built Multiple Disease Prediction System using SVM and deployed Streamlit web app",
        "Improved understanding of deployment, optimization, and healthcare data modeling"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block" />

                  <Card className="md:ml-20 shadow-elegant border-none bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                          <p className="text-primary font-semibold mb-1">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.duration}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 ml-16">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-muted-foreground flex items-start">
                            <span className="text-secondary mr-2 flex-shrink-0">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
