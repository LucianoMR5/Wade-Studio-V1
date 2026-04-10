import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Effects - More Dramatic */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/30 blur-[120px] rounded-full -z-10" 
      />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full -z-10" />
      
      {/* Animated Wave Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-0 right-0 h-[300px] border-t border-accent/10 rounded-[100%]"
            animate={{
              y: [20 * i, -20 * i, 20 * i],
              opacity: [0.05, 0.1, 0.05],
              scaleX: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-accent text-[10px] font-black tracking-[0.2em] uppercase">
              <span className="w-1 h-1 rounded-full bg-accent animate-ping" />
              Web Design Studio • Lima, Perú
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-display font-bold tracking-[-0.04em] leading-[0.85] mb-12 text-gradient">
            Creamos páginas <br />
            web que hacen <br />
            <span className="text-accent">crecer tu negocio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Diseño moderno, rápido y enfocado en generar clientes. <br className="hidden md:block" />
            Transformamos tu presencia digital en una máquina de ventas.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a 
              href="#pricing"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-all group shadow-xl shadow-white/5"
            >
              Ver planes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/51914135823?text=Hola%20buenas,%20queria%20mas%20informacion%20sobre%20las%20paginas%20web"
              className="w-full sm:w-auto px-10 py-5 glass-dark text-white font-bold rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/5"
            >
              <MessageCircle size={18} />
              Contactar WhatsApp
            </a>
          </div>
          
          <div className="flex items-center gap-8 opacity-30">
            <div className="h-px w-12 bg-white" />
            <a 
              href="https://www.instagram.com/wavestudiov1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-100 transition-opacity text-[10px] font-black uppercase tracking-[0.2em]"
            >
              <Instagram size={14} />
              @wavestudiov1
            </a>
            <div className="h-px w-12 bg-white" />
          </div>
        </motion.div>
      </div>

      {/* Floating Elements - Enhanced */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          rotate: [12, 20, 12],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <div className="glass p-6 rounded-[2rem] border-accent/20 glow-subtle">
          <div className="w-16 h-2 bg-accent rounded-full mb-3" />
          <div className="w-10 h-2 bg-white/20 rounded-full" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [-12, -25, -12],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 hidden lg:block"
      >
        <div className="glass p-6 rounded-[2rem] border-accent/20 glow-subtle">
          <div className="flex gap-2 mb-3">
            {[1,2,3].map(i => <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className="w-3 h-3 rounded-full bg-accent" />)}
          </div>
          <div className="w-20 h-2 bg-white/20 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
