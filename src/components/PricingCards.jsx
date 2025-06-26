import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Plane, BedDouble, MountainSnow, Heart } from "lucide-react";

const pricingPlans = [
  {
    title: "Pacchetto 6 Mesi",
    price: "3.000€",
    oldPrice: "",
    features: [
      "Soggiorno in residenza a scelta",
      "Assistenza medica quotidiana",
      "Servizio pasti incluso",
      "Attività ricreative settimanali"
    ],
    image: "/images/plan6.jpg",
    icons: [<BedDouble size={20} />, <Heart size={20} />],
    description: "Ideale per chi vuole provare un soggiorno sereno all’estero senza impegno a lungo termine. Il pacchetto di 6 mesi include tutti i servizi essenziali per garantire benessere, comfort e sicurezza."
  },
  {
    title: "Pacchetto 1 Anno",
    price: "5.000€",
    oldPrice: "6.000€",
    features: [
      "Soggiorno in residenza a scelta",
      "Supporto 24/7",
      "Voli A/R inclusi",
      "Copertura assicurativa",
      "Visite mediche periodiche"
    ],
    image: "/images/plan12.jpg",
    icons: [<Plane size={20} />, <BedDouble size={20} />, <Heart size={20} />],
    description: "Pensato per chi desidera stabilità e una nuova routine in un ambiente accogliente. L’assistenza continua, i voli e la copertura assicurativa offrono un pacchetto completo, senza pensieri."
  },
  {
    title: "Pacchetto 2 Anni",
    price: "9.000€",
    oldPrice: "12.000€",
    features: [
      "Tutto incluso come nel pacchetto 1 anno",
      "Bonus attività extra",
      "Check-up annuale gratuito"
    ],
    image: "/images/plan24.jpg",
    icons: [<Plane size={20} />, <BedDouble size={20} />, <MountainSnow size={20} />, <Heart size={20} />],
    description: "La scelta migliore per chi cerca una soluzione duratura, sicura e vantaggiosa. Il prezzo scontato, le attività aggiuntive e i controlli sanitari inclusi lo rendono un pacchetto premium."
  }
];

export default function PricingCards() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="py-20 bg-[#f8f6f2] px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Scegli il tuo pacchetto</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(plan)}
              className="cursor-pointer border rounded-lg p-6 bg-white shadow-md hover:shadow-xl transition-all"
            >
              <img src={plan.image} alt={plan.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <div className="text-lg font-bold text-green-700">
                {plan.price}
                {plan.oldPrice && <span className="ml-2 line-through text-gray-400 text-sm">{plan.oldPrice}</span>}
              </div>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mt-4">
                {plan.icons.map((icon, i) => (
                  <span key={i} className="text-gray-500">{icon}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white p-8 rounded-lg max-w-lg w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-3 right-3">
                <X />
              </button>
              <img src={selected.image} alt={selected.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{selected.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{selected.description}</p>
              <div className="text-green-700 text-lg font-bold">
                {selected.price}
                {selected.oldPrice && <span className="ml-2 line-through text-gray-400 text-sm">{selected.oldPrice}</span>}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {selected.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
