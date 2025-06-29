import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Globe,
  PawPrint,
  BadgeCheck,
  HeartPulse,
  Euro,
  Home,
  Sun,
  Signal,
  Dumbbell,
  Stethoscope,
  Plane,
  ShieldCheck,
  Send,
  MessageCircleQuestion,
} from "lucide-react";
import { motion } from "framer-motion";
import ResizableNavbar from "@/components/ResizableNavbar";
import Footer from '@/components/Footer';


const iconMap = {
  "Il francese è parlato?": <Globe className="text-primary w-5 h-5" />,
  "Posso portare il mio animale domestico?": <PawPrint className="text-primary w-5 h-5" />,
  "Ho bisogno di un visto?": <BadgeCheck className="text-primary w-5 h-5" />,
  "C’è assistenza medica 24/7?": <HeartPulse className="text-primary w-5 h-5" />,
  "Quanto costa vivere in Tunisia?": <Euro className="text-primary w-5 h-5" />,
  "Posso affittare o comprare casa?": <Home className="text-primary w-5 h-5" />,
  "Come sono le condizioni climatiche?": <Sun className="text-primary w-5 h-5" />,
  "Internet e telefonia funzionano bene?": <Signal className="text-primary w-5 h-5" />,
  "Ci sono attività per il tempo libero?": <Dumbbell className="text-primary w-5 h-5" />,
  "Come funziona la sanità?": <Stethoscope className="text-primary w-5 h-5" />,
  "È facile arrivare dall’Europa?": <Plane className="text-primary w-5 h-5" />,
  "La Tunisia è sicura?": <ShieldCheck className="text-primary w-5 h-5" />,
};

const faqs = [
  {
    question: "Il francese è parlato?",
    answer: "Sì, il francese è ampiamente parlato in Tunisia, soprattutto nelle città e nelle strutture sanitarie. È la seconda lingua più diffusa dopo l’arabo e viene usata quotidianamente nelle cliniche, negli uffici pubblici e nei negozi. Molti tunisini parlano anche un buon livello di italiano o inglese, soprattutto nelle zone turistiche."
  },
  {
    question: "Posso portare il mio animale domestico?",
    answer: "Sì, è possibile portare con sé il proprio animale domestico in Tunisia. Sono richiesti alcuni documenti: passaporto per animali, microchip identificativo, vaccinazione antirabbica valida e certificato sanitario emesso da un veterinario. Le principali residenze partner sono pet-friendly e alcune dispongono anche di aree verdi dedicate."
  },
  {
    question: "Ho bisogno di un visto?",
    answer: "Per i cittadini italiani e della maggior parte dei Paesi europei non è richiesto il visto per soggiorni turistici inferiori a 90 giorni. Per permanenze più lunghe, è necessario richiedere un permesso di soggiorno temporaneo, facilmente ottenibile presso gli uffici locali della polizia, con documentazione relativa al contratto di affitto o residenza."
  },
  {
    question: "C’è assistenza medica 24/7?",
    answer: "Sì, le principali città tunisine come Sousse, Hammamet e Tunisi dispongono di cliniche private moderne che offrono pronto soccorso, ambulanze e reperibilità medica 24 ore su 24. Il personale medico è altamente qualificato e spesso multilingue. I tempi di attesa sono brevi e i costi sono notevolmente inferiori rispetto all’Europa."
  },
  {
    question: "Quanto costa vivere in Tunisia?",
    answer: "Il costo della vita in Tunisia è mediamente inferiore del 50–70% rispetto all’Italia. Una coppia può vivere bene con circa 800–1.200€ al mese, comprensivi di affitto, spese sanitarie, cibo e svaghi. I prodotti locali sono molto economici e anche i servizi privati (infermieristica, lavanderia, assistenza) sono accessibili."
  },
  {
    question: "Posso affittare o comprare casa?",
    answer: "Sì. Gli stranieri possono affittare facilmente immobili in Tunisia, soprattutto nelle zone costiere. Per l’acquisto, è necessaria un’autorizzazione statale per i cittadini non tunisini, ma il processo è fattibile, soprattutto se mediato da agenzie immobiliari locali affidabili. È possibile trovare appartamenti moderni a partire da 300–400€/mese."
  },
  {
    question: "Come sono le condizioni climatiche?",
    answer: "La Tunisia gode di un clima mediterraneo: estati calde e soleggiate, inverni miti e brevi. Le città costiere come Sousse e Monastir offrono una piacevole brezza marina e oltre 300 giorni di sole all’anno, rendendole ideali per chi soffre il freddo o cerca un clima favorevole alla salute."
  },
  {
    question: "Internet e telefonia funzionano bene?",
    answer: "Sì, la copertura 4G è presente su quasi tutto il territorio nazionale e nelle città principali si trovano anche connessioni in fibra ottica. Gli operatori principali sono Orange, Ooredoo e Tunisie Telecom. È possibile attivare SIM locali in pochi minuti con offerte molto economiche rispetto all’Europa."
  },
  {
    question: "Ci sono attività per il tempo libero?",
    answer: "Assolutamente sì. Dalle attività culturali (musei, festival, siti archeologici) alle esperienze di benessere (yoga, centri termali, passeggiate sul mare), la Tunisia offre opportunità per tutti i gusti. Inoltre, ci sono corsi di lingua francese e araba, escursioni nel deserto o nelle oasi, mercati artigianali e associazioni di expat."
  },
  {
    question: "Come funziona la sanità?",
    answer: "Il sistema sanitario tunisino prevede sia strutture pubbliche che cliniche private. Le cliniche private sono moderne, ben attrezzate e offrono standard simili a quelli europei. I costi sono molto inferiori e il personale parla frequentemente francese, inglese e talvolta italiano. È possibile sottoscrivere un’assicurazione sanitaria locale o internazionale."
  },
  {
    question: "È facile arrivare dall’Europa?",
    answer: "Sì, la Tunisia è collegata quotidianamente all’Europa con voli diretti da città come Roma, Milano, Bologna, Parigi, Marsiglia, Berlino e altre. Gli aeroporti di Tunisi, Monastir, Djerba e Enfidha servono le principali zone turistiche e residenziali. I voli sono frequenti e spesso economici grazie alle compagnie low-cost."
  },
  {
    question: "La Tunisia è sicura?",
    answer: "Sì, soprattutto nelle zone turistiche e residenziali come Sousse, Hammamet e Monastir. La criminalità è molto bassa rispetto a molte città europee. Le aree in cui risiedono gli stranieri sono ben controllate e frequentate da famiglie locali. Come ovunque, si raccomanda buon senso, ma i residenti riportano un elevato senso di tranquillità e accoglienza."
  }
];

