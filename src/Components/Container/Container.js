import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Container.css';

export class Container extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      project: {}
    };
  }
  newPalettes = () => {
    this.setState({ projectView: false });
    this.props.freshPalette();
  };

  savePalette = () => {
    this.props.savePalette();
  };

  render() {
      const displayProjects = this.props.projects.map(p => <option>{p.name}</option>)
      return (
      <div className="container">
        <div className="donuts-area">
          {this.props.donuts}
        </div>
        <section className="btn-section">
          <button onClick={() => this.newPalettes()}>GET NEW COLORS</button>
          <Dropdown
            // onChange={this.handleChange}
            options={displayProjects} 
            // value={}
            placeholder='Please choose a project'
          />
          {/* <label for="input">Name your project to save it to a project</label> */}
          <input id="input" className="project-name-input" type="text" placeholder="My New Palette"/>
          <button onClick={() => this.savePalette()}>SAVE PALETTE TO PROJECT</button>
          <Link exact to="/projects" >
            <button className="view-projects-btn"> VIEW ALL PROJECTS </button>
          </Link>
        </section>
      </div>
    );
  }
}

export default Container;
