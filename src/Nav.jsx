import React from 'react';
import './App.css';
import {Link} from 'react-scroll';

function Nav() {
  return (
     <nav>
      
         <ul className="nav-links">
            <Link className="link"
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-70}
               duration={800}
               >About</Link>

              <Link className="link"
               activeClass="active"
               to="experience"
               spy={true}
               smooth={true}
               offset={-70}
               duration={800}
               >Experience</Link>

              <Link className="link"
               activeClass="active"
               to="projects"
               spy={true}
               smooth={true}
               offset={-70}
               duration={800}
               >Projects</Link>
               
              <Link className="link"
               activeClass="active"
               to="contact"
               spy={true}
               smooth={true}
               offset={-70}
               duration={800}
               >Contact</Link>
         </ul>
     </nav>
  );
}

export default Nav;
