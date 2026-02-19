import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import logoVertical from "@/assets/logo-vertical.png";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <img
              src={logoVertical}
              alt="Casa Aromani"
              className="h-44 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm opacity-90 mb-4">
              Onde o cuidado tem aroma e sabor
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "hsl(43, 59%, 89%)" }}>Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-sm opacity-90">R. Bacaetava, 344</p>
                  <p className="text-sm opacity-90">Brooklin, São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <WhatsAppIcon />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/551155318385"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-90 hover:opacity-100 underline-offset-2 hover:underline"
                  >
                    (11) 5531-8385
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Horário</p>
                  <p className="text-sm opacity-90">Seg - Sex: Das 06h às 20h</p>
                  <p className="text-sm opacity-90">Sáb - Dom: Das 7h às 16h</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "hsl(43, 59%, 89%)" }}>Redes Sociais</h3>
            <p className="text-sm opacity-90 mb-4">
              Siga-nos nas redes sociais e fique por dentro das novidades!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/casa.aromani/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
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
