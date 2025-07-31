import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingUp,
      value: "+487%",
      label: "Aumento em conversões",
      description: "E-commerce de moda feminina"
    },
    {
      icon: DollarSign,
      value: "R$ 2.3M",
      label: "Em receita gerada",
      description: "Clínica de estética em 12 meses"
    },
    {
      icon: Users,
      value: "+15.240",
      label: "Leads qualificados",
      description: "Curso online de marketing"
    },
    {
      icon: Clock,
      value: "23 dias",
      label: "Para ROI positivo",
      description: "Loja de suplementos"
    }
  ];

  const caseStudies = [
    {
      company: "Loja Virtual de Eletrônicos",
      industry: "E-commerce",
      challenge: "Alto custo de aquisição e baixa conversão",
      solution: "Implementação de campanhas Google Ads + chatbot IA",
      results: [
        "Redução de 68% no CAC",
        "Aumento de 340% nas vendas",
        "ROI de 520% em 60 dias"
      ],
      timeframe: "3 meses"
    },
    {
      company: "Clínica Odontológica",
      industry: "Saúde",
      challenge: "Dificuldade para agendar consultas",
      solution: "Automação WhatsApp + SEO local + tráfego pago",
      results: [
        "300 agendamentos/mês",
        "Aumento de 250% na receita",
        "Atendimento 24/7 automatizado"
      ],
      timeframe: "4 meses"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-700 border-green-200 mb-6">
            Resultados Reais
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Números que
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Comprovam
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 200 empresas já transformaram seus resultados com nossas estratégias. 
            Veja alguns casos de sucesso que demonstram o poder das nossas soluções.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {result.value}
                  </CardTitle>
                  <CardDescription className="font-medium text-foreground">
                    {result.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Cases de Sucesso Detalhados
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl font-bold">{caseStudy.company}</CardTitle>
                      <Badge variant="secondary" className="mt-2">{caseStudy.industry}</Badge>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {caseStudy.timeframe}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Desafio:</h4>
                    <p className="text-muted-foreground">{caseStudy.challenge}</p>
                  </div>
                  
                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solução:</h4>
                    <p className="text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                  
                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Resultados:</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-background text-foreground rounded-2xl p-8 md:p-12 text-center border">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para ser o próximo case de sucesso?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma conversa gratuita e descubra como podemos multiplicar os resultados da sua empresa em até 90 dias.
          </p>
          
          <button 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2 shadow-lg"
            onClick={() => window.open('https://wa.me/553171547107?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20agente%20de%20IA.', '_blank')}
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;