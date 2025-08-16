import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigate('/')}
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
        <Contact />
    </div>
  );
};

export default ContactPage;