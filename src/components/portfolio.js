import React from 'react';

const Projects = ({project}) => {
  return (
    <div>
       <h4><b>{project.name}</b></h4> 
       <p>{project.description}</p>
       {project.url && <p className="project-url"><a href={project.url} target="_blank">See Project</a></p>}
    </div>
  );
}


const PortFolio = (item) => {
  return (
    <div className="row marketing">
       <h4 className="project-title"><b>{item.feed.abbr}</b></h4> 
      <div className="card project-top">
        <div className="card-container-project">
          {item.feed && item.feed.projects && item.feed.projects.length && item.feed.projects.map((project) => 
            <Projects key={project.name} project={project} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PortFolio; 
