import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { profile } from '../data/Profile';
import photo from '../assets/final.png';
import { Spotlight } from './ui/Spotlight';


export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center antialiased"

    >
      <Spotlight
        className="-top-40 -left-40 z-0"
        fill="rgba(255,255,255,0.06)"
      />

      <Spotlight
        className="bottom-[-25%] left-[20%] z-0"
        fill="rgba(255,255,255,0.04)"
      />


      <div
        className="absolute inset-0 bg-grid p-8 pointer-events-none z-1"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 50%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 85%)"
        }}
      />


      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-zinc-400 font-medium mb-2">Hello, I am</h1>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              {profile.name}
            </h1>
            <p className="text-indigo-400 text-xl font-semibold mt-3">{profile.designation}</p>
            <p className="mt-6 max-w-lg text-zinc-400 text-lg leading-relaxed">{profile.intro}</p>

            <div className="flex items-center gap-4 mt-8">
              <a href={profile.resume} download className="btn btn-primary rounded-full px-8 shadow-lg shadow-indigo-500/20">
                Download Resume
              </a>
              <div className="flex gap-5 ml-4">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-transform hover:scale-110"><FaGithub size={24} /></a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-transform hover:scale-110"><FaLinkedin size={24} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <img src={photo} alt={profile.name} className="object-cover w-full h-full scale-105 group-hover:scale-110 transition duration-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
