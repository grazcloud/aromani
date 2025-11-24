import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import logoVertical from "@/assets/logo-vertical.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <img
              src={logoVertical}
              alt="Casa Aromani"
              className="h-32 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm opacity-90 mb-4">
              Onde o cuidado tem aroma e sabor
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-sm opacity-90">Brooklin, São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-sm opacity-90">(11) XXXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Horário</p>
                  <p className="text-sm opacity-90">Seg - Sex: 7h - 20h</p>
                  <p className="text-sm opacity-90">Sáb - Dom: 8h - 18h</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <p className="text-sm opacity-90 mb-4">
              Siga-nos nas redes sociais e fique por dentro das novidades!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Casa Aromani. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
