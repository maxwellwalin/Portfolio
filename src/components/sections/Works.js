import React, { useState } from "react";
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
  {
    id: 6,
    name: "Third Party APIs",
  },
];

const allData = [
  {
    id: 1,
    title: "Midnight Motorsports",
    subtitle: "E-Commerce Store",
    category: ["React", "NoSQL"],
    image: "images/works/1.svg",
    repoLink: "https://github.com/Revivedaniel/MidnightMotorsports",
    deployedLink: "https://midnight-motorsports.herokuapp.com/"
  },
  {
    id: 2,
    title: "Home Inventory DB",
    subtitle: "Insurance Claim Reports",
    category: ["Handlebars.js", "SQL"],
    image: "images/works/2.svg",
    repoLink: "https://github.com/ljbrewer/HomeInventory",
    deployedLink: "https://powerful-dawn-85424.herokuapp.com/"
  },
  {
    id: 3,
    title: "Michelin Star Finder",
    subtitle: "Restaurant Locator and Pathfinder",
    category: ["Third Party APIs", "Javascript"],
    image: "images/works/3.svg",
    repoLink: "https://github.com/ljbrewer/HomeInventory",
    deployedLink: "https://powerful-dawn-85424.herokuapp.com/"
  },
  {
    id: 4,
    title: "Book Search Engine",
    subtitle: "Search and Add Books to List",
    category: ["React", "Third Party APIs"],
    image: "images/works/4.svg",
    repoLink: "https://github.com/maxwellwalin/book-search-engine",
    deployedLink: "https://arcane-caverns-86366.herokuapp.com/"
  },
  {
    id: 5,
    title: "Budget PWA",
    subtitle: "Traveller-Friendly Budgeting Tool",
    category: ["Progressive Web Apps", "Javascript"],
    image: "images/works/5.svg",
    repoLink: "https://github.com/maxwellwalin/budget-pwa",
    deployedLink: "https://warm-dawn-31983.herokuapp.com/"
  },
  {
    id: 6,
    title: "Workout Tracker",
    subtitle: "Create Workouts and Track Progress",
    category: ["NoSQL", "Express.js"],
    image: "images/works/6.svg",
    repoLink: "https://github.com/maxwellwalin/workout-tracker",
    deployedLink: "https://young-wave-37253.herokuapp.com/"
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
