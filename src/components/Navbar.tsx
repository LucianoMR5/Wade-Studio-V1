import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Servicios", href: "#services" },
    { name: "Planes", href: "#pricing" },
    { name: "Inspiración", href: "#portfolio" },
    { name: "Opiniones", href: "#testimonials" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-center"
    >
      <div className="glass px-8 py-3 rounded-full flex items-center gap-8">
        <span className="font-display font-bold text-xl tracking-tighter text-accent">WAVE</span>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://www.instagram.com/wavestudiov1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://wa.me/51914135823"
            className="bg-accent text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-accent/80 transition-all"
          >
            Empezar
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
