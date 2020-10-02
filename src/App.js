import React from 'react';
import './App.css';

import Nav from './Nav';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <footer>
          @João Arteiro 2020
          </footer>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        
      </div>
    </Router>
  
  );

  }

export default App;

