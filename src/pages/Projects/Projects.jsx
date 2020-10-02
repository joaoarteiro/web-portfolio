import React from 'react';
import '../../App.css'


function Projects() {
  const itSector = "https://www.itsector.pt/en"
  const popMovies = "https://github.com/joaoarteiro/popular_movies_app"
  const openLink = value => () => {
    window.open(value);  
    }
  return (
    <div className="App">
      <div className="projects-section" id="projects">
        <div className="title">
          PROJECTS
          </div>
          <div className="experience-container">
            <div className="color-text">React Js | HTML</div>
            <div className="strong-title">E-commerce app
               <div className="date-interval">Sep 2020 - Present</div>
            </div>
            <div className="description">Created an mobile application to manage ITSector's events such as meeting and gatherings, using a RESTful API, Google authentication and JetPack.<br/>     
            </div>
        </div>
        <div className="experience-container" onClick={openLink(itSector)} on>
            <div className="color-text">Java | Android | .NET | REST</div>
            <div className="strong-title">Events managment
               <div className="date-interval">Mar 2020 - Jul 2020</div>
            </div>
            <div className="description">Created an mobile application to manage ITSector's events such as meeting and gatherings, using a RESTful API, Google authentication and JetPack.<br/>     
            </div>
        </div>
        <div className="experience-container" onClick={openLink(popMovies)}>
            <div className="color-text">Java | Android | REST</div>
            <div className="strong-title">Popular Movies app
               <div className="date-interval">Feb 2020 - Mar 2020</div>
            </div>
            <div className="description">Created an mobile application to manage ITSector's events such as meeting and gatherings, using a RESTful API, Google authentication and JetPack.<br/>     
            </div>
        </div>
      </div >
    </div>
  );
}

export default Projects;
