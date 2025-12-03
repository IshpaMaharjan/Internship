import React from 'react'
import HalloweenImage from './images/halloween.jpg';

const HalloweenBanner = () => {
  return (
    <section className="halloween-banner">
            <div className="halloween-image-section"
            style={{
              backgroundImage: `url(${HalloweenImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            >
            </div>
            <div className="container">
              <h1>Halloween masts</h1>
              <p>Everything you need for spooky season</p>
              <div className="badge">Scary good</div>
            </div>
          </section>
  )
}

export default HalloweenBanner