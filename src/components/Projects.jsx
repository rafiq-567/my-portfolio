// import React from 'react'
// import { Link } from 'react-router'
// import { projects } from '../data/Projects'


// export default function Projects(){
//   return (
//     <section id="projects" className="container mx-auto px-4 py-10">
       
//       <h2 className="text-2xl font-bold mb-6">Projects</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {projects.map(p => (
//           <div key={p.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
//             <img src={p.image} alt={p.name} className="h-40 w-full object-cover"/>
//             <div className="p-4">
//               <h3 className="font-semibold text-lg text-black">{p.name}</h3>
//               <p className="text-sm text-gray-600 mt-1">{p.description}</p>
//               <div className="mt-4 flex gap-2">
//                 <Link to={`/project/${p.id}`} className="btn btn-sm text-black btn-outline">View More / Details</Link>
//                 <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Live</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }


// Projects.jsx
import { Link } from "react-router";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 p-6">
      {projects.map((project) => (
        <div key={project.id} className="border rounded-xl shadow-lg p-4">
          <img src={project.image} alt={project.name} className="rounded-lg" />
          <h2 className="text-xl font-semibold mt-2">{project.name}</h2>
          <p className="text-gray-600 dark:text-white line-clamp-3">{project.description}</p>
          <Link
            to={`/projects/${project.id}`}
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            View More / Details
          </Link>
        </div>
      ))}
    </div>
  );
}
