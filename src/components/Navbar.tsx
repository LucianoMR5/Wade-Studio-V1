import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Servicios", href: "#services" },
    { name: "Proceso", href: "#process" },
    { name: "Planes", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-0 right-0 z-40 px-6 flex justify-center"
    >
      <div className="glass-dark px-2 py-2 rounded-full flex items-center gap-2 md:gap-8">
        <div className="flex items-center gap-2 px-4">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-display font-bold text-lg tracking-tight text-white">WAVE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-all rounded-full hover:bg-white/5"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a 
            href="https://www.instagram.com/wavestudiov1/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a 
            href="https://wa.me/51914135823"
            className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-lg shadow-white/5"
          >
            Empezar
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
