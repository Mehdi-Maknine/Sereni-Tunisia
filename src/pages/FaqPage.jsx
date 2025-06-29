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
  { question: "Il francese è parlato?", answer: "Sì, il francese è molto diffuso in Tunisia..." },
  { question: "Posso portare il mio animale domestico?", answer: "Sì! Basta avere microchip..." },
  { question: "Ho bisogno di un visto?", answer: "Per la maggior parte dei cittadini UE..." },
  { question: "C’è assistenza medica 24/7?", answer: "Sì, cliniche private nelle principali città..." },
  { question: "Quanto costa vivere in Tunisia?", answer: "Il costo della vita è generalmente più basso..." },
  { question: "Posso affittare o comprare casa?", answer: "Sì, molti stranieri affittano o acquistano..." },
  { question: "Come sono le condizioni climatiche?", answer: "Clima mediterraneo: estati calde e inverni miti." },
  { question: "Internet e telefonia funzionano bene?", answer: "Sì, ben coperto da 4G e internet fisso." },
  { question: "Ci sono attività per il tempo libero?", answer: "Yoga, escursioni, cultura, lingua e altro." },
  { question: "Come funziona la sanità?", answer: "Cliniche private con medici francofoni e moderni." },
  { question: "È facile arrivare dall’Europa?", answer: "Voli diretti da molte città italiane ed europee." },
  { question: "La Tunisia è sicura?", answer: "Sì, soprattutto nelle zone residenziali e turistiche." },
];

export default function FAQPage() {
  return (
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
    </div>
  );
}
