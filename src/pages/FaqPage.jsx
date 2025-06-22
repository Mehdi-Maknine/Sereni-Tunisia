import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MessageCircleQuestion, Send } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";   

const FAQPage = () => {
  const faqs = [
    { question: "🇫🇷 Il francese è parlato?", answer: "Sì, il francese è molto diffuso in Tunisia, soprattutto nelle città e negli ambienti sanitari." },
    { question: "🐾 Posso portare il mio animale domestico?", answer: "Sì! Basta avere microchip, vaccino antirabbico e certificato sanitario valido." },
    { question: "🛂 Ho bisogno di un visto?", answer: "Per la maggior parte dei cittadini UE non è necessario per soggiorni fino a 90 giorni. Per vivere stabilmente serve un permesso di soggiorno." },
    { question: "🩺 C’è assistenza medica 24/7?", answer: "Sì, cliniche private nelle principali città offrono pronto soccorso e ambulanze 24 ore su 24." },
    { question: "💰 Quanto costa vivere in Tunisia?", answer: "Il costo della vita è generalmente più basso rispetto all’Europa. Una coppia può vivere comodamente con circa 800-1000€ al mese." },
    { question: "🏠 Posso affittare o comprare casa?", answer: "Sì, molti stranieri affittano o acquistano immobili in Tunisia, specialmente in aree come Hammamet, Sousse e Djerba." },
    { question: "🌍 Come sono le condizioni climatiche?", answer: "La Tunisia ha un clima mediterraneo: estati calde e inverni miti, ideale per chi cerca sole tutto l’anno." },
    { question: "📱 Internet e telefonia funzionano bene?", answer: "Sì, il paese è ben coperto da 4G e internet a casa. Ci sono operatori come Orange, Ooredoo e Tunisie Telecom." },
    { question: "🧘‍♂️ Ci sono attività per il tempo libero?", answer: "Sì! Yoga, escursioni, eventi culturali, lingua araba/francese, e tante attività per expat." },
    { question: "📑 Come funziona la sanità?", answer: "Oltre al sistema pubblico, ci sono cliniche private di ottimo livello con medici che parlano francese o inglese." },
    { question: "🛬 È facile arrivare dall’Europa?", answer: "Sì, molti voli diretti da Italia, Francia e Germania collegano città tunisine come Tunisi, Monastir, Djerba." },
    { question: "👮‍♂️ La Tunisia è sicura?", answer: "Sì, le zone turistiche e residenziali sono sicure. Come ovunque, serve buon senso, ma la qualità della vita è alta." },
  ];

  return (
    <div className="min-h-screen py-14 px-6 bg-gradient-to-br from-[#f2f2f2] to-[#e0f7fa]">
        <Navbar />
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MessageCircleQuestion className="mx-auto text-primary mb-4" size={50} />
        <h1 className="text-4xl font-bold text-gray-800">Domande Frequenti</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Tutto quello che vuoi sapere prima di trasferirti in Tunisia.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="glassmorphism shadow-md">
              <CardContent className="p-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`faq-${idx}`}>
                    <AccordionTrigger className="text-lg font-medium text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Sezione finale: Contattaci */}
      <div className="max-w-3xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glassmorphism shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">❓ Non hai trovato la risposta?</CardTitle>
              <p className="text-muted-foreground text-center mt-1">
                Scrivici e saremo felici di aiutarti!
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Il tuo nome completo" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="la-tua@email.com" />
                </div>
                <div>
                  <Label htmlFor="message">Domanda</Label>
                  <Textarea id="message" placeholder="Scrivi qui la tua domanda..." rows={4} />
                </div>
                <Button type="submit" className="w-full mt-2">
                  <Send className="mr-2 h-4 w-4" /> Invia la tua domanda
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
