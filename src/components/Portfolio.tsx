import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const items = [
    {
      name: "La Bistecca",
      type: "Restaurante",
      description: "Página elegante con enfoque en experiencia visual y menú atractivo.",
      link: "https://labistecca.com",
      image: "https://picsum.photos/seed/restaurant/800/600"
    },
    {
      name: "Urban Kitchen Perú",
      type: "Restaurante moderno",
      description: "Diseño moderno enfocado en mostrar el producto y generar confianza.",
      link: "https://urbankitchen.pe",
      image: "https://picsum.photos/seed/kitchen/800/600"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Inspiración para tu web</h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Ejemplos reales de páginas modernas que marcan la diferencia en el mercado peruano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-accent hover:text-white transition-colors"
                  >
                    Visitar sitio <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="px-2">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">
                  {item.type}
                </span>
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-white/50 leading-relaxed">
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
