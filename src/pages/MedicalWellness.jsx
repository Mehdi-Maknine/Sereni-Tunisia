import React from 'react';
import { HeartPulse, Stethoscope, Syringe, Brain, Bed } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar"; 

const services = [
  {
    icon: <Stethoscope className="w-6 h-6 text-primary" />,
    title: 'Visite Mediche',
    description: 'Medici qualificati disponibili per consulenze generali e specialistiche.'
  },
  {
    icon: <Syringe className="w-6 h-6 text-primary" />,
    title: 'Assistenza Infermieristica',
    description: 'Supporto infermieristico professionale 24/7 su misura per ogni esigenza.'
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-primary" />,
    title: 'Fisioterapia',
    description: 'Servizi di riabilitazione e miglioramento della mobilità con fisioterapisti certificati.'
  },
  {
    icon: <Bed className="w-6 h-6 text-primary" />,
    title: 'Benessere & Relax',
    description: 'Trattamenti spa, massaggi e attività per il benessere fisico e mentale.'
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: 'Supporto Psicologico',
    description: 'Sostegno psicologico, consulenze e programmi per il benessere mentale.'
  }
];

const MedicalWellness = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
        <Navbar />
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">🩺 Servizi Medici e Benessere</h2>
        <p className="mt-2 text-muted-foreground">Scopri tutti i servizi sanitari e di benessere pensati per la tua serenità.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="h-full"
          >
            <Card className="h-full shadow-sm border border-muted">
              <CardHeader className="flex flex-row items-center space-x-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MedicalWellness;
