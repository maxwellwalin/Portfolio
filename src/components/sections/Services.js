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
      "I create beautiful, interactive, and mobile-friendly front-end designs that drive user engagement and increase dwell time.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "JavaScript and React",
    content:
      "I love building websites using React, Next.js, and even vanilla JavaScript. I thrive when adding functionality and creating new features.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Back-End Development",
    content:
      "My full-stack applications are reliant on a secure, optimized back-end infrastructure that utilizes either a SQL or a NoSQL database.",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Passions" />
        <div className="row fix-spacing">
          { servicesData.map((service) => (
            <div className="col-md-4" key={ service.id }>
              <Service service={ service } />
            </div>
          )) }
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{ " " }
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={ true }
              smooth={ true }
              duration={ 500 }
            >
              Click here
            </Link>{ " " }
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
