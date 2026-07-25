import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Ad-Din Mother Care",
    type: "Internship",
    period: "Jun 2026 - Present",
    duration: "Running",
    location: "Boro Moghbazar, Dhaka",
    workType: "On-site",
    color: "indigo",
  },
  {
    id: 2,
    title: "Freelance Full-Stack Developer",
    company: "Self Employed",
    type: "Self-employed",
    period: "Jan 2024 - Jun 2026",
    duration: "2 yrs 6 mos",
    location: "Dhaka, Bangladesh",
    workType: "Remote",
    color: "emerald",
    description:
      "Building and deploying full-stack web applications for personal and client projects using modern technologies.",
    projects: [
      "Health Hub — Multi-vendor medicine e-commerce platform with Stripe payment integration and admin dashboard (React, Node.js, MongoDB)",
      "BigBoom — Furniture e-commerce platform with server-side rendering and relational database (Next.js, TypeScript, PostgreSQL)",
      "SixTour — Team-built travel booking platform with real-time features, payment system, and user dashboard (Next.js, Socket.IO, MongoDB)",
      "Car Rental App — Vehicle rental platform with booking system and Stripe payments (React, Node.js, MongoDB)",
      "Hobby Hub — Community platform with JWT authentication and complete backend API (React, Node.js, MongoDB)",
      "Eagle3D — Real-time inventory management system with live data sync (Node.js, Redux Toolkit, TypeScript, Firebase)",
    ],
    skills: ["React.js", "Next.js"],
  },
];

const colorConfig = {
  indigo: {
    from: "from-indigo-600",
    to: "to-purple-600",
    text: "text-indigo-400",
    border: "border-indigo-400/30",
    bg: "from-indigo-500/10 to-purple-500/10",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
  emerald: {
    from: "from-emerald-600",
    to: "to-cyan-600",
    text: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "from-emerald-500/10 to-cyan-500/10",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative  min-h-screen w-full overflow-hidden py-20 md:py-28">
      <div className="mb-16 md:mb-24 ">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold tracking-tight"
        >
          <span className="bg-clip-text text-white">
            <br /><br /><br />
            Experience
          </span>
        </motion.h2>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const colors = colorConfig[exp.color];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-12"
                >
                  {isLeft ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="block w-full"
                        >
                          <div className="relative group">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.from} ${colors.to} rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300`} />
                            <div className="relative rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 p-8 md:p-10">
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                                  {exp.type}
                                </span>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-green-400 border border-white/10">
                                  {exp.duration}
                                </span>
                              </div>
                              <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                                className={`text-xl md:text-2xl font-bold text-white mb-1 ${isLeft ? "" : ""}`}
                              >
                                {exp.title}
                              </motion.h3>
                              <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                                className={`${colors.text} font-semibold text-sm md:text-base mb-1`}
                              >
                                {exp.company}
                              </motion.p>
                              <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                viewport={{ once: true }}
                                className="text-zinc-400 text-xs md:text-sm"
                              >
                                {exp.period} &middot; {exp.location} &middot; {exp.workType}
                              </motion.p>
                              {exp.description && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ delay: 0.8 }}
                                  viewport={{ once: true }}
                                  className="text-zinc-300 text-sm md:text-base mt-4"
                                >
                                  {exp.description}
                                </motion.p>
                              )}
                              {exp.projects && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ delay: 0.9 }}
                                  viewport={{ once: true }}
                                  className="mt-4"
                                >
                                  <p className="text-zinc-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                                    Projects delivered:
                                  </p>
                                  <ul className="space-y-1.5">
                                    {exp.projects.map((project, i) => (
                                      <li
                                        key={i}
                                        className="text-zinc-300 text-xs md:text-sm leading-relaxed pl-3 border-l border-zinc-700"
                                      >
                                        {project}
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                              {exp.skills && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ delay: 1.0 }}
                                  viewport={{ once: true }}
                                  className="flex flex-wrap gap-2 mt-4"
                                >
                                  {exp.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700">
                                    +6 skills
                                  </span>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>

                      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.from} ${colors.to}`}
                          />
                          <div
                            className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} flex items-center justify-center`}
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className={`absolute w-8 h-8 border-2 ${colors.border} rounded-full`}
                            />
                            <Briefcase size={12} className="text-white" />
                          </div>
                        </motion.div>
                      </div>

                      <div className="hidden md:block w-full md:w-1/2 md:pl-12">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="inline-block"
                        >
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${colors.bg} border border-white/10`}>
                            <Briefcase size={40} className={colors.text} />
                          </div>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block w-full md:w-1/2 md:pr-12 md:text-right">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="inline-block"
                        >
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${colors.bg} border border-white/10`}>
                            <Briefcase size={40} className={colors.text} />
                          </div>
                        </motion.div>
                      </div>

                      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <div
                            className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} flex items-center justify-center`}
                          >
                            <motion.div
                              animate={{ rotate: -360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className={`absolute w-8 h-8 border-2 ${colors.border} rounded-full`}
                            />
                            <Briefcase size={12} className="text-white" />
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 pl-12 md:pl-12"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="block w-full"
                        >
                          <div className="relative group">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.from} ${colors.to} rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300`} />
                            <div className="relative rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 p-8 md:p-10">
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                                  {exp.type}
                                </span>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                                  {exp.duration}
                                </span>
                              </div>
                              <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                                className="text-xl md:text-2xl font-bold text-white mb-1"
                              >
                                {exp.title}
                              </motion.h3>
                              <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                                className={`${colors.text} font-semibold text-sm md:text-base mb-1`}
                              >
                                {exp.company}
                              </motion.p>
                              <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                viewport={{ once: true }}
                                className="text-zinc-400 text-xs md:text-sm"
                              >
                                {exp.period} &middot; {exp.location} &middot; {exp.workType}
                              </motion.p>
                              {exp.description && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ delay: 0.8 }}
                                  viewport={{ once: true }}
                                  className="text-zinc-300 text-sm md:text-base mt-4"
                                >
                                  {exp.description}
                                </motion.p>
                              )}
                              {exp.projects && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ delay: 0.9 }}
                                  viewport={{ once: true }}
                                  className="mt-4"
                                >
                                  <p className="text-zinc-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                                    Projects delivered:
                                  </p>
                                  <ul className="space-y-1.5">
                                    {exp.projects.map((project, i) => (
                                      <li
                                        key={i}
                                        className="text-zinc-300 text-xs md:text-sm leading-relaxed pl-3 border-l border-zinc-700"
                                      >
                                        {project}
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                              {exp.skills && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ delay: 1.0 }}
                                  viewport={{ once: true }}
                                  className="flex flex-wrap gap-2 mt-4"
                                >
                                  {exp.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700">
                                    +6 skills
                                  </span>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
