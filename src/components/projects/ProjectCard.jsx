import React from "react";


function ProjectCard(props) {
  return (
    <div className="card bg-dark text-white">
      <img className="card-img" src={props.img} alt="my projects" />
      <div className="card-img-overlay">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <h5 className="card-title">{props.title}</h5>
        </a>
        <small>
          <p className="card-text">{props.description}</p>
        </small>
      </div>
    </div>
  );
}


export default ProjectCard;
