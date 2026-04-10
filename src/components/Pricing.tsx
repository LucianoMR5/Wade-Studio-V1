import { motion } from "motion/react";
import { Check, Sparkles, Zap, Shield, Crown } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "450",
      icon: <Zap size={20} className="text-accent" />,
      description: "Ideal para emprendedores que inician su presencia digital.",
      features: [
        "1 página (landing)",
        "Diseño minimalista",
        "Botón de WhatsApp",
        "Optimización SEO básica",
        "Entrega en 7 días"
      ],
      highlight: false
    },
    {
      name: "Estándar",
      price: "700",
      icon: <Shield size={20} className="text-accent" />,
      description: "La solución completa para negocios en crecimiento.",
      features: [
        "Hasta 4 secciones",
        "Diseño personalizado",
        "Optimización móvil",
        "Integración Redes sociales",
        "1 mes de mantenimiento",
        "Configuración de Hosting"
      ],
      highlight: true
    },
    {
      name: "Premium",
      price: "1099",
      icon: <Crown size={20} className="text-accent" />,
      description: "Para marcas que buscan la máxima exclusividad y potencia.",
      features: [
        "Hasta 8 secciones",
        "Diseño con animaciones",
        "WhatsApp + formulario",
        "Optimización de velocidad",
        "3 meses de mantenimiento",
        "Soporte prioritario 24/7"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-4 block"
          >
            Inversión Transparente
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight"
          >
            Planes de <span className="text-white/30 text-gradient">Alto Rendimiento</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Sin letras pequeñas. Inversión única para una presencia digital que trabaja por ti las 24 horas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className={`relative p-10 md:p-12 rounded-[3.5rem] flex flex-col transition-all duration-500 border group ${
                plan.highlight 
                  ? "bg-white text-black border-white shadow-[0_40px_80px_-15px_rgba(255,255,255,0.1)] scale-105 z-10" 
                  : "glass-dark text-white border-white/[0.05] hover:border-white/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl shadow-accent/20">
                  <Sparkles size={12} />
                  Recomendado
                </div>
              )}

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors duration-500 ${plan.highlight ? "bg-black/5 group-hover:bg-accent group-hover:text-white" : "bg-white/5 group-hover:bg-accent group-hover:text-white"}`}>
                    {plan.icon}
                  </div>
                  <h3 className={`text-sm font-black uppercase tracking-[0.2em] ${plan.highlight ? "text-black/40" : "text-white/40"}`}>
                    {plan.name}
                  </h3>
                </div>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-lg font-bold ${plan.highlight ? "text-black/30" : "text-white/30"}`}>S/</span>
                  <span className="text-6xl md:text-7xl font-display font-bold tracking-tighter">{plan.price}</span>
                </div>
                <p className={`text-xs font-medium ${plan.highlight ? "text-black/40" : "text-white/30"}`}>
                  Pago único • Sin mensualidades
                </p>
              </div>

              <p className={`text-sm mb-10 leading-relaxed ${plan.highlight ? "text-black/60" : "text-white/40"}`}>
                {plan.description}
              </p>

              <div className={`h-px w-full mb-10 ${plan.highlight ? "bg-black/5" : "bg-white/5"}`} />

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-4 text-sm">
                    <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-accent/10" : "bg-accent/10"}`}>
                      <Check size={10} className="text-accent" />
                    </div>
                    <span className={plan.highlight ? "text-black/70 font-medium" : "text-white/50"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/51914135823?text=Hola,%20estoy%20interesado%20en%20el%20plan%20${plan.name}`}
                className={`w-full py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                  plan.highlight 
                    ? "bg-black text-white hover:bg-accent shadow-xl shadow-black/10" 
                    : "bg-white text-black hover:bg-accent hover:text-white"
                }`}
              >
                Elegir {plan.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust/Guarantee Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center gap-3">
            <Shield size={20} className="text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest">Garantía de Satisfacción</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest">Entrega en Tiempo Récord</span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles size={20} className="text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest">Diseño de Autor Único</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
