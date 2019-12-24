import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Contact() {
    return <div id="contact" class="container">
    <div class="row">
        <div class="col-lg-12 contactMe">
            <h2>Contact Me</h2>
            <p class="emailPhone"><LinkedInIcon /><a class="linkPro" href="https://www.linkedin.com/in/spencer-lyons-21b2981b/"> Spencer Lyons</a></p>
            <p class="emailPhone"><EmailIcon /><a class="email" href="mailto:sjl8r8@gmail.com"> sjl8r8@gmail.com</a></p>
        </div>
    </div>
</div>
}

export default Contact;