import React from "react";

function Home() {
  return (
    <header className="bgImage">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link " href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1>Hi! I'm <span className="myName">Spencer Lyons</span></h1>
            <p className="subHome">An aspiring web developer</p>
            <a href="#about"><button className="learnMore">Learn More</button></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
