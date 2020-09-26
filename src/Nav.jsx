import React from 'react';
import './App.css';
import {Link} from 'react-scroll';

function Nav() {
  return (
     <nav>
         <div className="name">
             João Arteiro
         </div>
         <ul className="nav-links">
            <Link className="link"
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-70}
               duration={700}
               >About</Link>
                <Link className="link"
               activeClass="active"
               to="experience"
               spy={true}
               smooth={true}
               offset={-70}
               duration={700}
               >Experience</Link>
                <Link className="link"
               activeClass="active"
               to="projects"
               spy={true}
               smooth={true}
               offset={-70}
               duration={700}
               >Projects</Link>
                 <Link className="link"
               activeClass="active"
               to="contact"
               spy={true}
               smooth={true}
               offset={-70}
               duration={700}
               >Contact</Link>
         </ul>
     </nav>
  );
}

export default Nav;
