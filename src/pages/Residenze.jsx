import { BedDouble, MapPin, CheckCircle, Coins } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ResizableNavbar from "@/components/ResizableNavbar";   

const residences = [
  {
    name: "Résidence Jasmine",
    image: "/images/residence1.jpg",
    location: "Sousse",
    priceRange: "€800 – €1200 / month",
    amenities: ["Private bathroom", "Wi-Fi", "Elevator", "Air Conditioning"],
  },
  {
    name: "Résidence Palmier",
    image: "/images/residence2.jpg",
    location: "Hammamet",
    priceRange: "€950 – €1300 / month",
    amenities: ["Balcony", "Sea View", "24/7 Security", "Laundry Room"],
  },
];

export default function Residenze() {
  return (
    <section className="py-16 px-4 md:px-12 bg-[#faf7f3] min-h-screen">
    <ResizableNavbar />
          <div className="h-16 md:h-14" />

      <div className="mb-10 text-center flex flex-col items-center justify-center">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="/icons/house-relax.svg"
            alt="Casa Serena"
            className="w-12 h-12"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            La tua casa lontano da casa
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Abbiamo selezionato per te residenze accoglienti, moderne e sicure per vivere al meglio la tua esperienza in Tunisia.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {residences.map((residence, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow">
            <img
              src={residence.image}
              alt={residence.name}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{residence.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} /> {residence.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm flex items-center gap-2 text-green-600 font-medium">
                <Coins size={16} /> {residence.priceRange}
              </div>
              <ul className="text-sm grid gap-1">
                {residence.amenities.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
