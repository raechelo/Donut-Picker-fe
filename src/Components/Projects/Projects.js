import React from 'react';
const shortid = require("shortid");


export default function Projects({ projects }) {
  const displayProjects = projects.map(project => <h4 key={shortid.generate()}>{project.name}</h4>)
  return (
    <section>
      {displayProjects}
    </section>
  )
}
