import React from 'react'

import PilatesImage from './images/pilates.jpg';
import GameImage from './images/game.jpg';
import LomographyImage from './images/lomography.jpg';
import OrganizationImage from './images/organization.jpg';

const InterestedFeatures = () => {
  return (
    <section className="featured-section">
            <div className="container">
              <h2 className="section-title">Jump into featured interests</h2>
              <div className="categories-grid">
                {[
                  {
                    image: PilatesImage,
                    title: "Pilates",
                    desc: "Power with Pilates"
                  },
                  {
                    image: GameImage,
                    title: "Game Day",
                    desc: "Stylish football fan essentials"
                  },
                  {
                    image: LomographyImage,
                    title: "Lomography",
                    desc: "Love for lomography"
                  },
                  {
                    image: OrganizationImage,
                    title: "Get It Together",
                    desc: "Home organization solutions"
                  }
                ].map((item, index) => (
                  <div className="category-card" key={index}>
                    <div
                      className="category-image"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                    <div className="category-content">
                      <h3 className="category-title">{item.title}</h3>
                      <p className="category-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default InterestedFeatures