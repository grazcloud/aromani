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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={logoHorizontal}
              alt="Casa Aromani"
              className="h-12 w-auto cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-accent text-accent-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
            >
              Contato
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
