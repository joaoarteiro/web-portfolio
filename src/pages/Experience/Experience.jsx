import React from 'react';
import '../../App.css'


function Experience() {

  const openLink = () => {
    window.open("https://www.itsector.pt/en");
  }
  return (
    <div className="App">
      <div className="experience-section" id="experience">
        <div className="title">
          <h1>EXPERIENCE</h1>
        </div>
        <div className="experience-container">
            <div className="color-text">Freelancer</div>
            <div className="strong-title">Web Developer
               <div className="date-interval">Sep 2020 - Present</div>
            </div>
            <div className="description">My first experience using React. This is web application for an internet package plan simulator.
            New features are still being implemented<br/> 
                 
            </div>
        </div>

        <div className="experience-container" onClick={openLink}>
            <div className="color-text">ITSector</div>
            <div className="strong-title">Android Developer
                <div className="date-interval">Feb 2020 - Jul 2020</div>
            </div>
            <div className="description">Created an mobile application to manage ITSector's events such as meeting and gatherings, using a RESTful API, Google authentication and JetPack.<br/>     
            </div>
        </div>
      </div >
  </div>
  );
}

export default Experience;
