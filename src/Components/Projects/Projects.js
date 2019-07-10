import React from 'react';
import Project from '../Project/Project';
import { Link } from 'react-router-dom';
const shortid = require("shortid");


export default function Projects({ projects }) {
  const displayProjects = projects.map(project => <Project key={shortid.generate()} className="indiv-project" {...project} />)
  return (
    <section className="Projects">
    <Link to='/'>
    <button><i class="fas fa-long-arrow-alt-left"></i> Home</button>
    </Link>
    <h4 className="project-header">My Projects</h4>
      <section className="all-projects">
      {projects ? displayProjects : 'Please create a project!'}
      </section>
    </section>
  )
}