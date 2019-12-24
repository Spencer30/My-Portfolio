import React from "react";

// function ProjectCard(props) {
//   return (
//     <div className="card bg-dark text-white">
//       <img className="card-img" src={require(props.img)} alt="Card" />
//       <div className="card-img-overlay">
//         <a href={props.link} target="_blank">
//           <h5 className="card-title">{props.title}</h5>
//         </a>
//         <small>
//           <p className="card-text">{props.description}</p>
//         </small>
//       </div>
//     </div>
//   );
// }

function ProjectCard() {
    return (
      <div className="card bg-dark text-white">
        <img className="card-img" src={require('../../images/blackjack.PNG')} alt="Card" />
        <div className="card-img-overlay">
          <a href='www.espn.com' target="_blank">
            <h5 className="card-title">Simple Blackjack</h5>
          </a>
          <small>
            <p className="card-text">A fun project</p>
          </small>
        </div>
      </div>
    );
  }

export default ProjectCard;
