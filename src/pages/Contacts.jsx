import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import ResizableNavbar from "@/components/ResizableNavbar";   

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: send data here
    toast({
      title: "Messaggio inviato!",
      description: "Ti ricontatteremo il prima possibile.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      <div className="h-16 md:h-14" />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Prenota una chiamata
            </h2>
            <p className="text-muted-foreground mb-8">
              Compila il modulo e ti ricontatteremo entro 24 ore.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Nome e Cognome"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Numero di telefono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Scrivi qui il tuo messaggio..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full mediterranean-blue text-white"
              >
                Prenota una chiamata
              </Button>
            </form>
          </div>

          {/* Map & Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              I nostri uffici
            </h3>

            <div className="w-full h-72 rounded-lg overflow-hidden mb-6 shadow">
              {/* Placeholder Map — replace with real embed or component */}
              <iframe
                title="Mappa uffici"
                src="https://www.google.com/maps/embed?pb=!1m18!..." // Inserisci il link reale
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="space-y-6 text-muted-foreground text-sm">
              <div>
                <h4 className="font-bold text-foreground mb-1">🇮🇹 Ufficio Italia</h4>
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> Via Roma 45, Milano (MI)
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> +39 123 456 7890
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} /> info@serenitunisia.it
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">🇹🇳 Ufficio Sousse</h4>
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> Avenue de la Liberté, Sousse
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> +216 12 345 678
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} /> contatto@serenitunisia.tn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
