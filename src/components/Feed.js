import React from 'react';
import FeedItem from './FeedItem';
import About from './About';
import Skills from './Skills';
import PortFolio from './portfolio';

const Feed = (props) => {
  return (
    <div>
      <div className="feed-container-about" id="aboutId">
      <About />
      <Skills />
      </div>
        <div className="feed-container-exp-section" id="experienceId">
          <h3 className="side-header">Experience</h3>
            <div className="feed-container-experience">
            { props.feeds.map((item) => 
              <FeedItem key={item.id} feed={item} />
            )}
            </div>
        </div>
      <div className="feed-container-portfolio" id="portfolioId">
        <h3 className="side-header">Projects</h3>
        {props.feeds.map((item) => 
        item.projects && <PortFolio key={item.id} feed={item} />
        )}
      </div>
    </div>
  )
}

export default Feed; 
