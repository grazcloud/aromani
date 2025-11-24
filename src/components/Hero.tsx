import { useEffect, useState } from "react";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import banner4 from "@/assets/banner4.jpg";
import logoBanner from "@/assets/logo-banner.png";

const banners = [
  { image: banner1, alt: "Bolo artesanal com café" },
  { image: banner2, alt: "Tortas especiais" },
  { image: banner3, alt: "Sanduíche artesanal" },
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
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl" style={{ color: "hsl(43, 59%, 89%)" }}>
          <img 
            src={logoBanner} 
            alt="Casa Aromani" 
            className="h-40 md:h-52 w-auto mx-auto mb-8 animate-fade-in"
            style={{ filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5))" }}
          />
          <p className="text-xl md:text-3xl mb-8 font-light animate-fade-in" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)" }}>
            Onde o cuidado tem aroma e sabor
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)" }}>
            Padoca, Brunch e Cia • Brooklin, São Paulo
          </p>
        </div>
      </div>

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
