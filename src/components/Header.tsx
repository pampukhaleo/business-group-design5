import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">BusinessPro</h1>
              <p className="text-xs text-muted-foreground">Deutschland GmbH</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Startseite
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Dienstleistungen
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Über uns
            </a>
            <Button variant="default" className="gradient-primary">
              Kontakt
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Startseite
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Dienstleistungen
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                Über uns
              </a>
              <Button variant="default" className="gradient-primary w-full">
                Kontakt
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;