import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Container.css';


export class Container extends Component {

  constructor() {
    super();

    this.state = {
      project_id: "",
      project_name: '',
      title: ""
    };
  }
  newPalettes = () => {
    this.setState({ projectView: false });
    this.props.freshPalette();
  };

  savePalette = (e) => {
    e.preventDefault()
    console.log(this.state)
    let state = this.state;
    if(state.project_id === "" || state.title === ""){
      alert("Select a project folder to save this palette")
    }else{
      this.props.savePalette(state);
    }
  };

  handleChange = (e) => {
    const { key, props } = e.value
    this.setState({project_id: key, project_name: props.children})
  }

  savePaletteName = (e) => {
    e.preventDefault()
    const { value } = e.target
    this.setState({title: value})
  }

  render() {
      const displayProjects = this.props.projects.map(p => <option value={p.name} key={p.id}>{p.name}</option>);

      return (
      <div className="container">
        <div className="donuts-area">
          {this.props.donuts}
        </div>
        <section className="btn-section">
          <button onClick={() => this.newPalettes()}>Get New Colors</button>
          <Dropdown
            onChange={(e) => this.handleChange(e)}
            options={displayProjects} 
            value={this.state.project_name}
            placeholder='Please choose a project'
          />
          <input onChange={(e) => this.savePaletteName(e)} id="input" className="project-name-input palette-input" type="text" placeholder="New Palette Name"/>
          <button onClick={(e) => this.savePalette(e)}>Save Palette to Project</button>
          <Link exact to="/projects" >
            <button className="view-projects-btn"> View All Projects</button>
          </Link>
        </section>
      </div>
    );
  }
}

export default Container;
