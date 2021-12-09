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
    title: "Progress Towards Bachelor’s Degree",
    years: "July 2019 - June 2020",
    content:
      "During my time at UCSB, I discovered my passion for coding when I took a Python3 course. Left the University that year to pursue programming.",
  },
  {
    id: 3,
    title: "IGETC - UC General Education",
    years: "2015 - 2019",
    content:
      "Satisfied all of general education requirements needed for transferring into a University of California from Coastline Community College.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Freelance Web Developer",
    years: "July 2021 - Present",
    content:
      "Started working on an e-commerce website for a local business, Midnight Motorsports, during my time at UCI's web development bootcamp. Kickstarting my career in the tech industry by obtaining my first web development/software engineering role is my current focus.",
  },
  {
    id: 2,
    title: "Materials Coordinator Assistant",
    years: "November 2018 - July 2019, October 2020 - November 2021",
    content:
      "When I returned home from UCSB, Brilliant AV welcomed me back with open arms. During my time there, I created efficiency for all members of the company by redesigning, modernizing, and implementing processes and working directly with the operations, management, and installation teams",
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
