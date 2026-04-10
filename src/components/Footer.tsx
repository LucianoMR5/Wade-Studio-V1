import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-display font-bold text-2xl tracking-tighter text-accent">WAVE STUDIO</span>
          <p className="text-white/40 text-sm">© 2026 Wave Studio. Todos los derechos reservados.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/wavestudiov1/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-white/40 hover:text-accent transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-white/40 hover:text-accent transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-white/40 hover:text-accent transition-colors"><Twitter size={20} /></a>
        </div>

        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/30">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
}
