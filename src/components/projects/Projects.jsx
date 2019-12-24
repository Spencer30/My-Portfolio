import React from "react";
import ProjectCard from './ProjectCard'
import ProjectList from './ProjectList'

// function createCard() {
//   return <ProjectCard 
//     key={ProjectList.id}
//     id={ProjectList.id}
//     title={ProjectList.title}
//     description = {ProjectList.description}
//     img={ProjectList.img}
//     link={ProjectList.link}
//   />
// }

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
        {/* {ProjectList.map(createCard)} */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        
        
      </div>
      </div>

        
}

export default Projects;