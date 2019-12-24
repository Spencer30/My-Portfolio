import React from "react";

function Skills() {
    return <div id="skills" className="container mySkills">
    <h2 className="skillsTitle">My Skills</h2>
    <div className="row icons">
      <div className="col-lg-4">
        <img className="icon" src={require('../images/jigsaw.png')} />
        <h4>Problem Solving</h4>
        <p className="skillPara">
          I understand to solve a complex problem requires breaking the
          problem down, working through possible solutions and determining
          what is the best path forward.
        </p>
      </div>
      <div className="col-lg-4">
        <img className="icon" src={require('../images/report.png')} />
        <h4>Business Acumen</h4>
        <p className="skillPara">
          My experience has given me the opportunituy to work with a wide range of clients,
          understand their needs and be able to effectively comminicate back
          to the team.
        </p>
      </div>
      <div className="col-lg-4">
        <img className="icon" src={require('../images/code.png')} />
        <h4>Coding</h4>
        <p className="skillPara">
          I have been teaching myself to code for the last six months and have
          developed a strong passion for it. Major problems can be solved with
          a few lines of code. Looking to shapren and improve my skills.
        </p>
      </div>
    </div>
    <h2 className="tableHeading">Current Progress:</h2>
    <div className="row">
      <div className="col-lg-6">
        <table className="tableSkills" cellspacing="10">
          <tr>
            <td className="languageHeadings"><h2>HTML</h2></td>
            <td>
              <img className="star" src={require('../images/star.png')} /><img
                className="star"
                src={require('../images/star.png')}
              /><img className="star" src={require('../images/star.png')} /><img
                className="star"
                src={require('../images/star.png')}
              />
            </td>
          </tr>
          <tr>
            <td className="languageHeadings"><h2>Javascript</h2></td>
            <td>
              <img className="star" src={require('../images/star.png')} /><img
                className="star"
                src={require('../images/star.png')}
              /><img className="star" src={require('../images/star.png')} />
            </td>
          </tr>
          <tr>
            <td className="languageHeadings"><h2>Angular</h2></td>
            <td>
              <img className="star" src={require('../images/star.png')} />
            </td>
          </tr>
        </table>
      </div>
      <div className="col-lg-6">
          <table className="tableSkills" cellspacing="10">
              <tr>
                  <td className="languageHeadings"><h2>CSS</h2></td>
                  <td>
                    <img className="star" src={require('../images/star.png')} /><img
                      className="star"
                      src={require('../images/star.png')}
                    /><img className="star" src={require('../images/star.png')} /><img
                      className="star"
                      src={require('../images/star.png')}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="languageHeadings"><h2>Node.js</h2></td>
                  <td>
                    <img className="star" src={require('../images/star.png')} /><img
                      className="star"
                      src={require('../images/star.png')}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="languageHeadings"><h2>Databases</h2></td>
                  <td>
                    <img className="star" src={require('../images/star.png')} />
                  </td>
                </tr>
              </table>
            </div>          
      </div>
    </div>
}

export default Skills;