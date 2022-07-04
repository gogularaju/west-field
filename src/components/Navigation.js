import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../profilePhoto.jpg';


const Navigation = (props) => {

  const scrollToEl = (id) => {
    const scrollOptions = { behavior: "smooth", block: "end", inline: "nearest" };
    const el = document.getElementById(id);
    el.scrollIntoView(scrollOptions);
  }


  return (
    <div className="header" id="header">
       <div className="nav-section" id="nav-section">
        <ul className="nav nav-pills">
            <li className="nav nav-pills nav-link" onClick={() => scrollToEl('aboutId')}><Link to="/">About Me</Link></li>
            <li className="nav nav-pills nav-link" onClick={() => scrollToEl('experienceId')}><Link to="/">Experience</Link></li>
            <li className="nav nav-pills nav-link" onClick={() => scrollToEl('portfolioId')}><Link to="/">Projects</Link></li>
            <li className="nav nav-pills nav-link" onClick={() => scrollToEl('footer')}><Link to="/">Contact</Link></li>
            <li className="nav nav-pills nav-link" ><a href="https://drive.google.com/file/d/1Fm6QFibmaVbZRtDt1nzSQmw1OMTTOoch/view?usp=sharing" target="_blank">Resume</a></li>
        </ul>
      </div>
      <div className="profile-section" id="profileSection">
        <span><img className="profile-photo" src={profilePhoto} id="profile-photo" alt="profile-photo" width="112px" height="112px" /></span>
        <span id="profileTitle" className="profileTitle">Raju Gogula</span>
      </div>
    </div>
  );
}

export default Navigation; 
