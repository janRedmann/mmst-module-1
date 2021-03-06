import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path= '/about' component={About}/>
          
          <Route exact path='/projects' component={Projects}/>

          <Route path='/projects/:projectId' component={ProjectDetails}/>

        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;