import React from 'react'


// export default function About() {
//     return (
//         <section id="about" className="relative bg-[#0a0a0a] text-center container  mx-auto px-4 py-20 z-50" >
//             <h2 className="text-4xl font-bold mt-12 text-fuchsia-300 ">About Me</h2>
//             <p className="dark:text-white">

//                 <span className='text-xl'>Hi, I’m Md. Rafiqul Akhter — a passionate developer who loves turning ideas into clean, functional, and user-friendly digital experiences.</span><br></br>

//                 <span className='text-xl'>I began my programming journey with HTML and CSS, and gradually expanded my skills into JavaScript, React, Node.js, MongoDB, payment integration systems, and more. I believe in continuous learning, so I’m always exploring new tools, frameworks, and approaches to improve my craft.</span><br></br>
                 
//                  <span className='text-xl'>I’ve always been fascinated by the digital world and strive to contribute to it meaningfully. If you’d like to collaborate or just say hello, feel free to reach me at mdrafiqulakhter0 — I’d love to connect!</span>
//             </p>

//             <div className="mt-4">
//                 <h3 className="font-semibold dark:text-gray-300">What I enjoy</h3>
//                 <p className="dark:text-white">Building UIs, animations, performance optimizations.</p>

//             </div>
//         </section>
//     )
// }

import { motion } from 'framer-motion';
import { Layout, Server, Globe, Database, Cpu, Code2 } from 'lucide-react';

export default function About() {
  const services = [
    { title: "Frontend", desc: "React.js & Modern UI", icon: <Layout className="text-orange-400" /> },
    { title: "Backend", desc: "Node.js & Express", icon: <Server className="text-pink-400" /> },
    { title: "Full Stack", desc: "End-to-end apps", icon: <Globe className="text-blue-400" /> },
    { title: "Database", desc: "MongoDB optimization", icon: <Database className="text-purple-400" /> },
    { title: "APIs", desc: "Seamless integrations", icon: <Cpu className="text-pink-500" /> },
    { title: "Real-time", desc: "WebSockets & Chat", icon: <Code2 className="text-blue-500" /> },
  ];

  return ( 
    <section id="about" className="min-h-screen z-50 relative  flex flex-col-2 justify-center items-center text-white py-20 mt-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto  gap-16 justify-center items-center">
        
        {/* LEFT SIDE: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        //   className="sticky top-24" // Keeps text visible as you scroll the cards
        >
          <h2 className="text-5xl font-bold text-fuchsia-300 mb-8">About Me</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am <span className="text-white font-semibold">Md. Rafiqul Akhter</span>, 
              a passionate <span className="text-blue-400">MERN Stack Developer</span> dedicated 
              to crafting fast, responsive, and user-friendly web applications.
            </p>
            <p>
              Skilled in <span className="text-white italic">React, Tailwind CSS, Node.js, Express.js, and MongoDB.</span> 
              I specialize in building scalable architectures and integrating complex APIs.
            </p>
            <p className="text-sm border-l-2 border-fuchsia-500 pl-4 py-1 italic text-gray-400">
              "I believe in continuous learning and turning complex problems into elegant digital solutions."
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <h3 className="text-2xl font-bold mb-4 col-span-full">What I'm Doing</h3>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="p-6 rounded-2xl bg-[#161616] border border-white/5 shadow-xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}