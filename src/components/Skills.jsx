import React from 'react'

const skillGroups = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind", level: 85 }
  ],
  Backend: [
    { name: "Node.js", level: 70 },
    { name: "Express", level: 65 }
  ],
  Tools: [
    { name: "Git", level: 80 },
    { name: "Vite", level: 85 }
  ]
}

export default function Skills(){
  return (
    <section id="skills" className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skillGroups).map(([cat, skills]) => (
          <div key={cat} className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-3">{cat}</h3>
            <div className="space-y-3">
              {skills.map(s => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span>{s.name}</span><span>{s.level}%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value={s.level} max="100"></progress>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
