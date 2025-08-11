import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Globe, Code, Search, Palette, ExternalLink, Github, Youtube, Plug, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WordPressDevelopment = () => {
  const navigate = useNavigate();

  const wordpressProjects = [
    {
      title: "Custom E-commerce Theme",
      description: "Fully responsive WooCommerce theme with advanced product filtering and checkout optimization",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Sass"],
      features: ["Custom Product Pages", "Advanced Filtering", "Mobile Responsive", "SEO Optimized"],
      github: "https://github.com/wordpress-solutions/ecommerce-theme",
      youtube: "https://youtube.com/watch?v=wordpress-ecommerce"
    },
    {
      title: "Multi-site Corporate Portal",
      description: "Enterprise WordPress multisite network with custom user roles and content management",
      technologies: ["WordPress Multisite", "Custom Post Types", "ACF Pro", "REST API"],
      features: ["User Role Management", "Content Workflows", "Custom Dashboards", "API Integration"],
      github: "https://github.com/wordpress-solutions/corporate-portal",
      youtube: "https://youtube.com/watch?v=wordpress-multisite"
    },
    {
      title: "Learning Management System",
      description: "Custom LMS built on WordPress with course management and student progress tracking",
      technologies: ["WordPress", "LearnDash", "Custom Plugins", "AJAX"],
      features: ["Course Builder", "Progress Tracking", "Certificates", "Payment Integration"],
      github: "https://github.com/wordpress-solutions/lms-platform",
      youtube: "https://youtube.com/watch?v=wordpress-lms"
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "Custom Theme Development",
      description: "Bespoke WordPress themes designed to match your brand and business requirements",
      features: ["Responsive Design", "Custom Layouts", "Brand Integration", "Performance Optimized"]
    },
    {
      icon: Plug,
      title: "Plugin Development",
      description: "Custom WordPress plugins to extend functionality and meet specific business needs",
      features: ["Custom Functionality", "Third-party Integrations", "Admin Panels", "Security Focused"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Advanced SEO implementation to improve search rankings and organic traffic",
      features: ["Technical SEO", "Schema Markup", "Site Speed", "Mobile Optimization"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security hardening and ongoing maintenance services",
      features: ["Security Audits", "Regular Updates", "Backup Solutions", "Performance Monitoring"]
    }
  ];

  const themes = [
    {
      name: "Business Pro",
      description: "Professional business theme with advanced customization options",
      features: ["Page Builder Integration", "Custom Widgets", "Contact Forms", "Portfolio Showcase"],
      category: "Business"
    },
    {
      name: "E-commerce Plus",
      description: "WooCommerce-optimized theme for online stores",
      features: ["Product Quick View", "Wishlist Integration", "Multi-currency", "Advanced Search"],
      category: "E-commerce"
    },
    {
      name: "Blog Master",
      description: "Content-focused theme for bloggers and content creators",
      features: ["Multiple Post Formats", "Social Sharing", "Author Profiles", "Related Posts"],
      category: "Blog"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-medium via-primary-dark to-primary-darker text-text-white">
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
              WordPress <span className="text-accent">Development</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Professional WordPress websites with custom themes, plugins, and optimization. 
              From simple business sites to complex e-commerce platforms and enterprise solutions 
              that scale with your business growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white">Custom Themes</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Plugin Development</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">WooCommerce</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">SEO Optimization</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Performance Tuning</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">WordPress Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <Globe className="w-3 h-3 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Themes */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Custom WordPress Themes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{theme.category}</Badge>
                  <CardTitle className="text-lg">{theme.name}</CardTitle>
                  <CardDescription>{theme.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {theme.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <Palette className="w-3 h-3 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured WordPress Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wordpressProjects.map((project, index) => (
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

      {/* Why Choose WordPress */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our WordPress Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Optimized</h3>
              <p className="text-muted-foreground">Built-in SEO best practices for better search rankings</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-muted-foreground">Enterprise-level security and regular maintenance</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-accent-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Design</h3>
              <p className="text-muted-foreground">Unique themes tailored to your brand identity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your WordPress Site?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a professional WordPress website that grows with your business.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/#contact')}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-secondary"
          >
            Start Your Project
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WordPressDevelopment;