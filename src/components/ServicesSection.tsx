import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Search, Settings, MessageSquare, Users, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      subtitle: "Google Ads & Meta Ads",
      description: "Campanhas otimizadas com IA que geram leads qualificados e reduzem o custo por aquisição em até 60%.",
      features: ["ROI médio de 400%", "Otimização diária", "Relatórios em tempo real"],
      badge: "Mais Popular"
    },
    {
      icon: Search,
      title: "SEO & Conteúdo",
      subtitle: "Rankeamento Orgânico",
      description: "Estratégias de SEO e criação de conteúdo que posicionam sua marca no topo do Google.",
      features: ["Aumento de 300% no tráfego", "Conteúdo otimizado", "Autoridade digital"],
      badge: null
    },
    {
      icon: Settings,
      title: "Integrações & Automação",
      subtitle: "ClickUp + Kommo CRM",
      description: "Automatize processos e integre ferramentas para uma gestão mais eficiente e produtiva.",
      features: ["Economia de 20h/semana", "Processos automatizados", "Integração completa"],
      badge: null
    },
    {
      icon: MessageSquare,
      title: "Agentes de IA para WhatsApp",
      subtitle: "Atendimento 24/7",
      description: "Chatbots inteligentes que qualificam leads e atendem clientes automaticamente.",
      features: ["Atendimento 24/7", "Qualificação automática", "Taxa de conversão +250%"],
      badge: "Novidade"
    },
    {
      icon: Users,
      title: "Consultoria Estratégica",
      subtitle: "Mentoria Personalizada",
      description: "Atendimento direto com os sócios para estratégias customizadas e crescimento acelerado.",
      features: ["Atendimento humanizado", "Estratégias personalizadas", "Resultados garantidos"],
      badge: null
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços de
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Alto Impacto
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas para acelerar o crescimento da sua empresa com tecnologia de ponta e expertise comprovada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20 relative overflow-hidden">
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {service.badge}
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{service.subtitle}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Quer saber como esses serviços podem transformar seu negócio?
          </p>
          <button 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            onClick={() => window.open('https://wa.link/93qb83', '_blank')}
          >
            Conversar com Especialista
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;