import { motion } from "motion/react";
import { Layout, Smartphone, Zap, Target, Clock, LifeBuoy } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Diseño Web Premium",
      icon: <Layout className="text-accent" size={20} />,
      description: "Interfaces minimalistas y vanguardistas que elevan el valor percibido de tu marca."
    },
    {
      title: "Mobile First",
      icon: <Smartphone className="text-accent" size={20} />,
      description: "Experiencia de usuario optimizada para la navegación móvil, donde están tus clientes."
    },
    {
      title: "Conversión Directa",
      icon: <Zap className="text-accent" size={20} />,
      description: "Estrategias de contacto integradas para transformar clics en conversaciones reales."
    },
    {
      title: "Arquitectura de Ventas",
      icon: <Target className="text-accent" size={20} />,
      description: "Estructuras persuasivas diseñadas para guiar al usuario hacia la decisión de compra."
    },
    {
      title: "Velocidad Extrema",
      icon: <Clock className="text-accent" size={20} />,
      description: "Optimización técnica para tiempos de carga instantáneos y mejor posicionamiento."
    },
    {
      title: "Soporte & Evolución",
      icon: <LifeBuoy className="text-accent" size={20} />,
      description: "Acompañamiento continuo para que tu web crezca y se adapte a las nuevas tendencias."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-accent text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">
              Nuestra Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
              Soluciones digitales <br /> <span className="text-white/30 text-gradient">de alto rendimiento</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-xl">
              Fusionamos diseño de autor con ingeniería de conversión para crear activos digitales que no solo lucen bien, sino que venden.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-primary p-12 hover:bg-white/[0.03] transition-all duration-500 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-10 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500 relative z-10">
                <div className="absolute inset-0 bg-accent blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 tracking-tight relative z-10 group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500 relative z-10">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 bg-accent/0 group-hover:bg-accent/20 w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
