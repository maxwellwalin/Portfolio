import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "React",
  },
  {
    id: 3,
    text: "NoSQL",
  },
  {
    id: 4,
    text: "SQL",
  },
  {
    id: 5,
    text: "Progressive Web App",
  },
];

const allData = [
  {
    id: 1,
    title: "Midnight Motorsports E-Commerce Store",
    subtitle: "E-Commerce Store",
    category: "react",
    image: "images/works/1.svg",
    popupLink: ["images/works/1.svg"],
  },
  {
    id: 2,
    title: "Guest App Walkthrough Screens",
    category: "creative",
    image: "images/works/2.svg",
    popupLink: [
      "images/works/2.svg",
      "images/works/5.svg",
      "images/works/6.svg",
    ],
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
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= 6);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= 6
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
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
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
