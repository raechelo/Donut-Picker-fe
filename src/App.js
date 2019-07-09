import React, { Component } from "react";
import "./App.css";
import Donut from "./Donut";
import Container from "./Container";
const shortid = require("shortid");

class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [0, 1, 2, 3, 4, 5],
      contents: [],
      projects: false,
      favorites: [],
      donutIndex: []
    };
  }

  freshPalette = () => {
    let contents = this.state.numbers.map(index => {
      if (this.state.donutIndex.includes(index)) {
        return (
          <Donut
            key={shortid.generate()}
            saveFavorites={this.saveFavorites}
            index={index}
            fill={this.state.favorites.find(donut => donut.index === index ).color}
          />
        );
      }else {
        return (
          <Donut
            key={shortid.generate()}
            saveFavorites={this.saveFavorites}
            index={index}
            fill={this.randomColorGen()}
          />
        );

      }
    });
    this.setState({ contents });
  };

  randomColorGen = () => {
    let fill = "#000000".replace(/0/g, () => {
      return (~~(Math.random() * 16)).toString(16);
    });
    return fill;
  };

  saveFavorites = (color, index) => {
    let newColor = { color, index };
    let favorites = this.state.favorites;
    let indexValue = this.state.donutIndex;
    indexValue.push(index)
    favorites.push(newColor);
    this.setState({donutIndex: indexValue})
    this.setState({ favorites });
    console.log(this.state.favorites)
  };

  projectView = () => {
    let contents = <h1>Toggled!</h1>;
    this.setState({ contents });
    this.setState({ projects: !this.state.projects });
  };

  componentDidMount = () => {
    this.freshPalette();
  };

  render() {
    return (
      <div className="App">
        <Container
          donuts={this.state.contents}
          freshPalette={this.freshPalette}
          projectView={this.projectView}
        />
      </div>
    );
  }
}

export default App;
