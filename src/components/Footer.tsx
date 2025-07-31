import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Tráfego Pago (Google Ads/Meta)",
    "SEO & Marketing de Conteúdo",
    "Automação com IA",
    "Agentes de IA para WhatsApp",
    "Consultoria Estratégica"
  ];

  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#services" },
    { name: "Metodologia", href: "#methodology" },
    { name: "Resultados", href: "#results" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" }
  ];

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/7f8baf30-c892-41bc-8982-e7d5e40dc5a0.png" 
                alt="GT Gestão Digital" 
                className="h-8"
              />
              <h3 className="text-2xl font-bold">GT Gestão Digital</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Agência especializada em marketing digital, automação com IA e crescimento acelerado 
              para pequenas e médias empresas brasileiras.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60" />
                <a 
                  href="mailto:contato@gtgestaodigital.com.br" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  contato@gtgestaodigital.com.br
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60" />
                <a 
                  href="https://wa.me/553171547107?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20agente%20de%20IA." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  WhatsApp - Atendimento Direto
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/60" />
                <span className="text-white/80">Belo Horizonte, MG - Brasil</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white/60" />
                <span className="text-white/80">Seg-Sex: 9h às 18h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Siga-nos</h5>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/80 text-sm">
            <div>© {currentYear} GT Gestão Digital. Todos os direitos reservados.</div>
            <div className="mt-1 select-none pointer-events-none">CNPJ: 50.371.469/0001-05</div>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/politica-de-privacidade" className="text-white/80 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="text-white/80 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="/lgpd" className="text-white/80 hover:text-white transition-colors">
              LGPD
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm mb-4">Certificações e Parcerias</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full">Google Partner</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">RD Station</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Active Campaign</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Meta Business</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;