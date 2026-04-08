import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos M.",
      text: "Muy buen trabajo, ahora mi negocio se ve mucho más profesional.",
      role: "Emprendedor"
    },
    {
      name: "Andrea R.",
      text: "Rápido, claro y cumplió con todo lo prometido.",
      role: "Dueña de Negocio"
    },
    {
      name: "Luis P.",
      text: "Empecé a recibir más consultas gracias a la página.",
      role: "Consultor"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-accent/5 -z-10 blur-[100px]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Lo que dicen de nosotros</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] relative group"
            >
              <Quote className="absolute top-8 right-8 text-accent/20 group-hover:text-accent/40 transition-colors" size={48} />
              <p className="text-lg text-white/80 italic mb-8 relative z-10">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="text-accent text-sm">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
