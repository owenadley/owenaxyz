import React from 'react';
import SocialIcon from './SocialIcon';

function Header(props) {

    return (
        <header className="App-header">
            <nav></nav>

            <div className="typewritten">
                <h1>Owen Adley</h1> 
            </div>

            <div className="social">
            <p>Find me</p>
            
            <div className="social-profiles">

                <SocialIcon order='3' icon='linkedin' url='https://www.linkedin.com/in/owenadley/'/>
                <SocialIcon order='2' icon='github' url='https://github.com/owenadley'/>
                <SocialIcon order='1' icon='mail' url='mailto:owen.adley@gmail.com'/>                        

            </div>
            </div>

            <div className="scrolldown">
            <button id="scrolldown-button" onClick={props.executeScroll}>
                <span style={{backgroundImage: `url(/images/icons/arrowdown.png)`}}></span>
            </button>
            </div>

    </header>    
    )

}

export default Header;