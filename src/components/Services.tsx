import { motion } from "motion/react";
import { CheckCircle2, Layout, Smartphone, Zap, Target, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Diseño web moderno",
      icon: <Layout className="text-accent" size={24} />,
      description: "Interfaces limpias y vanguardistas que capturan la esencia de tu marca."
    },
    {
      title: "Optimización celular",
      icon: <Smartphone className="text-accent" size={24} />,
      description: "Tu página se verá perfecta en cualquier dispositivo, garantizado."
    },
    {
      title: "Integración WhatsApp",
      icon: <Zap className="text-accent" size={24} />,
      description: "Conexión directa con tus clientes para cerrar ventas al instante."
    },
    {
      title: "Enfoque en ventas",
      icon: <Target className="text-accent" size={24} />,
      description: "Estructuras diseñadas psicológicamente para convertir visitas en leads."
    },
    {
      title: "Entrega rápida",
      icon: <Clock className="text-accent" size={24} />,
      description: "Tu negocio online listo en tiempo récord (1 a 2 semanas)."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Servicios que impulsan <br /> <span className="text-accent">tu crecimiento</span>
            </h2>
            <p className="text-white/60 text-lg">
              No solo hacemos páginas bonitas, construimos herramientas de negocio potentes y escalables.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
