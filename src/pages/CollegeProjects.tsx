import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  GraduationCap, 
  Code, 
  Cpu, 
  Lightbulb, 
  Users, 
  BookOpen, 
  ArrowLeft,
  Check,
  Star,
  Trophy
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CollegeProjects = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    course: '',
    year: '',
    projectType: '',
    projectTitle: '',
    description: '',
    timeline: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    toast({
      title: "Project Request Submitted!",
      description: "We'll get back to you within 24 hours with a detailed proposal.",
    });
    setFormData({
      name: '',
      email: '',
      college: '',
      course: '',
      year: '',
      projectType: '',
      projectTitle: '',
      description: '',
      timeline: '',
      budget: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const projectTypes = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "IoT devices, microcontroller projects, sensor networks",
      technologies: ["Arduino", "Raspberry Pi", "ESP32", "STM32"]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Web apps, mobile apps, desktop applications",
      technologies: ["React", "Flutter", "Python", "Java"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Projects",
      description: "Research-based projects, patent-worthy innovations",
      technologies: ["AI/ML", "Blockchain", "AR/VR", "Cloud"]
    }
  ];

  const features = [
    "Complete project development from concept to deployment",
    "Detailed documentation and project reports",
    "Presentation preparation and demo assistance",
    "Code review and optimization",
    "Technical mentorship throughout the project",
    "Industry-standard development practices"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.history.back()}
              className="text-text-black-soft hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary-light rounded-lg flex items-center justify-center">
              <Cpu className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">ResoBit</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-[var(--shadow-elegant)]">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-text-black mb-6">
              College Project <span className="text-primary">Development</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your academic ideas into professional-grade projects. Get expert guidance, 
              complete development support, and documentation that impresses your professors.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="text-text-black-soft font-medium">Award-Winning Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-text-black-soft font-medium">Expert Mentorship</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-light/10 px-4 py-2 rounded-full">
                <BookOpen className="w-5 h-5 text-primary-light" />
                <span className="text-text-black-soft font-medium">Complete Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-text-black text-center mb-12">
            Project <span className="text-primary">Categories</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {projectTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-text-black">{type.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{type.description}</CardDescription>
                  <div className="flex flex-wrap justify-center gap-2">
                    {type.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gradient-to-r from-secondary to-muted">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-text-black text-center mb-12">
            What You <span className="text-primary">Get</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-text-black-soft">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                Start Your <span className="text-primary">Project</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you with a detailed proposal within 24 hours.
              </p>
            </div>

            <Card className="shadow-[var(--shadow-elegant)]">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-text-black-soft">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-text-black-soft">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="college" className="text-text-black-soft">College/University *</Label>
                      <Input
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course" className="text-text-black-soft">Course/Branch *</Label>
                      <Input
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="year" className="text-text-black-soft">Year of Study *</Label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:border-primary bg-background"
                      >
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Final Year">Final Year</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-text-black-soft">Project Type *</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:border-primary bg-background"
                      >
                        <option value="">Select Type</option>
                        <option value="Embedded Systems">Embedded Systems</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="IoT Project">IoT Project</option>
                        <option value="AI/ML Project">AI/ML Project</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectTitle" className="text-text-black-soft">Project Title</Label>
                    <Input
                      id="projectTitle"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      placeholder="Enter your project title if you have one"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-text-black-soft">Project Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Describe your project idea, requirements, and any specific features you want"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-text-black-soft">Project Timeline</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:border-primary bg-background"
                      >
                        <option value="">Select Timeline</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="3-4 weeks">3-4 weeks</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3+ months">3+ months</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-text-black-soft">Budget Range</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:border-primary bg-background"
                      >
                        <option value="">Select Budget</option>
                        <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                        <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000+">₹50,000+</option>
                      </select>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-primary-foreground py-3 text-lg shadow-[var(--shadow-primary)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  >
                    Submit Project Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Or reach out to us directly:
              </p>
              <a 
                href="mailto:info@resobit.com" 
                className="text-primary hover:text-primary-dark font-medium text-lg transition-colors"
              >
                info@resobit.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeProjects;