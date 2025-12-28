// import { motion } from "framer-motion";

// export function CometCard({ children, className }) {
//   return (
//  <motion.div
//   whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
//   transition={{ type: "spring", stiffness: 250, damping: 18 }}
//   className="group relative rounded-xl bg-white/80 dark:bg-zinc-900/80 
//              border border-black/5 dark:border-white/10 
//              backdrop-blur-xl p-5 shadow-lg"
// >

//       <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition" />
//       <div className="relative z-10">
//         {children}
//       </div>
//     </motion.div>
//   );
// }



import { motion } from "framer-motion";

export function CometCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      // FIX: Added ${className} at the end so parent styles are applied
      // I also removed the hardcoded 'p-5' so you can control padding from the parent
      className={`group relative rounded-xl bg-white/80 dark:bg-zinc-900/80 
                 border border-black/5 dark:border-white/10 
                 backdrop-blur-xl shadow-lg ${className}`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition" />
      
      {/* Ensure content stays above the gradient background */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}