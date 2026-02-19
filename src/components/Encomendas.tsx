import { Gift, Calendar, Coffee } from "lucide-react";

const Encomendas = () => {
  const options = [
    {
      icon: Gift,
      title: "Festas",
      description: "Bolos personalizados, doces e salgados para tornar sua festa ainda mais especial. Planejamos tudo com carinho para você.",
      items: ["Bolos Personalizados", "Mesa de Doces", "Salgados", "Tortas Especiais"],
    },
    {
      icon: Calendar,
      title: "Eventos",
      description: "Cardápios completos para eventos corporativos, aniversários e celebrações de todos os tamanhos.",
      items: ["Finger Foods", "Mini Sanduíches", "Tortas Salgadas", "Brunch Completo"],
    },
    {
      icon: Coffee,
      title: "Coffee Breaks",
      description: "Coffee breaks sofisticados para reuniões e eventos corporativos, com produtos frescos e apresentação impecável.",
      items: ["Café & Bebidas", "Pães Artesanais", "Frios e Queijos", "Doces e Bolos"],
    },
  ];

  return (
    <section id="encomendas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1f3c98" }}>
            Encomendas
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#b5561c" }}></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Realizamos encomendas para festas, eventos e coffee breaks com todo 
            o cuidado e carinho que a Casa Aromani tem a oferecer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-lg transition-all group text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 transition-colors" style={{ backgroundColor: "rgba(181, 86, 28, 0.1)" }}>
                <option.icon className="w-8 h-8" style={{ color: "#b5561c" }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#b5561c" }}>
                {option.title}
              </h3>
              <p className="text-foreground mb-4">
                {option.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {option.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Entre em contato para fazer seu pedido com antecedência!
          </p>
          <a
            href="https://wa.me/551155318385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-primary-foreground transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#b5561c" }}
          >
            Fazer Encomenda pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Encomendas;
