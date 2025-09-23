import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Globe, Handshake } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Präzision",
      description: "Wir arbeiten mit höchster Sorgfalt und achten auf jedes Detail"
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Vertrauen",
      description: "Langfristige Partnerschaften basieren auf Zuverlässigkeit"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Expertise",
      description: "Umfassende Branchenkenntnisse in verschiedenen Märkten"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Qualität",
      description: "Höchste Standards in allen unseren Dienstleistungen"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Über BusinessPro Deutschland
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seit über 15 Jahren sind wir Ihr vertrauensvoller Partner für professionelle 
            Geschäftslösungen in Deutschland. Unser Unternehmen hat sich auf vier 
            Kernbereiche spezialisiert, die entscheidend für den Erfolg moderner 
            Unternehmen sind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Unsere Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Wir verstehen die einzigartigen Herausforderungen des deutschen Marktes 
              und bieten maßgeschneiderte Lösungen, die Ihrem Unternehmen helfen, 
              erfolgreich zu wachsen und zu gedeihen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Von der Personalvermittlung bis hin zur Lieferung hochwertiger Produkte 
              und Materialien - wir sind Ihr zuverlässiger Partner für nachhaltigen 
              Geschäftserfolg.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            {values.map((value, index) => (
              <Card key={index} className="gradient-service shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Erfolgreiche Projekte</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Jahre Erfahrung</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Zufriedene Kunden</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Kundensupport</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;