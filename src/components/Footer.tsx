import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">BusinessPro</h3>
                <p className="text-sm text-primary-foreground/70">Deutschland GmbH</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für professionelle Geschäftslösungen in Deutschland. 
              Wir bieten umfassende Dienstleistungen in den Bereichen Personalvermittlung, 
              Produktlieferung, Medizintechnik und Baumaterialien.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-sm">info@businesspro-deutschland.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-sm">+49 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-sm">Hamburg, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Dienstleistungen</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Personalvermittlung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Produktlieferung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Medizintechnik
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Baumaterialien
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Karriere
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © 2024 BusinessPro Deutschland GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;