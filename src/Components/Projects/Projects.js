import React from 'react'

export default function Projects({ projects }) {
  const displayProjects = projects.map(project => <h4>{project.name}</h4>)
  return (
    <section>
      {displayProjects}
    </section>
  )
}
