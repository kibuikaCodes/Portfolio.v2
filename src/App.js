import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/projects';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='çontact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
