import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

function Portfolio() {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section-title">Recent Works</h2>

      <div className="work-filters">
        <span className="work-item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work-item" onClick={() => filterItem("Creative")}>
          Creative
        </span>
        <span className="work-item" onClick={() => filterItem("Art")}>
          Art
        </span>
        <span className="work-item" onClick={() => filterItem("Design")}>
          Design
        </span>
        <span className="work-item" onClick={() => filterItem("Branding")}>
          Branding
        </span>
      </div>

      <div className="work-container grid">
        {items.map((element) => {
          const { id, image, title, category } = element;

          return (
            <div className="work-card" key={id}>
              <div className="work-thumbnail">
                <img src={image} alt="" className="work-img" />
                <div className="work-mask"></div>
              </div>

              <span className="work-category">{category}</span>
              <h3 className="work-title">{title}</h3>
              <a href="#" className="work-button">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
