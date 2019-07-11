import React, { Component } from 'react';
import ReactModal from 'react-modal';
import MiniDonut from  '../MiniDonut/MiniDonut';
const shortid = require("shortid");


class Project extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showProject: false,
      currentPalette: {},
      currentProject: {},
      name: ''
    }
  }

  handleOpenModal = (e) => {
    const { id } = e.target
    this.setState({ showModal: true });
    let palette = this.props.palettes.find(palette => palette.id === parseInt(id));
    this.setState({currentPalette: palette})
  }
  
  handleOpenProjectModal = (e) => {
    this.handleChange(e)
    const { id } = e.target
    let project = this.props.projects.find(project => project.id === parseInt(id));
    console.log(project)
    this.setState({currentProject: project, showProject:true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false, showProject: false });
  }

  handleChange = (e) => {
    const { value } = e.target;
    const newState = {...this.state.currentPalette, name:value}
    this.setState({ name: value, currentPalette: newState })
  }

  handleProjectChange = (e) => {
    const { value } = e.target;
    console.log(value)
    const newState = {...this.state.currentProject, name:value}
    this.setState({ currentProject: newState })
  }

  updatePalette = (id) => {
    let option = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.currentPalette.name, 
        color_1: this.state.currentPalette.color_1,
        color_2: this.state.currentPalette.color_2,
        color_3: this.state.currentPalette.color_3,
        color_4: this.state.currentPalette.color_4,
        color_5: this.state.currentPalette.color_5,
        color_6: this.state.currentPalette.color_6
      })
    };
    fetch(`http://localhost:3001/api/v1/palettes/${id}`, option)
    .then(response =>  response.json())
    .then(result => console.log(result))
  }

  updateProject = (id) => {
    let option = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.currentProject.name
      })
    };
    fetch(`http://localhost:3001/api/v1/projects/${id}`, option)
    .then(response =>  response.json())
    .then(result => console.log(result))
  }

  deletePalette = (id) => {
    let option = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    };
    fetch(`http://localhost:3001/api/v1/palettes/${id}`, option)
    .then(response =>  response.json())
    .then(result => console.log(result))
  }

  deleteProject = (id) => {
    let option = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    };
    fetch(`http://localhost:3001/api/v1/projects/${id}`, option)
    .then(response =>  response.json())
    .then(result => console.log(result))
  }

  render() {

  let palettes = this.props.palettes.filter(palette => {
    return palette.project_id === this.props.id
  })

  let displayDonuts = palettes.map((palette, i) => {
    if (palette[`color_${i+1}`][0] === '#') {
      return (<div key={shortid.generate()} className="mini-donut-section">
        <h2 className="mini-palette-name">{palette.name}</h2>
        <i id={palette.id} onClick={this.handleOpenModal} className="fas fa-pencil-alt project-icon edit-palette"></i>
        <MiniDonut fill={palette.color_1} />
        <MiniDonut fill={palette.color_2} />
        <MiniDonut fill={palette.color_3} />
        <MiniDonut fill={palette.color_4} />
        <MiniDonut fill={palette.color_5} />
        <MiniDonut fill={palette.color_6} />
      </div>)
    }
  });

  let displayModal = (<div className="mini-donut-section-modal">
        <div className="edit-project-name-modal">
          <h2 className="mini-palette-name-modal">Edit {this.state.currentPalette.name}</h2>
          <input type="text" className="project-name-input-modal" onChange={this.handleChange} value={this.state.name} />
          <button onClick={() => this.deletePalette(this.state.currentPalette.id)} className="delete-modal">Delete Palette</button>
        </div>
        <div className="mini-donuts-modal">
          <MiniDonut fill={this.state.currentPalette.color_1} />
          <MiniDonut fill={this.state.currentPalette.color_2} />
          <MiniDonut fill={this.state.currentPalette.color_3} />
          <MiniDonut fill={this.state.currentPalette.color_4} />
          <MiniDonut fill={this.state.currentPalette.color_5} />
          <MiniDonut fill={this.state.currentPalette.color_6} />
        </div>
        <button className="update-palette-modal" onClick={this.handleCloseModal}>Close & Don't Save</button>
        <button className="update-palette-modal" onClick={() => this.updatePalette(this.state.currentPalette.id)}>Save Changes</button>
      </div>)

let displayProjectModal = (<div className="project-section-modal">
        <div className="edit-project-name-modal">
          <h2 className="mini-palette-name-modal">Edit {this.state.currentProject.name}</h2>
          <input type="text" className="project-name-input-modal" onChange={this.handleProjectChange} value={this.state.currentProject.name} />
          <button onClick={() => this.deleteProject(this.state.currentProject.id)} className="delete-modal">Delete Project</button>
        </div>
        <button className="update-palette-modal" onClick={this.handleCloseModal}>Close & Don't Save</button>
        <button className="update-palette-modal" onClick={() => this.updateProject(this.state.currentProject.id)}>Save Changes</button>
        </div>)

  return (
    <section>
      <article className="Project">
        <h4 className="Project-name">
        <i id={this.props.id} className="fas fa-folder-open project-icon" onClick={this.handleOpenProjectModal}></i>
        {this.props.name}</h4>
        <div className="display-donuts">
          {displayDonuts}
        </div>
      </article>
      <ReactModal 
           isOpen={this.state.showModal || this.state.showProject}
           contentLabel="Palette Modal">
           <div className="modal-display-donuts">
          { this.state.showModal && displayModal }
          { this.state.showProject && displayProjectModal }
          </div>
        </ReactModal>
    </section>
    )
  }
}


export default Project;
