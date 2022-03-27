import React from "react";
import Pagetitle from "../elements/Pagetitle";

const skillData = [
  {
    id: 1,
    image: "images/html5-icon.png",
  },
  {
    id: 2,
    image: "images/javascript-icon.png",
  },
  {
    id: 3,
    image: "images/react-icon.png",
  },
  {
    id: 4,
    image: "images/sass-icon.png",
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
        <Pagetitle title="Skills & Certifications" />
        <div className="row d-flex align-items-center">
          <div className="col-md-3 col-6">
            <div className="skills-item">
              <a href="https://www.credly.com/badges/3811351e-49b9-4e64-aabc-8ee40547d49f/public_url" target="_blank" rel="noreferrer" style={ { color: 'black' } }>
                <img src="/images/javascript-badge-uci.png" alt="Javascript and jQuery badge awarded to me by the Univserity of California, Irvine." />
                <div>View Badge</div>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="skills-item">
              <a href="https://www.credly.com/badges/4fce2955-6081-4f34-872a-9aa1ba687514/public_url" target="_blank" rel="noreferrer" style={ { color: 'black' } }>
                <img src="/images/react-badge-uci.png" alt="React.js badge awarded to me by the Univserity of California, Irvine." />
                <div>View Badge</div>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="skills-item">
              <a href="https://www.credly.com/badges/88f87ef6-c8c6-475d-88db-f2eb6e84abfd/public_url" target="_blank" rel="noreferrer" style={ { color: 'black' } }>
                <img src="/images/node-badge-uci.png" alt="Node.js and Express badge awarded to me by the Univserity of California, Irvine." />
                <div>View Badge</div>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="skills-item">
              <a href="https://www.credly.com/badges/d3601cca-a0ff-46cd-ac37-245b82cb5cd3/public_url" target="_blank" rel="noreferrer" style={ { color: 'black' } }>
                <img src="/images/sql-badge-uci.png" alt="SQL and NoSQL badge awarded to me by the Univserity of California, Irvine." />
                <div>View Badge</div>
              </a>
            </div>
          </div>
          { skillData.map((skill) => (
            <div className="col-md-3 col-6 my-5" key={ skill.id }>
              <div className="skills-item">
                <div className="inner">
                  <img src={ skill.image } alt="web-tech-icon" />
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}

export default Skills;
