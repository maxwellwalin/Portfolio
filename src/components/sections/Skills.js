import React from "react";
import Pagetitle from "../elements/Pagetitle";

const skillData = [
  {
    id: 1,
    image: "images/html5-icon.png",
  },
  {
    id: 2,
    image: "images/css3-icon.png",
  },
  {
    id: 3,
    image: "images/javascript-icon.png",
  },
  {
    id: 4,
    image: "images/react-icon.png",
  },
  {
    id: 5,
    image: "images/mongodb-icon.png",
  },
  {
    id: 7,
    image: "images/nodejs-icon.png",
  },
  {
    id: 8,
    image: "images/mysql-icon.png",
  },
  {
    id: 9,
    image: "images/graphql-icon.png",
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Pagetitle title="Skills" />
        <div className="row d-flex align-items-center">
          <div className="col-md-3 col-6">
            <div className="skills-item">
              <div data-iframe-width="212" data-iframe-height="250" data-share-badge-id="3811351e-49b9-4e64-aabc-8ee40547d49f" data-share-badge-host="https://www.credly.com"></div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="skills-item">
              <div data-iframe-width="212" data-iframe-height="250" data-share-badge-id="4fce2955-6081-4f34-872a-9aa1ba687514" data-share-badge-host="https://www.credly.com"></div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="skills-item">
              <div data-iframe-width="212" data-iframe-height="250" data-share-badge-id="d3601cca-a0ff-46cd-ac37-245b82cb5cd3" data-share-badge-host="https://www.credly.com"></div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="skills-item">
              <div data-iframe-width="212" data-iframe-height="250" data-share-badge-id="88f87ef6-c8c6-475d-88db-f2eb6e84abfd" data-share-badge-host="https://www.credly.com"></div>
            </div>
          </div>
          {skillData.map((skill) => (
            <div className="col-md-3 col-6 my-5" key={skill.id}>
              <div className="skills-item">
                <div className="inner">
                  <img src={skill.image} alt="web-tech-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
