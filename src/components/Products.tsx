import { Croissant, Cake, Coffee as CoffeeIcon, UtensilsCrossed } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: Croissant,
      title: "Pães Artesanais",
      description: "Pães frescos, crocantes por fora e macios por dentro, assados diariamente",
      items: ["Pão Francês", "Ciabatta", "Integral", "Multigrãos"],
    },
    {
      icon: Cake,
      title: "Bolos & Tortas",
      description: "Doces irresistíveis feitos com receitas especiais e ingredientes premium",
      items: ["Bolo de Chocolate", "Torta de Limão", "Cheesecake", "Tortas Artesanais"],
    },
    {
      icon: CoffeeIcon,
      title: "Cafeteria",
      description: "Cafés especiais, chás e bebidas preparadas com carinho",
      items: ["Espresso", "Cappuccino", "Café Coado", "Chás Especiais"],
    },
    {
      icon: UtensilsCrossed,
      title: "Brunch",
      description: "Opções deliciosas para seu café da manhã ou brunch especial",
      items: ["Sanduíches", "Tapiocas", "Ovos Mexidos", "Bruschettas"],
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1f3c98" }}>
          Produtos com Amor
        </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#b5561c" }}></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa variedade de produtos artesanais, preparados 
            diariamente com ingredientes selecionados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-colors" style={{ backgroundColor: "rgba(181, 86, 28, 0.1)" }}>
                  <category.icon className="w-7 h-7" style={{ color: "#b5561c" }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#b5561c" }}>
                    {category.title}
                  </h3>
                  <p className="text-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
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
      </div>
    </section>
  );
};

export default Products;
