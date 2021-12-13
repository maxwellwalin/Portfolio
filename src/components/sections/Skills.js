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
    id: 6,
    image: "images/mysql-icon.png",
  },
  {
    id: 7,
    image: "images/nodejs-icon.png",
  },
  {
    id: 8,
    image: "images/sass-icon.png",
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Pagetitle title="Skills" />
        <div className="row">
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
