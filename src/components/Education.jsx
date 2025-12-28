// import React from 'react'

// export default function Education() {
//   return (
//     <section className="container mx-auto px-4 py-8 ">
//       <h2 className="text-2xl font-bold mb-4">Education</h2>
//       <div className="space-y-4">
//         <div className="p-4 border rounded-lg">
//           <h3 className="font-semibold">M.A in Economics</h3>
//           <p className="text-sm ">National University — 2016</p>
//           <p>Govt. Keshab Chandra College, Jhenaidah</p>
          
//         </div>
//         <div className="p-4 border rounded-lg">
//           <h3 className="font-semibold">B.A(honours) in Economics</h3>
//           <p className="text-sm ">National University — 2014</p>
//           <p>Govt. Keshab Chandra College, Jhenaidah</p>
          
//         </div>
//         {/* add more if needed */}
//       </div>
//     </section>
//   )
// }


import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden py-20 md:py-28">
      {/* Section title as in image */}
      <div className="mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 ">
            Educations
          </span>
        </motion.h2>
        
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
          />

          {/* Timeline items */}
          <div className="space-y-24">
            {/* First education item (Bachelor Degree) */}
            <div className="relative flex items-center justify-center gap-8 md:gap-12">
              {/* Left side content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 md:pr-12 md:text-right"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block"
                >
                  <div className="relative group">
                    {/* Card with gradient border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300" />
                    <div className="relative rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 p-6 md:p-8">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-emerald-400 font-semibold text-sm md:text-base mb-2"
                      >
                        2024 - Present
                      </motion.p>
                      <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-bold text-white mb-2"
                      >
                        BACHELOR DEGREE
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-zinc-300 text-sm md:text-base"
                      >
                        National University of Bangladesh
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Outer pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                  {/* Inner node */}
                  <div className="relative w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute w-8 h-8 border-2 border-indigo-400/30 rounded-full"
                    />
                    <GraduationCap size={12} className="text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Right side icon */}
              <div className="w-full md:w-1/2 md:pl-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10">
                    <GraduationCap size={40} className="text-indigo-400" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Second education item (HSC) */}
            <div className="relative flex items-center justify-center gap-8 md:gap-12">
              {/* Left side icon */}
              <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-white/10">
                    <GraduationCap size={40} className="text-emerald-400" />
                  </div>
                </motion.div>
              </div>

              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative w-6 h-6 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute w-8 h-8 border-2 border-emerald-400/30 rounded-full"
                    />
                    <GraduationCap size={12} className="text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Right side content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 md:pl-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block"
                >
                  <div className="relative group ">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300" />
                    <div className="relative rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 p-6 md:p-8">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-emerald-400 font-semibold text-sm  md:text-base mb-2"
                      >
                        2021 - 2022
                      </motion.p>
                      <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-bold  text-white mb-2"
                      >
                        HIGHER SECONDARY CERTIFICATE
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className="text-zinc-300 text-sm md:text-base"
                      >
                        padma govt college
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

  
       
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl"
      />
    </section>
  );
}