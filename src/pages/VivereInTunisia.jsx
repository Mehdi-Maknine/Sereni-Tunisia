import { Sun, Euro, ShieldCheck, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResizableNavbar from '@/components/ResizableNavbar';
import LottieIcon from "@/components/LottieIcon";
import { lottieIconMap } from "@/utils/LottieIconMap";


export default function VivereInTunisia() {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      <div className="h-16 md:h-14" />

      {/* 1. Hero Section */}
      <section className="relative warm-gradient py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            🌅 Vivere ogni giorno in serenità
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Vivi in un luogo accogliente, sicuro e pieno di luce. Ogni giorno in Tunisia può essere speciale.
          </p>
          <Button
            size="lg"
            className="mediterranean-blue text-white font-semibold px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105"
            onClick={() => document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })}
          >
            Scopri la tua nuova vita
          </Button>
        </div>

        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/sousse-hero.jpg"
            alt="Panorama tunisino"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. Perché scegliere la Tunisia */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Perché sempre più italiani scelgono la Tunisia?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: lottieIconMap.sun,
                title: "Clima Mediterraneo",
                bg: "bg-mediterranean-blue",
                text: "Sole, mare e temperature miti quasi tutto l’anno. Ideale per rilassarsi e stare all’aperto.",
                color: "#facc15" // yellow
              },
              {
                icon: lottieIconMap.euro,
                title: "Costo della vita",
                bg: "bg-mediterranean-green",
                text: "Prezzi accessibili per affitti, sanità e servizi. Una vita dignitosa senza pensieri.",
                color: "#4caf50" // green
              },
              {
                icon: lottieIconMap.security,
                title: "Sicurezza e serenità",
                bg: "bg-mediterranean-blue",
                text: "Ambiente tranquillo e comunità rispettosa. Sousse e Hammamet sono tra le città più sicure.",
                color: "#3b82f6" // blue
              },
              {
                icon: lottieIconMap.health,
                title: "Servizi sanitari",
                bg: "bg-mediterranean-green",
                text: "Assistenza medica accessibile e cliniche private moderne con personale multilingua.",
                color: "#8e44ad" // violet
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow hover:shadow-md transition p-6 text-center flex flex-col items-center"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-4`}>
                  <LottieIcon src={item.icon} color={item.color} size={85} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-white text-foreground  py-20 px-6 bg-[#fcf8f2] text-[#3a3a3a] font-serif leading-relaxed">
        <div className="max-w-4xl mx-auto space-y-12 text-lg leading-relaxed">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Una giornata tipo a Sousse</h2>
            <p>
              La giornata inizia con il sole che illumina le palme lungo la costa. Dopo una colazione ricca a base di frutta fresca, yogurt locale e pane caldo, ci si ritrova nel giardino per una breve sessione di ginnastica dolce o meditazione guidata.
            </p>
          </div>

          <div className="md:flex md:items-center md:gap-8">
            <img src="/images/colazione-sousse.jpg" alt="Colazione a Sousse" className="rounded-xl w-full md:w-1/2 mb-4 md:mb-0" />
            <p className="md:w-1/2">
              Verso metà mattina si parte per un’escursione: dal centro storico di Sousse, con la sua medina patrimonio UNESCO, ai mercati locali dove scoprire spezie, ceramiche e sapori autentici.
            </p>
          </div>

          <div className="md:flex md:flex-row-reverse md:items-center md:gap-8">
            <img src="/images/attivita.jpg" alt="Attività ricreative" className="rounded-xl w-full md:w-1/2 mb-4 md:mb-0" />
            <p className="md:w-1/2">
              Chi preferisce restare in residenza può partecipare ad attività creative, laboratori di cucina tunisina o lezioni di francese. Ogni giorno offre qualcosa di nuovo, ma sempre a misura d’uomo.
            </p>
          </div>

          <div>
            <p>
              Il pranzo è un momento conviviale: piatti mediterranei, verdure fresche, pesce alla griglia e dolci tradizionali. Dopo pranzo, ci si rilassa con un libro all’ombra o una passeggiata lungo il mare.
            </p>
          </div>

          <div className="md:flex md:items-center md:gap-8">
            <img src="/images/socialita.jpg" alt="Momenti sociali" className="rounded-xl w-full md:w-1/2 mb-4 md:mb-0" />
            <p className="md:w-1/2">
              Il pomeriggio è dedicato alla socialità: giochi da tavolo, cinema in salotto, oppure un tè al gelsomino con i vicini. Alcuni ospiti si dedicano alla pittura, altri imparano a ballare.
            </p>
          </div>

          <div>
            <p>
              La sera cala lentamente, e la brezza del mare rende tutto più magico. Dopo cena, si può guardare un film all’aperto, ascoltare musica o semplicemente godersi il silenzio. A Sousse ogni giornata è diversa, ma sempre piena di vita.
            </p>
          </div>

        </div>
      </section>

      {/* Vita quotidiana a Sousse */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
            Vita quotidiana a Sousse
          </h2>

          <div className="flex gap-6 overflow-x-auto no-scrollbar px-1 pb-4">
            {[
              {
                emoji: '🏺',
                title: 'Visite culturali',
                text: 'Scopri medine, rovine romane, musei e siti UNESCO.',
              },
              {
                emoji: '🧘',
                title: 'Benessere fisico',
                text: 'Yoga, ginnastica dolce e relax in spa locali.',
              },
              {
                emoji: '🗣️',
                title: 'Corsi di lingua',
                text: 'Lezioni di francese e arabo pensate per adulti.',
              },
              {
                emoji: '🚐',
                title: 'Escursioni',
                text: 'Gite organizzate verso Hammamet, Monastir, deserto e mare.',
              },
              {
                emoji: '🍽️',
                title: 'Cucina locale',
                text: 'Assapora couscous, brik e piatti tunisini in compagnia.',
              },
              {
                emoji: '🎨',
                title: 'Attività creative',
                text: 'Laboratori di pittura, ceramica e musica tradizionale.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[250px] bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>        
    </div>
  );
}
