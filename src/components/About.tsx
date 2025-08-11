import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Award, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Projects Delivered", value: "500+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Target, label: "Client Satisfaction", value: "99%" },
    { icon: MapPin, label: "Based in", value: "Bangalore" }
  ];

  const technologies = [
    "Embedded C/C++", "Python", "JavaScript", "React", "Node.js", 
    "Arduino", "Raspberry Pi", "ESP32", "STM32", "WordPress",
    "PHP", "MySQL", "MongoDB", "AWS", "Docker"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary to-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">ResoBit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a Bangalore-based engineering solutions company passionate about bridging 
            the gap between innovative hardware and intelligent software.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <article>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Empowering Innovation Through Technology
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ResoBit specializes in delivering comprehensive engineering solutions that span 
                from low-level embedded systems to sophisticated web applications. Our expertise 
                lies in creating seamless integrations between hardware and software.
              </p>
              <p>
                Whether you're a startup looking to prototype your next IoT device, a business 
                needing a robust e-commerce platform, or a student seeking guidance on your 
                engineering project, we provide tailored solutions that exceed expectations.
              </p>
              <p>
                Our team combines deep technical knowledge with practical industry experience, 
                ensuring that every project we undertake is built with scalability, reliability, 
                and innovation at its core.
              </p>
            </div>
          </article>

          <aside className="grid grid-cols-2 gap-6" aria-label="Company statistics">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-border/60">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </aside>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-0">
              <h4 className="text-xl font-bold text-foreground mb-4">Our Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To democratize technology by making advanced engineering solutions accessible 
                to businesses of all sizes, while fostering the next generation of engineers 
                through mentorship and innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="p-0">
              <h4 className="text-xl font-bold text-foreground mb-4">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading technology partner that transforms ideas into reality, 
                creating sustainable solutions that drive progress in embedded systems, 
                web development, and educational technology.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Technologies We Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;