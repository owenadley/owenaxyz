import React from 'react';
import Resume from './../assets/OwenAdley-Resume.pdf';

const About = React.forwardRef((props, ref) => {

return(
    
    <div ref={ref} className="about">
        <div className="about-intro"> 
            <div className="about-image">
                <img alt="Profile" src="/images/profilepic.jpg"/>
            </div>

            <div className="about-bio">
                <p>Hi, I'm Owen</p>
                <div id="aboutimgmobile">
                    <img alt="Profile Mobile" src="/images/profilepic.jpg"/>
                </div>
                <p>I'm a Software Engineer from the University of Ottawa</p>
                <p>I have keen interests in designing and developing user facing websites and applications.
                I have recently been focusing on front end Javascript development, specifically 
                building web apps in React and mobile apps in React Native. I am currently searching for a full time position
                in the Ottawa or Toronto area.</p>
                <p>Check out my resume <a rel="noopener noreferrer" id="resumelink" target="_blank" href={Resume}>here</a></p>
            </div>
        </div>

        <ul>
            <li><img className="devicons" alt="JavaScript Icon" src="/images/icons/js.png"/></li>  
            <li><img className="devicons" alt="React Icon" src="/images/icons/react.png"/></li>  
            <li><img className="devicons" alt="D3 Icon" src="/images/icons/d3.png"/></li>  
            <li><img className="devicons" alt="Java Icon" src="/images/icons/java.png"/></li>  
            <li><img className="devicons" alt="SASS Icon" src="/images/icons/sass.png"/></li>                                            
            <li><img className="devicons" alt="PHP Icon" src="/images/icons/php.png"/></li>                                            
            <li><img className="devicons" alt="HTML Icon" src="/images/icons/html.png"/></li>                                            
        </ul>
  </div>
  )

})

export default About