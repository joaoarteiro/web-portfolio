import React from 'react';
import '../../App.css'


function Experience() {
  const itSector = "https://www.itsector.pt/en"
  const glaucus = "https://glaucus-engineering.com/"
  const openLink = value => () => {
    window.open(value);  
    }
  return (
    <div className="App">
      <div className="experience-section" id="experience">
        <div className="title">
          EXPERIENCE
        </div>
        <div className="experience-container">
            <div className="color-text">Glaucus Engineering, Kraków</div>
            <div className="strong-title">Frontend Developer Intern
                <div className="date-interval">Nov 2020 - Present</div>
            </div>
            <div className="description">Joined a small team of talented developers who introduced me to Vue 3 and Ionic. After a few introduction projects, I had the opportunity to join the development team
             in some company projects, starting with small bug-fix tasks and later implementing new features.<br/>
             Example of used technologies:<br/>   
              <ul>
                <li>Vue 3, Vuex</li>
                <li>Ionic</li>
                <li>Sass</li>
                <li>JavaScript</li>
                </ul>  
            </div>
            <div className="plus-link">
              <div className="fa fa-plus-circle" onClick={openLink(glaucus)}></div> 
            </div>
        </div>
        <div className="experience-container">
            <div className="color-text">Freelancer</div>
            <div className="strong-title">Web Developer
               <div className="date-interval">Sep 2020 - Present</div>
            </div>
            <div className="description">This was my first experience using <b>React JS</b>. Started developing web application solutions as a freelancer. I built this porfolio using React and I plan to add more features in the future.
            <ul>
                <li>Hooks</li>
                <li>Redux</li>
                <li>ES6</li>
            </ul>  
            </div>
        </div>


        <div className="experience-container" >
            <div className="color-text">ITSector, Portugal</div>
            <div className="strong-title">Android Developer
                <div className="date-interval">Feb 2020 - Jul 2020</div>
            </div>
            <div className="description">Completed an android academy at ITSector, during which I was introduced to real work environment and learned how to use tools to manage a project's development, such as Azure DevOps and Git.<br/>   
              <ul>
                <li>Azure DevOps Server(TFS)</li>
                <li>GitFlow workshop</li>
                <li>Retrofit</li>
                <li>Android JetPack</li>
                </ul>  
            </div>
            <div className="plus-link">
              <div className="fa fa-plus-circle" onClick={openLink(itSector)}></div> 
            </div>
        </div>
      </div >
  </div>
  );
}

export default Experience;
