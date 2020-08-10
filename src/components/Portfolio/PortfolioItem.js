import React from 'react';

function PortfolioItem(props) {

  // construct image source url
  let imgsrc = `/images/${props.image}`;
  let isLink = props.link.length > 0;

  return (

      <div className="portfolio-item">
        <div className="portfolio-item-img">
          {isLink ? 
            <a rel="noopener noreferrer" href={props.link} target="_blank">
              <img alt={props.name} src={imgsrc}/>
            </a>
          :
            <img alt={props.name} src={imgsrc}/>
          }
        </div>
        <div className="portfolio-item-info">
          <h2>{props.name}</h2>
          <p>{props.roledata}</p>
          <p>{props.location}</p>
          <br/>
          <p>{props.desc}</p>
        </div>
      </div>


  );

}

export default PortfolioItem;