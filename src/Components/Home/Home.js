import React, { Component } from "react";
import Container from "../Container/Container";
import Donut from "../Donut/Donut";
const shortid = require("shortid");

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [0, 1, 2, 3, 4, 5],
      contents: [],
      favorites: [],
      donutIndex: [],
      hex:[]
    };
  }

  freshPalette = () => {
    let contents = this.state.numbers.map(index => {
      if (this.state.donutIndex.includes(index)) {
        return (
         <div value ={index.fill}>
            <Donut
            className="palette-donut"
            key={shortid.generate()}
            saveFavorites={this.saveFavorites}
            index={index}
            fill={
              this.state.favorites.find(donut => donut.index === index).color
            }
          />
          <h4 className="donut-fill"><i className="fas fa-lock"></i>{index.fill}</h4>
         </div>
        );
      } else {
        return (
          <div className="palette-donut">
            <Donut
            key={shortid.generate()}
            saveFavorites={this.saveFavorites}
            index={index}
            fill={this.randomColorGen()}
          />
          </div>
        );
      }
    });
    this.setState({ contents });
  };
  
  randomColorGen = () => {
    let fill = "#000000".replace(/0/g, () => {
      return (~~(Math.random() * 16)).toString(16);
    });
    let hex = this.state.contents;
    hex.push(fill)
    this.setState({hex})
    return fill;
  };

  saveFavorites = (color, index) => {
    let newColor = { color, index };
    let favorites = this.state.favorites;
    let indexValue = this.state.donutIndex;
    indexValue.push(index);
    favorites.push(newColor);
    this.setState({ donutIndex: indexValue });
    this.setState({ favorites });
  };

  savePalette = (palette) => {
    let option = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: palette.title, 
        project_id: palette.project_id,
        color_1: this.state.hex[0],
        color_2: this.state.hex[1], 
        color_3: this.state.hex[2], 
        color_4: this.state.hex[3], 
        color_5: this.state.hex[4], 
        color_6: this.state.hex[5] 
      })
    };
    fetch("http://localhost:3001/api/v1/palettes", option)
    .then(response =>  response.json())
    .then(result => console.log(result))
}

findProject = (palette, project) => {
  let foundProject;
  fetch(`http://localhost:3001/api/v1/projects/${project.name}`)
  .then(response => response.json())
  .then(result => foundProject = result)
  this.savePalette(palette, foundProject)
}

  componentDidMount = () => {
    this.freshPalette();
  };

  render() {
    return (
      <div className="Home">
        <Container
          savePalette={this.savePalette}
          donuts={this.state.contents}
          freshPalette={this.freshPalette}
          projects={this.props.projects}
        />
      </div>
    );
  }
}
