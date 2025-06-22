import { Plane, ClipboardList, Smile, UserCheck, ShieldCheck, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from "@/components/Navbar"; 

const ComeFunziona = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative warm-gradient py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Come funziona il nostro servizio?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Dalla prima chiamata all’arrivo sereno in Tunisia: ecco ogni passo.
          </p>
          <Button
            size="lg"
            className="mediterranean-blue text-white font-semibold px-8 py-4 text-lg hover:opacity-90"
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
          >
            Scopri tutti i passaggi
          </Button>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1609838468745-1e7c7b48676d?auto=format&fit=crop&w=1200&q=80"
            alt="Tunisia landscape"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Timeline / Steps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Il percorso passo dopo passo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8 text-white" />,
                title: 'Contatto iniziale',
                desc: 'Ti ascoltiamo con attenzione e ti forniamo una consulenza gratuita personalizzata.',
                color: 'bg-mediterranean-blue',
              },
              {
                icon: <ClipboardList className="w-8 h-8 text-white" />,
                title: 'Documenti & Organizzazione',
                desc: 'Ti aiutiamo con tutta la burocrazia necessaria: passaporti, assicurazioni, traduzioni.',
                color: 'bg-olive-accent',
              },
              {
                icon: <Plane className="w-8 h-8 text-white" />,
                title: 'Partenza & Arrivo',
                desc: 'Organizziamo volo e accoglienza. All’arrivo, un operatore ti accompagna a casa.',
                color: 'bg-mediterranean-blue',
              },
              {
                icon: <UserCheck className="w-8 h-8 text-white" />,
                title: 'Inserimento guidato',
                desc: 'Conosci la zona, partecipi ad attività, fai amicizia con altri ospiti.',
                color: 'bg-olive-accent',
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-white" />,
                title: 'Assistenza continua',
                desc: 'Personale e medici sempre disponibili. Siamo presenti ogni giorno.',
                color: 'bg-mediterranean-blue',
              },
              {
                icon: <Smile className="w-8 h-8 text-white" />,
                title: 'Contatto con la famiglia',
                desc: 'Organizziamo videochiamate, visite e aggiornamenti costanti per stare sempre vicini.',
                color: 'bg-olive-accent',
              },
            ].map((step, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">
            Vuoi parlarne con noi?
          </h2>
          <p className="text-muted-foreground mb-8">
            Prenota ora una consulenza gratuita: parliamo delle esigenze dei tuoi cari e troviamo insieme la soluzione giusta.
          </p>
          <Button
            size="lg"
            className="mediterranean-blue text-white px-10 py-4 text-lg hover:scale-105 transition-transform"
            onClick={() => window.location.href = '/#contatti'}
          >
            Richiedi Consulenza Gratuita
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ComeFunziona;
