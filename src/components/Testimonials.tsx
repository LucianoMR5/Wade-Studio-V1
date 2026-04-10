import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      text: "El nivel de detalle y la velocidad de respuesta de Wave Studio superó mis expectativas. Mi negocio ahora tiene una presencia digital de primer nivel.",
      role: "CEO en Tech Solutions"
    },
    {
      name: "Andrea Rivas",
      text: "Buscaba algo minimalista pero impactante, y captaron la idea a la perfección. La integración con WhatsApp ha triplicado mis consultas.",
      role: "Fundadora de Bloom Studio"
    },
    {
      name: "Luis Paredes",
      text: "Un proceso transparente y profesional. Entregaron antes de lo previsto y el diseño es simplemente espectacular. Altamente recomendados.",
      role: "Director Comercial"
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">Voces de <br /> <span className="text-white/30">nuestros clientes</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-12 rounded-[3rem] relative group border border-white/[0.05] hover:border-white/20 transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 text-accent/10 group-hover:text-accent/30 transition-colors duration-500" size={40} />
              <p className="text-lg text-white/60 leading-relaxed mb-10 relative z-10 font-medium">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center text-[10px] font-black">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-accent text-[10px] font-black uppercase tracking-widest mt-1">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
