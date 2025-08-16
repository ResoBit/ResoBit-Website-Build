import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background" role="banner" aria-label="Hero section with company introduction">
      {/* Dynamic animated background with gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-muted animate-pulse"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent-secondary/5 transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}%, ${mousePosition.y * 0.02}%)`,
          }}
        ></div>
      </div>
      
      {/* Dynamic floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-56 h-56 md:w-80 md:h-80 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"
          style={{
            transform: `translate(${mousePosition.x * 0.05}%, ${mousePosition.y * 0.05}%)`,
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-56 h-56 md:w-80 md:h-80 bg-accent-secondary/10 dark:bg-accent-secondary/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]"
          style={{
            transform: `translate(${mousePosition.x * -0.03}%, ${mousePosition.y * -0.03}%)`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-accent-tertiary/8 dark:bg-accent-tertiary/3 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x * 0.02}%), calc(-50% + ${mousePosition.y * 0.02}%))`,
          }}
        ></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/20 rounded-full animate-[float_5s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent-secondary/30 rounded-full animate-[float_7s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent-tertiary/25 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Brand */}
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <div className="flex items-center space-x-3 sm:space-x-4 hover-scale">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                {/* Reso<span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent animate-pulse">Bit</span> */}
              </h1>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in delay-300">
            <span className="inline-block animate-[fade-in_0.8s_ease-out_0.2s_both]">Build Bold.Scale Smart.</span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent inline-block animate-[fade-in_0.8s_ease-out_0.6s_both]">
              Embedded • Web • Games • Education
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl md:max-w-4xl mx-auto leading-relaxed font-light animate-[fade-in_0.8s_ease-out_0.8s_both]">
            We turn ideas into products — from silicon to storefront. High‑performance firmware,
            resilient embedded systems, and modern web experiences engineered to scale.
          </p>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-[fade-in_0.8s_ease-out_1s_both]">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-4 border-2 border-border text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              onClick={() => window.location.assign('/get-started')}
            >
              Talk to an expert
            </Button>
          </div>

          {/* Feature highlights */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-2" aria-label="Core services overview">
            <article className="text-center group hover-scale animate-[fade-in_0.8s_ease-out_1.2s_both]">
              <div className="w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-all duration-300 group-hover:rotate-6">
                <Cpu className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">Embedded Systems</h3>
              <p className="text-muted-foreground text-sm">Custom IoT solutions and automation systems for industrial applications</p>
            </article>
            <article className="text-center group hover-scale animate-[fade-in_0.8s_ease-out_1.4s_both]">
              <div className="w-12 h-12 bg-accent-secondary/10 dark:bg-accent-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-secondary/20 dark:group-hover:bg-accent-secondary/30 transition-all duration-300 group-hover:rotate-6">
                <Code className="w-6 h-6 text-accent-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent-secondary transition-colors duration-300">Firmware Development</h3>
              <p className="text-muted-foreground text-sm">High-performance microcontroller programming and real-time systems</p>
            </article>
            <article className="text-center group hover-scale animate-[fade-in_0.8s_ease-out_1.6s_both] sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-accent-tertiary/10 dark:bg-accent-tertiary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-tertiary/20 dark:group-hover:bg-accent-tertiary/30 transition-all duration-300 group-hover:rotate-6">
                <Zap className="w-6 h-6 text-accent-tertiary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent-tertiary transition-colors duration-300">Web Development</h3>
              <p className="text-muted-foreground text-sm">Modern React applications and scalable e-commerce platforms</p>
            </article>
          </section>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;