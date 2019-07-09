import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Container extends Component {
  constructor() {
    super();
    this.state = {
      projectView: false
    };
  }

  projectView = () => {
    this.setState({ projectView: !this.state.projectView });
  };

  newPalettes = () => {
    this.setState({ projectView: !this.state.projectView });
    this.props.freshPalette();
  };

  validateContents = () => {
    if (this.state.projectView) {
      return "Hello World";
    } else {
      return this.props.donuts;
    }
  };

  render() {
    let contents = this.validateContents();
    return (
      <div className="container">
        <div className="donuts-area">
          {contents}
          <button onClick={() => this.newPalettes()}>GET COLORS</button>
          <Link exact to="/projects">
            <button onClick={() => this.projectView()}> VIEW PROJECTS </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Container;
