import React from 'react'

function SocialIcon(props) {

    var icon = props.icon;
    var url = props.url;
    var order = `social-${props.order}`;

    return (

        <button onClick={() => window.open(url, '_blank')} id={order}>     
            <span style={{backgroundImage: `url(/images/icons/${icon}.png)`}}></span>
        </button>

    )

}

export default SocialIcon;