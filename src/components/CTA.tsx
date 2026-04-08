import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-accent/40"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 relative z-10">
            Haz crecer tu negocio con una página web profesional
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
            No dejes pasar más tiempo. Tu competencia ya está online. Empieza hoy mismo tu transformación digital.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a 
              href="https://wa.me/51914135823?text=Hola%20buenas,%20queria%20mas%20informacion%20sobre%20las%20paginas%20web"
              className="w-full sm:w-auto px-10 py-5 bg-white text-accent font-black rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl"
            >
              <MessageCircle size={24} />
              Contáctanos por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
