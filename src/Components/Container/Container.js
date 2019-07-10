import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Container extends Component {
  constructor() {
    super();
  }

  newPalettes = () => {
    this.setState({ projectView: false });
    this.props.freshPalette();
  };

  savePalette = () => {
    this.props.savePalette();
  };

  render() {
    return (
      <div className="container">
        <div className="donuts-area">
          {this.props.donuts}
        </div>
        <section className="btn-section">
          <button onClick={() => this.newPalettes()}>GET NEW COLORS</button>
          <select>
              {/* {this.props.projects.map(p => <option>{p}</option>)} */}
          </select>
          <input type="text" placeholder="My New Palette"/>
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
