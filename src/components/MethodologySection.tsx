import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";

const MethodologySection = () => {
  const methodologySteps = [
    {
      icon: Target,
      number: "01",
      title: "Captar",
      description: "Identificamos e atraímos seu público ideal através de campanhas de tráfego pago otimizadas e SEO estratégico.",
      aiFeature: "IA para segmentação precisa de audiências",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      number: "02", 
      title: "Engajar",
      description: "Criamos relacionamento através de conteúdo relevante e automações inteligentes que nutrem leads continuamente.",
      aiFeature: "Chatbots de IA para engajamento 24/7",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Converter",
      description: "Transformamos prospects em clientes com estratégias de conversão baseadas em dados e automação de vendas.",
      aiFeature: "IA preditiva para otimizar conversões",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      number: "04",
      title: "Fidelizar",
      description: "Mantemos clientes engajados e geramos indicações através de relacionamento personalizado e valor contínuo.",
      aiFeature: "Automação de relacionamento inteligente",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
            Framework GT Digital
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossa Metodologia
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Comprovada
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um framework estruturado que combina estratégia, tecnologia e IA para maximizar seus resultados em cada etapa do funil de vendas.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {methodologySteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <CardHeader className="relative z-10 text-center pb-4">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-primary/20 mb-2">{step.number}</div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold mb-2">{step.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground mb-4">
                    {step.number === "01" 
                      ? "Captamos leads qualificados através de estratégias orgânicas (SEO, conteúdo) e campanhas de anúncios pagos otimizadas para seu público ideal."
                      : step.description}
                  </p>
                  
                  {/* AI Feature Badge */}
                  <div className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium">
                    {step.number === "01" ? "IA faz a pré-venda" : step.aiFeature}
                  </div>
                </CardContent>
                
                {/* Connection line for desktop */}
                {index < methodologySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-20">
                    <ArrowRight className="absolute -top-2 -right-1 w-5 h-5 text-primary/50" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border/50">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Por que nossa metodologia funciona?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Combinamos anos de experiência em marketing digital com as mais avançadas tecnologias de IA e automação. 
            Cada etapa é otimizada continuamente com base em dados reais, garantindo resultados consistentes e escaláveis.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+300%</div>
              <p className="text-sm text-muted-foreground">Aumento médio em leads</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">-60%</div>
              <p className="text-sm text-muted-foreground">Redução no CAC</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Automação ativa</p>
            </div>
          </div>
          
          <button 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            onClick={() => window.open('https://wa.me/553171547107?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20agente%20de%20IA.', '_blank')}
          >
            Quero Aplicar Esta Metodologia
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;