export default function FAQPage() {
  return (
    <div>
    <div className="min-h-screen py-14 px-6 bg-gradient-to-br from-[#f2f2f2] to-[#e0f7fa]">
      <ResizableNavbar />
      <motion.div className="text-center mb-10" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <MessageCircleQuestion className="mx-auto text-primary mb-4" size={50} />
        <h1 className="text-4xl font-bold text-gray-800">Domande Frequenti</h1>
        <p className="text-muted-foreground mt-2 text-lg">Tutto quello che vuoi sapere prima di trasferirti in Tunisia.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
            <Card className="glassmorphism shadow-md">
              <CardContent className="p-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`faq-${idx}`}>
                    <AccordionTrigger className="text-lg font-medium text-left flex items-center gap-2">
                      {iconMap[faq.question]} {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    <section className="mt-20 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">❓ Non hai trovato la risposta?</h2>
      <p className="text-muted-foreground mb-6">Scrivici la tua domanda e ti contatteremo il prima possibile.</p>

      <form
        className="space-y-4 text-left bg-white rounded-lg shadow-md p-6"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: Invia i dati via email con EmailJS o una tua API
          alert("Domanda inviata con successo!");
        }}
      >
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" placeholder="Mario Rossi" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="mario@email.com" required />
        </div>
        <div>
          <Label htmlFor="question">La tua domanda</Label>
          <Textarea id="question" name="question" placeholder="Scrivi qui la tua domanda..." rows={4} required />
        </div>
        <Button type="submit" className="w-full mt-2">
          <Send className="mr-2 h-4 w-4" /> Invia la domanda
        </Button>
      </form>
    </section>
    </div>
    <Footer />
    </div>
  );
}
