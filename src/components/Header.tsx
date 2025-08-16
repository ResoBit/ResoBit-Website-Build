import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "/about", isExternal: true },
    { label: "Blog", href: "/blog", isExternal: true },
  ];

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setIsVisible(true); // Always visible on mobile
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    window.addEventListener('resize', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
      window.removeEventListener('resize', controlHeader);
    };
  }, [lastScrollY]);

  const handleNavigation = (href: string, isExternal?: boolean) => {
    if (isExternal) {
      navigate(href);
    } else {
      // If we're not on the home page, navigate to home with the hash
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        // We're on home page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/90 md:bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/40 before:to-transparent ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation('#home')}
          >
            <img src="/favicon.ico" alt="icon" className="w-5 h-5" />
            <span className="text-2xl font-bold text-foreground">
              Reso<span className="text-blue-600 dark:text-blue-700">Bit</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href, item.isExternal)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => navigate('/embedded-systems')}>Embedded Systems</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/firmware-development')}>Firmware Development</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/ecommerce-development')}>E-commerce Development</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/wordpress-development')}>WordPress Development</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/funtech-games')}>Electronic Fun-tech Games</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/college-projects')}>College Projects</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
            <Button 
              variant="hero"
              onClick={() => handleNavigation('/get-started', true)}
              className="ml-4"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href, item.isExternal)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <div className="text-xs uppercase text-muted-foreground mb-2">Services</div>
                <div className="grid grid-cols-1 gap-2">
                  <button onClick={() => navigate('/embedded-systems')} className="text-left text-foreground hover:text-primary">Embedded Systems</button>
                  <button onClick={() => navigate('/firmware-development')} className="text-left text-foreground hover:text-primary">Firmware Development</button>
                  <button onClick={() => navigate('/ecommerce-development')} className="text-left text-foreground hover:text-primary">E-commerce Development</button>
                  <button onClick={() => navigate('/wordpress-development')} className="text-left text-foreground hover:text-primary">WordPress Development</button>
                  <button onClick={() => navigate('/funtech-games')} className="text-left text-foreground hover:text-primary">Electronic Fun-tech Games</button>
                  <button onClick={() => navigate('/college-projects')} className="text-left text-foreground hover:text-primary">College Projects</button>
                </div>
              </div>
              <Button 
                variant="hero"
                onClick={() => handleNavigation('/get-started', true)}
                className="w-full mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
