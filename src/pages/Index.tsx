import { useState } from 'react';
import { Plane, House, Users, Briefcase, FileText, Heart, Phone, Mail, MapPin, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';


const Index = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Messaggio inviato!",
      description: "Ti contatteremo presto per fornirti tutte le informazioni necessarie.",
    });
    setFormData({ nome: '', email: '', telefono: '', messaggio: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative warm-gradient py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Un anno sereno in Tunisia per i tuoi cari
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Volo, casa e assistenza inclusi — pensiamo a tutto noi.
            </p>
            <Button 
              size="lg" 
              className="mediterranean-blue text-white font-semibold px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105"
              onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contattaci ora per maggiori informazioni
            </Button>
            

          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80" 
            alt="Tunisia landscape" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <Button onClick={() => navigate('/come-funziona')}>Come Funziona</Button>

      {/* Chi Siamo */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Chi Siamo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <strong>Vivere Sereni in Tunisia</strong> è nato dal desiderio di offrire agli anziani italiani 
            un'opportunità unica: vivere serenamente in un paese accogliente, con clima mite e costi contenuti, 
            senza rinunciare all'assistenza e al supporto di cui hanno bisogno. 
            La nostra missione è garantire tranquillità alle famiglie e benessere ai loro cari.
          </p>
        </div>
      </section>

      {/* Cosa Offriamo */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Cosa Offriamo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 mediterranean-blue rounded-full flex items-center justify-center mb-4">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Volo Incluso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Volo andata e ritorno Italia-Tunisia completamente incluso nel servizio</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 olive-accent rounded-full flex items-center justify-center mb-4">
                  <House className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Alloggio Sicuro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Casa privata, confortevole e sicura in zone residenziali tranquille</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 mediterranean-blue rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Assistenza Medica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Assistenza medica e personale qualificato sempre a disposizione</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 olive-accent rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Attività Sociali</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Attività ricreative e sociali per mantenere corpo e mente attivi</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 mediterranean-blue rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Supporto Amministrativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Aiuto per tutte le pratiche amministrative e burocratiche</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 olive-accent rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Cura Personale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Attenzione dedicata e personalizzata per ogni ospite</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perché la Tunisia */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Perché la Tunisia?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-mediterranean-blue/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">☀️</span>
              </div>
              <h3 className="text-xl font-semibold">Clima Mite</h3>
              <p className="text-muted-foreground">Sole e temperature gradevoli tutto l'anno, ideali per il benessere degli anziani</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-olive/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold">Costi Contenuti</h3>
              <p className="text-muted-foreground">Un anno di vita serena a costi molto più contenuti rispetto all'Italia</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-mediterranean-blue/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold">Accoglienza Calda</h3>
              <p className="text-muted-foreground">Cultura ospitale e calorosa, vicinanza geografica e culturale con l'Italia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Testimonianze
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic">
                  "Papà è rinato! Il clima, le persone gentili e l'assistenza sempre presente 
                  gli hanno ridato il sorriso. Noi siamo tranquilli sapendo che è in ottime mani."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-mediterranean-blue/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-mediterranean-blue">MG</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria G.</p>
                    <p className="text-sm text-muted-foreground">Figlia di ospite</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic">
                  "Non mi sono mai sentito solo qui. Le attività, i nuovi amici e il personale 
                  sempre sorridente mi fanno sentire a casa. È stata la scelta migliore."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-olive/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-olive-dark">AR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Antonio R.</p>
                    <p className="text-sm text-muted-foreground">Ospite da 8 mesi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Domande Frequenti
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg text-left">
                È sicuro per una persona anziana vivere in Tunisia?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Assolutamente sì. La Tunisia è un paese sicuro e accogliente, con una lunga tradizione di ospitalità. 
                I nostri ospiti vivono in zone residenziali tranquille e sono sempre accompagnati dal nostro staff qualificato.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg text-left">
                Che tipo di assistenza medica è disponibile?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Garantiamo assistenza medica 24/7 con personale qualificato. Abbiamo convenzioni con ospedali locali 
                e medici italiani che parlano la lingua. Ogni ospite ha un piano sanitario personalizzato.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg text-left">
                I familiari possono venire a trovare l'ospite?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Certamente! Le visite dei familiari sono sempre benvenute. Possiamo anche aiutare nell'organizzazione 
                del viaggio e dell'alloggio per i parenti che desiderano trascorrere del tempo in Tunisia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg text-left">
                Quanto costa il servizio completo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Il costo varia in base alle esigenze specifiche di ogni ospite. Il nostro pacchetto base include 
                tutto il necessario a un prezzo molto competitivo. Contattaci per un preventivo personalizzato gratuito.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg text-left">
                È possibile tornare in Italia quando si vuole?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Naturalmente. Il servizio è flessibile e l'ospite può decidere di tornare in Italia 
                in qualsiasi momento. Organizziamo anche visite temporanee per le festività o occasioni speciali.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Modulo di Contatto */}
      <section id="contatti" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contattaci Ora
            </h2>
            <p className="text-lg text-muted-foreground">
              Siamo qui per rispondere a tutte le tue domande e aiutarti a prendere la decisione migliore per i tuoi cari.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informazioni di contatto */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 mediterranean-blue rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefono</h3>
                  <p className="text-muted-foreground">+39 02 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 olive-accent rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">info@viveresereni.it</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 mediterranean-blue rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Uffici</h3>
                  <p className="text-muted-foreground">Milano • Roma • Tunisi</p>
                </div>
              </div>

              <div className="bg-mediterranean-warm p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-mediterranean-blue mr-2" />
                  Consulenza Gratuita
                </h3>
                <p className="text-muted-foreground">
                  Ti offriamo una consulenza telefonica gratuita per valutare insieme 
                  le esigenze dei tuoi cari e trovare la soluzione più adatta.
                </p>
              </div>
            </div>

            {/* Form di contatto */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome" className="text-lg">Nome e Cognome *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="mt-2 text-lg py-3"
                    placeholder="Il tuo nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 text-lg py-3"
                    placeholder="la.tua@email.it"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-lg">Telefono</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="mt-2 text-lg py-3"
                    placeholder="Il tuo numero di telefono"
                  />
                </div>

                <div>
                  <Label htmlFor="messaggio" className="text-lg">Messaggio</Label>
                  <Textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleInputChange}
                    className="mt-2 text-lg min-h-32"
                    placeholder="Raccontaci le esigenze dei tuoi cari o facci le tue domande..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mediterranean-blue text-white font-semibold py-4 text-lg hover:opacity-90"
                >
                  Invia Richiesta
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Vivere Sereni in Tunisia</h3>
          <p className="text-lg opacity-80 mb-6">
            La serenità dei tuoi cari è la nostra priorità
          </p>
          <div className="flex justify-center space-x-8 text-sm opacity-60">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Termini di Servizio</span>
            <span>•</span>
            <span>© 2024 Vivere Sereni</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
