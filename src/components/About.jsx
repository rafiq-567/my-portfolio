import { motion } from 'framer-motion';
import { Layout, Server, Globe, Database, Cpu, Code2 } from 'lucide-react';

export default function About() {
  const services = [
    { title: "Frontend Development", desc: "Crafting dynamic, interactive, and user-friendly interfaces using React.js and modern UI libraries.", icon: <Layout className="text-orange-400" /> },
    { title: "Backend Development", desc: "Building robust, scalable backend systems with Express.js and Node.js, managing databases efficiently.", icon: <Server className="text-pink-400" /> },
    { title: "Full Stack Development", desc: "Building end-to-end web applications with expertise in both frontend and backend", icon: <Globe className="text-blue-400" /> },
    { title: "Database Management", desc: "Managing and optimizing databases using MongoDB, ensuring data security and performance.", icon: <Database className="text-purple-400" /> },
    { title: "APIs Integrations", desc: "Connecting applications seamlessly with third-party APIs for enhanced features and automation.", icon: <Cpu className="text-pink-500" /> },
    { title: "Real-time Applications", desc: "Implementing live features like chat, notifications, and collaborative tools using WebSockets and real-time APIs.", icon: <Code2 className="text-blue-500" /> },
  ];

  return (
    <section id="about" className="min-h-screen z-50 relative flex flex-col justify-center items-center text-white py-10 md:py-20 mt-10 md:mt-20 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto gap-8 md:gap-16 justify-center items-center">

        {/* LEFT SIDE: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        //   className="sticky top-24" // Keeps text visible as you scroll the cards
        >
          <h2 className="text-3xl md:text-4xl text-center font-bold text-white mb-8">
           <br /> <br /> About Me</h2>
          <div className="space-y-6 text-center text-gray-300 text-lg leading-relaxed">
            <p>
              I am <span className="text-white font-semibold">Md. Rafiqul Akhter</span>,
              a passionate <span className="text-blue-400">Frontend Focused Full-Stack Developer

</span> dedicated
              to crafting fast, responsive, and user-friendly web applications.
            </p>
            <p>
              Skilled in <span className="text-white italic">React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and MongoDB </span>
              I specialize in building scalable architectures and integrating complex APIs.
            </p>
            <br />
            <p className='text-center'>I build production-ready applications with clean architecture and modern tooling।

            </p>
            <p className="text-sm pl-4 py-1 italic text-gray-400 text-center">
              "I believe in continuous learning and turning complex problems into elegant digital solutions."
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <h3 className="text-2xl font-bold mb-2 col-span-full">What I'm Doing</h3>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(99, 102, 241, 0.05)" }}
              className="rounded-2xl bg-gray-950 border border-gray-800 shadow-xl"
              style={{ padding: '16px' }}
            >
              <div style={{ marginBottom: '5px' }}>{service.icon}</div>
              <h4 className="text-lg font-bold text-white" style={{ marginBottom: '8px' }}>
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm" style={{ lineHeight: '1.5' }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}