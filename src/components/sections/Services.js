import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Front-End Design",
    content:
      "Using CSS/SASS, Sketch, and HTML, I create clean, responsive front-end designs for all of my websites.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "JavaScript",
    content:
      "Applying efficient, complex functionality and user interactivity brings life to my web applications.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Databases and APIs",
    content:
      "Scalability and optimization are a top priority for me when designing, querying, and mutating data.",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
