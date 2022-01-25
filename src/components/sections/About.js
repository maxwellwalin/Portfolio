import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Maxwell",
  avatarImage: "./images/Circular Profile - BG Purp.png",
  content:
    "I am Maxwell Walin, a freelance web developer from Orange County, California. I love building responsive and functionality-focused websites that provide crucial services for businesses like web design, full-stack web development, and digital marketing."
};

const progressData = [
  {
    id: 1,
    title: "Web Development",
    percantage: 100,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Digital Marketing",
    percantage: 100,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Front-End Design",
    percantage: 100,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 20,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Hours spent coding",
    count: Math.floor((Date.now()/86400000-18500)*4),
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Collaborated with",
    count: 23,
    icon: "icon-people",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} style={{width: "min(70%, 12rem)"}} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="/images/Resume.pdf" target="_blank" className="btn btn-default">
                      Download Resume
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-4 col-sm-8">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
