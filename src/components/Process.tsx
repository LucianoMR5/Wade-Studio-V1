import { motion } from "motion/react";
import { Search, PenTool, Code, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Descubrimiento",
      description: "Entendemos tu negocio, tus objetivos y quién es tu cliente ideal.",
      icon: <Search className="text-accent" size={24} />,
      step: "01"
    },
    {
      title: "Diseño",
      description: "Creamos una propuesta visual única que represente la esencia de tu marca.",
      icon: <PenTool className="text-accent" size={24} />,
      step: "02"
    },
    {
      title: "Desarrollo",
      description: "Construimos tu página con las últimas tecnologías para que sea rápida y segura.",
      icon: <Code className="text-accent" size={24} />,
      step: "03"
    },
    {
      title: "Lanzamiento",
      description: "Tu página sale al mundo lista para atraer clientes y generar ventas.",
      icon: <Rocket className="text-accent" size={24} />,
      step: "04"
    }
  ];

  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Nuestro Proceso</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Un camino claro y estructurado para llevar tu negocio al siguiente nivel digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-y-1/2 -z-10" />
          
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                delay: index * 0.15 
              }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2.5rem] glass group hover:bg-white/10 transition-all duration-500 border-accent/5 hover:border-accent/20"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] -z-10" />
              
              <span className="absolute top-6 right-8 text-6xl font-display font-black text-white/[0.03] group-hover:text-accent/10 transition-all duration-500 group-hover:scale-110">
                {item.step}
              </span>
              
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 relative"
              >
                <div className="absolute inset-0 bg-accent blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                {item.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {item.description}
              </p>

              <div className="mt-6 w-0 group-hover:w-full h-1 bg-accent/30 rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
