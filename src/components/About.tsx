import { Coffee, Heart, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "hsl(24, 74%, 41%)" }}>
            Sobre a Casa Aromani
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            No coração do Brooklin, a Casa Aromani é mais do que uma padaria. 
            É um refúgio onde cada produto é feito com dedicação e carinho, 
            transformando momentos simples em experiências memoráveis.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa missão é oferecer produtos artesanais de alta qualidade, 
            preparados diariamente com ingredientes selecionados. Do pão quentinho 
            do café da manhã aos doces irresistíveis da tarde, cada item carrega 
            o sabor do cuidado e da tradição.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "hsl(24, 74%, 41%)" }}>Feito com Amor</h3>
            <p className="text-foreground">
              Cada receita é preparada com dedicação e paixão, seguindo tradições 
              que passam de geração em geração.
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "hsl(24, 74%, 41%)" }}>Produtos Frescos</h3>
            <p className="text-foreground">
              Tudo é feito diariamente, garantindo frescor e qualidade 
              em cada mordida.
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "hsl(24, 74%, 41%)" }}>Tradição & Qualidade</h3>
            <p className="text-foreground">
              Combinamos técnicas tradicionais com ingredientes selecionados 
              para resultados excepcionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
