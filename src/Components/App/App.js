import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NoMatch from "../NoMatch/NoMatch";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import {fetchData} from "../../Fetch/fetchData"

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      palettes: []
    };
  }

  componentDidMount() {
    this.fetchProjects();
    this.fetchPalettes();
  }

  fetchProjects = () => {
    fetchData("http://localhost:3001/api/v1/projects", "projects")
      .then(projects => this.setState({ projects }))
  };

  fetchPalettes = () => {
    fetchData("http://localhost:3001/api/v1/palettes", "palettes")
      .then(palettes => this.setState({ palettes }))
  };

  render() {
    return (
      <section>
        <Switch>
          <Route
            exact
            path="/"
            render={
              /* istanbul ignore next */
              () => <Home savePalette={this.savePalette} />}/>
          <Route
            exact
            path="/projects"
            render={
              /* istanbul ignore next */
              () => <Projects projects={this.state.projects} />}/>
          /* istanbul ignore next */
          <Route component={NoMatch} />
          /* istanbul ignore next */
        </Switch>
      </section>
    );
  }
}

export default App;
