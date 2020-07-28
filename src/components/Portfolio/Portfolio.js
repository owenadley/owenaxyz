import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolioData from './portfolioData';

function Portfolio() {

    function getPortfolioData() {
        return (
            portfolioData.map(item => {
                return (<PortfolioItem name={item.projectname} roledata={item.roledate} location={item.location} desc={item.description} image={item.image}/>)
            })
        )
    }

    return (
        <div>
            <p id="portfolioprojects">Some of my projects:</p>
            <div className="portfolio">
                {getPortfolioData()}
            </div>
        </div>
    )
}

export default Portfolio