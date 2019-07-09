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
          <button onClick={() => this.newPalettes()}>GET COLORS</button>
          <button onClick={() => this.savePalette()}>SAVE PALETTE</button>
          <Link exact to="/projects" >
            <button className="view-projects-btn"> VIEW PROJECTS </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Container;
