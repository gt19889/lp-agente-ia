import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao site
              </Button>
            </Link>
            <h1 className="text-3xl font-bold mb-2">Termos de Uso</h1>
            <p className="text-muted-foreground">Última atualização: Janeiro de 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p className="mb-4">
                Ao acessar e utilizar os serviços da GT Gestão Digital, você concorda em ficar 
                vinculado a estes Termos de Uso e todas as leis e regulamentos aplicáveis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
              <p className="mb-4">
                A GT Gestão Digital oferece serviços de marketing digital, incluindo:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Tráfego Pago (Google Ads e Meta Ads)</li>
                <li>SEO e Marketing de Conteúdo</li>
                <li>Automação com Inteligência Artificial</li>
                <li>Agentes de IA para WhatsApp</li>
                <li>Consultoria Estratégica</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Responsabilidades do Cliente</h2>
              <p className="mb-4">
                O cliente se compromete a:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fornecer informações precisas e atualizadas</li>
                <li>Cooperar com a equipe da GT Gestão Digital</li>
                <li>Cumprir os prazos acordados</li>
                <li>Respeitar os direitos de propriedade intelectual</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitação de Responsabilidade</h2>
              <p className="mb-4">
                A GT Gestão Digital não se responsabiliza por:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Resultados específicos de campanhas publicitárias</li>
                <li>Mudanças nas políticas de plataformas terceiras</li>
                <li>Interrupções nos serviços devido a fatores externos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Propriedade Intelectual</h2>
              <p className="mb-4">
                Todos os materiais desenvolvidos pela GT Gestão Digital permanecem de propriedade 
                do cliente após o pagamento integral dos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cancelamento e Reembolso</h2>
              <p className="mb-4">
                Os termos de cancelamento e reembolso são específicos para cada serviço e 
                serão detalhados no contrato individual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Alterações nos Termos</h2>
              <p className="mb-4">
                A GT Gestão Digital reserva-se o direito de modificar estes termos a qualquer 
                momento, notificando os clientes sobre as alterações.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
              <p className="mb-4">
                Para questões sobre estes termos, entre em contato:
              </p>
              <p>
                Email: contato@gtgestaodigital.com.br<br />
                CNPJ: 50.371.469/0001-05
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;