import React from "react";
import ProjectCard from './ProjectCard'
import ProjectList from './ProjectList'

function createCard(card) {
  return (<ProjectCard 
    key={card.id}
    id={card.id}
    title={card.title}
    description = {card.description}
    img={card.img}
    link={card.link}
    alt = 'project'
  />)
}

function Projects() {
    return  <div id="projects">
    <div className="container proj">
    <div className="row">
      <div className="col-lg-12">
        <h2 className="project-title">Projects</h2>
      </div>
    </div>  
    </div>
    
    <div className="card-group col-lg-3">
        {ProjectList.map(createCard)}  
      </div>
      </div>

        
}

export default Projects;