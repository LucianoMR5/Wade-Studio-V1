import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const items = [
    {
      name: "La Bistecca",
      type: "Restaurante",
      description: "Página elegante con enfoque en experiencia visual y menú atractivo.",
      link: "https://labistecca.com",
      image: "https://picsum.photos/seed/restaurant/1200/800"
    },
    {
      name: "Urban Kitchen Perú",
      type: "Restaurante moderno",
      description: "Diseño moderno enfocado en mostrar el producto y generar confianza.",
      link: "https://urbankitchen.pe",
      image: "https://picsum.photos/seed/kitchen/1200/800"
    }
  ];

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-accent text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">
            Inspiración
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">Proyectos que <br /> <span className="text-white/30">marcan la diferencia</span></h2>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Ejemplos reales de páginas modernas que elevan el estándar del mercado digital en Lima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 bg-white/[0.02] border border-white/[0.05]">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-accent hover:text-white transition-all shadow-2xl"
                  >
                    Ver proyecto <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              
              <div className="px-4">
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">
                  {item.type}
                </span>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{item.name}</h3>
                <p className="text-white/40 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
