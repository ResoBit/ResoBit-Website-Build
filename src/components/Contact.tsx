import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  Send,
  MessageSquare,
  Building
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    service: '',
    projectDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.projectDetails || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bmsharathshivacharya01@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thanks for reaching out! We'll get back to you within 24 hours.",
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+91',
          phone: '',
          service: '',
          projectDetails: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@resobit.com",
      description: "Send us your project requirements",
      action: "mailto:info@resobit.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Bangalore, Karnataka",
      description: "India's Silicon Valley",
      action: null
    },
    {
      icon: Building,
      title: "Business Hours",
      content: "Mon - Sat: 9AM - 7PM",
      description: "IST (UTC +5:30)",
      action: null
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-gradient-to-br from-background via-primary/5 to-accent/10 overflow-hidden" aria-labelledby="contact-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
              Let's Connect
            </span>
          </div>
          <h2 id="contact-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Start Your Next
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into reality with our cutting-edge technology solutions. 
            From embedded systems to web applications, we're here to build the future together.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16" aria-label="Contact information">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className={`group text-center p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 ${
                info.action ? 'cursor-pointer' : ''
              }`}
              onClick={() => info.action && window.open(info.action, '_blank')}
            >
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary-dark rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{info.title}</h3>
                <p className="text-primary font-semibold mb-2 text-lg">{info.content}</p>
                <p className="text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="p-8 lg:p-10 bg-card/90 backdrop-blur-md border-border/50 shadow-2xl" role="form" aria-labelledby="contact-form-title">
            <CardHeader className="p-0 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle id="contact-form-title" className="text-2xl lg:text-3xl font-bold text-foreground">
                    Let's Build Together
                  </CardTitle>
                  <p className="text-muted-foreground mt-1">Tell us about your vision</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden bot field for spam protection */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      First Name *
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="h-12 border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Last Name *
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="h-12 border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@company.com"
                    required
                    className="h-12 border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Phone Number *
                  </label>
                  <div className="grid grid-cols-[120px,1fr] gap-3">
                    <Select
                      value={formData.countryCode}
                      onValueChange={(val) =>
                        setFormData((prev) => ({ ...prev, countryCode: val }))
                      }
                    >
                      <SelectTrigger className="h-12 border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">India (+91)</SelectItem>
                        <SelectItem value="+1">USA/Canada (+1)</SelectItem>
                        <SelectItem value="+44">UK (+44)</SelectItem>
                        <SelectItem value="+61">Australia (+61)</SelectItem>
                        <SelectItem value="+81">Japan (+81)</SelectItem>
                        <SelectItem value="+971">UAE (+971)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile number"
                      inputMode="numeric"
                      pattern="\d{10}"
                      maxLength={10}
                      required
                      className="h-12 border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Service of Interest
                  </label>
                  <Input 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    placeholder="Embedded Systems, Web Development, E-commerce..."
                    className="h-12 border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Project Details *
                  </label>
                  <Textarea 
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Describe your project goals, technical requirements, timeline, and any specific challenges you're looking to solve..."
                    rows={6}
                    required
                    className="border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-primary via-accent to-primary hover:from-primary-dark hover:via-accent-dark hover:to-primary-dark text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Partner With Us?
              </h3>
              <p className="text-muted-foreground text-lg">
                Experience the difference of working with a team that truly cares about your success.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-r from-card/50 to-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Lightning Fast Response</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    24-hour response guarantee with real-time project updates. We believe in transparent communication every step of the way.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-r from-card/50 to-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary-dark rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Bangalore Advantage</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Located in India's tech capital with access to world-class talent and deep understanding of both local and global markets.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-r from-card/50 to-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-dark to-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Complete Solutions</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    From initial concept to final deployment and beyond. We're your technology partner for the entire journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Email CTA */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/20 shadow-lg">
              <CardContent className="p-0 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">Prefer Email?</h4>
                  <p className="text-muted-foreground">
                    Send us a direct message for immediate assistance
                  </p>
                </div>
                <Button 
                  onClick={() => window.open('mailto:info@resobit.com', '_blank')}
                  className="h-12 px-8 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  info@resobit.com
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;