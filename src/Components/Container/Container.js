import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Container.css";

export class Container extends Component {
  constructor() {
    super();

    this.state = {
      project_id: "",
      title: ""
    };
  }
  newPalettes = () => {
    this.props.freshPalette();
  };

  savePalette = e => {
    e.preventDefault();
    let state = this.state;
    if (state.project_id === "" || state.title === "") {
      alert("Select a project folder to save this palette");
    } else {
      this.props.savePalette(state);
    }
  };

  handleProject = e => {
    console.log(e)
    const { key } = e.value;
    this.setState({ project_id: key });
  };

  savePaletteName = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ title: value });
  };

  render() {
    const displayProjects = this.props.projects.map(p => (
      <option key={p.id}>{p.name}</option>
    ));
    return (
      <div className="container">
        <div className="donuts-area">{this.props.donuts}</div>
        <section className="btn-section">
          <button onClick={() => this.newPalettes()}>Get New Colors</button>
          <Dropdown
            onChange={e => this.handleProject(e)}
            options={displayProjects}
            placeholder="Please choose a project"
          />
          <input
            onChange={e => this.savePaletteName(e)}
            id="input"
            className="project-name-input palette-input"
            type="text"
            placeholder="New Palette Name"
          />
          <button id="save-btn" onClick={e => this.savePalette(e)}>
            SAVE PALETTE TO PROJECT
          </button>
          <Link exact to="/projects">
            <button className="view-projects-btn"> View All Projects</button>
          </Link>
        </section>
      </div>
    );
  }
}

export default Container;
