import React from 'react';

function PortfolioItem(props) {

  var imgsrc = `/images/${props.image}`;

  return (

      <div className="portfolio-item">
        <div className="portfolio-item-img">
          <img src={imgsrc}/>
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