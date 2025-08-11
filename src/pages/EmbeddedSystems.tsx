import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Cpu, Zap, Shield, Wifi, Code, ExternalLink, Github, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmbeddedSystems = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "IoT Smart Home Controller",
      description: "Complete home automation system with ESP32, sensors, and cloud connectivity",
      technologies: ["ESP32", "Arduino IDE", "AWS IoT", "MQTT"],
      features: ["Temperature Control", "Security System", "Voice Commands", "Mobile App"],
      github: "https://github.com/embedded-solutions/smart-home",
      youtube: "https://youtube.com/watch?v=embedded-demo"
    },
    {
      title: "Industrial Process Monitor",
      description: "Real-time monitoring system for industrial equipment with data logging",
      technologies: ["STM32", "FreeRTOS", "Modbus", "HMI Display"],
      features: ["Real-time Data", "Alarm System", "Remote Monitoring", "Data Analytics"],
      github: "https://github.com/embedded-solutions/process-monitor",
      youtube: "https://youtube.com/watch?v=industrial-demo"
    },
    {
      title: "Wearable Health Monitor",
      description: "Health tracking device with heart rate, temperature, and activity monitoring",
      technologies: ["nRF52", "Bluetooth LE", "C/C++", "Mobile SDK"],
      features: ["Heart Rate", "Sleep Tracking", "Activity Monitor", "Long Battery Life"],
      github: "https://github.com/embedded-solutions/health-monitor",
      youtube: "https://youtube.com/watch?v=health-demo"
    }
  ];

  const services = [
    {
      icon: Cpu,
      title: "Microcontroller Programming",
      description: "Expert programming for ARM, AVR, PIC, and ESP series microcontrollers"
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Seamless connectivity solutions for Internet of Things applications"
    },
    {
      icon: Shield,
      title: "Real-time Systems",
      description: "Critical timing applications with RTOS implementation"
    },
    {
      icon: Code,
      title: "Custom Firmware",
      description: "Tailored firmware solutions optimized for your specific hardware"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary via-primary-dark to-primary-darker text-text-white">
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
              Embedded Systems <span className="text-accent">Engineering</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Custom embedded solutions that power the next generation of smart devices, 
              industrial automation, and IoT applications. From concept to deployment, 
              we deliver reliable, efficient, and scalable embedded systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white">ARM Cortex</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">ESP32/ESP8266</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Arduino</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Raspberry Pi</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">FreeRTOS</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Embedded Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <Zap className="w-3 h-3 text-accent mr-2" />
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

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Embedded Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your embedded systems requirements and create innovative solutions together.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/#contact')}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-secondary"
          >
            Get Started Today
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmbeddedSystems;