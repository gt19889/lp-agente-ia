import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl font-bold mb-2">Política de Privacidade</h1>
            <p className="text-muted-foreground">Última atualização: Janeiro de 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
              <p className="mb-4">
                A GT Gestão Digital coleta as seguintes informações:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Dados de identificação (nome, email, telefone)</li>
                <li>Informações da empresa (razão social, CNPJ, segmento)</li>
                <li>Dados de navegação no site</li>
                <li>Informações de campanhas publicitárias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Como Utilizamos suas Informações</h2>
              <p className="mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Prestar nossos serviços de marketing digital</li>
                <li>Personalizar campanhas publicitárias</li>
                <li>Comunicar sobre nossos serviços</li>
                <li>Melhorar nossos processos e atendimento</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Dados</h2>
              <p className="mb-4">
                Podemos compartilhar suas informações com:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Plataformas publicitárias (Google, Meta, etc.)</li>
                <li>Ferramentas de automação e CRM</li>
                <li>Prestadores de serviços terceirizados</li>
                <li>Autoridades competentes, quando exigido por lei</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Segurança dos Dados</h2>
              <p className="mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger 
                suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Retenção de Dados</h2>
              <p className="mb-4">
                Mantemos suas informações pelo tempo necessário para cumprir as finalidades 
                descritas nesta política ou conforme exigido por lei.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
              <p className="mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de dados</li>
                <li>Revogar consentimentos</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="mb-4">
                Utilizamos cookies para melhorar sua experiência em nosso site e personalizar 
                conteúdo. Você pode gerenciar suas preferências de cookies nas configurações 
                do seu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Alterações na Política</h2>
              <p className="mb-4">
                Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças 
                significativas através dos nossos canais de comunicação.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
              <p className="mb-4">
                Para questões sobre privacidade ou exercer seus direitos:
              </p>
              <p>
                Email: contato@gtgestaodigital.com.br<br />
                CNPJ: 50.371.469/0001-05<br />
                Endereço: Belo Horizonte, MG - Brasil
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;