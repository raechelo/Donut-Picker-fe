import React from 'react'
const shortid = require("shortid");


export default function Project(props) {

  let palettes = props.palettes.filter(palette => {
  return palette.project_id === props.id
}) 
let listItems = palettes.map(palette => <li key={shortid.generate()}>{palette.name}</li>)

return (
    <article className="Project">
      <h4 className="Project-name">{props.name}</h4>
      {listItems}
      <i className="fas fa-pencil-alt project-icon"></i>
      <i className="fas fa-trash-alt project-icon"></i>
    </article>
  )
}
