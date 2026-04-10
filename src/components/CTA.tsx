import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-dark p-16 md:p-32 rounded-[4rem] text-center overflow-hidden border border-white/[0.05]"
        >
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 blur-[120px] rounded-full -z-10" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-8 block">
              Próximo Paso
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 tracking-tight leading-[0.9]">
              ¿Listo para <br /> <span className="text-white/30">evolucionar?</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl mb-16 leading-relaxed font-medium">
              No dejes que tu competencia se lleve a tus clientes. Construyamos hoy mismo la página que tu negocio merece.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/51914135823?text=Hola%20buenas,%20queria%20mas%20informacion%20sobre%20las%20paginas%20web"
                className="w-full sm:w-auto px-12 py-6 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-all group shadow-2xl shadow-white/5"
              >
                <MessageCircle size={20} />
                Iniciar Conversación
              </a>
              <a 
                href="#pricing"
                className="w-full sm:w-auto px-12 py-6 glass-dark text-white font-bold rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/5"
              >
                Ver Planes
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
