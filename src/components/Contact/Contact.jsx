import React from 'react';
import '../../App.css'

function Contact() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="App">
      <div className="contact-section" id="contact">
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/joao-arteiro/" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"> </a>  
          <a href="https://github.com/joaoarteiro" target="_blank" rel="noopener noreferrer" className="fa fa-github"> </a> 
          <a href="mailto:joaoarteiro@gmail.com" className="fa fa-envelope"> </a>   
        </div>
        <div className="footer-section">
        <p>&#169; {currentYear} João Arteiro</p>
      </div>
      </div >
      
    </div>
  );
}

export default Contact;
