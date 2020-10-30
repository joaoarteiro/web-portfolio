import React from 'react';
import './App.css';

import Nav from './Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
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

