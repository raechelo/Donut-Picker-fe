import React, { Component } from "react";

export class Container extends Component {
  constructor() {
    super();
    this.state = {
      projectView: false
    };
  }

  projectView = () => {
    this.setState({ projectView: !this.state.projectView });
    this.props.projectView();
  };

  newPalettes = () => {
    this.setState({ projectView: !this.state.projectView });
    this.props.freshPalette()
  }

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
          <button onClick={() => this.projectView()}> VIEW PROJECTS</button>
        </div>
      </div>
    );
  }
}

export default Container;
