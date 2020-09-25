import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
     <nav>
         <div className="name">
             João Arteiro
         </div>
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
