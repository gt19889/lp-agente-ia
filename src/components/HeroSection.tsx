import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, Zap } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img src="/lovable-uploads/7f8baf30-c892-41bc-8982-e7d5e40dc5a0.png" alt="GT Gestão Digital" className="h-20 md:h-24 mx-auto mb-6" />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Agência #1 em Automação com IA
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transforme Sua Empresa com
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Marketing Digital{" "}
            </span>
            e Automação de IA
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Aumente seus resultados em <strong>300%</strong> com nossas estratégias comprovadas de tráfego pago, 
            SEO e agentes de IA para WhatsApp.
          </p>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Target className="w-5 h-5 text-primary" />
              <span>Resultados em 30 dias</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>ROI médio de 400%</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Zap className="w-5 h-5 text-primary" />
              <span>Automação 24/7</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.open('https://wa.link/93qb83', '_blank')}>
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300">
              Ver Nossos Cases
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 text-sm text-muted-foreground">
            
            <div className="flex flex-wrap justify-center gap-6 opacity-60">
              <span className="bg-secondary px-3 py-1 rounded-md">Google Partner</span>
              <span className="bg-secondary px-3 py-1 rounded-md">RD Station</span>
              <span className="bg-secondary px-3 py-1 rounded-md">ClickUp</span>
              <span className="bg-secondary px-3 py-1 rounded-md">Kommo CRM</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;