import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const navItems = [
  { label: "A Casa Aromani", id: "sobre" },
  { label: "Produtos com Amor", id: "produtos" },
  { label: "Água na Boca", id: "galeria" },
  { label: "Traga seu Pet", id: "pet" },
  { label: "Encomendas", id: "encomendas" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-accent transition-colors font-medium text-sm"
                style={{ color: "hsl(236, 44%, 21%)" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-accent text-accent-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium text-sm"
            >
              Fale com a gente
            </button>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 rounded-md transition-colors"
            style={{ color: "hsl(236, 44%, 21%)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-6 flex flex-col gap-4"
          style={{ backgroundColor: "hsl(43, 59%, 89%)", borderColor: "hsl(43, 40%, 78%)" }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left font-medium text-base py-2 border-b transition-opacity hover:opacity-70"
              style={{ color: "hsl(236, 44%, 21%)", borderColor: "hsl(43, 40%, 78%)" }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contato")}
            className="mt-2 bg-accent text-accent-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-base text-center"
          >
            Fale com a gente
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
