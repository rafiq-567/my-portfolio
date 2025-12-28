
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
      style={{ backgroundColor: "var(--background-color)" }}
    >
      {/* OUTER WRAPPER – FORCES CENTER */}
      <div className="w-full max-w-7xl px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-20 text-center text-black dark:text-white"
        >
          My Projects
        </motion.h2>

        {/* GRID – HARD CENTERED */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            
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
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      {project.name}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack?.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

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
                      className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
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
