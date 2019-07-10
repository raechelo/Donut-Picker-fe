import React, { Component } from "react";

import { Link } from "react-router-dom";

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
    return (
      <div className="container">
        <div className="donuts-area">
          {this.props.donuts}
          <button onClick={() => this.newPalettes()}>GET COLORS</button>

          <h3>Click any donut to lock color</h3>
          <button onClick={() => this.savePalette("Need a controlled form")}>SAVE PALETTE</button>
          <Link exact to="/projects">
            <button onClick={() => this.projectView()}> VIEW PROJECTS </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Container;
