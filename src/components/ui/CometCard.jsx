import { motion } from "framer-motion";

export function CometCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={`group relative rounded-xl 
                 border border-black/5 dark:border-white/10 
                 backdrop-blur-xl shadow-lg ${className}`}
      style={{
        backgroundColor: 'rgba(26, 26, 46, 0.8)', // Dark card background
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition" />
      
      {/* Ensure content stays above the gradient background */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}