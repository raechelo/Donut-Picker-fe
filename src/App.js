import React, { Component } from "react";
import "./App.css";
import Donut from "./Donut";
const shortid = require('shortid');
 

class App extends Component {
  constructor() {
    super();
    this.state = {
      donuts: [1,2,3,4,5,6]
    };
  }


  componentDidMount = () => {
  };


  render() {
    let donuts = this.state.donuts.map(donut => {
      return <Donutkey= {shortid.generate()} />

    })
    return (
      <div className="App">
      {donuts}
      </div>
    );
  }
}

export default App;
