// src/pages/VivereInTunisia.jsx

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Globe, Heart, Users, Leaf, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar"; 

export default function VivereInTunisia() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <Navbar />
      {/* Sezione 1: Vivere in Tunisia */}
      <section>
        <Card className="bg-background/70 backdrop-blur-md shadow-xl rounded-2xl border border-border">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl flex items-center gap-2">
              <Globe className="w-7 h-7 text-primary" />
              Vivere in Tunisia
            </CardTitle>
            <CardDescription>
              Scopri perché sempre più pensionati scelgono la Tunisia come nuova casa.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 text-muted-foreground">
              <li><strong>Perché scegliere la Tunisia?</strong> – Uno stile di vita mediterraneo accogliente e rilassato</li>
              <li><strong>Clima:</strong> Inverni miti e estati soleggiate</li>
              <li><strong>Sicurezza e Sanità:</strong> Paese stabile con servizi medici di qualità</li>
              <li><strong>Costo della vita:</strong> Alloggi e spese quotidiane molto accessibili</li>
              <li><strong>Visti e Residenza:</strong> Processo semplice per soggiorni di lungo termine</li>
              <li><strong>Testimonianze:</strong> Leggi le storie di chi ha già fatto il grande passo</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Sezione 2: Vita Quotidiana e Attività */}
      <section>
        <Card className="bg-background/70 backdrop-blur-md shadow-xl rounded-2xl border border-border">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl flex items-center gap-2">
              <Users className="w-7 h-7 text-primary" />
              Vita Quotidiana & Attività
            </CardTitle>
            <CardDescription>
              Un assaggio della routine attiva e stimolante dei nostri residenti.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 text-muted-foreground">
              <li><strong>Corsi di lingua:</strong> Impara l’arabo o il francese in gruppo</li>
              <li><strong>Benessere fisico:</strong> Palestra o sessioni di yoga al mattino</li>
              <li><strong>Eventi culturali:</strong> Concerti, mostre, artigianato locale</li>
              <li><strong>Escursioni:</strong> Gite nel deserto, villaggi sul mare, siti storici</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

