import React from 'react';

const skillsData = ['JavaScript', 'TypeScript', 'Node Js', 'React Js', 'Angular', 
        'HTML5', 'CSS3', 'JEST', 'Enzyme', 'React Testing Library']

const Skills = () => {
  return (
    <div className="skills-container">
        <h3>Skills</h3>
        <div className="skill-section">
            {skillsData.map(skill => {
               return (
                <button className="skill-btn">{skill}</button>
               )
            })}
        </div>
    </div>
  );
}

export default Skills; 
