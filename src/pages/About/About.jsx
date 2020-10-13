import React from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import Pdf from '../../../src/my_cv.pdf'

function About() {
  return (
    <div className="App">
      <div className="about-section" id="about">
        <div className="title-about">
          <div className="title-name">
            <h1>Hey, I'm <span className="yellow-text">João</span>.</h1>
          </div>
          <h5>I'm a software engineer living in Kraków, fascinated by computers since an early age.
          <br /> I developed a love for programming, which granted me experience in mobile and web development.
          <br />
          <br /> Want to know more about me? Click below!
          </h5>
          <ThemeProvider theme={theme}>
            <Button href= {Pdf} target="_blank"
            color= "primary"
            variant="contained"
            size= "small">
            Download CV
          </Button>
          </ThemeProvider>
         
        </div>
      </div >
      <div className="arrow-down"></div>
    </div>
  );
}

export default About;
