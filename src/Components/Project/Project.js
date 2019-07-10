import React from 'react'

export default function Project({name}) {
  return (
    <article className="Project">
      <h4 className="Project-name">{name}</h4>
      <i className="fas fa-pencil-alt project-icon"></i>
      <i className="fas fa-trash-alt project-icon"></i>
    </article>
  )
}
