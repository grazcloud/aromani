import petFriendly from "@/assets/pet-friendly.png";

const PetFriendly = () => {
  return (
    <section id="pet" className="py-20" style={{ backgroundColor: "hsl(43, 59%, 89%)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1f3c98" }}>
            Traga seu Pet
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#b5561c" }}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={petFriendly}
                alt="Pet Friendly - Casa Aromani"
                className="w-64 h-64 object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-lg md:text-xl mb-6" style={{ color: "hsl(236, 44%, 21%)" }}>
                Na Casa Aromani, seu pet é muito bem-vindo!
              </p>
              <p className="text-base md:text-lg" style={{ color: "hsl(236, 44%, 21%)" }}>
                Temos uma área externa especialmente preparada para receber você e seu 
                companheiro de quatro patas com todo conforto e carinho que vocês merecem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetFriendly;
