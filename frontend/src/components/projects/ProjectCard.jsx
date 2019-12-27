import React from "react";
import { useState } from "react";



function ProjectCard(props) {
  const [hover, setHover] = useState(false);

function handleOver() {
  setHover(true)
}

function handleOut() {
  setHover(false)
}
  return (
    <div className="card bg-dark text-white" onMouseOver={handleOver} onMouseOut={handleOut} >
      <img className="card-img" src={props.img} alt="my projects"/>
      <div className="card-img-overlay" style={hover ? {display: 'block'} : {display: 'none'}}>
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
