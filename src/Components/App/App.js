import React from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import NoMatch from '../NoMatch/NoMatch';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const App = () => {
  return (
    <section>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route component={NoMatch} />
      </Switch>
    </section>
  )
}

export default App;
