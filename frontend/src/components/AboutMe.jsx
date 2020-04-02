import React from "react";

function AboutMe(props) {
    return (
    
    <div id="about" style={{display:props.display ? "none" : "block"}}>
      <hr className="hr-text" data-content="A Little About Me"></hr>
      <div className= 'container'>
      <div className="row">
        <div className="col-lg-4 me aboutSection">
          <img className="mePic " src={require('../images/me2.png')} alt="avatar"/>
        </div>
        <div className="col-lg-8 aboutArticle aboutSection">
          <article className="aboutMe">
            <h4>Back Story</h4>
            <p>
              I grew up in Kansas City and went to the University of Missouri
              for college. After college, I left Kansas City for the East
              Coast. I landed in Philadelphia where I worked in the investment
              accounting industry. After 7+ years in the investment accounting
              industry and a run at entrepreneurship, has led me to become an
              aspiring web developer. Never found any passion in
              accounting as I have with coding. I love problem solving and
              coding has given me the chance to expand on those skills.
            </p>
            <br />
            <h4>My Passions</h4>
            <p>
              I absolutely love sports. I grew up playing and watching
              football, basketball, baseball, bowling and golf. To this day, I
              still enjoying watching them all but unforunately don't have the
              time to actually play most of them. I have recently gotten back
              into bowling though and joined a league this past fall. It's a
              sport that once you can constitent enough that it becomes very
              addicting to play. I have a few ideas how technology could help
              the sport and would love to be able to code those out someday.
            </p>
            <br />
            <h4>What I'm Looking For</h4>
            <p>
              I'm currently seeking a role as a full time web developer. My strength is with JavaScript so looking to utilize those strengths either working with React or Node. My business backgorund has given me the chance to see both sides of the equation between business and technology teams. I understand the high cost that comes with breakdown of communication between the two. I believe I can help fill those gaps and make sure challenges from both sides are communicated effectively.
            </p>
          </article>
        </div>
      </div>
    </div>
    </div>
  
    )
}

export default AboutMe;