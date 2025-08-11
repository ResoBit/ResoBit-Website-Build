import { Cpu, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-darker text-primary-foreground relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/40 before:to-transparent">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary-light rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">
                Reso<span className="text-accent">Bit</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Engineering the Future, Today digital future. From embedded systems to web platforms, 
              we create technology that drives innovation.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              <span>Bangalore, Karnataka, India</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Embedded Systems Engineering</li>
              <li>Firmware Development</li>
              <li>E-commerce Development</li>
              <li>WordPress Development</li>
              <li>College Project Support</li>
              <li>Electronic Fun-tech Games</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a 
                  href="mailto:info@resobit.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@resobit.com
                </a>
              </div>
              <p className="text-primary-foreground/60 text-sm">
                Mon - Sat: 9AM - 7PM IST
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            © {currentYear} ResoBit. Made with <Heart className="w-4 h-4 text-accent" /> in Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;