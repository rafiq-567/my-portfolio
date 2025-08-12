import React from 'react'
import { Link } from 'react-router'
import { projects } from '../data/Projects'


export default function Projects(){
  return (
    <section id="projects" className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <img src={p.image} alt={p.name} className="h-40 w-full object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.description}</p>
              <div className="mt-4 flex gap-2">
                <Link to={`/project/${p.id}`} className="btn btn-sm btn-outline">View More / Details</Link>
                <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
