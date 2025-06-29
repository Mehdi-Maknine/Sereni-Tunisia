import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BedDouble, MapPin, CheckCircle, Coins, X } from "lucide-react";
import ResizableNavbar from "@/components/ResizableNavbar";
import { Button } from "@/components/ui/button";

const residences = [
  {
  name: "Résidence Les Dunes",
  image: ["/images/residence4.jpg"],
  location: "Sousse – Khzema Est",
  priceRange: "€850 – €1 250 / mese",
  amenities: ["Vista mare", "Wi-Fi veloce", "Pulizia settimanale", "Reception H24"],
  description: "Situata nella zona più vivace di Sousse, vicina alla spiaggia e a tutti i servizi. Ideale per chi ama la tranquillità senza rinunciare alla comodità."
  },
  {
    name: "Résidence El Bahia",
    image: ["/images/residence5.jpg"],
    location: "Sousse – Zona Turistica",
    priceRange: "€1 000 – €1 400 / mese",
    amenities: ["Suite con terrazza", "Servizio lavanderia", "Aria condizionata", "Area fitness"],
    description: "Struttura di fascia alta con vista panoramica, ideale per soggiorni lunghi e confortevoli. Offre servizi premium e ambiente elegante."
  },
  {
    name: "Résidence Oasis",
    image: ["/images/residence6.jpg"],
    location: "Chott Mariem – Litorale",
    priceRange: "€750 – €1 100 / mese",
    amenities: ["Giardino privato", "Servizio pasti", "Navetta gratuita", "Ambulatorio interno"],
    description: "Ambiente familiare immerso nel verde, a pochi minuti dal mare. Pensata per anziani autosufficienti che cercano serenità e supporto quotidiano."
  },
  {
    name: "Résidence Floriane",
    image: ["/images/residence7.jpg","/images/residence7-2.jpg"],
    location: "Hammamet – Nord",
    priceRange: "€920 – €1 350 / mese",
    amenities: ["Balcone privato", "Piscina", "Assistenza medica", "Ascensore"],
    description: "Design moderno e ambienti rilassanti. Ottima posizione per passeggiate, attività all'aperto e comfort quotidiano."
  },
  {
    name: "Résidence Jasmine",
    image: ["/images/residence1.jpg"],
    location: "Sousse",
    priceRange: "€800 – €1200 / mese",
    amenities: ["Bagno privato", "Wi-Fi", "Ascensore", "Aria condizionata"],
    description:
      "Una struttura moderna nel cuore di Sousse, a pochi passi dal mare. Offre camere luminose e personale sempre disponibile.",
  },
  {
    name: "Résidence Palmier",
    image: ["/images/residence2.jpg"],
    location: "Hammamet",
    priceRange: "€950 – €1300 / mese",
    amenities: ["Balcone privato", "Vista mare", "Sicurezza 24/7", "Lavanderia interna"],
    description:
      "Goditi la brezza marina in questa elegante residenza vicino al centro storico di Hammamet. Ambiente sereno e familiare.",
  },
  {
    name: "Résidence Oasi del Sole",
    image: ["/images/residence3.jpg"],
    location: "Monastir",
    priceRange: "€1000 – €1400 / mese",
    amenities: ["Palestra", "Giardino", "Ristorante interno", "Area relax"],
    description:
      "Un rifugio tranquillo per il tuo soggiorno, con ampi spazi verdi e attività ricreative. Perfetto per chi cerca relax e socialità.",
  },
  {
    name: "Résidence El Medina",
    image: ["/images/residence4.jpg"],
    location: "Mahdia",
    priceRange: "€850 – €1100 / mese",
    amenities: ["Camere singole", "TV satellitare", "Reception H24", "Accesso facilitato"],
    description:
      "Situata in una zona storica, questa residenza unisce comfort e tradizione tunisina. Ideale per chi ama la cultura locale.",
  },
];

export default function Residenze() {
  const [selected, setSelected] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const nextImage = () => {
    if (!selected) return;
    setCurrentImg((prev) => (prev + 1) % selected.image.length);
  };

  const prevImage = () => {
    if (!selected) return;
    setCurrentImg((prev) => (prev - 1 + selected.image.length) % selected.image.length);
  };

  return (
    <section className="py-16  bg-[#faf7f3] ">
      <div className="md:px-12 px-4">
      <ResizableNavbar />
      <div className="h-16 md:h-14 " />

      <div className="mb-10 text-center flex flex-col items-center justify-center">
        <div className="flex items-center gap-4 mb-4">
          <img src="/icons/house-relax.svg" alt="Casa Serena" className="w-12 h-12" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">La tua casa lontano da casa</h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Abbiamo selezionato per te residenze accoglienti, moderne e sicure per vivere al meglio la tua esperienza in Tunisia.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {residences.map((residence, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            onClick={() => {
              setSelected(residence);
              setCurrentImg(0);
            }}
          >
            <img src={residence.image[0]} alt={residence.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{residence.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                <MapPin size={16} /> {residence.location}
              </p>
              <p className="text-green-600 text-sm flex items-center gap-2 font-medium">
                <Coins size={16} /> <span className="line-through opacity-70">{residence.priceRange}</span> <span className="text-sm italic">(incluso nel pacchetto)</span>
              </p>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                {residence.amenities.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-4xl w-full p-6 relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button over image */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 z-20 bg-white/80 hover:bg-white text-black rounded-full p-2"
              >
                <X />
              </button>

              {/* Image Carousel */}
              <div className="relative w-full h-64 md:h-96 mb-4">
                <img
                  src={selected.image[currentImg]}
                  alt={selected.name}
                  className="w-full h-full object-cover rounded"
                />
                {selected.image.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-1"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-1"
                    >
                      →
                    </button>
                    <div className="absolute bottom-3 w-full flex justify-center gap-2">
                      {selected.image.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i === currentImg ? "bg-primary" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-1">{selected.name}</h3>
              <p className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
                <MapPin size={16} /> {selected.location}
              </p>
              <p className="text-green-700 font-semibold mb-4 flex items-center gap-2">
                <Coins size={16} /> <span className="line-through">{selected.priceRange}</span> <span className="ml-1 text-sm italic">(incluso)</span>
              </p>
              <p className="text-gray-700 mb-4 text-sm">{selected.details || selected.description}</p>
              <ul className="text-sm space-y-1">
                {selected.amenities.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
      <div className="h-16 md:h-12" />

      <section className="w-full py-20 px-6  bg-mediterranean-green text-white text-center">
        <div className=" px-4 container mx-auto max-w-2xl">
          <h3 className="text-3xl font-bold mb-4">Hai trovato la tua residenza ideale?</h3>
          <p className="text-lg mb-6">Contattaci subito per prenotare o ricevere maggiori informazioni.</p>
          <Button
            size="lg"
            className="bg-white text-mediterranean-blue font-semibold hover:bg-gray-100 transition"
            onClick={() => document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contattaci Ora
          </Button>
        </div>
      </section>
    </section>
    
    
  );
}