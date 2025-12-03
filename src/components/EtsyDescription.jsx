import React from 'react'

const EtsyDescription = () => {
  return (
    <section className="etsy-description">
        <div className="container">
          <h2>What is Etsy?</h2>
          <div className="etsy-content">
            <div className="etsy-column">
            <h3>A community doing good</h3>
            <p>Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.</p>
          </div>

          <div className="etsy-column">
            <h3>Support independent creators</h3>
            <p>There's no Etsy warehouse - just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
          </div>

          <div className="etsy-column">
            <h3>Peace of mind</h3>
            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
          </div>
        </div>

        <div className="download-button">
            <button>Download the Etsy App</button>
        </div>
        </div>
      </section>
  )
}

export default EtsyDescription