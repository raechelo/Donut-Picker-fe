import React, { Component } from "react";
import "./App.css";
import Donut from "./Donut";
const shortid = require('shortid');
 

class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [1,2,3,4,5,6],
      donuts: []
    };
  }


  freshPalette = () => {
    let donuts = this.state.numbers.map(donut => {
      return <Donut key= {shortid.generate()} />
    })
    this.setState({donuts})
}

componentDidMount = () =>{
  let donuts = this.state.numbers.map(donut => {
    return <Donut key= {shortid.generate()} />
  })
  this.setState({donuts})
}


  render() {
    return (
      <div className="App">
      {this.state.donuts}
      <button onClick={()=> this.freshPalette()}>CLICK</button>
      </div>
    );
  }
}

export default App;
