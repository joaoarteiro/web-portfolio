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
            <div className="color-text">React JS | Node JS | HTML</div>
            <div className="strong-title">E-commerce app
               <div className="date-interval">Sep 2020 - Present</div>
            </div>
            <div className="description"> This was my first project as a freelancer. It's a web application based on <i>create-react-app</i> that alows users to get a personalized internet package plan. The app is meant for commercial use and
              it's currently under development as new features are added.<br/>     
            </div>
        </div>
        <div className="experience-container" onClick={openLink(itSector)} on>
            <div className="color-text">Java | Android | .NET | REST</div>
            <div className="strong-title">Events app
               <div className="date-interval">Mar 2020 - Jul 2020</div>
            </div>
            <div className="description">A robust mobile application to manage ITSector's events such as meeting and gatherings.  
            The application is supported by dedicated <i>RESTful</i> API that connects with the data layer.<br/>
              It features multi-users with <i>Google</i> authentication and controlled acess to the API.
            </div>
        </div>
        <div className="experience-container" onClick={openLink(popMovies)}>
            <div className="color-text">Java | Android | REST</div>
            <div className="strong-title">Popular Movies app
               <div className="date-interval">Feb 2020 - Mar 2020</div>
            </div>
            <div className="description">Popular Movies is an app that displays a set of cards with the most popular movies, it uses "themoviedb" API to retrieve data.
               Some additional features include: searching by title, sorting by rating and watch trailers.<br/>     
            </div>
        </div>
      </div >
    </div>
  );
}

export default Projects;
