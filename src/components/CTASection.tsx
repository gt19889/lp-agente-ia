import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, Calendar, CheckCircle, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";
const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Gostaria de agendar uma consultoria gratuita.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AEmpresa: ${formData.company}%0AMensagem: ${formData.message}`;
    window.open(`https://wa.link/93qb83?text=${whatsappMessage}`, '_blank');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const consultingBenefits = ["Análise completa do seu negócio", "Estratégia personalizada de crescimento", "Identificação de oportunidades perdidas", "Plano de ação com prazos definidos"];
  return <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-700 border-green-200 mb-6">
            Consultoria Gratuita
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Transformar
            </span>
            <br />Seus Resultados?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende uma conversa gratuita com nossos especialistas e descubra como multiplicar 
            sua receita com marketing digital e automação inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            {/* What you get */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  O que você recebe na consultoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {consultingBenefits.map((benefit, index) => <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">30min</div>
                <p className="text-sm text-muted-foreground">Duração</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">1:1</div>
                <p className="text-sm text-muted-foreground">Atendimento</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">24h</div>
                <p className="text-sm text-muted-foreground">Resposta</p>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MessageSquare className="w-10 h-10 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">Prefere conversar agora?</h3>
                    <p className="text-green-100 text-sm">Fale direto com nossos especialistas via WhatsApp</p>
                  </div>
                  <Button className="bg-white text-green-600 hover:bg-green-50 font-bold" onClick={() => window.open('https://wa.link/93qb83', '_blank')}>
                    Chamar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Form */}
          <Card className="border border-border/50 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Agendar Consultoria Gratuita</CardTitle>
              <CardDescription>
                Preencha o formulário e entraremos em contato em até 2 horas
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome completo *
                    </label>
                    <Input id="name" name="name" type="text" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className="border-border focus:border-primary" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      WhatsApp *
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" value={formData.phone} onChange={handleChange} required className="border-border focus:border-primary" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input id="email" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required className="border-border focus:border-primary" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input id="company" name="company" type="text" placeholder="Nome da empresa" value={formData.company} onChange={handleChange} className="border-border focus:border-primary" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Conte-nos sobre seu desafio
                  </label>
                  <Textarea id="message" name="message" placeholder="Descreva brevemente qual é o principal desafio da sua empresa..." value={formData.message} onChange={handleChange} rows={4} className="border-border focus:border-primary" />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 text-lg font-bold" size="lg">
                  Agendar Consultoria Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda em receber contato da GT Gestão Digital. 
                  Seus dados estão protegidos conforme a LGPD.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Bottom guarantee */}
        
      </div>
    </section>;
};
export default CTASection;