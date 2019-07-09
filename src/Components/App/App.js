import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import NoMatch from '../NoMatch/NoMatch';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/projects')
      .then(res => res.json())
      .then(projects => this.setState({projects}))
  }

  savePalette = () => {
    console.log("Clicked")
  }
  

  render() {
    return (
      <section className="App">
        <h1 className="App-name">Palette Picker</h1>
        <Switch>
          <Route exact path='/' render={() => <Home savePalette={this.savePalette} />}/>
          <Route exact path='/projects' render={() => <Projects projects={this.state.projects} /> } />
          <Route component={NoMatch} />
        </Switch>
      </section>
    )
  }
}

export default App;
