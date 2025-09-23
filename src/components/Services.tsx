import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Package, Activity, Building2, ArrowRight } from "lucide-react";
import hrImage from "@/assets/service-hr.jpg";
import productsImage from "@/assets/service-products.jpg";
import medicalImage from "@/assets/service-medical.jpg";
import constructionImage from "@/assets/service-construction.jpg";

const Services = () => {
  const services = [
    {
      title: "Kader­posrednichestvo",
      subtitle: "Personalvermittlung",
      description: "Professionelle Personalvermittlung für Ihren Geschäftserfolg",
      features: [
        "Suche und Auswahl von Personal nach Geschäftsanforderungen",
        "Erfahrung in verschiedenen Branchen",
        "Zuverlässige und professionelle Kandidaten"
      ],
      icon: <Users className="h-8 w-8" />,
      image: hrImage,
      color: "service-hr",
      gradient: "from-service-hr/10 to-service-hr/5"
    },
    {
      title: "Produkte und Haushaltswaren",
      subtitle: "Produktlieferung",
      description: "Hochwertige Produkte und Haushaltswaren für Ihr Unternehmen",
      features: [
        "Lieferung von Lebensmitteln für Organisationen und Handel",
        "Haushaltswaren für Zuhause und Geschäft",
        "Zuverlässige Logistik und flexible Konditionen"
      ],
      icon: <Package className="h-8 w-8" />,
      image: productsImage,
      color: "service-products",
      gradient: "from-service-products/10 to-service-products/5"
    },
    {
      title: "Medizinische Ausrüstung",
      subtitle: "Medizintechnik",
      description: "Modernste medizinische Geräte und Technologien",
      features: [
        "Moderne Diagnosesysteme: MRT, CT",
        "Laser- und Therapiegeräte",
        "Beratung und Service-Betreuung"
      ],
      icon: <Activity className="h-8 w-8" />,
      image: medicalImage,
      color: "service-medical",
      gradient: "from-service-medical/10 to-service-medical/5"
    },
    {
      title: "Baumaterialien",
      subtitle: "Konstruktion",
      description: "Hochwertige Baumaterialien für Ihre Projekte",
      features: [
        "Naturstein und Marmor",
        "Beton für Bauprojekte",
        "Zuverlässige Lieferungen und flexible Bedingungen"
      ],
      icon: <Building2 className="h-8 w-8" />,
      image: constructionImage,
      color: "service-construction",
      gradient: "from-service-construction/10 to-service-construction/5"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Unsere Dienstleistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vier spezialisierte Bereiche, die Ihrem Unternehmen helfen, 
            erfolgreich zu wachsen und sich am deutschen Markt zu etablieren.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 border-border/50 bg-gradient-to-br ${service.gradient}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-${service.color}`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <p className={`text-${service.color} font-medium`}>
                  {service.subtitle}
                </p>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-${service.color} mt-2 flex-shrink-0`} />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className={`w-full border-${service.color}/20 text-${service.color} hover:bg-${service.color}/5 group-hover:border-${service.color}/40 transition-all duration-300`}
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12 border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Bereit für eine Zusammenarbeit?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam die beste Lösung für Ihr Unternehmen finden. 
              Kontaktieren Sie uns für eine unverbindliche Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary">
                Kostenlose Beratung
              </Button>
              <Button size="lg" variant="outline">
                Portfolio ansehen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;