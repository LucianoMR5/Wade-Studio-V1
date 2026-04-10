import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma tener mi página lista?",
      answer: "Dependiendo del plan, el tiempo de entrega varía entre 1 y 2 semanas. Trabajamos de forma ágil para que tu negocio esté online lo antes posible."
    },
    {
      question: "¿Necesito pagar algo mensual?",
      answer: "Nuestros planes son de pago único por el diseño y desarrollo. Solo deberás renovar tu dominio y hosting anualmente (nosotros te ayudamos con el proceso)."
    },
    {
      question: "¿Mi página se verá bien en celulares?",
      answer: "¡Por supuesto! Todas nuestras páginas son 'Responsive', lo que significa que se adaptan perfectamente a celulares, tablets y computadoras."
    },
    {
      question: "¿Qué pasa si quiero hacer cambios después?",
      answer: "Ofrecemos soporte y mantenimiento. Dependiendo de tu plan, tienes desde 1 hasta 3 meses de mantenimiento gratuito para ajustes menores."
    },
    {
      question: "¿Ustedes se encargan del dominio y hosting?",
      answer: "Sí, te asesoramos y configuramos todo para que no tengas que preocuparte por la parte técnica. Te entregamos la página lista para funcionar."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Preguntas Frecuentes</h2>
          <p className="text-white/60 text-lg">
            Resolvemos tus dudas para que empieces con total confianza.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-3xl glass overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-accent" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
