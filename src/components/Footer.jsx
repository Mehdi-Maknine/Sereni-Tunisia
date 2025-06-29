import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f26] text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
        {/* Brand + Descrizione */}
        <div>
          <img src="/logo-white.png" alt="Sereni Tunisia" className="h-12 mb-4" />
          <p className="text-sm text-muted-foreground">
            Vivere bene, con serenità. Sereni Tunisia accompagna expat e pensionati nel loro percorso verso una nuova vita in Tunisia.
          </p>
        </div>

        {/* Contatti */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contatti</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +39 347 123 4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@serenitunisia.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <span>
                📍 Uffici:<br />
                Italia – Milano<br />
                Tunisia – Sousse
              </span>
            </li>
          </ul>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h4 className="font-semibold text-lg mb-3">Seguici</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="hover:text-primary" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="hover:text-primary" />
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} Sereni Tunisia – Tutti i diritti riservati.<br />
            <a href="/privacy" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
