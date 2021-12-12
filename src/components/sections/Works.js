import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    name: "Everything",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "NoSQL",
  },
  {
    id: 4,
    name: "SQL",
  },
  {
    id: 5,
    name: "Progressive Web Apps",
  },
];

const allData = [
  {
    id: 1,
    title: "Midnight Motorsports",
    subtitle: "E-Commerce Store",
    category: ["React", "NoSQL"],
    image: "images/works/1.svg",
    popupLink: ["images/works/1.svg"],
    repoLink: "https://github.com/Revivedaniel/MidnightMotorsports",
    deployedLink: "https://midnight-motorsports.herokuapp.com/"
  },
  {
    id: 2,
    title: "Home Inventory DB",
    subtitle: "Insurance Claim Reports",
    category: "SQL",
    image: "images/works/2.svg",
    popupLink: [
      "images/works/2.svg",
      "images/works/5.svg",
      "images/works/6.svg",
    ],
    repoLink: "https://github.com/ljbrewer/HomeInventory",
    deployedLink: "https://powerful-dawn-85424.herokuapp.com/"
  },
  {
    id: 3,
    title: "Delivery App Wireframe",
    category: "branding",
    image: "images/works/3.svg",
    popupLink: ["https://www.youtube.com/watch?v=qf9z4ulfmYw"],
  },
  {
    id: 4,
    title: "Onboarding Motivation",
    category: "creative",
    image: "images/works/4.svg",
    popupLink: [
      "https://www.youtube.com/watch?v=URVHRhBSjj8",
      "https://www.youtube.com/watch?v=qf9z4ulfmYw",
    ],
  },
  {
    id: 5,
    title: "iMac Mockup Design",
    category: "art",
    image: "images/works/5.svg",
    popupLink: ["images/works/5.svg"],
  },
  {
    id: 6,
    title: "Game Store App Concept",
    category: "design",
    image: "images/works/6.svg",
    link: "https://dribbble.com",
  }
];

function Works() {
  const [getAllItems] = useState(allData);
  const [activeFilter, setActiveFilter] = useState(filters[0].name);
  const [visibleItems, setVisibleItems] = useState(getAllItems);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent);

    let tempData;
    if (e.target.textContent === filters[0].name) {
      tempData = getAllItems;
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category.includes(e.target.textContent)
      );
    }
    setVisibleItems(tempData);
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.name === activeFilter
                    && "current"
                  }
                >
                  {filter.name}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}
      </div>
    </section>
  );
}

export default Works;
