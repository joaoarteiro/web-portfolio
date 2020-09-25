import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
     <nav>
         <h1 className="name">
             João Arteiro
         </h1>
         <ul className="nav-links">
             <Link className="link" to='/about'>
             <li>About</li>
             </Link>
             <Link className="link" to='/experience'>
             <li>Experience</li>
             </Link>
             <Link className="link" to='/projects'>
             <li>Projects</li>
             </Link>
             <Link className="link" to='/contact'>
             <li>Contact</li>
             </Link>
         </ul>
     </nav>
  );
}

export default Nav;
