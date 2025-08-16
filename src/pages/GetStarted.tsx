import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Building, Send, User } from "lucide-react";

const GetStarted = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
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
        body: JSON.stringify({ ...formData })
      });
      if (response.ok) {
        toast({
          title: "Details Sent Successfully!",
          description: "Thank you for getting started with us! We'll contact you soon.",
        });
        setFormData({ name: '', email: '', phone: '', details: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your details. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 flex flex-col items-center justify-center">
      <Card className="w-full max-w-xl p-8 bg-card/90 backdrop-blur-md border-border/50 shadow-2xl mb-10">
        <CardHeader className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">
                Get Started With Us
              </CardTitle>
              <p className="text-muted-foreground mt-1">Fill in your details to begin your journey</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Name *</label>
              <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required className="h-12 border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Email Address *</label>
              <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@email.com" required className="h-12 border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Phone Number</label>
              <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Optional" className="h-12 border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">How can we help you? *</label>
              <Textarea name="details" value={formData.details} onChange={handleInputChange} placeholder="Describe your needs, project, or questions..." rows={5} required className="border-border/60 focus:border-primary focus:ring-primary/20 bg-background/50 resize-none" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-gradient-to-r from-primary via-accent to-primary text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
              {isSubmitting ? 'Sending...' : 'Get Started'}
              <Send className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">* Required fields. We'll respond within 24 hours.</p>
          </form>
        </CardContent>
      </Card>
      <div className="w-full max-w-xl space-y-6">
        <Card className="p-6 bg-card/80 border-border/50">
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              <span className="font-semibold">info@resobit.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <span>Bangalore, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              <span>Mon - Sat: 9AM - 7PM (IST)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GetStarted;

