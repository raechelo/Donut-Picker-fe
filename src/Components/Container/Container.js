import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Container.css';

export class Container extends Component {

  constructor() {
    super();

    this.state = {
      name: ""
    };
  }
  newPalettes = () => {
    this.setState({ projectView: false });
    this.props.freshPalette();
  };

  savePalette = () => {
    this.props.savePalette();
  };

  handleChange = e => {
    const { value } = e.target
    this.setState({name: value})
  }

  render() {
      const displayProjects = this.props.projects.map(p => <option id={p.id}>{p.name}</option>)
      return (
      <div className="container">
        <div className="donuts-area">
          {this.props.donuts}
        </div>
        <section className="btn-section">
          <button onClick={() => this.newPalettes()}>GET NEW COLORS</button>
          <Dropdown
            options={displayProjects} 
            // value={this.state.name}
            placeholder='Please choose a project'
          />
          <input className="palette-input" onChange={this.handleChange} id="input" className="palette-name-input" type="text" placeholder="New Palette Name"/>
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
