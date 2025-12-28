// import React from 'react'
// import { useParams, Link } from 'react-router'
// import Projects from '../components/Projects'

// export default function ProjectDetails(){
//   const { id } = useParams()
//   const project = Projects.find(p => p.id === id)
//   if(!project) return <div className="container mx-auto p-6">Project not found</div>

//   return (
//     <section className="container mx-auto px-4 py-10">
//       <Link to="/" className="text-sm text-indigo-600 mb-4 inline-block">← Back</Link>
//       <div className="grid md:grid-cols-2 gap-8">
//         <img src={project.image} alt={project.name} className="w-full object-cover rounded-lg"/>
//         <div>
//           <h1 className="text-2xl font-bold">{project.name}</h1>
//           <p className="text-gray-700 mt-2">{project.description}</p>

//           <div className="mt-4">
//             <h3 className="font-semibold">Main Tech Stack</h3>
//             <div className="flex gap-2 mt-2">
//               {project.stack.map(s => <span key={s} className="badge badge-outline">{s}</span>)}
//             </div>
//           </div>

//           <div className="mt-4">
//             <h3 className="font-semibold">Challenges</h3>
//             <p className="text-gray-600">{project.challenges}</p>
//           </div>

//           <div className="mt-4">
//             <h3 className="font-semibold">Potential Improvements</h3>
//             <p className="text-gray-600">{project.improvements}</p>
//           </div>

//           <div className="mt-6 flex gap-3">
//             <a href={project.live} className="btn btn-primary" target="_blank" rel="noreferrer">Live Project</a>
//             <a href={project.github} className="btn btn-outline" target="_blank" rel="noreferrer">GitHub (Client)</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


// ProjectDetails.jsx
import { useParams, Link } from "react-router";
import { projects } from "../data/projects.jsx";
// import { projects } from "../data/projects.jsx";


export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2 className="p-6 text-red-500">Project not found</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={project.image} alt={project.name} className="rounded-xl w-full" />
      <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
      
      <section className="mt-4">
        <h3 className="font-semibold">Main Technology Stack:</h3>
        <p>{project.stack.join(", ")}</p>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold">Description:</h3>
        <p>{project.description}</p>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold">Live Project:</h3>
        <a href={project.live} target="_blank" className="text-blue-600 underline">
          {project.live}
        </a>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold">GitHub Repository (Client):</h3>
        <a href={project.github} target="_blank" className="text-blue-600 underline">
          {project.github}
        </a>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold">Challenges Faced:</h3>
        <p>{project.challenges}</p>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold">Potential Improvements & Future Plans:</h3>
        <p>{project.improvements}</p>
      </section>

      <Link to="/projects" className="mt-6 inline-block bg-gray-700 text-white px-4 py-2 rounded-lg">
        Back to Projects
      </Link>
    </div>
  );
}
