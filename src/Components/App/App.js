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
  

  render() {
    return (
      <section>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' render={() => <Projects projects={this.state.projects} /> } />
          <Route component={NoMatch} />
        </Switch>
      </section>
    )
  }
}

export default App;
