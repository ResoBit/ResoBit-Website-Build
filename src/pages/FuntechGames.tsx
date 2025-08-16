import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Gamepad2, Zap, Joystick, Puzzle, ExternalLink, Github, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FuntechGames = () => {
  const navigate = useNavigate();

  const gameProjects = [
    {
      title: "LED Matrix Gaming System",
      description: "Interactive LED matrix display with touch controls and multiplayer games",
      technologies: ["Arduino", "LED Matrix", "Touch Sensors", "Wireless Communication"],
      features: ["Snake Game", "Tetris", "Pong", "Custom Animations", "Multiplayer Support"],
      github: "https://github.com/funtech-games/led-matrix-games",
      youtube: "https://youtube.com/watch?v=led-matrix-demo"
    },
    {
      title: "RFID Treasure Hunt System",
      description: "Interactive treasure hunt game using RFID technology and mobile app",
      technologies: ["RFID", "ESP32", "React Native", "Firebase", "GPS Integration"],
      features: ["Location Tracking", "Team Competition", "Real-time Updates", "Leaderboards"],
      github: "https://github.com/funtech-games/rfid-treasure-hunt",
      youtube: "https://youtube.com/watch?v=treasure-hunt-demo"
    },
    {
      title: "Gesture Control Racing Game",
      description: "Motion-controlled racing game using accelerometer and gyroscope sensors",
      technologies: ["MPU6050", "Unity 3D", "Bluetooth", "Mobile Integration"],
      features: ["Gesture Controls", "3D Racing", "Physics Engine", "Custom Tracks"],
      github: "https://github.com/funtech-games/gesture-racing",
      youtube: "https://youtube.com/watch?v=gesture-racing-demo"
    },
    {
      title: "Smart Arcade Cabinet",
      description: "Retro arcade cabinet with modern technology and classic games",
      technologies: ["Raspberry Pi", "Custom Controls", "Emulation", "HD Display"],
      features: ["Classic Games", "Custom Hardware", "Save States", "High Scores"],
      github: "https://github.com/funtech-games/smart-arcade",
      youtube: "https://youtube.com/watch?v=arcade-demo"
    },
    {
      title: "Interactive Floor Projection",
      description: "Floor-based interactive gaming system using projector and motion detection",
      technologies: ["Computer Vision", "Projector Mapping", "Motion Tracking", "Unity"],
      features: ["Motion Detection", "Multi-player Games", "Custom Environments", "Real-time Interaction"],
      github: "https://github.com/funtech-games/floor-projection",
      youtube: "https://youtube.com/watch?v=floor-projection-demo"
    },
    {
      title: "IoT Escape Room Controller",
      description: "Complete escape room automation system with puzzles and sensors",
      technologies: ["IoT Sensors", "Node.js", "WebSocket", "Automated Controls"],
      features: ["Puzzle Automation", "Timer System", "Hint Delivery", "Progress Tracking"],
      github: "https://github.com/funtech-games/escape-room-iot",
      youtube: "https://youtube.com/watch?v=escape-room-demo"
    }
  ];

  const gameCategories = [
    {
      icon: Gamepad2,
      title: "Interactive Hardware Games",
      description: "Physical gaming systems with custom hardware interfaces",
      examples: ["LED Matrix Games", "Touch-based Controllers", "Motion Sensors", "Custom Arcade Machines"]
    },
    {
      icon: Zap,
      title: "Educational STEM Games",
      description: "Learning-focused games that teach technology and science concepts",
      examples: ["Circuit Building Games", "Programming Challenges", "Robot Control", "Electronics Tutorials"]
    },
    {
      icon: Joystick,
      title: "Multiplayer Social Games",
      description: "Games designed for group interaction and team building",
      examples: ["Team Challenges", "Competitive Tournaments", "Collaborative Puzzles", "Communication Games"]
    },
    {
      icon: Puzzle,
      title: "Puzzle & Strategy Games",
      description: "Mind-bending puzzles that challenge problem-solving skills",
      examples: ["Logic Puzzles", "Escape Room Games", "Strategy Challenges", "Brain Teasers"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-dark via-accent to-accent-secondary text-text-white">
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
              Electronic <span className="text-accent-tertiary">Fun-tech Games</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Innovative electronic games that blend cutting-edge technology with engaging gameplay. 
              From interactive LED displays to motion-controlled adventures, we create unique gaming 
              experiences that entertain, educate, and inspire.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white">Interactive Hardware</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Motion Control</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">LED Displays</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Touch Interfaces</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Multiplayer Systems</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Game Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-center">
                        <Zap className="w-3 h-3 text-accent mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Game Projects */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Game Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameProjects.map((project, index) => (
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
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Game Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <Gamepad2 className="w-3 h-3 text-accent mr-2" />
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

      {/* Development Approach */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Game Development Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: "01", 
                title: "Concept Design", 
                desc: "Creative brainstorming to develop unique and engaging game concepts",
                icon: Puzzle
              },
              { 
                step: "02", 
                title: "Hardware Integration", 
                desc: "Seamless integration of sensors, displays, and interactive components",
                icon: Zap
              },
              { 
                step: "03", 
                title: "Game Development", 
                desc: "Programming engaging gameplay mechanics and user interfaces",
                icon: Gamepad2
              },
              { 
                step: "04", 
                title: "Testing & Polish", 
                desc: "Extensive playtesting and refinement for optimal user experience",
                icon: Joystick
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">{item.step}</div>
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

      {/* Why Choose Our Gaming Solutions */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Gaming Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unique Experiences</h3>
              <p className="text-muted-foreground">One-of-a-kind gaming experiences that can't be found anywhere else</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-accent-secondary to-accent-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educational Value</h3>
              <p className="text-muted-foreground">Games that entertain while teaching valuable STEM concepts</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-accent-tertiary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Puzzle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">Tailored gaming solutions for specific needs and audiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Custom Game?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your gaming ideas to life with innovative technology and creative design.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/get-started')}
            className="bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-secondary hover:to-accent-tertiary"
          >
            Start Your Game Project
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FuntechGames;