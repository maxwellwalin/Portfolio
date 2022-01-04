import React from "react";

function Portfolio({ portfolio }) {
  const { category, title, subtitle, image, repoLink, deployedLink } = portfolio;

  let categoryTerm = category[0]

  if (typeof category === "object" && category.length > 1) {
    categoryTerm = [];
    category.map(cat => 
      categoryTerm.push(cat, " & ")
      )
    categoryTerm.pop();
  }

  return (
    <>
      <div className="portfolio-item rounded shadow-dark">
        <div className="details">
          <div className="linkNoLink">
            <span className="term">{categoryTerm}</span>
            <h4 className="title">{title}</h4>
            <h5 className="title">{subtitle}</h5>
            <a className="more-button" href={deployedLink} target="_blank" rel="noreferrer"><i className="icon-magnifier-add"></i></a>
          </div>
          <span className="portfolio-links"><a href={repoLink} target="_blank" rel="noreferrer">View Repository</a> | <a href={deployedLink} target="_blank" rel="noreferrer">Deployed Website</a></span>
        </div>
        <div className="thumb">
          <img src={image} alt="Portfolio-title" className="portfolioImg" />
          <div className="mask"></div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
