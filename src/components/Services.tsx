import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Code, 
  Globe, 
  ExternalLink, 
  GraduationCap, 
  Gamepad2,
  ArrowRight,
  Zap,
  Wrench,
  Shield
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Embedded Systems Engineering",
    description: "Custom embedded solutions for IoT devices, industrial automation, and smart systems with cutting-edge microcontroller programming.",
    features: ["Microcontroller Programming", "IoT Integration", "Industrial Automation", "Real-time Systems"],
    color: "from-primary to-primary-light"
  },
  {
    icon: Code,
    title: "Firmware Development",
    description: "High-performance firmware solutions optimized for hardware efficiency and reliability across various platforms.",
    features: ["Low-level Programming", "Hardware Optimization", "Performance Tuning", "Cross-platform Support"],
    color: "from-primary-light to-primary-medium"
  },
  {
    icon: Globe,
    title: "E-commerce Development",
    description: "Modern, scalable e-commerce platforms with seamless user experiences and robust backend systems.",
    features: ["Custom E-commerce", "Payment Integration", "Inventory Management", "Mobile Responsive"],
    color: "from-primary-medium to-primary-dark"
  },
  {
    icon: ExternalLink,
    title: "WordPress Development",
    description: "Professional WordPress websites with custom themes, plugins, and optimized performance for businesses.",
    features: ["Custom Themes", "Plugin Development", "SEO Optimization", "Performance Tuning"],
    color: "from-primary-dark to-primary-darker"
  },
  {
    icon: GraduationCap,
    title: "College Project Support",
    description: "Comprehensive guidance and mentorship for engineering students on innovative technology projects.",
    features: ["Project Mentorship", "Technical Guidance", "Documentation Help", "Presentation Support"],
    color: "from-accent to-primary-light",
    isSpecial: true
  },
  {
    icon: Gamepad2,
    title: "Electronic Fun-tech Games",
    description: "Interactive electronic games and entertainment systems combining hardware innovation with engaging software.",
    features: ["Game Design", "Hardware Integration", "Interactive Systems", "Custom Controllers"],
    color: "from-primary-darker to-accent"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-muted/30 to-muted/50" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        <header className="text-center mb-20">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Engineering solutions for
            <span className="block text-muted-foreground"> modern businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            We deliver comprehensive technology solutions that bridge the gap between hardware and software, 
            creating innovative systems that drive business success.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" role="list" aria-label="Available engineering services">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 rounded-2xl overflow-hidden relative h-full flex flex-col"
              role="listitem"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: '0 0 0 1px hsl(var(--accent) / 0.15), 0 8px 30px hsl(var(--accent) / 0.15)'}} />
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br from-accent to-accent-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ring-2 ring-transparent group-hover:ring-accent/30`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col flex-1">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed min-h-[64px]">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-start space-x-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="mt-auto w-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-xl transition-all duration-300"
                  onClick={() => {
                    if (service.isSpecial) {
                      window.location.href = '/college-projects';
                    } else if (service.title === "Embedded Systems Engineering") {
                      window.location.href = '/embedded-systems';
                    } else if (service.title === "Firmware Development") {
                      window.location.href = '/firmware-development';
                    } else if (service.title === "E-commerce Development") {
                      window.location.href = '/ecommerce-development';
                    } else if (service.title === "WordPress Development") {
                      window.location.href = '/wordpress-development';
                    } else if (service.title === "Electronic Fun-tech Games") {
                      window.location.href = '/funtech-games';
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {service.isSpecial ? "Get Started" : "Learn More"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modern features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-card border border-border/50">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Quality Assurance</h3>
            <p className="text-muted-foreground leading-relaxed">Rigorous testing and quality control ensure reliable, robust solutions that perform at scale.</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-card border border-border/50">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/80 to-primary/60 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Wrench className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Custom Solutions</h3>
            <p className="text-muted-foreground leading-relaxed">Tailored engineering solutions designed specifically to meet your unique business requirements.</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-card border border-border/50">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/60 to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Cpu className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">Latest Technology</h3>
            <p className="text-muted-foreground leading-relaxed">Cutting-edge tools and frameworks for modern, scalable solutions that future-proof your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;