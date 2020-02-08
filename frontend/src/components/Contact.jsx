import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Contact(props) {
    return <div id="contact" className="container" style={{display:props.display ? "none" : "block"}}>
    <div className="row">
        <div className="col-lg-12 contactMe">
            <h2>Contact Me</h2>
            <p className="emailPhone"><LinkedInIcon /><a className="linkPro" href="https://www.linkedin.com/in/spencer-lyons-21b2981b/"> Spencer Lyons</a></p>
            <p className="emailPhone"><EmailIcon /><a className="email" href="mailto:sjl8r8@gmail.com"> sjl8r8@gmail.com</a></p>
        </div>
    </div>
</div>
}

export default Contact;