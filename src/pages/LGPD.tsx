import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LGPD = () => {
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
            <h1 className="text-3xl font-bold mb-2">Lei Geral de Proteção de Dados (LGPD)</h1>
            <p className="text-muted-foreground">Última atualização: Janeiro de 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Nosso Compromisso com a LGPD</h2>
              <p className="mb-4">
                A GT Gestão Digital está comprometida em cumprir integralmente a Lei Geral de 
                Proteção de Dados (Lei nº 13.709/2018) e garantir a proteção dos dados pessoais 
                de nossos clientes, parceiros e visitantes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Bases Legais para Tratamento</h2>
              <p className="mb-4">
                Tratamos dados pessoais com base nas seguintes hipóteses legais:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Consentimento do titular dos dados</li>
                <li>Execução de contrato ou procedimentos preliminares</li>
                <li>Cumprimento de obrigação legal</li>
                <li>Legítimo interesse da GT Gestão Digital</li>
                <li>Exercício regular de direitos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Direitos dos Titulares</h2>
              <p className="mb-4">
                Conforme a LGPD, você possui os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização ou eliminação:</strong> Solicitar a anonimização ou exclusão de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Informação sobre compartilhamento:</strong> Saber com quem compartilhamos seus dados</li>
                <li><strong>Revogação do consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Medidas de Segurança</h2>
              <p className="mb-4">
                Implementamos medidas técnicas e organizacionais adequadas para proteger os 
                dados pessoais contra:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Acesso não autorizado</li>
                <li>Destruição acidental ou ilícita</li>
                <li>Perda, alteração ou comunicação indevida</li>
                <li>Qualquer forma de tratamento inadequado ou ilícito</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Incidentes de Segurança</h2>
              <p className="mb-4">
                Em caso de incidente de segurança que possa acarretar risco aos direitos e 
                liberdades dos titulares, comunicaremos:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>À Autoridade Nacional de Proteção de Dados (ANPD)</li>
                <li>Aos titulares dos dados afetados</li>
                <li>Em prazo razoável e conforme determinado pela ANPD</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Encarregado de Dados (DPO)</h2>
              <p className="mb-4">
                Nosso Encarregado de Proteção de Dados está disponível para esclarecer dúvidas 
                e receber solicitações relacionadas ao tratamento de dados pessoais.
              </p>
              <p className="mb-4">
                <strong>Contato do DPO:</strong> contato@gtgestaodigital.com.br
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Como Exercer seus Direitos</h2>
              <p className="mb-4">
                Para exercer qualquer um de seus direitos sob a LGPD, entre em contato conosco:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email: contato@gtgestaodigital.com.br</li>
                <li>Assunto: "Solicitação LGPD"</li>
                <li>Prazo de resposta: até 15 dias úteis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Reclamações</h2>
              <p className="mb-4">
                Caso não esteja satisfeito com nossa resposta, você pode apresentar reclamação 
                à Autoridade Nacional de Proteção de Dados (ANPD) através do site: 
                https://www.gov.br/anpd/pt-br
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Atualizações</h2>
              <p className="mb-4">
                Esta política será atualizada sempre que necessário para manter conformidade 
                com a LGPD e melhores práticas de proteção de dados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Dados da Empresa</h2>
              <p>
                <strong>GT Gestão Digital</strong><br />
                CNPJ: 50.371.469/0001-05<br />
                Email: contato@gtgestaodigital.com.br<br />
                Endereço: Belo Horizonte, MG - Brasil
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LGPD;