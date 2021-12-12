import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Portfolio({ portfolio }) {
  const { category, title, subtitle, image, popupLink, link } = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  return (
    <>
      <a
        href={link ? link : "!#"}
        className="work-image"
        onClick={handleLightbox}
      >
        <div className="portfolio-item rounded shadow-dark">
          <div className="details">
            <span className="term text-capitalize">{category}</span>
            <h4 className="title">{title}</h4>
            <span className="more-button">{<i className="icon-magnifier-add"></i>}</span>
          </div>
          <div className="thumb">
            <img src={image} alt="Portfolio-title" />
            <div className="mask"></div>
          </div>
        </div>
      </a>
      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
    </>
  );
}

export default Portfolio;
