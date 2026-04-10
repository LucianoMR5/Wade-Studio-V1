import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-accent text-xs font-bold tracking-widest uppercase mb-6">
            Web Design Studio • Lima, Perú
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight leading-[0.9] mb-8 text-gradient">
            Creamos páginas web que hacen crecer tu negocio
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseño moderno, rápido y enfocado en generar clientes. Transformamos tu presencia digital en una máquina de ventas.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a 
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all group"
            >
              Ver planes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/51914135823?text=Hola%20buenas,%20queria%20mas%20informacion%20sobre%20las%20paginas%20web"
              className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <MessageCircle size={18} />
              Contactar WhatsApp
            </a>
          </div>
          
          <a 
            href="https://www.instagram.com/wavestudiov1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-sm font-medium"
          >
            <Instagram size={16} />
            Síguenos en Instagram @wavestudiov1
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 hidden lg:block"
      >
        <div className="glass p-4 rounded-2xl rotate-12">
          <div className="w-12 h-1.5 bg-accent rounded-full mb-2" />
          <div className="w-8 h-1.5 bg-white/20 rounded-full" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-10 hidden lg:block"
      >
        <div className="glass p-4 rounded-2xl -rotate-12">
          <div className="flex gap-1 mb-2">
            {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-accent" />)}
          </div>
          <div className="w-16 h-1.5 bg-white/20 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
