import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashish2772006@gmail.com",
      link: "mailto:ashish2772006@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8168027116",
      link: "tel:+918168027116"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ashishprajapati27",
      link: "https://www.linkedin.com/in/ashishprajapati27/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ashishprajapati2006",
      link: "https://github.com/ashishprajapati2006"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations. 
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Information Grid - Side by Side */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 perspective-1000">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="card-3d shadow-card border-none bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 glow-effect">
                  <info.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <a 
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground font-semibold hover:text-primary transition-colors break-all"
                  >
                    {info.value}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
