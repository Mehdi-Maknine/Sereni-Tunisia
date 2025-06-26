import {
  Phone,
  Video,
  Home,
  FileText,
  Plane,
  HelpingHand,
  MapPin,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import  ResizableNavbar  from '@/components/ResizableNavbar';
import StepTimelineItem from '@/components/StepTimelineItem';
import PricingCards from '@/components/PricingCards';





const packages = [
  {
    title: "1 Mese di Serenità",
    price: "€3.000",
    original: null,
    image: "/images/senior1.jpg",
    features: [
      "Assistenza medica h24",
      "Alloggio incluso",
      "Pasti e lavanderia",
      "Attività quotidiane",
      "Trasferimenti locali",
    ],
  },
  {
    title: "1 Anno di Benessere",
    price: "€5.000",
    original: "€6.000",
    image: "/images/senior2.jpg",
    featured: true,
    features: [
      "Tutto incluso per 12 mesi",
      "Sconto esclusivo",
      "Scegli tu la residenza",
      "Supporto personalizzato",
      "Zero preoccupazioni",
    ],
  },
  {
    title: "2 Anni Sereni",
    price: "€9.000",
    original: "€12.000",
    image: "/images/senior3.jpg",
    features: [
      "Tutto incluso per 24 mesi",
      "Risparmio massimo",
      "Monitoraggio salute continuo",
      "Servizi premium",
      "Ideale per lunghe permanenze",
    ],
  },
];
const steps = [
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    color: 'bg-mediterranean-blue',
    title: 'Contatto iniziale',
    description: 'Inizia tutto da un messaggio, una chiamata o una semplice email. Ti ascoltiamo con empatia e raccogliamo tutte le informazioni utili.',
    bullets: [
      'Primo contatto telefonico o via email',
      'Raccolta delle esigenze principali',
      'Spiegazione generale del servizio'
    ]
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    color: 'bg-mediterranean-green',
    title: 'Prima consulenza gratuita',
    description: 'Facciamo una videochiamata approfondita, ascoltiamo le tue esigenze e rispondiamo a tutte le domande pratiche, mediche e organizzative.',
    bullets: [
      'Durata media: 30–45 minuti',
      'Conosciamo le preferenze dell’ospite',
      'Condivisione dei prossimi step'
    ]
  },
  {
    icon: <Home className="w-6 h-6 text-white" />,
    color: 'bg-mediterranean-blue',
    title: 'Scelta della residenza',
    description: 'Ti presentiamo una selezione di alloggi in base al profilo dell’ospite. Puoi visualizzare foto, servizi inclusi e posizione.',
    bullets: [
      'Case private e residenze assistite',
      'Supporto nella scelta finale',
      'Possibilità di visita virtuale'
    ]
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    color: 'bg-mediterranean-green',
    title: 'Supporto documenti e viaggio',
    description: 'Gestiamo ogni aspetto burocratico: dal passaporto alla prenotazione del volo, fino all’assicurazione sanitaria.',
    bullets: [
      'Lista documenti e scadenze',
      'Assistenza visti e assicurazioni',
      'Organizzazione volo andata'
    ]
  },
  {
    icon: <Plane className="w-6 h-6 text-white" />,
    color: 'bg-mediterranean-blue',
    title: 'Arrivo e accoglienza in Tunisia',
    description: 'Il nostro operatore ti accoglie in aeroporto e ti accompagna nella tua nuova residenza, pronto a darti supporto.',
    bullets: [
      'Accoglienza personalizzata',
      'Trasferimento incluso',
      'Prima sistemazione e orientamento'
    ]
  },
  {
    icon: <HelpingHand className="w-6 h-6 text-white" />,
    color:  'bg-mediterranean-green',
    title: 'Assistenza continua e vita quotidiana',
    description: 'Ogni giorno siamo presenti per garantire salute, benessere, socialità e serenità nella vita quotidiana.',
    bullets: [
      'Supporto medico e infermieristico',
      'Attività ricreative e uscite',
      'Contatto costante con la famiglia'
    ]
  }
];

const ComeFunziona = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar/>

    <section className="relative warm-gradient py-20 px-4 text-center overflow-hidden">
      
      <div className="h-16 md:h-14" />
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        
        <img 
          src="/images/sousse1.jpg" 
          alt="Tunisia landscape" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Come funziona il soggiorno con noi?
          </motion.h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ti accompagniamo in ogni passo: dalla prima consulenza fino alla vita quotidiana in Tunisia.
          </p>

          <Button 
            size="lg" 
            className="mediterranean-blue text-white font-semibold px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105"
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Scopri il nostro processo completo
          </Button>
        </div>
      </div>
    </section>

      {/* Detailed Timeline */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Il percorso in 6 step dettagliati</h2>
          <div className="relative border-l-2 border-muted pl-6 space-y-16">
            {steps.map((step, idx) => (
              <StepTimelineItem
                key={idx}
                idx={idx}
                icon={step.icon}
                color={step.color}
                title={step.title}
                description={step.description}
                bullets={step.bullets}
              />
            ))}
          </div>
        </div>
      </section>
       {/* Pricing section */}
      <PricingCards />


      {/* Call To Action */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Pronto a fare il primo passo?</h2>
          <p className="text-muted-foreground mb-8">
            Parla con noi oggi stesso e scopri se la Tunisia è la scelta giusta per i tuoi cari.
          </p>
          <Button
            size="lg"
            className="mediterranean-blue text-white px-10 py-4 text-lg hover:scale-105 transition-transform"
            onClick={() => window.location.href = '/#contatti'}
          >
            Prenota una chiamata gratuita
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ComeFunziona;
