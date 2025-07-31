import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Maria Silva",
    company: "Loja de Moda Feminina",
    text: "A GT é responsável pelo tráfego pago da minha empresa e estou super satisfeita com o serviço. Os resultados apareceram rapidamente e o atendimento é excelente!",
    rating: 5,
    avatar: "M"
  }, {
    name: "Carlos Roberto",
    company: "Clínica Odontológica",
    text: "Toppp! Muito bem atendido e resolveu meu problema. O chatbot de IA para WhatsApp revolucionou nosso atendimento.",
    rating: 5,
    avatar: "C"
  }, {
    name: "Ana Paula",
    company: "E-commerce de Eletrônicos",
    text: "Empresa séria e de confiança! Triplicamos nossas vendas em apenas 3 meses com as estratégias da GT.",
    rating: 5,
    avatar: "A"
  }, {
    name: "Pedro Santos",
    company: "Curso Online",
    text: "Ótima!!!! O trabalho de SEO e tráfego pago aumentou muito nossos leads qualificados. Recomendo!",
    rating: 5,
    avatar: "P"
  }, {
    name: "Juliana Costa",
    company: "Clínica de Estética",
    text: "Incríveis! A automação que implementaram nos economiza 20 horas por semana e aumentou nossa conversão em 250%.",
    rating: 5,
    avatar: "J"
  }, {
    name: "Roberto Lima",
    company: "Loja de Suplementos",
    text: "Profissionais excepcionais! ROI positivo em menos de 30 dias. O Thomaz e Guilherme são muito atenciosos.",
    rating: 5,
    avatar: "R"
  }];
  return <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 mb-6">
            Avaliações Google
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que Nossos
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Clientes Dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Avaliação 5 estrelas no Google. Confira os depoimentos reais de empresários que transformaram seus negócios com a GT Gestão Digital.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5.0</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-muted-foreground">Avaliação Google</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <p className="text-muted-foreground">Clientes Atendidos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Taxa de Satisfação</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                
                {/* Testimonial text */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Social Proof */}
        <div className="bg-card rounded-2xl p-8 text-center border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Junte-se aos nossos clientes satisfeitos
          </h3>
          <p className="text-muted-foreground mb-6">
            Mais de 200 empresas já confiaram na GT Gestão Digital para acelerar seus resultados. 
            Seja a próxima história de sucesso!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors" onClick={() => window.open('https://wa.me/553171547107?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20agente%20de%20IA.', '_blank')}>
              Quero Meus Resultados Também
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all" onClick={() => window.open('https://www.google.com/search?q=gt+gestao+digital+avaliacoes', '_blank')}>
              Ver Todas as Avaliações
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;