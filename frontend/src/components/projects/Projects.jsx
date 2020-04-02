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

function Projects(props) {
    return  <div id="projects" className="container proj" style={{display:props.display ? "none" : "block"}}>
    
    <div className="row">
      <div className="col-lg-12">
      <hr className="hr-text" data-content="Projects"></hr>
      </div>
    </div>  
    
    <div className="card-group justify-content-center col-lg-3">
        {ProjectList.map(createCard)}  
      </div>
      </div>

        
}

export default Projects;