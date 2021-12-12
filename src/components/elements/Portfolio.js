import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Portfolio({ portfolio }) {
  const { category, title, subtitle, image, popupLink, link, repoLink, deployedLink } = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };



  return (
    <>

      <div className="portfolio-item rounded shadow-dark">
        <div className="details">
          <div className="linkNoLink"
            onClick={handleLightbox}
          >
            <span className="term text-capitalize">{category}</span>
            <h4 className="title">{title}</h4>
            <h5 className="title">{subtitle}</h5>
            <span className="more-button"><i className="icon-magnifier-add"></i></span>
          </div>
          <span className="portfolio-links"><a href={repoLink} target="_blank" rel="noreferrer">View Repository</a> | <a href={deployedLink} target="_blank" rel="noreferrer">Deployed Website</a></span>
        </div>
        <div className="thumb">
          <img src={image} alt="Portfolio-title" />
          <div className="mask"></div>
        </div>
      </div>

      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
    </>
  );
}

export default Portfolio;
