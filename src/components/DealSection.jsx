import React from "react";

const DealSection = ({ sectionTitle, categories }) => {
  return (
    <section className="deal-section">
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="categories-grid-loved">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <div
                className="category-image"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="category-content">
                <h3 className="category-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealSection;

