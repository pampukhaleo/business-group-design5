import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ihr zuverlässiger
            <span className="block text-primary-light">Business-Partner</span>
            in Deutschland
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Professionelle Dienstleistungen in vier Schlüsselbereichen: 
            Personalvermittlung, Produktlieferung, Medizintechnik und Baumaterialien.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="gradient-primary text-lg h-14 px-8">
              Unsere Services entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-white border-white/30 hover:bg-white/10 hover:border-white"
            >
              Beratung anfordern
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">100% Zuverlässig</div>
                <div className="text-sm text-white/70">Vertrauensvolle Partnerschaft</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">500+ Projekte</div>
                <div className="text-sm text-white/70">Erfolgreich abgeschlossen</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white/90">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">15+ Jahre</div>
                <div className="text-sm text-white/70">Erfahrung am Markt</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;