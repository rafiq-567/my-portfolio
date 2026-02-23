import { Link } from "react-router";
import { projects } from "../data/projects.jsx";
import { CometCard } from "./ui/CometCard";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 min-h-screen flex justify-center"
    >
      {/* OUTER WRAPPER – FORCES CENTER */}
      <div className="w-full max-w-7xl px-6">

        {/* TITLE - Using CSS variable */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-20 text-center text-white"
          // style={{ color: 'var(--primary-text-color)' }}
        >
         <br /> My Projects
        </motion.h2>
        <div><br /></div>
        
        {/* GRID – HARD CENTERED */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-y-6
            justify-items-center
            mx-auto
          "
        >
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full max-w-sm"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable
                glareMaxOpacity={0.15}
                className="h-full"
              >
                <CometCard className="flex flex-col h-full p-6 hover:shadow-2xl transition-shadow">

                  {/* CONTENT */}
                  <div className="flex flex-col flex-grow text-center">
                    {/* Project title - Using CSS variable */}
                    <h3 
                      className="text-xl font-semibold"
                      style={{ color: 'var(--primary-text-color)' }}
                    >
                      {project.name} 
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-100 mt-2 line-clamp-3" style={{ color: 'var(--primary-text-color)' }}>
                      {project.description}
                    </p>
                    <br />
                    <div className="mt-4 flex h-8 gap-2 justify-center items-center">
                      {project.stack?.map((tech, i) => (
                        <span
                          key={i}
                          className="border-2 w-17 border-white/30 rounded text-white text-sm px-4 py-2 inline-block"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <br />

                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* BUTTON */}
               <div className="mt-6">
  <Link
    to={`/projects/${project.id}`}
    className="
      block w-full text-center
      border border-white/20
      backdrop-blur-md
      bg-white/10
      text-white font-medium
      px-5 py-2.5 rounded-xl
      transition-all duration-300
      hover:bg-white/20
      hover:border-white/40
    "
  >
    View Details
  </Link>
</div>


                </CometCard>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}