
// ProjectDetails.jsx
import { useParams, Link } from "react-router";
import { projects } from "../data/projects.jsx";



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
