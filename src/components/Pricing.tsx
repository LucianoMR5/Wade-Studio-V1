import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "S/450",
      features: [
        "1 página (landing)",
        "Diseño limpio",
        "Botón de WhatsApp",
        "Entrega en 1 a 2 semanas"
      ],
      highlight: false
    },
    {
      name: "Estándar",
      price: "S/700",
      features: [
        "Hasta 4 secciones",
        "Diseño personalizado",
        "Optimización móvil",
        "Redes sociales",
        "1 mes de mantenimiento gratis"
      ],
      highlight: true
    },
    {
      name: "Premium",
      price: "S/1099",
      features: [
        "Hasta 8 secciones",
        "Diseño con animaciones",
        "WhatsApp + formulario",
        "Optimización de velocidad",
        "3 meses de mantenimiento",
        "Soporte prioritario"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Planes a tu medida</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Inversión transparente para resultados reales. Elige el plan que mejor se adapte a tu etapa actual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] flex flex-col ${
                plan.highlight 
                  ? "bg-accent text-white scale-105 z-10 shadow-2xl shadow-accent/20" 
                  : "glass text-white"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-accent px-4 py-1 rounded-full text-xs font-black uppercase flex items-center gap-1">
                  <Sparkles size={12} />
                  Más popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-white/70"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-display font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-white/40"}`}>/ pago único</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check size={18} className={plan.highlight ? "text-white" : "text-accent"} />
                    <span className={plan.highlight ? "text-white/90" : "text-white/70"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/51914135823?text=Hola,%20estoy%20interesado%20en%20el%20plan%20${plan.name}`}
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                  plan.highlight 
                    ? "bg-white text-accent hover:bg-white/90" 
                    : "bg-accent text-white hover:bg-accent/80"
                }`}
              >
                Elegir plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
