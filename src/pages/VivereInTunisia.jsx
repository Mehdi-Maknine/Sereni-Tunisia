import { Plane, Heart, Users, Leaf, Quote, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

export default function VivereInTunisia() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Spazio sotto navbar */}
      <div className="h-16 md:h-15" />

      {/* Hero Section */}
      <section className="relative warm-gradient py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            🌅 Vivere a Sousse con serenità
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Scopri perché sempre più pensionati scelgono la perla del Sahel tunisino per vivere meglio.
          </p>
          <Button 
            size="lg" 
            className="mediterranean-blue text-white font-semibold px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105"
          >
            Contattaci per saperne di più
          </Button>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/sousse-hero.jpg" 
            alt="Spiaggia di Sousse" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>

      {/* Perché scegliere Sousse */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Perché scegliere Sousse?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[{
              icon: <Plane className="w-8 h-8 text-white" />, title: 'Clima Mediterraneo', bg: 'bg-mediterranean-blue',
              text: 'Giornate soleggiate tutto l’anno e temperature ideali per una vita all’aperto.'
            }, {
              icon: <Heart className="w-8 h-8 text-white" />, title: 'Benessere e tranquillità', bg: 'bg-olive-accent',
              text: 'Ritmi lenti, zero stress. Sousse è perfetta per chi cerca serenità.'
            }, {
              icon: <Users className="w-8 h-8 text-white" />, title: 'Comunità accogliente', bg: 'bg-mediterranean-blue',
              text: 'Italiani e stranieri convivono creando una rete familiare.'
            }, {
              icon: <Leaf className="w-8 h-8 text-white" />, title: 'Costo della vita contenuto', bg: 'bg-olive-accent',
              text: 'Qualità di vita elevata a prezzi accessibili.'
            }].map((item, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vita quotidiana */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Vita quotidiana a Sousse
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[{
              emoji: '🏺', title: 'Visite culturali', text: 'Scopri medine, rovine romane, musei e siti UNESCO.'
            }, {
              emoji: '🧘', title: 'Benessere fisico', text: 'Yoga, ginnastica dolce e relax in spa locali.'
            }, {
              emoji: '🗣️', title: 'Corsi di lingua', text: 'Lezioni di francese e arabo pensate per adulti.'
            }, {
              emoji: '🚐', title: 'Escursioni', text: 'Gite organizzate verso Hammamet, Monastir, deserto e mare.'
            }].map((item, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 text-3xl">
                    {item.emoji}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
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
            {[{
              name: 'Lucia', initials: 'L', text: '“Dopo 40 anni di lavoro, ho trovato la mia pace qui. Sousse mi ha restituito il sorriso.”'
            }, {
              name: 'Roberto', initials: 'R', text: '“La qualità della vita è altissima. Cammino ogni mattina lungo il mare con il sole sulla pelle.”'
            }].map((t, i) => (
              <Card key={i} className="p-8">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Quote key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic">{t.text}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-mediterranean-blue/20 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-mediterranean-blue">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">Ospite soddisfatto</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galleria */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Scorci da Sousse
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["sousse1.jpg", "sousse2.jpg", "sousse3.jpg", "sousse4.jpg", "sousse5.jpg", "sousse6.jpg"].map((img, i) => (
              <img
                key={i}
                src={`/images/${img}`}
                alt={`Sousse ${i + 1}`}
                className="w-full h-[200px] object-cover rounded-xl shadow hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-mediterranean-blue text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Inizia oggi il tuo futuro a Sousse</h2>
          <p className="text-lg mb-6">Siamo qui per offrirti una consulenza gratuita e personalizzata.</p>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-mediterranean-blue hover:bg-muted transition">
            Parla con un esperto
          </Button>
        </div>
      </section>
    </div>
  );
}