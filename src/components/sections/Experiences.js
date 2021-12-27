import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Certificate of Completion",
    years: "December 2021",
    content:
      "Graduated with an A+ from UC Irvine's Full Stack Flex Program, an instensive 24-week web development program.",
  },
  {
    id: 2,
    title: "High School Diploma + UC General Education",
    years: "2015 - 2019",
    content:
      "Satisfied all of UC general education requirements needed for transferring into a University of California during high school.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Freelance Web Developer",
    years: "July 2021 - Present",
    content:
      "I specialize in functionality-based websites like eCommerce when freelancing, but starting my career in tech at a company is my current priority.",
  },
  {
    id: 2,
    title: "Materials Coordinator Assistant",
    years: "November 2018 - July 2019, October 2020 - November 2021",
    content:
      "At Brilliant AV, I created efficiency for all members of the company by redesigning, modernizing, and implementing processes and working directly with the operations, management, and installation teams.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
