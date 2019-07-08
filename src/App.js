import React, { Component } from "react";
import "./App.css";
import Donut from "./Donut";
import Container from './Container';
const shortid = require('shortid');

class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [1,2,3,4,5,6],
      contents: [],
      projects: false
    };
  }


freshPalette = () => {
  let contents = this.state.numbers.map(donut => {
    return <Donut key= {shortid.generate()} />
  })
  this.setState({contents})
}

toggleView = () => {

  let contents = <h1>Toggled!</h1>
  this.setState({contents})
  this.setState({projects: !this.state.projects})
}


componentDidMount = () => {
  this.freshPalette()
}


  render() {
    let button;
  if(!this.state.projects){
    console.log("making palettes")
    button = <button onClick={() => this.toggleView()}> VIEW PROJECTS </button>
  }else{
    button = <h3>Projects!</h3>
  }
    return (
      <div className="App">
      <Container donuts={this.state.contents} freshPalette={this.freshPalette} />
        {button}
      </div>
    );
  }
}

export default App;
