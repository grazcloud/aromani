import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import banner1 from "@/assets/banner1.jpg";
import banner4 from "@/assets/banner4.jpg";
import galleryToastBacon from "@/assets/gallery-toast-bacon.jpg";
import galleryToastSalmon from "@/assets/gallery-toast-salmon.jpg";
import galleryTorta from "@/assets/gallery-torta.jpg";
import galleryCarolinas from "@/assets/gallery-carolinas.jpg";
import galleryBoloChocolate from "@/assets/gallery-bolo-chocolate.jpg";
import galleryTortasVitrine from "@/assets/gallery-tortas-vitrine.jpg";
import gallerySanduiche from "@/assets/gallery-sanduiche.jpg";
import galleryPadaria from "@/assets/gallery-padaria.jpg";
import galleryPaes from "@/assets/gallery-paes.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Bruschetta artesanal" },
    { src: galleryToastSalmon, alt: "Toast de salmão" },
    { src: galleryTorta, alt: "Torta artesanal" },
    { src: galleryCarolinas, alt: "Carolinas da confeitaria" },
    { src: galleryBoloChocolate, alt: "Bolo de chocolate Aromani" },
    { src: galleryTortasVitrine, alt: "Tortas na vitrine" },
    { src: gallerySanduiche, alt: "Sanduíche artesanal" },
    { src: galleryToastBacon, alt: "Toast com bacon e ovos" },
    { src: galleryPadaria, alt: "Interior da padaria" },
    { src: galleryPaes, alt: "Pães artesanais" },
    { src: banner1, alt: "Bolo artesanal com café" },
    { src: gallery2, alt: "Bruschetta com drink especial" },
    { src: banner4, alt: "Café e pão de queijo" },
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1f3c98" }}>
            Água na Boca
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#b5561c" }}></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos produtos e o ambiente acolhedor 
            que preparamos para você.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollSnapType: "x mandatory" }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all flex-shrink-0"
              style={{ width: "320px", height: "420px", scrollSnapAlign: "start" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          ← Deslize para ver mais →
        </p>
      </div>
    </section>
  );
};

export default Gallery;
