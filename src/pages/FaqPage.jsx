import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircleQuestion } from "lucide-react";
import Navbar from "@/components/Navbar"; 

const FAQPage = () => {
  const faqs = [
    {
      question: "Il francese è parlato?",
      answer: "Sì, il francese è ampiamente parlato in Tunisia, soprattutto nelle città e nelle strutture sanitarie."
    },
    {
      question: "Posso portare il mio animale domestico?",
      answer: "Sì, puoi portarlo. È necessario rispettare i requisiti di importazione: microchip, vaccinazione antirabbica e certificato di buona salute."
    },
    {
      question: "Ho bisogno di un visto?",
      answer: "Dipende dalla tua nazionalità. I cittadini UE possono entrare senza visto per 90 giorni. Per soggiorni lunghi serve un permesso di residenza."
    },
    {
      question: "Esiste assistenza medica 24/7?",
      answer: "Sì, nelle principali città ci sono cliniche private con pronto soccorso e servizio ambulanze attivo 24 ore su 24."
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
        <Navbar />
      <Card className="glassmorphism shadow-xl">
        <CardHeader className="text-center">
          <MessageCircleQuestion className="mx-auto text-primary mb-2" size={40} />
          <CardTitle className="text-3xl font-bold">Domande Frequenti</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQPage;
