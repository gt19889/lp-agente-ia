import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Brain, MessageSquare, Settings, Zap, ArrowRight, Users, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: "Atendimento 24/7",
      subtitle: "Nunca Para de Trabalhar",
      description: "Seu agente virtual atende clientes 24 horas por dia, 7 dias por semana, 365 dias por ano. Nunca descansa, não tira férias e não fica doente.",
      features: ["Disponível 24/7/365", "Zero pausas ou intervalos", "Sem feriados ou férias"],
      badge: "Essencial"
    },
    {
      icon: Brain,
      title: "Conhecimento Total",
      subtitle: "Sabe Tudo Sobre Sua Empresa",
      description: "Treinado com todas as informações da sua empresa: produtos, serviços, preços, políticas e procedimentos.",
      features: ["Base de conhecimento completa", "Respostas precisas", "Informações sempre atualizadas"],
      badge: "Inteligente"
    },
    {
      icon: MessageSquare,
      title: "Conversas Naturais",
      subtitle: "Parece um Humano Real",
      description: "Utiliza IA avançada para manter conversas naturais e envolventes, criando uma experiência indistinguível de um atendente humano.",
      features: ["Linguagem natural", "Empatia artificial", "Personalização total"],
      badge: null
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      subtitle: "Zero Tempo de Espera",
      description: "Responde imediatamente a todas as mensagens, eliminando filas de espera e aumentando a satisfação do cliente.",
      features: ["Resposta em milissegundos", "Sem tempo de espera", "Atendimento simultâneo ilimitado"],
      badge: null
    },
    {
      icon: Settings,
      title: "Personalização Total",
      subtitle: "Agente Único da Sua Empresa",
      description: "Configuramos o agente com a personalidade, tom de voz e conhecimento específico da sua empresa para atendimento personalizado.",
      features: ["Tom de voz personalizado", "Conhecimento específico", "Respostas consistentes"],
      badge: null
    },
    {
      icon: CheckCircle,
      title: "Qualificação Inteligente",
      subtitle: "Identifica Clientes Prontos",
      description: "Qualifica automaticamente leads, identifica intenção de compra e direciona oportunidades quentes para sua equipe.",
      features: ["Lead scoring automático", "Identificação de intenção", "Priorização inteligente"],
      badge: "Vendas"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por Que Nosso Agente é
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Superior
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra as vantagens exclusivas do agente de IA mais avançado do Brasil para atendimento no WhatsApp.
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
            Pronto para ter o melhor agente de WhatsApp trabalhando para você?
          </p>
          <button 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            onClick={() => window.open('https://wa.me/553174547107?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20agente%20de%20IA', '_blank')}
          >
            Testar Agente Grátis
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;