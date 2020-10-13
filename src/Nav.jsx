import React, { useState } from 'react';
import './App.css';
import {Link} from 'react-scroll';


function Nav() {
   const [isOpen, setOpen] = useState(false);

   const showNav = () => {
     setOpen(!isOpen);  
     console.log(isOpen);
   };

   

  return (
     
     <nav>
        <div className="logo">
           <h4>João Arteiro</h4>
           </div>
        <ul className={`nav-links ${isOpen ? "show": ""}`}>
              <Link onClick={showNav} className="link"
                 activeClass="active"
                 to="about"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={800}
              >About</Link>

              <Link onClick={showNav} className="link"
                 activeClass="active"
                 to="experience"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={800}
              >Experience</Link>

              <Link onClick={showNav} className="link"
                 activeClass="active"
                 to="projects"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={800}
              >Projects</Link>

              <Link onClick={showNav} className="link"
                 activeClass="active"
                 to="contact"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={800}
              >Links</Link>

        </ul>
        <div onClick={showNav} className="burger">
                 <div className="line1"></div>
                 <div className="line2"></div>
                 <div className="line3"></div>
              </div>

     </nav>
  );
}

export default Nav;
