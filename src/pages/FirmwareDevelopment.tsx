import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Code, Cpu, Gauge, Settings, ExternalLink, Github, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FirmwareDevelopment = () => {
  const navigate = useNavigate();

  const firmwareProjects = [
    {
      title: "Bootloader Development",
      description: "Custom bootloaders for secure firmware updates and device initialization",
      technologies: ["C", "Assembly", "ARM Cortex", "Flash Programming"],
      features: ["Secure Boot", "OTA Updates", "Recovery Mode", "Encryption Support"],
      github: "https://github.com/firmware-solutions/secure-bootloader",
      youtube: "https://youtube.com/watch?v=bootloader-demo"
    },
    {
      title: "Motor Control Firmware",
      description: "High-performance motor control algorithms for industrial applications",
      technologies: ["C/C++", "PWM Control", "PID Algorithms", "CAN Bus"],
      features: ["Speed Control", "Position Feedback", "Safety Systems", "Remote Monitoring"],
      github: "https://github.com/firmware-solutions/motor-control",
      youtube: "https://youtube.com/watch?v=motor-demo"
    },
    {
      title: "Sensor Fusion Framework",
      description: "Multi-sensor data processing and fusion for autonomous systems",
      technologies: ["C++", "Kalman Filters", "I2C/SPI", "Real-time Processing"],
      features: ["Multi-sensor Input", "Data Fusion", "Noise Filtering", "Calibration"],
      github: "https://github.com/firmware-solutions/sensor-fusion",
      youtube: "https://youtube.com/watch?v=sensor-demo"
    }
  ];

  const expertise = [
    {
      icon: Code,
      title: "Low-Level Programming",
      description: "Expert C/C++ and assembly programming for optimal performance"
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Memory and CPU optimization for resource-constrained environments"
    },
    {
      icon: Settings,
      title: "Hardware Integration",
      description: "Seamless integration with various hardware peripherals and interfaces"
    },
    {
      icon: Cpu,
      title: "Real-Time Systems",
      description: "Deterministic firmware for time-critical applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-light via-primary-medium to-primary-dark text-text-white">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 text-text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Firmware <span className="text-accent">Development</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              High-performance firmware solutions optimized for reliability, efficiency, and scalability. 
              We specialize in low-level programming, real-time systems, and hardware abstraction layers 
              that power critical applications across industries.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white">C/C++</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Assembly</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">RTOS</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Bare Metal</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Device Drivers</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Firmware Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-medium to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Firmware Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firmwareProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <Code className="w-3 h-3 text-accent mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                          <Youtube className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Requirements Analysis", desc: "Understanding hardware constraints and performance requirements" },
              { step: "02", title: "Architecture Design", desc: "Designing modular, maintainable firmware architecture" },
              { step: "03", title: "Implementation", desc: "Writing optimized, tested, and documented firmware code" },
              { step: "04", title: "Testing & Validation", desc: "Comprehensive testing including unit, integration, and system tests" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Firmware Development?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's optimize your hardware with efficient, reliable firmware solutions.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/get-started')}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-secondary"
          >
            Discuss Your Project
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirmwareDevelopment;