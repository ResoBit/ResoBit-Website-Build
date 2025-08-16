import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingCart, Globe, CreditCard, Package, ExternalLink, Github, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EcommerceDevelopment = () => {
  const navigate = useNavigate();

  const ecommerceProjects = [
    {
      title: "Shopify Plus Multi-Store Setup",
      description: "Enterprise-level Shopify Plus implementation with custom themes and apps",
      technologies: ["Shopify Plus", "Liquid", "React", "GraphQL API"],
      features: ["Multi-store Management", "Custom Checkout", "Inventory Sync", "Analytics Dashboard"],
      github: "https://github.com/ecommerce-solutions/shopify-plus",
      youtube: "https://youtube.com/watch?v=shopify-demo"
    },
    {
      title: "Magento 2 B2B Platform",
      description: "Advanced B2B e-commerce platform with custom pricing and catalog management",
      technologies: ["Magento 2", "PHP", "MySQL", "Elasticsearch"],
      features: ["B2B Pricing", "Custom Catalogs", "Quote System", "Company Accounts"],
      github: "https://github.com/ecommerce-solutions/magento-b2b",
      youtube: "https://youtube.com/watch?v=magento-demo"
    },
    {
      title: "Custom Payment Gateway",
      description: "Secure payment processing system with multiple gateway integrations",
      technologies: ["Node.js", "Stripe API", "PayPal SDK", "Encryption"],
      features: ["Multi-gateway Support", "Fraud Detection", "Recurring Billing", "Mobile Payments"],
      github: "https://github.com/ecommerce-solutions/payment-gateway",
      youtube: "https://youtube.com/watch?v=payment-demo"
    }
  ];

  const platforms = [
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description: "Custom Shopify stores with advanced functionality and integrations",
      features: ["Custom Themes", "App Development", "API Integrations", "Performance Optimization"]
    },
    {
      icon: Package,
      title: "Magento 2 Solutions",
      description: "Enterprise-grade Magento 2 development for complex business requirements",
      features: ["Custom Extensions", "B2B Features", "Multi-store Setup", "Advanced SEO"]
    }
  ];

  const extensions = [
    {
      platform: "Shopify",
      name: "Advanced Inventory Manager",
      description: "Real-time inventory tracking across multiple warehouses",
      features: ["Multi-location Inventory", "Low Stock Alerts", "Automated Reordering", "Analytics"]
    },
    {
      platform: "Magento 2",
      name: "B2B Quote System",
      description: "Custom quote generation and approval workflow for B2B customers",
      features: ["Quote Builder", "Approval Workflow", "Pricing Tiers", "Negotiation Tools"]
    },
    {
      platform: "Shopify",
      name: "Subscription Manager",
      description: "Complete subscription and recurring payment management",
      features: ["Flexible Plans", "Pause/Resume", "Usage Tracking", "Customer Portal"]
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
              E-commerce <span className="text-accent">Development</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Build powerful, scalable e-commerce platforms that drive sales and enhance customer experience. 
              Specializing in Shopify and Magento 2 development with custom extensions and integrations 
              that grow with your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white">Shopify Plus</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Magento 2</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Custom Extensions</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Payment Gateways</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">API Integrations</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{platform.title}</CardTitle>
                  <CardDescription className="text-base">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CreditCard className="w-3 h-3 text-accent mr-2" />
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

      {/* Custom Extensions */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Custom Extensions & Apps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extensions.map((extension, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{extension.platform}</Badge>
                  <CardTitle className="text-lg">{extension.name}</CardTitle>
                  <CardDescription>{extension.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {extension.features.map((feature) => (
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

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured E-commerce Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceProjects.map((project, index) => (
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
                            <ShoppingCart className="w-3 h-3 text-accent mr-2" />
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

      {/* Why Choose Our E-commerce Solutions */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our E-commerce Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Architecture</h3>
              <p className="text-muted-foreground">Built to handle growth from startup to enterprise scale</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-muted-foreground">Industry-standard security with multiple payment options</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-accent-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Features</h3>
              <p className="text-muted-foreground">Tailored functionality that matches your business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your E-commerce Store?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build a powerful e-commerce platform that converts visitors into customers.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/get-started')}
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

export default EcommerceDevelopment;