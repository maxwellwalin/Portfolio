import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Certificate of Completion from UCI",
    years: "December 2021",
    content:
      "Graduated with an A+ from UCI's Full Stack Flex Program, an instensive 24-week full-stack web development program.",
  },
  {
    id: 2,
    title: "High School Diploma / UC General Ed",
    years: "2015 - 2019",
    content:
      "Graduated from Early College High School on the Honor Roll with the University of California's general education requirements satisfied (IGETC Certificate).",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Full Stack Developer @ Focus360",
    years: "April 2022 - Present",
    content:
      "Focus360 is an architectural visualization firm. I create, develop, and debug production-level React websites and React Native applications.",
  },
  {
    id: 2,
    title: "Learning Assistant @ 2U",
    years: "January 2022 - Present",
    content:
      "I teach and provide guidance to students learning full-stack web development, including technologies like React, HTML/CSS, NoSQL/SQL databases, and more.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Education & Experience" />
        <div className="row">
          <div className="col-md">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              { educationData.map((education) => (
                <Timeline key={ education.id } education={ education } />
              )) }
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              { experienceData.map((experience) => (
                <Timeline key={ experience.id } education={ experience } />
              )) }
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
