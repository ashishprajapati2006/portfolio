import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/ashishprajapati2006",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ashishprajapati27/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:ashish2772006@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ashish Prajapati</h3>
            <p className="text-muted-foreground">
              IT Student | ML & AI Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Ashish Prajapati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
