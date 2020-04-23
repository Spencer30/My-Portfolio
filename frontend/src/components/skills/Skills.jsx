import React from "react";
import Skill from "../skills/Skill"
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, emptyspac1, emptyspac2, emptyspac3, star) {
  return { name, emptyspac1, emptyspac2, emptyspac3, star };
}

// const rows = [
//   createData('HTML', '', '', '',<Skill stars={4} />),
//   createData('JavaScript', '', '', '',<Skill stars={3} />),
//   createData('React', '', '', '',<Skill stars={2} />),
//   createData('Angular', '', '', '',<Skill stars={1} />),
// ];

// const rows2 = [
//   createData('CSS', '', '', '',<Skill stars={4} />),
//   createData('Node', '', '', '',<Skill stars={2} />),
//   createData('Java', '', '', '',<Skill stars={2} />),
//   createData('Databases', '', '', '',<Skill stars={2} />),
// ];

function Skills(props) {
  // const classes = useStyles();
    return <div id="skills" style={{display:props.display ? "none" : "block"}} className="container mySkills">
    {/* <h2 className="skillsTitle">My Skills</h2> */}
    <hr className="hr-text" data-content="My Skills"></hr>
    <div className="row icons">
      <div className="col-lg-4">
        <img className="icon" src={require('../../images/jigsaw1.png')} alt="jigsaw puzzle" />
        <h4>Problem Solving</h4>
        <p className="skillPara">
          I understand to solve a complex problem requires breaking the
          problem down, working through possible solutions and determining
          what is the best path forward.
        </p>
      </div>
      <div className="col-lg-4">
        <img className="icon" src={require('../../images/report.png')} alt='report with graphs' />
        <h4>Business Acumen</h4>
        <p className="skillPara">
          My experience has given me the opportunity to work with a wide range of clients,
          understand their needs and be able to effectively communicate back
          to the team.
        </p>
      </div>
      <div className="col-lg-4">
        <img className="icon" src={require('../../images/code.png')} alt='computer with code' />
        <h4>Coding</h4> 
        <p className="skillPara">
        In addition to LaunchCode, I have been teaching myself to code for the last nine months and have developed a strong passion for it. Major problems can be solved with a few lines of code. I enjoy working with Javascript, especially React.
        </p>
      </div>
    </div>
    <h3 className="tableHeading">I'm comfortble working with these technologies:</h3>
    <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'center'}}>
      <ul className="skillList" style={{display: 'flex', flexWrap:'wrap', justifyContent:'flex-start'}}>
        <li className="skillBullets"><span style={{color:'black'}} >HTML</span></li>
        <li className="skillBullets"><span style={{color:'black'}} >CSS</span></li>
        <li className="skillBullets"><span style={{color:'black'}} >JavaScript</span></li>
        <li className="skillBullets"><span style={{color:'black'}} >React</span></li>
        <li className="skillBullets"><span style={{color:'black'}} >Node</span></li>
        <li className="skillBullets"><span style={{color:'black'}} >SQL</span></li>
      </ul>
    </div>
    <h3 className="tableHeading">I'm currently learning:</h3>
    <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'center', marginBottom:'3.5rem'}}>
      <ul className="skillList" style={{display: 'flex', flexWrap:'wrap', justifyContent:'flex-start'}}>
        <li className="skillBullets"><span style={{color:'black'}} >React Native</span></li>
        <li className="skillBullets"><span style={{color:'black'}} >Redux</span></li>
        <li className="skillBullets"><span style={{color:'black'}} >Java</span></li>
      </ul>
    </div>
</div>
}

export default Skills;


/*
<div className="container">
      <div className="row">
        <div className="col-lg-6">
        
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.skill}</TableCell>
            <TableCell align="right">{row.star}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
          {/* <table>
            <tr><Skill name="HTML" stars={4} /></tr>
            <tr><Skill name='JavaScript' stars={3}/></tr>
            <tr><Skill name='React' stars={2}/></tr>
          </table> */
    //       </div>
    //       <div className="col-lg-6">
    //       <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label="simple table">
    //     <TableBody>
    //       {rows2.map(row => (
    //         <TableRow key={row.name}>
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.skill}</TableCell>
    //           <TableCell align="right">{row.star}</TableCell>
  
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    //         {/* <table>
    //           <tr><Skill name="CSS" stars={4} /></tr>
    //           <tr><Skill name='Node.js' stars={2}/></tr>
    //           <tr><Skill name='Java' stars={2}/></tr>
    //         </table> */}
    //       </div>
    //     </div>      
    //   </div>
        /* <div className='container'>
          <div className='row starRows'>
            <div className='col-lg-6 col-md-6 col-sm-1 contentLeft'>
              <Skill name='HTML' stars={4}/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-1 contentRight'>
              <Skill name='CSS' stars={4} />
            </div>
          </div>
  
          <div className='row starRows'>
            <div className='col-lg-6 col-md-6 col-sm-1 contentLeft'>
              <Skill name='JavaScript' stars={3}/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-1 contentRight'>
              <Skill name='Node' stars={2} />
            </div>
          </div>
  
          <div className='row starRows'>
            <div className='col-lg-6 col-md-6 contentLeft'>
              <Skill name='React' stars={2}/>
            </div>
            <div className='col-lg-6 col-md-6 contentRight'>
              <Skill name='Angular' stars={1} />
            </div>
          </div>
          
        </div> */