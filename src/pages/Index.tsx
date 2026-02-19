import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import PetFriendly from "@/components/PetFriendly";
import Encomendas from "@/components/Encomendas";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <PetFriendly />
        <Encomendas />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
