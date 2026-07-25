import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Code2, Lightbulb, TrendingUp } from "lucide-react";

import Projects from "../components/Projects.jsx";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-text-color)' }}>
            Project not found
          </h2>
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 md:py-20 px-4 sm:px-6 flex items-center justify-center">
      

      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border border-white/10 hover:border-indigo-500/50 transition-colors group"
            style={{ color: 'var(--primary-text-color)' }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>
        
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 
            className="text-3xl md:text-5xl font-bold mb-4 text-center" 
            style={{ color: 'var(--primary-text-color)' }}
          >
            {project.name}
          </h1>
          <p className="text-lg text-zinc-400  text-center">
            {project.description}
            
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 p-4 sm:p-8 rounded-2xl border border-white/10"
          style={{ backgroundColor: 'rgba(26, 26, 46, 0.5)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-6 h-6 text-indigo-400" />
            
            <h2 
              className="text-2xl font-bold"
              style={{ color: 'var(--primary-text-color)' }}
            >
              Technology Stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.stack?.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium "
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Live Project */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
            style={{ backgroundColor: 'rgba(26, 26, 46, 0.5)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-indigo-400" />
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: 'var(--primary-text-color)' }}
                >
                  Live Project
                </h3>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <p className="text-sm text-zinc-400 truncate">{project.live}</p>
          </a>

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
            style={{ backgroundColor: 'rgba(26, 26, 46, 0.5)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-indigo-400" />
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: 'var(--primary-text-color)' }}
                >
                  Source Code
                </h3>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <p className="text-sm text-zinc-400 truncate">{project.github}</p>
          </a>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 p-4 sm:p-8 rounded-2xl border border-white/10"
          style={{ backgroundColor: 'rgba(26, 26, 46, 0.5)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            <h2 
              className="text-2xl font-bold"
              style={{ color: 'var(--primary-text-color)' }}
            >
              Challenges Faced
            </h2>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            {project.challenges}
          </p>
        </motion.div>

        {/* Future Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-4 sm:p-8 rounded-2xl border border-white/10"
          style={{ backgroundColor: 'rgba(26, 26, 46, 0.5)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-green-400" />
            <h2 
              className="text-2xl font-bold"
              style={{ color: 'var(--primary-text-color)' }}
            >
              Future Improvements
            </h2>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            {project.improvements}
          </p>
        </motion.div>
      </div>
    </div>
  );
}