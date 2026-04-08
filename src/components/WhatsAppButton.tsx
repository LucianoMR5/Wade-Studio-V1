import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/51914135823?text=Hola%20buenas,%20queria%20mas%20informacion%20sobre%20las%20paginas%20web"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ rotate: 10 }}
    >
      <MessageCircle size={32} fill="currentColor" />
    </motion.a>
  );
}
