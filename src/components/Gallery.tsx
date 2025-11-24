import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import banner1 from "@/assets/banner1.jpg";
import banner4 from "@/assets/banner4.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Bruschetta artesanal" },
    { src: gallery2, alt: "Bruschetta com drink especial" },
    { src: banner1, alt: "Bolo artesanal com café" },
    { src: banner4, alt: "Café e pão de queijo" },
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Galeria
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos produtos e o ambiente acolhedor 
            que preparamos para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all aspect-[3/4]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
