import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import banner4 from "@/assets/banner4.jpg";

const banners = [
  { image: banner1, alt: "Bolo artesanal com café" },
  { image: banner2, alt: "Tortas especiais" },
  { image: banner3, alt: "Ambiente acolhedor" },
  { image: banner4, alt: "Café e pão de queijo" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner.image}
            alt={banner.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Casa Aromani
          </h1>
          <p className="text-xl md:text-3xl mb-8 font-light animate-fade-in">
            Onde o cuidado tem aroma e sabor
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in">
            Padoca, Brunch e Cia • Brooklin, São Paulo
          </p>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
