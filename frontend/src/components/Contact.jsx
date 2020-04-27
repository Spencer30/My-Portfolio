import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact(props) {
    return <div id="contact" className="container" style={{display:props.display ? "none" : "block"}}>
    <div className="row" style={{position:'relative'}}>
        <p className="star" style={{color:'white', position:'absolute', left:'20rem', top:'10rem'}}>.</p>
        <p className="star1" style={{color:'white', position:'absolute', left:'45rem', top:'13rem'}}>.</p>
        <p className="star2" style={{color:'white', position:'absolute', left:'60rem', top:'10rem'}}>.</p>
        <p className="star3" style={{color:'white', position:'absolute', left:'20rem', top:'30rem'}}>.</p>
        <p className="star4" style={{color:'white', position:'absolute', left:'80rem', top:'15rem'}}>.</p>

        <div className="col-lg-12 contactMe">
            <h2>Contact Me</h2>
            <p className="emailPhone"><LinkedInIcon /><a className="linkPro" href="https://www.linkedin.com/in/spencer-lyons-21b2981b/">Spencer Lyons</a></p>
            <p className="emailPhone"><EmailIcon /><a className="email" href="mailto:sjl8r8@gmail.com">sjl8r8@gmail.com</a></p>
            <p className="emailPhone"><GitHubIcon /><a className="email" href="https://github.com/Spencer30">Spencer30</a></p>

        </div>
    </div>
</div>
}

export default Contact;