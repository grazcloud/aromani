import { useState, useEffect } from "react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md"
      style={{ backgroundColor: "hsl(43, 59%, 89%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <img
              src={logoHorizontal}
              alt="Casa Aromani"
              className="h-16 w-auto cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-accent transition-colors font-medium text-sm"
              style={{ color: "hsl(236, 44%, 21%)" }}
            >
              A Casa Aromani
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="hover:text-accent transition-colors font-medium text-sm"
              style={{ color: "hsl(236, 44%, 21%)" }}
            >
              Produtos com Amor
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="hover:text-accent transition-colors font-medium text-sm"
              style={{ color: "hsl(236, 44%, 21%)" }}
            >
              Água na Boca
            </button>
            <button
              onClick={() => scrollToSection("pet")}
              className="hover:text-accent transition-colors font-medium text-sm"
              style={{ color: "hsl(236, 44%, 21%)" }}
            >
              Traga seu Pet
            </button>
            <button
              onClick={() => scrollToSection("encomendas")}
              className="hover:text-accent transition-colors font-medium text-sm"
              style={{ color: "hsl(236, 44%, 21%)" }}
            >
              Encomendas
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-accent text-accent-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium text-sm"
            >
              Fale com a gente
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
