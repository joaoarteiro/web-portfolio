import React from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import Pdf from '../../../src/my_cv.pdf'
import {Link} from 'react-scroll'
import Typing from 'react-typing-animation'

function About() {

  const openPdf = () => {
    window.open(Pdf, "_blank")
  };

  
  return (
    <div className="App">
      <div className="about-section" id="about">
        <div className="title-about">
          <div className="title-name">
          <Typing speed={57}>
            <Typing.Delay ms={300}/>
              <h1>Hi
              <Typing.Delay ms={1100}/>
                , I'm <span className="yellow-text">João</span>.
               </h1>
              
          </Typing>
          </div>
          <h4 className="fade-in-slow">I'm a software engineer living in Kraków, fascinated by computers since an early age.
          <br /> I developed a love for programming, which granted me experience in mobile and web development.
          <br />
          <br /> Want to know more about me? Click below!
          </h4>
          <ThemeProvider theme={theme}>
            <Button onClick={openPdf}
            color= "primary"
            variant="contained"
            size= "large"
            className="fade-in-slow">
            Download CV
          </Button>
          </ThemeProvider>    
        </div>
      </div >
      <Link className="arrow-down"
                 activeClass="active"
                 to="experience"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={800} >   
      </Link>
    </div>
  );
}

export default About;
